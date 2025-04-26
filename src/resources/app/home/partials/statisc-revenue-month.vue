<template>
    <div class="shadow-sm bg-white rounded-3 p-3">
        <apexchart type="bar" :options="chartOptions" :series="chartSeries" />
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapActions } from 'vuex';

export default {
    name: "StatiscRevenueMonth",
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    id: "revenue-chart",
                    height: "300px",
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: []
                },
                title: {
                    text: "Monthly revenue statistics",
                    align: "center",
                    style: {
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#2c3e50" 
                    }
                },
                colors: ["#3498db"],
            },
            chartSeries: [
                {
                    name: "Revenue",
                    data: []
                }
            ],
            entry: {}
        };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        ...mapActions('statisc', ['GetMonthlyRevenue']),
        async getData() {
            const response = await this.GetMonthlyRevenue();
            if (response.code === 200) {
                this.entry = response.data;
                this.chartOptions = {
                    ...this.chartOptions,
                    xaxis: {
                        categories: this.entry.map(item => item.month)
                    }
                };
                this.chartSeries = [
                    {
                        name: "Doanh thu",
                        data: this.entry.map(item => item.total_revenue)
                    }
                ];
            }
        }

    }
};
</script>
