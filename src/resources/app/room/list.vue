<template>
    <div class="table-container border-3">
        <div class="bg-white custom-table-container shadow-sm rounded-3">
            <c-table>
                <template #thead>
                    <tr>
                        <th class="p-3 text-dark fw-bold  ">Room Number</th>
                        <th class="p-3 text-dark fw-bold ">Room Type</th>
                        <th class="p-3 text-dark fw-bold ">Capacity</th>
                        <th class="p-3 text-dark fw-bold ">Bed Type</th>
                        <th class="p-3 text-dark fw-bold ">Price per Night</th>
                        <th class="p-3 text-dark fw-bold ">Floor</th>
                        <th class="p-3 text-dark fw-bold ">Discount</th>
                        <th class="p-3 text-dark fw-bold ">Availability</th>
                        <th class="p-3 text-dark fw-bold "></th>
                    </tr>
                </template>
                <template #tbody>
                    <tr v-for="room in rooms" :key="room.room_id" class="table-row">
                        <td class="p-3">{{ room.room_number }}</td>
                        <td class="p-3 text-start">{{ room.room_type }}</td>
                        <td class="p-3">{{ room.capacity }} guests</td>
                        <td class="p-3">{{ room.bed_type }}</td>
                        <td class="p-3">${{ room.price_per_night }}</td>
                        <td class="p-3">{{ room.floor }}</td>
                        <td class="p-3">
                            {{ room.discount?.amount ? `$${room.discount.amount}` : "" }}
                        </td>
                        <td class="p-3">
                            <select class="form-select fw-bold shadow-sm rounded-pill"
                                :class="getRoomStatusClass(room.availability)" v-model="room.availability"
                                @change="changeRoomAvailability(room)">
                                <option v-for="status in roomStatuses" :key="status.value" :value="status.value">
                                    {{ status.label }}
                                </option>
                            </select>
                        </td>

                        <td class="p-3">
                            <div class="action-buttons">
                                <a class="text-primary" @click="showRoomDetails(room)" data-bs-toggle="modal"
                                    data-bs-target="#roomDetailModal">
                                    <i class="bx bx-info-circle fs-4 mx-1"></i>
                                </a>
                                <a class="text-success" @click="editRoom(room.room_id)">
                                    <i class="bx bx-edit fs-4 1"></i>
                                </a>
                                <a class="text-danger" @click="deleteRoom(room, room_id)">
                                    <i class="bx bx-trash fs-4 1"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                </template>
            </c-table>
        </div>

        <RoomTypeDetail :room="selectedRoom" />
    </div>
</template>

<script>
import CTable from "@/components/database/tabledata-custom.vue";
import RoomTypeDetail from "./partials/room-type-detail.vue";
import EntryActions from "@/components/database/entry-actions.vue";

