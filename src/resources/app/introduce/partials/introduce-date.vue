<template>
    <div class="form-group w-100">
        <div>
            <label class="form-label">Date Range</label>
            <i class='bx bx-chevron-down fs-5 ms-2'></i>
        </div>
        <date-picker v-model="dateRange" range placeholder="Select date range" type="date" value-type="format"
            format="DD-MM-YYYY"></date-picker>
    </div>
</template>

<script>
export default {
    name: "IntroduceDate",
    data() {
        return {
            dateRange: [
                this.$moment().format("DD-MM-YYYY"),
                this.$moment().add(1, "days").format("DD-MM-YYYY"),
            ],
        };
    },
    watch: {
        dateRange: {
            handler(newValue) {
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        ...this.$route.query,
                        startDate: newValue[0],
                        endDate: newValue[1]
                    }
                });
            },
            deep: true
        }
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
