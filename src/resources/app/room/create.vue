<template>
    <div class="card-container rounded-3 bg-white p-4">
        <form-header @refresh="refreshEntry" @save="createEntry" title="Add new room" @back="$router.back()" />

        <div class="card-body">
            <div class="row g-3">
                <div class="col-12 col-md-6">
                    <room-name v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <room-type v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <room-capacity v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <room-price v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <room-availability v-model="entry" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import FormHeader from "@/components/form/form-header.vue";
import RoomName from "./partials/room-name.vue";
import RoomType from "./partials/room-type.vue";
import RoomCapacity from "./partials/room-capacity.vue";
import RoomPrice from "./partials/room-price.vue";
import RoomAvailability from "./partials/room-availability.vue";
import RoomService from "./partials/room-service.vue";

export default {
    name: "RoomCreate",
    components: {
        FormHeader,
        RoomName,
        RoomType,
        RoomCapacity,
        RoomPrice,
        RoomAvailability,
        RoomService,
    },
    data() {
        return {
            entry: {
                name: "",
                price_per_night: "",
                amount_adult: "",
                amount_child: "",
                status: "",
                type_of_room_id: "",
            },
        };
    },
    methods: {
        ...mapActions('room', ["CreateRoom"]),
        ...mapActions('roomType', ["GetListRoomType"]),
        validateEntry() {
            const requiredFields = [
                { field: "name", message: "Name is required" },
                { field: "price_per_night", message: "Price per night is required" },
                { field: "amount_adult", message: "Amount adult is required" },
                { field: "amount_child", message: "Amount child is required" },
                { field: "status", message: "Status is required" },
                { field: "type_of_room_id", message: "Room type is required" },
            ];

            for (const { field, message } of requiredFields) {
                if (!this.entry[field]) {
                    this.$swal.fire({
                        icon: "error",
                        title: message,
                    });
                    return false;
                }
            }
            return true;
        },
        async createEntry() {
            if (!this.validateEntry()) return;
            const result = await this.$swal.fire({
                title: "Do you want to create this room?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Create",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            });

            if (result.isConfirmed) {
                try {
                    let body = {
                        ...this.entry,
                    }
                    const response = await this.CreateRoom(body);
                    if (response.code === 201) {
                        await this.$swal.fire({
                            title: "Successfully created!",
                            text: "The room has been added to the list.",
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                        this.$router.push({ name: "room.list" });
                    } else {
                        throw new Error("Failed to create the room!");
                    }
                } catch (error) {
                    this.$swal.fire({
                        title: "Error!",
                        text: "Unable to create the room. Please try again!",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            }
        },
        // async getDataRoomType() {
        //     const response = await this.GetListRoomType()
        //     if (response.code === 200) {
        //         this.roomType = response.data
        //     }
        // },
        refreshEntry() {
            this.entry = {
                name: "",
                phone: "",
                email: "",
                country: "",
                passport: ""
            };
        },
    },
    created() {
        // this.getDataRoomType()
    }
};
</script>
