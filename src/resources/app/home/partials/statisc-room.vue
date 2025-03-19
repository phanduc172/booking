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
                    text: "Statistics of number of bookings",
                    align: "center",
                    style: {
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#2c3e50"
                    }
                },
                colors: ["#f39c12", "#3498db", "#2ecc71", "#e74c3c", "#9b59b6"],
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
            chartSeries: [],
            entry: []
        };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        ...mapActions('statisc', ['GetStatiscRoom']),
        async getData() {
            const response = await this.GetStatiscRoom();

            if (response.code === 200) {
                this.entry = response.data;

                this.chartOptions = {
                    ...this.chartOptions,
                    labels: this.entry.map(item => item.room.name)
                };
                this.chartSeries = this.entry.map(item => item.total_bookings);
            }
        }
    }
};
</script>
