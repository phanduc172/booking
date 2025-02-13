<template>
    <div class="mb-4">
        <h5 class="mb-3 ms-2">Recent Bookings</h5>
        <div class="card">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead class="table-light">
                        <tr>
                            <th class="p-3">Customer Name</th>
                            <th class="p-3">Room Type</th>
                            <th class="p-3">Check-in Date</th>
                            <th class="p-3">Check-out Date</th>
                            <th class="p-3">Status</th>
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
                { name: "Nguyen Van A", roomType: "Deluxe", checkIn: "2025-02-01", checkOut: "2025-02-05", status: "Confirmed" },
                { name: "Tran Thi B", roomType: "Standard", checkIn: "2025-02-02", checkOut: "2025-02-06", status: "Pending" },
                { name: "Le Van C", roomType: "Suite", checkIn: "2025-02-03", checkOut: "2025-02-07", status: "Canceled" }
            ],
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
