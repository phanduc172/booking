<template>
    <div class="table-container border-3">
        <div class="bg-white custom-table-container shadow-sm rounded-3">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-2">
                        <div class="list-group floor-list shadow-sm p-2 rounded">
                            <button v-for="floor in uniqueFloors" :key="floor"
                                class="list-group-item list-group-item-action text-center fw-bold py-3 mb-2"
                                :class="{ 'active': selectedFloor === floor }" @click="selectedFloor = floor">
                                <i class="bx bx-building-house me-2 fs-5"></i>
                                {{ floor === null ? "Tất cả" : `Tầng ${floor}` }}
                            </button>
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 mb-4" v-for="booking in filteredBookings"
                                :key="booking.booking_id">
                                <b-card no-body class="room-card border"
                                    :class="getRoomStatusClass(booking.room.availability)"
                                    @click="detailBooking(booking.booking_id)">
                                    <b-card-body>
                                        <b-card-title class="text-dark font-weight-bold">
                                            {{ booking.room.room_number }} - {{ booking.room.room_type }}
                                        </b-card-title>
                                        <b-card-text class="text-muted small mb-4">
                                            Capacity: {{ booking.room.capacity }}
                                        </b-card-text>
                                        <b-card-text>
                                            <h5 class="text-success font-weight-bold">
                                                Name: {{ booking.customer.name }}
                                            </h5>
                                        </b-card-text>
                                        <b-card-text class="text-muted">
                                            {{ getRoomStatusLabel(booking.room.availability) }}
                                        </b-card-text>
                                    </b-card-body>
                                </b-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CTable from '@/components/database/tabledata-custom.vue';

