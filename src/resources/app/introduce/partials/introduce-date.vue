<template>
    <div class="form-group w-100">
        <div>
            <label class="form-label fw-bold">Date Range</label>
        </div>
        <date-picker v-model="dateRange" range placeholder="Select date range" type="date" value-type="format"
            format="DD-MM-YYYY"></date-picker>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "IntroduceDate",
    data() {
        return {
            dateRange: [],
        };
    },
    watch: {
        dateRange: {
            handler(newValue) {
                this.setDateRange(newValue);
                this.$emit("update", newValue);
            },
            deep: true
        }
    },
    methods: {
        ...mapActions("introduce", ["setDateRange"]),
    }
};
</script>

<style scoped>
.form-group {
    display: flex;
    flex-direction: column;
}

::v-deep(.mx-datepicker) {
    width: 100% !important;
}

::v-deep(.mx-input) {
    width: 100% !important;
    height: 45px !important;
    font-size: 16px;
    padding: 10px 12px;
    border-radius: 8px;
}
</style>