<!-- <template>
    <div>
        <HomeRoom />
        <HomeRevenue />
        <HomeRecentBooking />
    </div>
</template>

<script>
import HomeRevenue from './partials/home-revenue.vue';
import HomeRoom from './partials/home-room.vue';
import HomeRecentBooking from './partials/home-recent-booking.vue';

export default {
    name: "HomePage",
    components: {
        HomeRevenue,
        HomeRoom,
        HomeRecentBooking,
    },
   
};
</script> -->

<template>
    <router-view />
</template>

<script>
export default {
    name: "HomePage",
}
</script>