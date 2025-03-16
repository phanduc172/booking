<template>
    <div class="card-container">
        <form-header @refresh="refreshEntry" @save="updateEntry" title="Update service" @back="$router.push({ name: 'service.list' })" />
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
    name: "StaffUpdate",
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
        }
    },
    methods: {
        ...mapActions('service', ['GetService', 'UpdateService']),
        async getEntry() {
            const response = await this.GetService(this.$route.params.id);
            if (response.code === 200) {
                this.entry = response.data;
                console.log("🚀 ~ getEntry ~ this.entry:", this.entry)
            }
        },
        validateEntry() {
            const requiredFields = [
                { field: "name", message: "Name is required" },
                { field: "position", message: "Position is required" },
                { field: "phone", message: "Phone is required" },
                // { field: "shift", message: "Shift is required" },
                { field: "salary", message: "Salary is required" },
                { field: "hire_date", message: "Hire date is required" },
                { field: "status", message: "Status is required" },
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
        async updateEntry() {
            if (!this.validateEntry()) return;
            const result = await this.$swal.fire({
                title: "Update this customer?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Update",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            });
            if (result.isConfirmed) {
                try {
                    let body = {
                        ...this.entry,
                    }
                    let response = await this.UpdateService(body);
                    if (response.code === 200) {
                        await this.$swal.fire({
                            title: "Updated successfully!",
                            text: "Customer information has been updated.",
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                        this.$router.push({ name: "staff.list" });
                    } else {
                        throw new Error(response.message || "Update failed.");
                    }
                } catch (error) {
                    this.$swal.fire({
                        title: "Error!",
                        text: error.message || "Unable to connect to server.",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            }
        },
        refreshEntry() {
        },

    },
    created() {
        this.getEntry();
    },
};
</script>

<style scoped>
.card-container {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.input-group label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
}

.input-group input,
.input-group select,
.input-group textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
    border-color: #007bff;
    outline: none;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.form-control:focus,
.form-select:focus {
    border-color: #ddd !important;
    box-shadow: none !important;
}

.text-primary {
    color: var(--primary-color) !important;
}

.btn-primary {
    background: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
}
</style>
