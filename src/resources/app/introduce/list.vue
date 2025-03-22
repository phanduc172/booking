<template>
    <div>
        <introduce-casousel />
        <introduce-room-list />
        <introduce-content />
        <introduce-service />
        <Footer />
    </div>
</template>

<script>
import IntroduceCasousel from './partials/introduce-casousel.vue';
import IntroduceContent from './partials/introduce-content.vue';
import IntroduceRoomList from './partials/introduce-room-list.vue';
import Footer from '@/components/footer.vue'
import IntroduceService from './partials/introduce-service.vue';

export default {
    name: "IntroduceList",
    components: {
        IntroduceCasousel,
        IntroduceContent,
        IntroduceRoomList,
        IntroduceService,
        Footer,
    },
}
</script>

<style></style>