export default {
    name: "RoomType",
    components: {
        CTable,
        RoomTypeDetail,
        EntryActions
    },
    data() {
        return {
            rooms: [
                {
                    room_id: "1",
                    room_number: "A101",
                    room_type: "Deluxe Room",
                    price_per_night: 120,
                    capacity: 2,
                    availability: "available",
                    bed_type: "King",
                    room_size: "30m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Điều hòa nhiệt độ",
                        "Bồn tắm",
                        "Tủ lạnh mini",
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "A luxury room with elegant decor and modern amenities.",
                    floor: 1,
                    view: "Biển",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 10,
                        type: "percent",
                    },
                    created_at: "2025-01-15T08:00:00Z",
                    updated_at: "2025-01-20T12:30:00Z",
                },
                {
                    room_id: "2",
                    room_number: "B202",
                    room_type: "Suite Room",
                    price_per_night: 250,
                    capacity: 4,
                    availability: "occupied",
                    bed_type: "Queen",
                    room_size: "50m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Bồn tắm Jacuzzi",
                        "Minibar",
                        "Ban công riêng",
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "A spacious suite with a separate living area and premium facilities.",
                    floor: 2,
                    view: "Thành phố",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 200000,
                        type: "fixed",
                    },
                    created_at: "2025-01-10T10:00:00Z",
                    updated_at: "2025-01-18T09:00:00Z",
                },
                {
                    room_id: "3",
                    room_number: "C303",
                    room_type: "Standard Room",
                    price_per_night: 80,
                    capacity: 2,
                    availability: "maintenance",
                    bed_type: "Double",
                    room_size: "25m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Điều hòa nhiệt độ",
                        "Bàn làm việc",
                        "Máy pha cà phê",
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "A cozy room with essential amenities for a comfortable stay.",
                    floor: 3,
                    view: "Nội bộ",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: null,
                    created_at: "2025-01-12T11:00:00Z",
                    updated_at: "2025-01-19T15:00:00Z",
                },
                {
                    room_id: "4",
                    room_number: "D404",
                    room_type: "Family Room",
                    price_per_night: 180,
                    capacity: 6,
                    availability: "reserved",
                    bed_type: "Two Queen",
                    room_size: "60m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Bếp nhỏ",
                        "Ban công riêng",
                        "Giường phụ",
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "A spacious room designed for families with multiple beds.",
                    floor: 4,
                    view: "Hồ bơi",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 15,
                        type: "percent",
                    },
                    created_at: "2025-01-08T07:30:00Z",
                    updated_at: "2025-01-21T10:45:00Z",
                },
                {
                    room_id: "5",
                    room_number: "E505",
                    room_type: "Presidential Suite",
                    price_per_night: 500,
                    capacity: 2,
                    availability: "cleaning",
                    bed_type: "King",
                    room_size: "100m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình lớn",
                        "Phòng khách riêng",
                        "Dịch vụ quản gia",
                        "Bồn tắm nước nóng",
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "An ultra-luxurious suite with VIP services and top-tier amenities.",
                    floor: 5,
                    view: "Biển",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 500000,
                        type: "fixed",
                    },
                    created_at: "2025-01-05T09:00:00Z",
                    updated_at: "2025-01-20T18:00:00Z",
                },
                {
                    room_id: "6",
                    room_number: "F606",
                    room_type: "Single Room",
                    price_per_night: 60,
                    capacity: 1,
                    availability: "checked-in",
                    bed_type: "Single",
                    room_size: "20m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Bàn làm việc",
                        "Máy sấy tóc",
                        "Tủ lạnh mini",
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "A compact room ideal for solo travelers.",
                    floor: 6,
                    view: "Nội bộ",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: null,
                    created_at: "2025-01-11T14:30:00Z",
                    updated_at: "2025-01-18T11:00:00Z",
                },
                {
                    room_id: "7",
                    room_number: "G707",
                    room_type: "Twin Room",
                    price_per_night: 90,
                    capacity: 2,
                    availability: "available",
                    bed_type: "Two Single",
                    room_size: "28m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình phẳng",
                        "Điều hòa nhiệt độ",
                        "Máy pha trà",
                        "Két an toàn",
                    ],
                    image: [
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "A room with two single beds, perfect for friends or colleagues.",
                    floor: 7,
                    view: "Thành phố",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: {
                        amount: 5,
                        type: "percent",
                    },
                    created_at: "2025-01-07T12:15:00Z",
                    updated_at: "2025-01-17T14:30:00Z",
                },
                {
                    room_id: "8",
                    room_number: "H808",
                    room_type: "Honeymoon Suite",
                    price_per_night: 300,
                    capacity: 2,
                    availability: "reserved",
                    bed_type: "King",
                    room_size: "70m²",
                    amenities: [
                        "WiFi miễn phí",
                        "TV màn hình lớn",
                        "Bồn tắm Jacuzzi",
                        "Champagne miễn phí",
                        "Ban công riêng",
                    ],
                    image: [
                        "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                        "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    ],
                    description: "A romantic suite with special decor and breathtaking views.",
                    floor: 8,
                    view: "Biển",
                    check_in_time: "14:00",
                    check_out_time: "12:00",
                    discount: null,
                    created_at: "2025-01-06T13:45:00Z",
                    updated_at: "2025-01-16T10:00:00Z",
                },
            ],
            roomStatuses: [
                { value: "available", label: "Available" },
                { value: "occupied", label: "Occupied" },
                { value: "reserved", label: "Reserved" },
                { value: "checked-in", label: "Checked In" },
                { value: "checked-out", label: "Checked Out" },
                { value: "cleaning", label: "Cleaning" },
                { value: "out-of-order", label: "Out of Order" },
                { value: "maintenance", label: "Under Maintenance" }
            ],
            selectedRoom: null,
        };
    },
    methods: {
        showRoomDetails(room) {
            this.selectedRoom = room;
        },
        editRoom(id) {
            this.$router.push({ name: "rooms.update", params: { id: id } });
        },
        async deleteRoom(id) {
            const result = await this.$swal.fire({
                title: "Are you sure you want to delete?",
                text: "This action cannot be undone!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel",
            });

            if (result.isConfirmed) {
                try {
                    // const response = await axios.delete(`/api/rooms/${id}`);
                    // if (response.status === 200) {
                    this.$swal.fire("Deleted!", "Room deleted successfully.", "success", id);
                    // }
                } catch (error) {
                    console.error("Error deleting room:", error);
                    this.$swal.fire("Error!", "Room deleted failed.", "error");
                }
            }
        },
        changeRoomAvailability(room) {
            this.$swal.fire({
                title: "Confirm status change",
                text: `Are you sure you want to change this room's status?`,
                icon: "warning",
                showCancelButton: true,
                cancelButtonText: "Cancel",
                confirmButtonText: "Agree",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
            }).then((result) => {
                if (result.isConfirmed) {
                    room.availability = room.availability === "Available" ? "Booked" : "Available";
                    this.updateRoomAvailability(room);
                    this.$swal.fire({
                        title: "Success!",
                        text: "Room status has been updated.",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
            });
        },
        updateRoomAvailability(room) {
            console.log(`Cập nhật trạng thái phòng ${room.room_number} thành ${room.availability}`);
        },
        getRoomStatusClass(status) {
            switch (status) {
                case "available": return "border-success text-success";
                case "occupied": return "border-danger text-danger";
                case "reserved": return "border-warning text-warning";
                case "checked-in": return "border-primary text-primary";
                case "checked-out": return "border-secondary text-secondary";
                case "cleaning": return "border-info text-info";
                case "out-of-order": return "border-dark text-dark";
                case "maintenance": return "border-danger text-danger";
                default: return "border-light text-muted";
            }
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
    text-align: center;
}

.table td {
    max-width: 250px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
}

.table-row td:nth-child(1) {
    min-width: 50px;
}

.table-row td:nth-child(2),
.table-row td:nth-child(3) {
    min-width: 120px;
}

.table-row td:nth-child(4) {
    min-width: 120px;
}

.table-row td:nth-child(8) {
    max-width: 200px;
}

.table-row td:last-child {
    width: 50px;
    text-align: center;
}

.custom-table-container,
.table-responsive {
    overflow-x: auto;
    border-radius: 8px;
}

.table-container .table-row td {
    vertical-align: middle;
    width: auto;
}

.action-buttons {
    display: flex;
    justify-content: center;
}

</style>