<template>
    <div class="home-carousel position-relative">
        <div class="home-content z-3 w-100">
            <h1 class="fs-text fw-bold text-white text-center text-shadow mb-4 mb-lg-0">HOTEL LAGUNA</h1>
            <p class="text-content text-white m-auto my-4 text-shadow d-none d-sm-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit iusto voluptates animi ad
                maiores, nisi, quibusdam suscipit eveniet tempora voluptatem.
            </p>
            <introduce-search-room/>
        </div>

        <div class="swiper-container">
            <swiper :loop="true" :pagination="{ clickable: true }"
                :autoplay="{ delay: 3000, disableOnInteraction: false }">
                <swiper-slide v-for="(item, index) in images" :key="index">
                    <img :src="getImageUrl(index)" class="slide-image">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Navigation, Pagination, Autoplay } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'
import IntroduceSearchRoom from './introduce-search-room.vue'


SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
    components: {
        Swiper,
        SwiperSlide,
        IntroduceSearchRoom
    },
    data() {
        return {
            images: [
                {
                    src: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2Fbt-langco-Banyan%20Tree%20Lang%20Co%20-%20Beach.jpg&w=1920&q=75",
                    alt: "Image 1",
                },
                {
                    src: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Four-brand-culture.jpg&w=1920&q=75",
                    alt: "Image 2",
                },
                {
                    src: "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2023-07%2F4.%20Offers%20(1).jpg&w=1920&q=75",
                    alt: "Image 3",
                },
            ],
        }
    },
    methods: {
        getImageUrl(index) {
            return this.images[index]?.src;
        },
    }
}
</script>

<style scoped>
.home-carousel {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.home-content {
    position: absolute;
    top: 25vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
    z-index: 2;
}

.text-shadow {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.text-content {
    max-width: 900px;
    text-align: center;
}

/* Đảm bảo ảnh chiếm toàn bộ vùng hiển thị */
.slide-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: block;
}

/* Đặt swiper container để pagination căn đúng */
.swiper-container {
    position: relative;
}

/* Pagination luôn nằm dưới ảnh */
.swiper-pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 10;
}

@media screen and (max-width: 479.98px) {
    .slide-image {
        height: 60vh;
    }

    .home-carousel {
        height: 60vh;
    }

    .home-content {
        top: 7vh;
    }
}

@media screen and (min-width: 480px) and (max-width: 1023.98px) {
    .home-carousel {
        height: 50vh;
    }

    .slide-image {
        height: 50vh;
    }

    .home-content {
        top: 10vh;
    }
}
</style>