export default {
    name: "BookingList",
    components: {
        CTable
    },
    data() {
        return {
            bookings: [
                {
                    booking_id: "B001",
                    customer: {
                        customer_id: "1",
                        name: "Nguyen Van A",
                        phone: "0987654321",
                        email: "nguyenvana@example.com",
                    },
                    room: {
                        room_id: "1",
                        room_number: "A101",
                        room_type: "Deluxe Room",
                        price_per_night: 120,
                        bed_type: "King",
                        capacity: 2,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm",
                            "Tủ lạnh mini",
                        ],
                        view: "Biển",
                        floor: 1,

                        availability: "checked-out",
                    },
                    check_in: "2025-02-01T14:00:00Z",
                    check_out: "2025-02-05T12:00:00Z",
                    total_nights: 4,
                    total_price: 432,
                    discount: {
                        amount: 10,
                        type: "percent",
                    },
                    status: "Confirmed",
                    payment_method: "Credit Card",
                    number_of_guests: 2,
                    notes: "Yêu cầu thêm 1 gối và khăn tắm.",
                    created_at: "2025-01-20T15:00:00Z",
                },
                {
                    booking_id: "B002",
                    customer: {
                        customer_id: "2",
                        name: "Tran Thi B",
                        phone: "0988888888",
                        email: "tranthib@example.com",
                    },
                    room: {
                        room_id: "2",
                        room_number: "B202",
                        room_type: "Standard Room",
                        price_per_night: 80,
                        bed_type: "Queen",
                        capacity: 2,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                        ],
                        view: "Thành phố",
                        floor: 2,
                        availability: "reserved",
                    },
                    check_in: "2025-02-10T14:00:00Z",
                    check_out: "2025-02-12T12:00:00Z",
                    total_nights: 2,
                    total_price: 160,
                    discount: null,
                    status: "Pending",
                    payment_method: "Cash",
                    number_of_guests: 2,
                    notes: "Không có yêu cầu đặc biệt.",
                    created_at: "2025-01-25T10:30:00Z",
                },
                {
                    booking_id: "B003",
                    customer: {
                        customer_id: "3",
                        name: "Pham Van C",
                        phone: "0977777777",
                        email: "phamvanc@example.com",
                    },
                    room: {
                        room_id: "3",
                        room_number: "C303",
                        room_type: "Suite",
                        price_per_night: 200,
                        bed_type: "King",
                        capacity: 4,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm",
                            "Bàn làm việc",
                            "Minibar",
                        ],
                        view: "Hồ",
                        floor: 3,
                        availability: "cleaning",
                    },
                    check_in: "2025-03-05T14:00:00Z",
                    check_out: "2025-03-08T12:00:00Z",
                    total_nights: 3,
                    total_price: 600,
                    discount: {
                        amount: 50,
                        type: "fixed",
                    },
                    status: "Cancelled",
                    payment_method: "Bank Transfer",
                    number_of_guests: 3,
                    notes: "Khách muốn có view hồ và phòng yên tĩnh.",
                    created_at: "2025-02-01T16:45:00Z",
                },
                {
                    booking_id: "B004",
                    customer: {
                        customer_id: "4",
                        name: "Le Thi D",
                        phone: "0966666666",
                        email: "lethid@example.com",
                    },
                    room: {
                        room_id: "4",
                        room_number: "D404",
                        room_type: "Luxury Suite",
                        price_per_night: 300,
                        bed_type: "Super King",
                        capacity: 4,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm lớn",
                            "Khu vực tiếp khách",
                            "Ban công riêng",
                        ],
                        view: "Biển",
                        floor: 4,
                        availability: "checked-in",
                    },
                    check_in: "2025-03-15T14:00:00Z",
                    check_out: "2025-03-20T12:00:00Z",
                    total_nights: 5,
                    total_price: 1500,
                    discount: {
                        amount: 10,
                        type: "percent",
                    },
                    status: "Confirmed",
                    payment_method: "Credit Card",
                    number_of_guests: 4,
                    notes: "Khách có trẻ nhỏ, cần có cũi em bé.",
                    created_at: "2025-02-10T18:20:00Z",
                },
                {
                    booking_id: "B102",
                    customer: {
                        customer_id: "1",
                        name: "Nguyen Van A",
                        phone: "0987654321",
                        email: "nguyenvana@example.com",
                    },
                    room: {
                        room_id: "1",
                        room_number: "A101",
                        room_type: "Deluxe Room",
                        price_per_night: 120,
                        bed_type: "King",
                        capacity: 2,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm",
                            "Tủ lạnh mini",
                        ],
                        view: "Biển",
                        floor: 1,
                        availability: "checked-in",
                    },
                    check_in: "2025-02-01T14:00:00Z",
                    check_out: "2025-02-05T12:00:00Z",
                    total_nights: 4,
                    total_price: 432,
                    discount: {
                        amount: 10,
                        type: "percent",
                    },
                    status: "Confirmed",
                    payment_method: "Credit Card",
                    number_of_guests: 2,
                    notes: "Yêu cầu thêm 1 gối và khăn tắm.",
                    created_at: "2025-01-20T15:00:00Z",
                },
                {
                    booking_id: "B202",
                    customer: {
                        customer_id: "2",
                        name: "Tran Thi B",
                        phone: "0988888888",
                        email: "tranthib@example.com",
                    },
                    room: {
                        room_id: "2",
                        room_number: "B202",
                        room_type: "Standard Room",
                        price_per_night: 80,
                        bed_type: "Queen",
                        capacity: 2,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                        ],
                        view: "Thành phố",
                        floor: 2,
                        availability: "occupied",
                    },
                    check_in: "2025-02-10T14:00:00Z",
                    check_out: "2025-02-12T12:00:00Z",
                    total_nights: 2,
                    total_price: 160,
                    discount: null,
                    status: "Pending",
                    payment_method: "Cash",
                    number_of_guests: 2,
                    notes: "Không có yêu cầu đặc biệt.",
                    created_at: "2025-01-25T10:30:00Z",
                },
                {
                    booking_id: "B303",
                    customer: {
                        customer_id: "3",
                        name: "Pham Van C",
                        phone: "0977777777",
                        email: "phamvanc@example.com",
                    },
                    room: {
                        room_id: "3",
                        room_number: "C303",
                        room_type: "Suite",
                        price_per_night: 200,
                        bed_type: "King",
                        capacity: 4,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm",
                            "Bàn làm việc",
                            "Minibar",
                        ],
                        view: "Hồ",
                        floor: 3,
                        availability: "cleaning",
                    },
                    check_in: "2025-03-05T14:00:00Z",
                    check_out: "2025-03-08T12:00:00Z",
                    total_nights: 3,
                    total_price: 600,
                    discount: {
                        amount: 50,
                        type: "fixed",
                    },
                    status: "Cancelled",
                    payment_method: "Bank Transfer",
                    number_of_guests: 3,
                    notes: "Khách muốn có view hồ và phòng yên tĩnh.",
                    created_at: "2025-02-01T16:45:00Z",
                },
                {
                    booking_id: "B404",
                    customer: {
                        customer_id: "4",
                        name: "Le Thi D",
                        phone: "0966666666",
                        email: "lethid@example.com",
                    },
                    room: {
                        room_id: "4",
                        room_number: "D404",
                        room_type: "Luxury Suite",
                        price_per_night: 300,
                        bed_type: "Super King",
                        capacity: 4,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm lớn",
                            "Khu vực tiếp khách",
                            "Ban công riêng",
                        ],
                        view: "Biển",
                        floor: 4,

                        availability: "maintenance",
                    },
                    check_in: "2025-03-15T14:00:00Z",
                    check_out: "2025-03-20T12:00:00Z",
                    total_nights: 5,
                    total_price: 1500,
                    discount: {
                        amount: 10,
                        type: "percent",
                    },
                    status: "Confirmed",
                    payment_method: "Credit Card",
                    number_of_guests: 4,
                    notes: "Khách có trẻ nhỏ, cần có cũi em bé.",
                    created_at: "2025-02-10T18:20:00Z",
                },
                {
                    booking_id: "B103",
                    customer: {
                        customer_id: "1",
                        name: "Nguyen Van A",
                        phone: "0987654321",
                        email: "nguyenvana@example.com",
                    },
                    room: {
                        room_id: "1",
                        room_number: "A101",
                        room_type: "Deluxe Room",
                        price_per_night: 120,
                        bed_type: "King",
                        capacity: 2,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm",
                            "Tủ lạnh mini",
                        ],
                        view: "Biển",
                        floor: 1,

                        availability: "checked-in",
                    },
                    check_in: "2025-02-01T14:00:00Z",
                    check_out: "2025-02-05T12:00:00Z",
                    total_nights: 4,
                    total_price: 432,
                    discount: {
                        amount: 10,
                        type: "percent",
                    },
                    status: "Confirmed",
                    payment_method: "Credit Card",
                    number_of_guests: 2,
                    notes: "Yêu cầu thêm 1 gối và khăn tắm.",
                    created_at: "2025-01-20T15:00:00Z",
                },
                {
                    booking_id: "B203",
                    customer: {
                        customer_id: "2",
                        name: "Tran Thi B",
                        phone: "0988888888",
                        email: "tranthib@example.com",
                    },
                    room: {
                        room_id: "2",
                        room_number: "B202",
                        room_type: "Standard Room",
                        price_per_night: 80,
                        bed_type: "Queen",
                        capacity: 2,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                        ],
                        view: "Thành phố",
                        floor: 1,

                        availability: "reserved",
                    },
                    check_in: "2025-02-10T14:00:00Z",
                    check_out: "2025-02-12T12:00:00Z",
                    total_nights: 2,
                    total_price: 160,
                    discount: null,
                    status: "Pending",
                    payment_method: "Cash",
                    number_of_guests: 2,
                    notes: "Không có yêu cầu đặc biệt.",
                    created_at: "2025-01-25T10:30:00Z",
                },
                {
                    booking_id: "B304",
                    customer: {
                        customer_id: "3",
                        name: "Pham Van C",
                        phone: "0977777777",
                        email: "phamvanc@example.com",
                    },
                    room: {
                        room_id: "3",
                        room_number: "C303",
                        room_type: "Suite",
                        price_per_night: 200,
                        bed_type: "King",
                        capacity: 4,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm",
                            "Bàn làm việc",
                            "Minibar",
                        ],
                        view: "Hồ",
                        floor: 3,

                        availability: "occupied",
                    },
                    check_in: "2025-03-05T14:00:00Z",
                    check_out: "2025-03-08T12:00:00Z",
                    total_nights: 3,
                    total_price: 600,
                    discount: {
                        amount: 50,
                        type: "fixed",
                    },
                    status: "Cancelled",
                    payment_method: "Bank Transfer",
                    number_of_guests: 3,
                    notes: "Khách muốn có view hồ và phòng yên tĩnh.",
                    created_at: "2025-02-01T16:45:00Z",
                },
                {
                    booking_id: "B406",
                    customer: {
                        customer_id: "4",
                        name: "Le Thi D",
                        phone: "0966666666",
                        email: "lethid@example.com",
                    },
                    room: {
                        room_id: "4",
                        room_number: "D404",
                        room_type: "Luxury Suite",
                        price_per_night: 300,
                        bed_type: "Super King",
                        capacity: 4,
                        amenities: [
                            "WiFi miễn phí",
                            "TV màn hình phẳng",
                            "Điều hòa nhiệt độ",
                            "Bồn tắm lớn",
                            "Khu vực tiếp khách",
                            "Ban công riêng",
                        ],
                        view: "Biển",
                        floor: 4,
                        availability: "available",
                    },
                    check_in: "2025-03-15T14:00:00Z",
                    check_out: "2025-03-20T12:00:00Z",
                    total_nights: 5,
                    total_price: 1500,
                    discount: {
                        amount: 10,
                        type: "percent",
                    },
                    status: "Confirmed",
                    payment_method: "Credit Card",
                    number_of_guests: 4,
                    notes: "Khách có trẻ nhỏ, cần có cũi em bé.",
                    created_at: "2025-02-10T18:20:00Z",
                },
            ],
            selectedFloor: null,
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

        }
    },
    computed: {
        filteredBookings() {
            if (!this.selectedFloor) return this.bookings;
            return this.bookings.filter(booking => booking.room.floor === this.selectedFloor);
        },
        uniqueFloors() {
            const floors = [...new Set(this.bookings.map(booking => booking.room.floor))].sort((a, b) => a - b);
            return [null, ...floors];
        }
    },
    methods: {
        detailBooking(id) {
            console.log("🚀 ~ detailBooking ~ this.selectedBooking:", this.selectedBooking)
            this.$router.push({ name: "bookings.detail", params: { id: id } });
        },
        editBooking(id) {
            this.$router.push({ name: "bookings.update", params: { id: id } });
        },
        async deleteBooking(id) {
            const result = await this.$swal.fire({
                title: "Bạn có chắc chắn muốn xóa?",
                text: "Hành động này không thể hoàn tác!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy",
            });

            if (result.isConfirmed) {
                try {
                    this.bookings = this.bookings.filter(booking => booking.booking_id !== id);
                    this.$swal.fire("Đã xóa!", "Đặt phòng đã được xóa thành công.", "success");
                } catch (error) {
                    console.error("Lỗi khi xóa đặt phòng:", error);
                    this.$swal.fire("Lỗi!", "Xóa đặt phòng thất bại.", "error");
                }
            }
        },
        formatDate(dateString) {
            return new Date(dateString).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });
        },
        getStatusVariant(status) {
            if (status === "Confirmed") return "outline-success";
            if (status === "Pending") return "outline-primary";
            return "outline-danger";
        },
        getStatusIcon(status) {
            if (status === "Confirmed") return "fas fa-check-circle";
            if (status === "Pending") return "fas fa-exclamation-circle";
            return "fas fa-times-circle";
        },
        getRoomStatusClass(status) {
            const statusClasses = {
                available: "room-available",
                occupied: "room-occupied",
                reserved: "room-reserved",
                "checked-in": "room-checked-in",
                "checked-out": "room-checked-out",
                cleaning: "room-cleaning",
                "out-of-order": "room-out-of-order",
                maintenance: "room-maintenance"
            };
            return statusClasses[status] || "";
        },
        getRoomStatusLabel(value) {
            const status = this.roomStatuses.find(status => status.value === value);
            return status ? status.label : value;
        }
    }
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

