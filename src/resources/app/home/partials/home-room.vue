<template>
    <div class="row mb-4">
        <div class="col-12 col-md-4">
            <div class="card text-primary p-3 my-2 my-md-0">
                <h4 class="fw-bold">Tổng số phòng</h4>
                <p class="display-4">120</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="card text-success p-3 my-2 my-md-0">
                <h4 class="fw-bold">Phòng đang có khách</h4>
                <p class="display-4">85</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="card text-danger p-3 my-2 my-md-0">
                <h4 class="fw-bold">Phòng đang bảo trì</h4>
                <p class="display-4">5</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRoom",
    data() {
        return {
            chartOptions: {
                chart: { id: "revenue-chart" },
                xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }
            },
            chartSeries: [{
                name: "Doanh thu",
                data: [120, 180, 150, 200, 220, 300, 280, 350, 400, 420, 500, 600]
            }],
            pieOptions: {
                labels: ["Phòng trống", "Đang có khách", "Bảo trì"],
                chart: { type: "donut" },
            },
            pieSeries: [30, 85, 5],
        };
    }
}
</script>

<style scoped>
.card {
    background-color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
