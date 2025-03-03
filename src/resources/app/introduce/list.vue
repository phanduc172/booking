<template>
    <div>
        <introduce-casousel />
        <introduce-search-room />
        <introduce-content />
        <introduce-image-highlight />
        <Footer />
    </div>
</template>

<script>
import IntroduceCasousel from './partials/introduce-casousel.vue';
import IntroduceContent from './partials/introduce-content.vue';
import IntroduceImageHighlight from './partials/introduce-image-highlight.vue';
import IntroduceFindRoom from './partials/introduce-find-room.vue';
import IntroduceSearchRoom from './partials/introduce-search-room.vue';
import Footer from '@/components/footer.vue'

export default {
    name: "IntroduceList",
    components: {
        IntroduceCasousel,
        IntroduceContent,
        IntroduceImageHighlight,
        IntroduceFindRoom,
        IntroduceSearchRoom,
        Footer,
    }
}
</script>

<style></style>