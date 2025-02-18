<template>
    <div class="d-flex align-items-center justify-content-center  p-3 p-sm-0">
        <div class="bg-white p-4 rounded shadow-lg w-100 container-box">
            <h1 class="mb-4 text-center">Check Availability</h1>
            <div class="row g-3">
                <div class="col-8 offset-2 offset-sm-0 col-sm-6 col-md-4">
                    <FilterBeganFrom />
                </div>
                <div class="col-8 offset-2 offset-sm-0 col-sm-6 col-md-4">
                    <FilterBeganTo />
                </div>
                <div class="col-8 offset-2 offset-sm-0 col-sm-6 col-md-4">
                    <FilterRoomType />
                </div>
                <div class="col-8 offset-2 offset-sm-0 col-sm-6 col-md-4">
                    <FilterPrice />
                </div>
            </div>
            <div class="mt-4 text-end">
                <button class="btn btn-danger">Check Availability</button>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import FilterBeganFrom from "@/components/database/filters/filter-began-from.vue";
import FilterBeganTo from "@/components/database/filters/filter-began-to.vue";
import FilterRoomType from "@/components/database/filters/filter-room-type.vue";
import FilterPrice from "@/components/database/filters/filter-price.vue";

export default {
    name: "HomeBooking",
    components: {
        DatePicker,
        FilterBeganFrom,
        FilterBeganTo,
        FilterRoomType,
        FilterPrice,
    },
    data() {
        return {
            checkinDate: "",
            checkoutDate: "",
            roomType: "",
            price: ""
        };
    },
    
};
</script>

<style scoped>
.d-flex {
    height: 60vh;
}

.container-box {
    max-width: 800px;
}
</style>
