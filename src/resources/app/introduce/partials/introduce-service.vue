<template>
    <div class="container-fluid service-experience">
        <div class="row align-items-center">
            <div class="col-12 col-md-6 px-4 text-center text-md-left">
                <h2 class="title">Service Experience</h2>
                <p class="description">
                    Enjoy international favorites and local specialties in a restaurant lit by bright lights.
                    Capture private moments with your loved one with special venue options for an intimate dinner.
                    <br/>
                    Indulge in a delightful culinary journey where international favorites and local specialties are
                    served in an inviting ambiance. Our restaurant, illuminated by warm and elegant lighting, provides
                    the perfect setting for a memorable dining experience. Savor expertly crafted dishes prepared with
                    fresh, high-quality ingredients, ensuring a burst of flavors in every bite.
                </p>
            </div>
            <div class="col-12 col-md-6">
                <swiper v-if="entries.length > 0" :slides-per-view="3" :space-between="30" :loop="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="swiperOptions.breakpoints"
                    @swiper="onSwiper">
                    <swiper-slide v-for="(item, index) in entries" :key="index">
                        <img :src="item.image" width="600" height="400" class="img-fluid w-100 mx-auto service-img"
                            :alt="item.name" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper-vue2';
import 'swiper/swiper-bundle.css';
import { mapActions } from 'vuex';

export default {
    components: { Swiper, SwiperSlide },
    data() {
        return {
            entries: [],
            swiperOptions: {
                slidesPerView: 3,
                spaceBetween: 15,
                loop: true,
                autoplay: { delay: 3000, disableOnInteraction: false },
                breakpoints: {
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            }

        };
    },
    mounted() {
        window.addEventListener("resize", this.updateSwiper);
        this.$nextTick(() => {
            this.updateSwiper();
        });
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.updateSwiper);
    },
    methods: {
        ...mapActions('service', ['GetListService']),
        async getData() {
            const response = await this.GetListService();
            if (response.code === 200) {
                this.entries = response.data;
                console.log("🚀 ~ getData ~ this.entries:", this.entries);
                this.$nextTick(() => {
                    if (this.swiperInstance) {
                        this.swiperInstance.update();
                    }
                });
            }
        },

        onSwiper(swiper) {
            this.swiperInstance = swiper;
        },
        updateSwiper() {
            if (this.swiperInstance) {
                this.swiperInstance.update();
            } else {
                console.warn("Swiper chưa sẵn sàng!");
            }
        }

    },
    created() {
        this.getData();
    }
};
</script>

<style scoped>
.service-experience {
    padding: 40px 0;
}

.title {
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.description {
    margin: 0 80px;
    font-size: 18px;
    color: #666;
    line-height: 1.6;
    text-align: justify;
}

.card {
    border: none;
    overflow: hidden;
    width: 100%;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service-img {
    height: 280px;
    object-fit: cover;
    border-radius: 10px;
}

.swiper-container {
    width: 100%;
}

.swiper-button-next,
.swiper-button-prev {
    color: var(--primary-color);
}

.swiper-pagination-bullet {
    background: var(--primary-color) !important;
}

@media (max-width: 576px) {
    .service-img {
        height: 150px;
        padding: 0 12px;
        margin-top: 8px;
    }

    .description {
        margin: 0 12px;
    }
}

@media (max-width: 768px) {
    .service-img {
        height: 180px;
    }

    .description {
        margin: 0 12px;
    }
}

@media (max-width: 1024px) {
    .service-img {
        height: 180px;
    }

    .description {
        margin: 0 24px;
    }
}
</style>
