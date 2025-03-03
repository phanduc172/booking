<template>
    <div class="home-carousel position-relative">
        <div class="home-content z-3 w-100">
            <h1 class="fs-text fw-bold text-white text-center text-shadow ">HOTEL LAGUNA</h1>
            <p class="text-content text-white m-auto my-4 text-shadow">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Blanditiis impedit iusto voluptates animi ad
                maiores, nisi, quibusdam suscipit eveniet tempora voluptatem. Exercitationem quisquam dolor doloribus
                architecto magni fuga aliquam, enim tempora quas, aut aspernatur perferendis facere nobis vitae minus
                sint maiores facilis ratione nisi cum eum accusamus incidunt? Incidunt, eius.</p>
            <introduce-find-room />

        </div>

        <carousel :per-page="1" :autoplay="true" :loop="true" :pagination-enabled="true">
            <slide v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.alt" loading="eager">
            </slide>
        </carousel>
    </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
import IntroduceFindRoom from './introduce-find-room.vue';


export default {
    name: 'IntroduceCarousel',
    components: {
        Carousel,
        Slide,
        IntroduceFindRoom
    },
    data() {
        return {
            images: [
                { src: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2025-02%2Fbt-langco-Banyan%20Tree%20Lang%20Co%20-%20Beach.jpg&w=1920&q=75', alt: 'Image 1' },
                { src: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Four-brand-culture.jpg&w=1920&q=75', alt: 'Image 2' },
                { src: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2023-07%2F4.%20Offers%20(1).jpg&w=1920&q=75', alt: 'Image 3' }
            ]
        };
    }
};

</script>

<style scoped>
.home-carousel {
    height: 100vh;
    position: relative;
}
.home-content {
    position: absolute;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
}
.text-shadow {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.text-content {
    max-width: 900px;
    text-align: center;
}

.VueCarousel {
    width: 100%;
    height: 100%;
}

.VueCarousel .VueCarousel-inner {
    width: 100%;
    height: 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
}

::v-deep(.VueCarousel-pagination) {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    padding: 5px 10px;
    border-radius: 20px;
}

::v-deep(.VueCarousel-dot) {
    background-color: rgb(196, 196, 196) !important;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    opacity: 0.8;
}

::v-deep(.VueCarousel-dot--active) {
    background-color: rgb(255, 255, 255) !important;
    opacity: 1;
}


</style>
