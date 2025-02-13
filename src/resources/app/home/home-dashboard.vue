<template>
    <div>
        <HomeRoom />
        <HomeRevenue />
        <HomeRecentBooking />
    </div>
</template>

<script>
import HomeRoom from './partials/home-room.vue'
import HomeRevenue from './partials/home-revenue.vue'
import HomeRecentBooking from './partials/home-recent-booking.vue'

export default {
    name: "HomeDashboard",
    components: {
        HomeRevenue,
        HomeRoom,
        HomeRecentBooking,
    },
};
</script>
