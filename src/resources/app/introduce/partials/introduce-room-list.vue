<template>
    <div>
        <div v-if="this.entries.length === 0">
        </div>
        <div v-else>
            <div v-if="this.entries.length === 0"
                class="d-flex flex-column justify-content-between align-items-center p-4">
                <h5 class="text-center my-4">List of available rooms</h5>
                <img :src="require('@/assets/images/icon_empty.png')" alt="" width="250" height="250">
                <span class="fw-bold fs-5 text-muted">Không có dữ liệu</span>
            </div>
            <div v-else class="container">
                <h5 class="text-center my-4">List of available rooms</h5>
                <b-row>
                    <b-col v-for="room in entries" :key="room.id" cols="12" sm="6" md="4" lg="3">
                        <b-card class="shadow-sm cursor-pointer mb-4" @click="bookingRoom(room.id)">
                            <b-img class="p-0" fluid
                                :src="room.image"
                                fluid-grow alt="Image"></b-img>
                            <div class="px-3 py-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h6 class="my-2">{{ room.name }}</h6>
                                    <span class="fs-5 fw-bold text-danger my-2"> ${{ room.price_per_night }}</span>
                                </div>
                                <b-card-text>
                                    <h6>{{ room.roomType?.name }}</h6>
                                </b-card-text>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    name: "IntroduceRoomList",
    computed: {
        ...mapGetters("introduce", ["getRoomAvailable"]),
    },
    data() {
        return {
            entries: []
        };
    },
    watch: {
        getRoomAvailable: {
            handler(newVal) {
                this.entries = newVal
            }
        },
    },
    methods: {
        bookingRoom(id) {
            this.$router.push({ name: "introduce.bookingroom", params: { id } });
        }
    }
};
</script>

<style scoped>
.card {
    width: auto;
    min-height: auto;
}

.card-body {
    padding: 0;
}

.btn-primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background-color: #199492;
    border-color: #199492;
}

.cursor-pointer {
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.icon_utilities {
    width: 20px;
    height: 20px;
    margin-right: 8px;
}

.min-vh-50 {
    min-height: 50vh;
}
</style>