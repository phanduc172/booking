<template>
        <div class="card shadow-lg rounded-3 p-4 w-100">
            <h3 class="text-center text-muted fw-bold">Information</h3>
            <div class="row">
                <div class="col-12 col-sm-4">
                    <div class="d-flex flex-column justify-content-center align-items-center vh-25">
                        <img src="@/assets/images/default.jpg" alt="Avt" class="profile-image">
                        <h2 class="mt-3">{{ entry.name }}</h2>
                    </div>
                </div>
                <div class="col-12 col-sm-8">
                    <div class="mt-4">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between">
                                <strong>Phone:</strong> {{ entry.phone }}
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <strong>Email:</strong> {{ entry.email }}
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <strong>Country:</strong> {{ entry.country }}
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <strong>Passport:</strong> {{ entry.passport }}
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <strong>Role:</strong> {{ entry.role }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { formatDate } from "@/core/utils";

export default {
    name: "UserProfile",
    data() {
        return {
            entry: {}
        };
    },
    methods: {
        ...mapActions('customer', ['GetCustomer']),
        formatDate,
        async getEntry() {
            let user = JSON.parse(localStorage.getItem("user"));
            const response = await this.GetCustomer(user.id);
            if (response.code === 200) {
                this.entry = response.data
            }
        }

    },
    created() {
        this.getEntry()
    }
};
</script>

<style>
.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>
