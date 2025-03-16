<template>
    <div class="card-container rounded-3 bg-white p-4">
        <form-header @refresh="refreshEntry" @save="createEntry" title="Add new room" @back="$router.push({ name: 'room.list' })" />

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


export default {
    name: "BookingCreate",
    components: {
        FormHeader,
    },
    data() {
        return {
            entry: {},
        };
    },
    methods: {
        ...mapActions('booking', [""]),

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
