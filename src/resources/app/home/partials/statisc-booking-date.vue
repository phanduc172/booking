<template>
    <div class="shadow-sm bg-white rounded-3 p-3" style="height: 350px;">
        <apexchart type="bar" :options="chartOptions" :series="chartSeries" />
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapActions } from 'vuex';

export default {
    name: "StatiscBookingDate",
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    id: "room-booking-bar-chart",
                    height: 320,
                    toolbar: {
                        show: false 
                    }
                },
                title: {
                    text: "Statistics of number of bookings by day",
                    align: "center",
                    style: {
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#2c3e50"
                    }
                },
                colors: ["#e73c3c"],
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: "14px",
                        fontWeight: "bold",
                        colors: ["white"]
                    },
                    offsetY: -10
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "40%",
                        borderRadius: 6 
                    }
                },
                grid: {
                    padding: {
                        left: 10,
                        right: 10
                    }
                },
                legend: {
                    show: false 
                }
            },
            chartSeries: []
        };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        ...mapActions('statisc', ['GetStatiscBookingDate']),
        async getData() {
            const response = await this.GetStatiscBookingDate();

            if (response.code === 200) {
                const data = response.data;

                this.chartOptions = {
                    ...this.chartOptions,
                    xaxis: {
                        ...this.chartOptions.xaxis,
                        categories: data.map(item => item.date)
                    }
                };

                this.chartSeries = [
                    {
                        name: "Number of bookings",
                        data: data.map(item => item.total_bookings) 
                    }
                ];
            }
        }
    }
};
</script>
