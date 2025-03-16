<template>
    <div class="table-container border-3">
        <div class="bg-white custom-table-container shadow-sm rounded-3 p-4 mb-3">
            <filter-search class="col-12 col-sm-6 col-md-4 col-lg-3" :placeholder="'Enter search keyword'" />
        </div>
        <div class="bg-white custom-table-container shadow-sm rounded-3 p-4">
            <div v-if="this.entries.length > 0" class="container-fluid p-0 mt-3">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-4 mb-4" v-for="booking in entries" :key="booking.id">
                        <b-card no-body class="room-card border" @click="detailBooking(booking.id)">
                            <b-card-body>
                                <div class="d-flex justify-content-between">
                                    <b-card-title class="text-dark font-weight-bold mb-3">
                                        {{ booking.room.name }}
                                    </b-card-title>
                                    <b-card-title class="text-dark font-weight-bold text-center">
                                        <i class='bx bx-dollar '></i>
                                        <span>{{ booking.total_price }}</span>
                                    </b-card-title>
                                </div>
                                <b-card-text>
                                    <h5 class="text-success font-weight-bold room-title">
                                        Customer: {{ booking.customer.name }}
                                    </h5>
                                </b-card-text>
                                <b-card-text class="m-0">
                                    <p class="mb-2"><span class="fw-bold">Check-in:</span> {{
                                        formatDate(booking.check_in) }}</p>
                                    <p class="mb-2"><span class="fw-bold"> Check-out:</span>{{
                                        formatDate(booking.check_out) }}</p>
                                </b-card-text>
                                <b-card-text>
                                    <p class="fw-bold text-danger">{{ booking.roomStatus.status_name }}</p>
                                </b-card-text>
                            </b-card-body>
                        </b-card>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="d-flex flex-column justify-content-between align-items-center">
                    <img src="@/assets/images/icon_empty.jpg" alt="" width="250" height="250">
                    <span class="fw-bild fs-5 text-muted">Không có dữ liệu</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CTable from '@/components/database/tabledata-custom.vue';
import FilterSearch from '@/components/database/filters/filter-search.vue';
import { formatDate } from '@/core/utils';

export default {
    name: "BookingList",
    components: {
        CTable,
        FilterSearch,
    },
    data() {
        return {
            entries: [],
        }
    },
    watch: {
        '$route.query.search': {
            handler() {
                this.getData();
            }
        }
    },
    methods: {
        ...mapActions('booking', ['GetListBooking']),
        formatDate,
        async getData() {
            let query = this.$route.query.search
            const response = await this.GetListBooking({ search: query });
            if (response.code === 200) {
                this.entries = response.data
            }
        },

        detailBooking(id) {
            this.$router.push({ name: "booking.detail", params: { id: id } });
        },
        editBooking(id) {
            this.$router.push({ name: "booking.update", params: { id: id } });
        },
        async deleteBooking(id) {
            const result = await this.$swal.fire({
                title: "Bạn có chắc chắn muốn xóa?",
                text: "Hành động này không thể hoàn tác!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy",
            });

            if (result.isConfirmed) {
                try {
                    this.bookings = this.bookings.filter(booking => booking.booking_id !== id);
                    this.$swal.fire("Đã xóa!", "Đặt phòng đã được xóa thành công.", "success");
                } catch (error) {
                    console.error("Lỗi khi xóa đặt phòng:", error);
                    this.$swal.fire("Lỗi!", "Xóa đặt phòng thất bại.", "error");
                }
            }
        },
    },
    created() {
        this.getData()
    }
};
</script>

<style scoped>
.table {
    width: 100%;
    table-layout: auto;
    white-space: nowrap;
}

.table th,
.table td {
    padding: 12px;
    text-align: center;
}

.table td {
    max-width: 250px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
}

.table-container .table-row td {
    vertical-align: middle;
    width: auto;
}

.action-buttons {
    display: flex;
    justify-content: center;
}

.room-card {
    height: 230px;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: #ffffff;
    border: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.room-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
}

.room-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}

.room-img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.b-button {
    border-radius: 8px;
    font-size: 14px;
}

.room-available {
    background-color: #d4edda;
}

.floor-list {
    background: #f8f9fa;
    border-radius: 12px;
}

.floor-list .list-group-item {
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    color: #333;
    font-size: 1rem;
}

.floor-list .list-group-item:hover {
    background-color: rgba(32, 180, 177, 0.15);
    color: #20b4b1;
    transform: translateX(3px);
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.floor-list .list-group-item.active {
    background-color: var(--primary-color) !important;
    color: white !important;
    font-weight: bold;
    box-shadow: 0px 4px 10px rgba(32, 180, 177, 0.3);
}
</style>
