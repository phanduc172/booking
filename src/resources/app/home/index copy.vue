<template>
    <div >
        <div class="row mb-5">
            <div class="col-md-6">
                <div class="chart-container">
                    <VueApexCharts type="bar" :options="barChartOptions" :series="barSeries"></VueApexCharts>
                </div>
            </div>

            <div class="col-md-6">
                <div class="chart-container">
                    <VueApexCharts type="area" :options="areaChartOptions" :series="areaSeries"></VueApexCharts>
                </div>
            </div>
        </div>

        <HomeContent />
        <HomeBooking />
        <HomeImageHighlight />
        <HomeSchedule />
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import HomeContent from "../home/partials/home-content.vue";
import HomeBooking from "../home/partials/home-booking.vue";
import HomeImageHighlight from "../home/partials/home-image-highlight.vue";
import HomeSchedule from "../home/partials/home-schedules.vue";

export default {
    name: "HomePage",
    components: {
        VueApexCharts,
        HomeContent,
        HomeBooking,
        HomeImageHighlight,
        HomeSchedule
    },
    data() {
        return {
            // Dữ liệu Biểu đồ Bar
            barSeries: [
                {
                    name: "Doanh thu",
                    data: [100, 200, 300, 400, 500, 600, 700]
                }
            ],
            barChartOptions: {
                chart: {
                    type: "bar",
                    height: 350
                },
                title: {
                    text: "Biểu đồ doanh thu theo tuần",
                    align: "center"
                },
                xaxis: {
                    categories: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]
                }
            },

            // Dữ liệu Biểu đồ Area
            areaSeries: [
                {
                    name: "Doanh thu",
                    data: [100, 200, 300, 400, 500, 600, 700]
                },
                {
                    name: "Lợi nhuận",
                    data: [50, 120, 180, 250, 310, 400, 500]
                }
            ],
            areaChartOptions: {
                chart: {
                    type: "area",
                    height: 350
                },
                title: {
                    text: "Doanh thu & Lợi nhuận theo tuần",
                    align: "center"
                },
                xaxis: {
                    categories: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "smooth"
                },
                colors: ["#008FFB", "#00E396"],
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.2,
                        stops: [0, 90, 100]
                    }
                }
            }
        };
    }
};
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 350px;
}
</style>