.table-container .table-row td {
    vertical-align: middle;
    width: auto;
}

.action-buttons {
    display: flex;
    justify-content: center;
}

.room-card {
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: #ffffff;
    border: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.room-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
}

.room-img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.b-button {
    border-radius: 8px;
    font-size: 14px;
}

.room-available {
    background-color: #d4edda;
}

.floor-list {
    background: #f8f9fa;
    border-radius: 12px;
}

.floor-list .list-group-item {
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    color: #333;
    font-size: 1rem;
}

.floor-list .list-group-item:hover {
    background-color: rgba(32, 180, 177, 0.15);
    color: #20b4b1;
    transform: translateX(3px);
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.floor-list .list-group-item.active {
    background-color: var(--primary-color) !important;
    color: white !important;
    font-weight: bold;
    box-shadow: 0px 4px 10px rgba(32, 180, 177, 0.3);
}

/* Available - Xanh lá nhạt (Biểu thị phòng sẵn sàng) */
.room-available {
    background-color: #d4edda;
    color: #155724;
}

/* Occupied - Đỏ nhạt (Biểu thị phòng đang có khách) */
.room-occupied {
    background-color: #f8d7da;
    color: #721c24;
}

/* Reserved - Vàng nhạt (Biểu thị phòng đã được đặt trước) */
.room-reserved {
    background-color: #fff3cd;
    color: #856404;
}

/* Checked-in - Xanh dương nhạt (Biểu thị khách đã nhận phòng) */
.room-checked-in {
    background-color: #cce5ff;
    color: #004085;
}

/* Checked-out - Xám nhạt (Biểu thị khách đã trả phòng nhưng chưa dọn dẹp) */
.room-checked-out {
    background-color: #e2e3e5;
    color: #383d41;
}

/* Cleaning - Xám xanh nhạt (Biểu thị phòng đang được dọn dẹp) */
.room-cleaning {
    background-color: #d6d8db;
    color: #495057;
}

/* Out of Order - Xám đậm (Phòng hỏng hoặc không thể sử dụng) */
.room-out-of-order {
    background-color: #6c757d;
    color: white;
}

/* Maintenance - Vàng đậm (Phòng đang bảo trì) */
.room-maintenance {
    background-color: #ffc107;
    color: #856404;
}
</style>
