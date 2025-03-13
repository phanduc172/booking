<template>
    <div>
        <introduce-casousel />
        <introduce-room-list :value="rooms" />
        <introduce-content />
        <introduce-image-highlight />
        <Footer />
    </div>
</template>

<script>
import IntroduceCasousel from './partials/introduce-casousel.vue';
import IntroduceContent from './partials/introduce-content.vue';
import IntroduceImageHighlight from './partials/introduce-image-highlight.vue';
import IntroduceSearchRoom from './partials/introduce-search-room.vue';
import IntroduceRoomList from './partials/introduce-room-list.vue';
import Footer from '@/components/footer.vue'
import { mapActions } from 'vuex';

export default {
    name: "IntroduceList",
    components: {
        IntroduceCasousel,
        IntroduceContent,
        IntroduceImageHighlight,
        IntroduceSearchRoom,
        IntroduceRoomList,
        Footer,
    },
    data() {
        return {
            rooms: []
        }
    },
    watch: {

    },
    methods: {
        ...mapActions('introduce', ['GetListRoomSearch']),
        async getData() {
            const response = await this.GetListRoomSearch();
            if (response.code === 200) {
                this.rooms = response.data
            }
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style></style>