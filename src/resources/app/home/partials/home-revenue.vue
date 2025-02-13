<template>
    <div class="row mb-4">
        <div class="col-lg-6">
            <div class="card p-3 border-0 shadow-sm">
                <h5>Monthly Revenue</h5>
                <apex-chart type="bar" :height="300" :options="chartOptions" :series="chartSeries"></apex-chart>
            </div>
        </div>
        <div class="col-lg-6 mt-3 my-lg-0">
            <div class="card p-3 border-0 shadow-sm">
                <h5>Room Occupancy Rate</h5>
                <apex-chart type="donut" :height="300" :options="pieOptions" :series="pieSeries"></apex-chart>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRevenue",
    data() {
        return {
            chartOptions: {
                chart: { id: "revenue-chart" },
                xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }
            },
            chartSeries: [{
                name: "Revenue",
                data: [120, 180, 150, 200, 220, 300, 280, 350, 400, 420, 500, 600]
            }],
            pieOptions: {
                labels: ["Vacant", "Occupied", "Under Maintenance"],
                chart: { type: "donut" },
            },
            pieSeries: [30, 85, 5],
        };
    }
}
</script>

<style></style>
