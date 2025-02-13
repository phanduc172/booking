<template>
    <div class="modal fade" id="roomDetailModal" tabindex="-1" aria-labelledby="roomDetailModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content shadow-lg border-0 rounded-4">
                <div class="modal-body px-4 pb-4">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <img :src="room?.image[0]" class="img-fluid rounded-3 shadow-sm w-100" alt="Room Image">
                        </div>
                        <div class="col-6" v-for="(img, index) in room?.image.slice(1, 3)" :key="index">
                            <img :src="img" class="img-fluid rounded-3 shadow-sm w-100" alt="Room Image">
                        </div>
                    </div>

                    <div class="mt-4">
                        <h4 class="fw-bold">{{ room?.room_number }} - {{ room?.room_type }}</h4>
                        <p class="text-muted">{{ room?.description }}</p>

                        <div class="row">
                            <div class="col-md-6">
                                <p><strong>📏 Kích thước:</strong> {{ room?.room_size }}</p>
                                <p><strong>🛏 Loại giường:</strong> {{ room?.bed_type }}</p>
                                <p><strong>👥 Sức chứa:</strong> {{ room?.capacity }} khách</p>
                                <p><strong>⏰ Check-in:</strong> {{ room?.check_in_time }}</p>
                                <p><strong>⏳ Check-out:</strong> {{ room?.check_out_time }}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>🌅 View:</strong> {{ room?.view }}</p>
                                <p><strong>🏢 Tầng:</strong> {{ room?.floor }}</p>
                                <p><strong>📌 Trạng thái:</strong>
                                    <span class="badge px-3 py-2 ms-2"
                                        :class="getAvailabilityClass(room?.availability)">
                                        {{ room?.availability }}
                                    </span>
                                </p>
                                <p><strong>💰 Giá gốc:</strong> ${{ room?.price_per_night }}</p>
                                <p v-if="room?.discount">
                                    <strong>🔥 Giảm giá:</strong> -{{ room?.discount.amount }}%
                                    <span class="text-danger">(Còn: ${{ getDiscountedPrice(room) }})</span>
                                </p>
                            </div>
                        </div>

                        <div class="mt-3">
                            <h5>🎉 Tiện ích</h5>
                            <ul class="list-unstyled d-flex flex-wrap">
                                <li v-for="(amenity, index) in room?.amenities" :key="index"
                                    class="badge bg-light text-dark me-2 mb-2 px-3 py-2 border border-1 shadow-sm">
                                    {{ amenity }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-outline-secondary rounded-3 px-4" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger rounded-3 px-4">
                        Đặt ngay
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoomDetailModal",
    props: {
        room: Object
    },
    methods: {
        getAvailabilityClass(availability) {
            return {
                "bg-available text-success": availability === "Available",
                "bg-booked text-danger": availability === "Booked"
            };
        },
        getDiscountedPrice(room) {
            if (!room?.discount || room?.discount.type !== "percent") return room?.price_per_night;
            return (room.price_per_night * (100 - room.discount.amount)) / 100;
        }
    }
};
</script>

<style scoped>
.modal-content {
    background: #ffffff;
    border-radius: 16px;
}

.badge {
    font-size: 0.875rem;
    border-radius: 12px;
}

.bg-available {
    background-color: rgba(25, 135, 84, 0.15);
    color: #198754;
}

.bg-booked {
    background-color: rgba(220, 53, 69, 0.15);
    color: #dc3545;
}

.btn-danger {
    background: linear-gradient(135deg, #FFC107, #FFA000);
    border: none;
    transition: all 0.3s ease-in-out;
    color: #fff;
}

.btn-danger:hover {
    background: linear-gradient(135deg, #FFA000, #FF8F00);
}

.btn-outline-secondary {
    border: 2px solid #adb5bd;
    color: #495057;
    transition: all 0.3s ease-in-out;
}

.btn-outline-secondary:hover {
    background: #adb5bd;
    color: #ffffff;
}
</style>
