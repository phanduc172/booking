<template>
    <div class="container-fluid d-flex align-items-center justify-content-center bg-light">
        <div class="bg-white p-4 rounded shadow-lg w-100 container-box">
            <h1 class="mb-4 text-center">Check Availability</h1>
            <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-3">
                    <FilterBeganFrom />
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <FilterBeganTo />
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <FilterRoomType />
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" id="price" v-model="price" class="form-control" placeholder="Max Price ($)">
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

export default {
    name: "HomeBooking",
    components: {
        DatePicker,
        FilterBeganFrom,
        FilterBeganTo,
        FilterRoomType
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
.container-fluid {
    height: 60vh;
}

.container-box {
    max-width: 800px;
}
</style>
