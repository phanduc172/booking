<template>
    <div class="card-container rounded-3 bg-white p-4">
        <form-header @refresh="refreshEntry" @save="createEntry" title="Add new service" @back="$router.push({ name: 'service.list' })" />

        <div class="card-body">
            <div class="row g-3">
                <div class="col-6">
                    <service-name v-model="entry" />
                </div>
                <div class="col-6">
                    <service-icon v-model="entry" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import FormHeader from "@/components/form/form-header.vue";
import ServiceName from "./partials/service-name.vue";
import ServiceIcon from "./partials/service-icon.vue";

export default {
    name: "RoomCreate",
    components: {
        FormHeader,
        ServiceName,
        ServiceIcon
    },
    data() {
        return {
            entry: {
                name: "",
                icon: "",
            },
        };
    },
    methods: {
        ...mapActions('service', ["CreateService"]),
        validateEntry() {
            const requiredFields = [
                { field: "name", message: "Name is required" },
                { field: "icon", message: "Icon is required" },
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
                title: "Do you want to create this service?",
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
                    const response = await this.CreateService(body);
                    if (response.code === 201) {
                        await this.$swal.fire({
                            title: "Successfully created!",
                            text: "The service has been added to the list.",
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                        this.$router.push({ name: "service.list" });
                    } else {
                        throw new Error("Failed to create the service!");
                    }
                } catch (error) {
                    this.$swal.fire({
                        title: "Error!",
                        text: "Unable to create the service. Please try again!",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            }
        },
        refreshEntry() {
            this.entry = {
                name: "",
                position: "",
                email: "",
                phone: "",
                shift: "",
                salary: 0,
                hire_date: "",
                status: "",
            };
        },
    },
    created() {
    }
};
</script>
