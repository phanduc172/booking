<template>
    <div class="mb-4">
        <h5 class="mb-3 ms-2">Danh sách đặt phòng gần đây</h5>
        <div class="card">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead class="table-light">
                        <tr>
                            <th class="p-3">Tên khách hàng</th>
                            <th class="p-3">Loại phòng</th>
                            <th class="p-3">Ngày nhận phòng</th>
                            <th class="p-3">Ngày trả phòng</th>
                            <th class="p-3">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(booking, index) in recentBookings" :key="index">
                            <td class="p-3">{{ booking.name }}</td>
                            <td class="p-3">{{ booking.roomType }}</td>
                            <td class="p-3">{{ booking.checkIn }}</td>
                            <td class="p-3">{{ booking.checkOut }}</td>
                            <td class="p-3">{{ booking.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRecentBooking",
    data() {
        return {
            recentBookings: [
                { name: "Nguyễn Văn A", roomType: "Deluxe", checkIn: "2025-02-01", checkOut: "2025-02-05", status: "Đã xác nhận" },
                { name: "Trần Thị B", roomType: "Standard", checkIn: "2025-02-02", checkOut: "2025-02-06", status: "Đang chờ" },
                { name: "Lê Văn C", roomType: "Suite", checkIn: "2025-02-03", checkOut: "2025-02-07", status: "Đã hủy" }
            ]
        };
    }
}
</script>

<style scoped>
.table-responsive {
    overflow-x: auto;
    max-width: 100%;
}

.table {
    width: 100%;
    min-width: 600px;
}
</style>
