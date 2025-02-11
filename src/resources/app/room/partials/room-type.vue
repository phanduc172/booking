<template>
    <div>
        <div class="table-container border-3 bg-transparent">
            <div class="bg-white custom-table-container">
                <div class="table-responsive">
                    <table class="table align-middle m-0" style="min-width: 100%; overflow-x: auto;">
                        <thead class="table-light">
                            <tr>
                                <th class="p-3 text-dark fw-bold">Room Number</th>
                                <th class="p-3 text-dark fw-bold">Room Type</th>
                                <th class="p-3 text-dark fw-bold">Capacity</th>
                                <th class="p-3 text-dark fw-bold">Price per Night</th>
                                <th class="p-3 text-dark fw-bold">Availability</th>
                                <th class="p-3 text-dark fw-bold">Floor</th>
                                <th class="p-3 text-dark fw-bold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="room in rooms" :key="room.room_id" class="table-row">
                                <td class="p-3">{{ room.room_number }}</td>
                                <td class="p-3">{{ room.room_type }}</td>
                                <td class="p-3">{{ room.capacity }} guests</td>
                                <td class="p-3">${{ room.price_per_night }}</td>
                                <td class="p-3">
                                    <b-button size="sm"
                                        class="text-nowrap d-flex align-items-center justify-content-center px-3 py-2 rounded-pill shadow-sm"
                                        :variant="room.availability === 'Available' ? 'success' : 'outline-danger'"
                                        @click="changeRoomAvailability(room)">
                                        <i :class="room.availability === 'Available' ? 'fas fa-check-circle' : 'fas fa-times-circle'"
                                            class="mr-1"></i>
                                        {{ room.availability === 'Available' ? 'Available' : 'Booked' }}
                                    </b-button>
                                </td>


                                <td class="p-3">{{ room.floor }}</td>
                                <td class="p-3 text-center">
                                    <button class="btn btn-link" @click="showRoomDetails(room)" data-bs-toggle="modal"
                                        data-bs-target="#roomDetailModal">
                                        <i class='bx bx-info-circle fs-4'></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <RoomTypeModal :room="selectedRoom" />
    </div>
</template>

<script>
import RoomTypeModal from "./room-type-detail.vue";

