<template>
    <div class="shadow-sm bg-white rounded-3 p-3" style="height: 320px;">
        <apexchart type="donut" :options="chartOptions" :series="chartSeries" />
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapActions } from 'vuex';

export default {
    name: "StatiscRoom",
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    id: "room-booking-donut-chart",
                    height: "300px"
                },
                labels: [],
                title: {
                    text: "Booking status statistics",
                    align: "center",
                    style: {
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#2c3e50"
                    }
                },
                colors: ["#e74c3c", "#f39c12", "#2ecc71"], 
                legend: {
                    position: "bottom"
                },
                dataLabels: {
                    enabled: true,
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: "60%"
                        }
                    }
                }
            },
            chartSeries: []
        };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        ...mapActions('statisc', ['GetStatiscStatus']),
        async getData() {
            const response = await this.GetStatiscStatus();

            if (response.code === 200) {
                const data = response.data;

                this.chartOptions = {
                    ...this.chartOptions,
                    labels: ["Canceled", "Pending", "Confirmed"]
                };
                this.chartSeries = [data.Canceled, data.Pending, data.Confirmed];
            }
        }
    }
};
</script>
