<template>
    <div class="card-container rounded-3 bg-white p-4">
        <form-header :confirmAble="false" @refresh="refreshEntry" @save="createEntry" title="Add new facility"
            @back="$router.push({ name: 'facility.list' })" />

        <div class="card-body">
            <div class="row g-3">
                <div class="col-6">
                    <facility-name v-model="entry" />
                </div>
                <div class="col-6">
                    <facility-icon v-model="entry" />
                </div>
                <div class="col-12">
                    <facility-description v-model="entry" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import FormHeader from "@/components/form/form-header.vue";
import FacilityName from "./partials/facility-name.vue";
import FacilityIcon from "./partials/facility-icon.vue";
import FacilityDescription from "./partials/facility-description.vue";

export default {
    name: "RoomCreate",
    components: {
        FormHeader,
        FacilityIcon,
        FacilityName,
        FacilityDescription
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
        ...mapActions('facility', ['CreateFacility',]),
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
                title: "Do you want to create this facility?",
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
                    const response = await this.CreateFacility(body);
                    if (response.code === 201) {
                        await this.$swal.fire({
                            title: "Successfully created!",
                            text: "The facility has been added to the list.",
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                        this.$router.push({ name: "facility.list" });
                    } else {
                        throw new Error("Failed to create the facility!");
                    }
                } catch (error) {
                    this.$swal.fire({
                        title: "Error!",
                        text: "Unable to create the facility. Please try again!",
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
