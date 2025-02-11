<template>
    <div class="modal fade" id="roomDetailModal" tabindex="-1" aria-labelledby="roomDetailModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content shadow-lg border-0 rounded-4">
                <div class="modal-header bg-light border-0">
                    <h5 class="modal-title fw-bold text-dark" id="roomDetailModalLabel">{{ room?.name }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
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
                        <p class="mb-2"><strong>👤 Capacity:</strong> {{ room?.capacity }} guests</p>
                        <p class="mb-2"><strong>💰 Price:</strong> ${{ room?.price }}</p>
                        <p class="mb-2"><strong>📌 Availability:</strong>
                            <span class="badge px-3 py-2 ms-2" :class="getAvailabilityClass(room?.availability)">
                                {{ room?.availability }}
                            </span>
                        </p>
                        <p class="text-muted mt-3">{{ room?.description }}</p>
                    </div>
                </div>

                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-outline-secondary rounded-3 px-4" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-danger rounded-3 px-4">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoomTypeDetail",
    props: {
        room: Object
    },
    methods: {
        getAvailabilityClass(availability) {
            return {
                "bg-available text-success": availability === "Available",
                "bg-booked text-danger": availability === "Booked"
            };
        }
    }
};
</script>

<style scoped>
/* CSS giống như trong modal cũ */
.modal-content {
    background: #ffffff;
    border-radius: 16px;
}

.modal-header {
    background: #f8f9fa;
    border-radius: 16px 16px 0 0;
}

.modal-footer {
    background: #f8f9fa;
    border-radius: 0 0 16px 16px;
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
</style>
