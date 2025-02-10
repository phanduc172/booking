<template>
    <!-- <carousel :per-page="1" :autoplay="true" :loop="true" :pagination-enabled="true">
        <slide v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt" loading="eager">
        </slide>
    </carousel> -->
    <div></div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'HomeCarousel',
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            images: [
                { src: 'https://picsum.photos/800/400?random=1', alt: 'Image 1' },
                { src: 'https://picsum.photos/800/400?random=2', alt: 'Image 2' },
                { src: 'https://picsum.photos/800/400?random=3', alt: 'Image 3' }
            ]
        };
    }
};

</script>


<style scoped>

.VueCarousel {
    margin-top: 76px;    
    height: 90vh;
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

img {
    width: 100%;
}
</style>