export default {
    name: "RoomType",
    components: { RoomTypeModal },
    data() {
        return {
            rooms: [
                {
                    room_id: "1",
                    room_number: "A101",
                    room_type: "Deluxe Room",
                    price_per_night: 120,
                    capacity: 2,
                    availability: "Available",
                    bed_type: "King",
                    "room_size": "30m²",
                    "is_available": true,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Điều hòa nhiệt độ",
                        "Bồn tắm",
                        "Tủ lạnh mini"
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "A luxury room with elegant decor and modern amenities.",
                    floor: 1,
                    view: "Biển",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 10,
                        type: "percent"
                    },
                    created_at: "2025-01-15T08:00:00Z",
                    updated_at: "2025-01-20T12:30:00Z"
                },
                {
                    room_id: "2",
                    room_number: "B202",
                    room_type: "Suite Room",
                    price_per_night: 250,
                    capacity: 4,
                    availability: "Booked",
                    bed_type: "Queen",
                    "room_size": "50m²",
                    "is_available": false,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Bồn tắm Jacuzzi",
                        "Minibar",
                        "Ban công riêng"
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "A spacious suite with a separate living area and premium facilities.",
                    floor: 2,
                    view: "Thành phố",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 200000,
                        type: "fixed"
                    },
                    created_at: "2025-01-10T10:00:00Z",
                    updated_at: "2025-01-18T09:00:00Z"
                },
                {
                    room_id: "3",
                    room_number: "C303",
                    room_type: "Standard Room",
                    price_per_night: 80,
                    capacity: 2,
                    availability: "Available",
                    bed_type: "Double",
                    room_size: "25m²",
                    is_available: true,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Điều hòa nhiệt độ",
                        "Bàn làm việc",
                        "Máy pha cà phê"
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "A cozy room with essential amenities for a comfortable stay.",
                    floor: 3,
                    view: "Nội bộ",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: null,
                    created_at: "2025-01-12T11:00:00Z",
                    updated_at: "2025-01-19T15:00:00Z"
                },
                {
                    room_id: "4",
                    room_number: "D404",
                    room_type: "Family Room",
                    price_per_night: 180,
                    capacity: 6,
                    availability: "Available",
                    bed_type: "Two Queen",
                    room_size: "60m²",
                    is_available: true,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Bếp nhỏ",
                        "Ban công riêng",
                        "Giường phụ"
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "A spacious room designed for families with multiple beds.",
                    floor: 4,
                    view: "Hồ bơi",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 15,
                        type: "percent"
                    },
                    created_at: "2025-01-08T07:30:00Z",
                    updated_at: "2025-01-21T10:45:00Z"
                },
                {
                    room_id: "5",
                    room_number: "E505",
                    room_type: "Presidential Suite",
                    price_per_night: 500,
                    capacity: 2,
                    availability: "Available",
                    bed_type: "King",
                    room_size: "100m²",
                    is_available: true,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình lớn",
                        "Phòng khách riêng",
                        "Dịch vụ quản gia",
                        "Bồn tắm nước nóng"
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "An ultra-luxurious suite with VIP services and top-tier amenities.",
                    floor: 5,
                    view: "Biển",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 500000,
                        type: "fixed"
                    },
                    created_at: "2025-01-05T09:00:00Z",
                    updated_at: "2025-01-20T18:00:00Z"
                },
                {
                    room_id: "6",
                    room_number: "F606",
                    room_type: "Single Room",
                    price_per_night: 60,
                    capacity: 1,
                    availability: "Available",
                    bed_type: "Single",
                    room_size: "20m²",
                    is_available: true,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Bàn làm việc",
                        "Máy sấy tóc",
                        "Tủ lạnh mini"
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "A compact room ideal for solo travelers.",
                    floor: 6,
                    view: "Nội bộ",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: null,
                    created_at: "2025-01-11T14:30:00Z",
                    updated_at: "2025-01-18T11:00:00Z"
                },
                {
                    room_id: "7",
                    room_number: "G707",
                    room_type: "Twin Room",
                    price_per_night: 90,
                    capacity: 2,
                    availability: "Booked",
                    bed_type: "Two Single",
                    room_size: "28m²",
                    is_available: false,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Điều hòa nhiệt độ",
                        "Máy pha trà",
                        "Két an toàn"
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "A room with two single beds, perfect for friends or colleagues.",
                    floor: 7,
                    view: "Thành phố",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 5,
                        type: "percent"
                    },
                    created_at: "2025-01-07T12:15:00Z",
                    updated_at: "2025-01-17T14:30:00Z"
                },
                {
                    room_id: "8",
                    room_number: "H808",
                    room_type: "Honeymoon Suite",
                    price_per_night: 300,
                    capacity: 2,
                    availability: "Available",
                    bed_type: "King",
                    room_size: "70m²",
                    is_available: true,
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình lớn",
                        "Bồn tắm Jacuzzi",
                        "Champagne miễn phí",
                        "Ban công riêng"
                    ],
                    image: [
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                    ],
                    description: "A romantic suite with special decor and breathtaking views.",
                    floor: 8,
                    view: "Biển",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: null,
                    created_at: "2025-01-06T13:45:00Z",
                    updated_at: "2025-01-16T10:00:00Z"
                }


            ],
            selectedRoom: null
        };
    },
    methods: {
        showRoomDetails(room) {
            this.selectedRoom = room;
        },
        changeRoomAvailability(room) {
            room.availability = room.availability === 'Available' ? 'Booked' : 'Available';
            this.updateRoomAvailability(room);
        },
        updateRoomAvailability(room) {
            console.log(`Cập nhật trạng thái phòng ${room.room_number} thành ${room.availability}`);
        }
    },
};
</script>

<style scoped>
.table {
    width: 100%;
    table-layout: auto;
    white-space: nowrap;
}

.table th,
.table td {
    padding: 12px;
    text-align: left;
}

.table td {
    max-width: 250px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
}

.table-row td:nth-child(1) {
    min-width: 200px;
}

.table-row td:nth-child(2),
.table-row td:nth-child(3) {
    min-width: 100px;
}

.table-row td:nth-child(4) {
    min-width: 120px;
}

.table-row td:last-child {
    width: 50px;
    text-align: center;
}
</style>