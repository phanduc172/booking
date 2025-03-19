<template>
    <div>
        <div class="row row-gap-3 mb-3">
            <div class="col-12 col-sm-6">
                <StatiscRevenueMonth />
            </div>
            <div class="col-12 col-sm-6">
                <StatiscBookingDate />
            </div>
            <div class="col-12 col-sm-6">
                <StatiscRoom />
            </div>
            <div class="col-12 col-sm-6">
                <StatiscRoomStatus />
            </div>
        </div>
    </div>
</template>

<script>
import StatiscRevenueMonth from './partials/statisc-revenue-month.vue';
import StatiscRoom from './partials/statisc-room.vue';
import StatiscRoomStatus from './partials/statisc-room-status.vue';
import StatiscBookingDate from './partials/statisc-booking-date.vue';

export default {
    name: "HomeDashboard",
    components: {
        StatiscRevenueMonth,
        StatiscRoom,
        StatiscRoomStatus,
        StatiscBookingDate
    },
    created() {
        console.log(process.env.VUE_APP_HOST_API, "ENV");
    }
};
</script>
