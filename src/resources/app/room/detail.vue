<template>
    <div class="row">
        <div class="col-12 col-lg-9">
            <div class="card shadow-sm overflow-hidden d-flex flex-column flex-md-row gap-1">
                <div class="col-md-8">
                    <img :src="mainImage" alt="Main Image" class="img-fluid w-100 h-100 object-fit-cover"
                        @click="openLightbox(0)" style="cursor: pointer;" />
                </div>
                <div class="col-md-4 d-flex flex-column gap-1">
                    <div v-for="(image, index) in entry.images.slice(1, 3)" :key="index" class="flex-fill">
                        <img :src="image" alt="Image" class="img-fluid image-cover" @click="openLightbox(index + 1)"
                            style="cursor: pointer;" />
                    </div>
                    <div class="flex-fill d-flex align-items-center justify-content-center position-relative overflow-hidden"
                        @click="showLightbox = true" style="cursor: pointer; height: 150px;">
                        <img :src="$addPrefixImage(entry.images[entry.images.length - 4])" alt="Image"
                            class="img-fluid image-cover-more" />
                        <span class="text-white position-relative" style="z-index: 1; font-weight: bold;">
                            +{{ entry.images.length - 3 }} Photos</span>
                    </div>
                </div>
            </div>
            <vue-easy-lightbox :visible="showLightbox" :imgs="entry.images" :index="selectedImageIndex"
                @hide="showLightbox = false" />
            <div class="p-3 mt-2 card bg-white">
                <h4 class="room-title d-flex align-items-center mb-4">
                    <i class="bx bx-hotel me-2 text-primary fs-4"></i>
                    <span class="text-primary ">{{ entry.name }}</span>
                </h4>

                <div class="mb-4">
                    <h5 class="fw-bold mb-3 d-flex align-items-center text-primary">
                        <i class="bx bx-file fs-4 text-primary me-2"></i> Describe
                    </h5>
                    <p>{{ entry.description }}</p>
                </div>

                <div class="mb-4">
                    <h5 class="fw-bold d-flex align-items-center text-primary mb-3">
                        <i class="bx bx-file fs-4 text-primary me-2"></i> Amenities
                    </h5>
                    <b-row class="g-3">
                        <b-col cols="12" md="6" lg="6" v-for="feature in entry.features" :key="feature.id">
                            <b-list-group>
                                <b-list-group-item
                                    class="d-flex align-items-center p-3 border-1 rounded-4 shadow-sm feature-item service-card">
                                    <b-icon icon="check-circle-fill" variant="success" class="me-2 fs-5"></b-icon>
                                    <span class="text-dark">{{ feature.name }}</span>
                                </b-list-group-item>
                            </b-list-group>
                        </b-col>
                    </b-row>
                </div>

                <div class="mb-4">
                    <h5 class="fw-bold mb-3 d-flex align-items-center text-primary">
                        <i class="bx bx-list-check fs-4 text-primary me-2"></i> Utilities
                    </h5>
                    <div class="row g-3">
                        <div v-for="service in entry.services" :key="service.id" class="col-12 col-md-6">
                            <div class="service-card d-flex align-items-center gap-2 p-3 rounded-4 shadow-sm">
                                <i :class="service.icon" class="service-icon fs-4 text-primary"></i>
                                <span class="text-dark">{{ service.name }}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-3 shadow-sm card order-first order-md-last p-3">
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <h4 class="text-primary fw-bold fs-4 m-0">
                    ${{ entry.pricePerNight }}<span class="text-secondary fs-6">/night</span>
                </h4>
                <div class="px-3 py-2 bg-danger rounded text-center text-white fw-bold discount-badge">
                    50%
                </div>
            </div>
            <hr>
            <div class="mb-3 d-flex justify-content-between">
                <label class="form-label fw-bold text-secondary">Guests:</label>
                <span class="text-primary fw-bold text-end">
                    {{ entry.amountAdult }} Adult, {{ entry.amountChild }} Children
                </span>
            </div>

            <div class="mb-3 d-flex justify-content-between">
                <label class="form-label fw-bold text-secondary">Room Type:</label>
                <span class="text-primary fw-bold text-end">
                    {{ entry.typeOfRoom }}
                </span>
            </div>

            <hr />
            <p class="text-muted small">
                <i class="bx bx-calendar fs-5"></i> Date created: {{ formatDate(entry.createDate) }}
            </p>
            <p class="text-muted small">
                <i class="bx bx-edit fs-5"></i> Updated date: {{ formatDate(entry.modifiedDate) }}
            </p>
        </div>
    </div>
</template>

<script>
import { formatDate } from "@/core/utils";
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
    name: "RoomDetail",
    components: { VueEasyLightbox },
    data() {
        return {
            entry: {
                id: 1,
                name: "Deluxe Ocean View",
                pricePerNight: 120,
                amountAdult: 2,
                amountChild: 1,
                status: "Còn trống",
                typeOfRoom: "Phòng Standard",
                createDate: "2025-02-25",
                modifiedDate: "2025-02-25",
                description: "Phòng Deluxe Ocean View tại khách sạn của chúng tôi có diện tích 30m2, được thiết kế hiện đại và sang trọng, với ban công nhìn ra biển xanh mát.Phòng có đầy đủ tiện nghi, phù hợp cho cặp đôi hoặc gia đình nhỏ.",
                services: [
                    { id: 1, name: "Wi-Fi miễn phí", icon: "bx bx-wifi" },
                    { id: 2, name: "Bể bơi", icon: "bx bx-water" },
                    { id: 3, name: "Bữa sáng miễn phí", icon: "bx bx-baguette" },
                ],

                images: [
                    "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                    "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                    "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                    "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                    "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                    "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
                ],
                features: [
                    { id: 1, name: "Diện tích 30m²" },
                    { id: 2, name: "Ban công hướng biển" },
                    { id: 3, name: "TV màn hình phẳng 42 inch" },
                    { id: 4, name: "Giường King-size" },
                    { id: 5, name: "Điều hòa không khí" },
                    { id: 6, name: "Phòng tắm riêng với bồn tắm" },
                    { id: 7, name: "Két sắt an toàn" },
                    { id: 8, name: "Minibar" }
                ],
            },
            mainImage: '',
            showLightbox: false,
            selectedImageIndex: 0,
        };
    },
    methods: {
        formatDate,
        getAvailabilityClass(status) {
            return status === "Còn trống" ? "bg-primary text-white" : "bg-danger text-white";
        },
        openLightbox(index) {
            this.selectedImageIndex = index;
            this.showLightbox = true;
        }
    },
    created() {
        this.mainImage = this.entry.images[0];
    }
};
</script>

<style scoped>
.card-container {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.card {
    border-radius: 12px;
}

.service-icon {
    width: 24px;
    height: 24px;
}

.image-cover {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.image-cover-more {
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
    position: absolute;
    height: 150px;
}

.text-primary {
    color: var(--primary-color) !important;
}



.service-icon {
    font-size: 1.5rem;
    margin-right: 8px;
}

.service-card {
    border: 1px solid #ddd;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 8px 16px;
}

.service-card:hover {
    background: linear-gradient(285deg, #e3f2fd, #ffffff);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.b-tabs {
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
}
</style>