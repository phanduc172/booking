<template>
    <div>
        <introduce-casousel />
        <introduce-room-list />
        <introduce-content />
        <introduce-image-highlight />
        <Footer />
    </div>
</template>

<script>
import IntroduceCasousel from './partials/introduce-casousel.vue';
import IntroduceContent from './partials/introduce-content.vue';
import IntroduceImageHighlight from './partials/introduce-image-highlight.vue';
import IntroduceRoomList from './partials/introduce-room-list.vue';
import Footer from '@/components/footer.vue'

export default {
    name: "IntroduceList",
    components: {
        IntroduceCasousel,
        IntroduceContent,
        IntroduceImageHighlight,
        IntroduceRoomList,
        Footer,
    },
}
</script>

<style></style>