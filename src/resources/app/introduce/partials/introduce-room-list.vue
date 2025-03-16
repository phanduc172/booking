<template>
    <div v-if="this.entries.length > 0" class="container my-4">
        <h5 class="text-center mb-4">List of available rooms</h5>
        <b-row>
            <b-col v-for="room in entries" :key="room.id" cols="12" sm="6" md="4" lg="3">
                <b-card class="shadow-sm cursor-pointer mb-4" @click="bookingRoom(room.id)">
                    <b-img class="p-0" fluid
                        src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"
                        fluid-grow alt="Image"></b-img>
                    <div class="px-3 py-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="my-2">{{ room.name }}</h6>
                            <span class="fs-5 fw-bold text-danger my-2"> ${{ room.price_per_night }}</span>
                        </div>
                        <b-card-text>
                            <h6>{{ room.roomType?.name }}</h6>
                        </b-card-text>
                        <b-list-group flush v-if="room.facilities && room.facilities.length">
                            <b-col v-for="service in room.facilities.slice(0, 2)" :key="service.id">
                                <i :class="service.icon" class="icon_utilities"></i> {{ service.name }}
                            </b-col>
                        </b-list-group>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "IntroduceRoomList",
    data() {
        return {
            entries: []
        };
    },
    watch: {
        value(newVal) {
            this.entries = newVal
        },
        '$route.query.check_out': {
            handler() {
                this.getData();
            },
        }
    },
    methods: {
        ...mapActions('introduce', ['GetRoomAvailble']),
        async getData() {
            const response = await this.GetRoomAvailble(this.$route.query);
            if (response.code === 200) {
                this.entries = response.data.filter((entry) => entry.status === 1)
            }
        },
        bookingRoom(id) {
            this.$router.push({ name: "introduce.bookingroom", params: { id } });
        }
    },
};
</script>

<style scoped>
.card {
    width: auto;
    min-height: 350px;
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
</style>