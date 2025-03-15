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
        '$route.query.end': {
            handler() {
                this.getData();
            },
        }
    },
    methods: {
        ...mapActions('introduce', ['GetListRoomSearch']),
        async getData() {
            const response = await this.GetListRoomSearch(this.$route.query);
            if (response.code === 200) {
                this.rooms = response.data.filter((entry) => entry.status === 1)
            }
        }
    },
    created() {
        // this.getData();
    }
}
</script>

<style></style>