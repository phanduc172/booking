<template>
    <div class="card shadow-lg rounded-3 p-4 w-100">
        <div class="row align-items-center ">
            <div class="col-12 col-md-4 text-center">
                <div class="d-flex flex-column ">
                    <div class="position-relative">
                        <img src="@/assets/images/default.jpg" alt="Avatar" class="profile-image mb-3">
                    </div>
                    <h2 class="fw-bold">{{ entry.name }}</h2>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <div class="mt-3">
                    <customer-name v-model="entry" :readonly="!isEditing" @update="(e) => (entry = e)" />
                    <customer-phone v-model="entry" :readonly="!isEditing" @update="(e) => (entry = e)" />
                    <customer-email v-model="entry" :readonly="!isEditing" @update="(e) => (entry = e)" />
                    <customer-country v-model="entry" :readonly="!isEditing" @update="(e) => (entry = e)" />
                    <customer-passport v-model="entry" :readonly="!isEditing" @update="(e) => (entry = e)" />
                </div>

                <div class="mt-4 text-end">
                    <button v-if="!isEditing" class="btn btn-primary px-4" @click="editMode">
                        <i class="bi bi-pencil-square"></i> Edit
                    </button>
                    <div v-else>
                        <button class="btn btn-primary me-2 px-4" @click="updateEntry">
                            <i class="bi bi-check-circle"></i> Save
                        </button>
                        <button class="btn btn-secondary px-4" @click="cancelEdit">
                            <i class="bi bi-x-circle"></i> Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CustomerName from '../customer/partials/customer-name.vue';
import CustomerPhone from '../customer/partials/customer-phone.vue';
import CustomerEmail from '../customer/partials/customer-email.vue';
import CustomerCountry from '../customer/partials/customer-country.vue';
import CustomerPassport from '../customer/partials/customer-passport.vue';

export default {
    name: "UserProfile",
    components: {
        CustomerName,
        CustomerPhone,
        CustomerEmail,
        CustomerCountry,
        CustomerPassport,
    },
    data() {
        return {
            entry: {
                name: "",
                phone: "",
                email: "",
                country: "",
                passport: ""
            },
            isEditing: false,
            backupEntry: {}
        };
    },
    methods: {
        ...mapActions('customer', ['GetCustomer', 'UpdateCustomer']),

        async getEntry() {
            let user = JSON.parse(localStorage.getItem("user"));
            const response = await this.GetCustomer(user.id);
            if (response.code === 200) {
                this.entry = response.data;
            }
        },
        validateEntry() {
            const requiredFields = [
                { field: "name", message: "Name is required" },
                { field: "phone", message: "Phone number is required" },
                { field: "email", message: "Email is required" },
                { field: "country", message: "Country is required" },
                { field: "passport", message: "Passport number is required" },
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
                    let user = JSON.parse(localStorage.getItem("user"));
                    console.log("🚀 ~ updateEntry ~ user:", user.id)
                    let response = await this.UpdateCustomer(this.entry);
                    console.log("🚀 ~ updateEntry ~ response:", response)
                    if (response.code === 200) {
                        await this.$swal.fire({
                            title: "Updated successfully!",
                            text: "Customer information has been updated.",
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                        this.$router.push({ name: "customer.list" });
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
        editMode() {
            this.isEditing = true;
            this.backupEntry = { ...this.entry }; // Lưu lại dữ liệu cũ
        },
        cancelEdit() {
            this.entry = { ...this.backupEntry }; // Khôi phục dữ liệu cũ
            this.isEditing = false;
        }
    },
    created() {
        this.getEntry();
    }
};
</script>

<style>
.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #f8f9fa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.btn-primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background-color: #199492;
    border-color: #199492;
}
</style>
