<template>
    <div>
        <HomeCarousel />
        <HomeContent />
        <HomeBooking />
        <HomeImageHighlight />
        <HomeSchedule />


    </div>
</template>

<script>
import HomeCarousel from "../home/partials/home-casousel.vue";
import HomeContent from "../home/partials/home-content.vue";
import HomeBooking from "../home/partials/home-booking.vue";
import HomeImageHighlight from "../home/partials/home-image-highlight.vue";
import HomeSchedule from "../home/partials/home-schedules.vue";

export default {
    name: "HomePage",
    components: {
        HomeCarousel,
        HomeContent,
        HomeBooking,
        HomeImageHighlight,
        HomeSchedule
    },
};
</script>

<style scoped>
.text-orange {
    color: #ff9800;
}
</style>
