<template>
    <div class="card-container rounded-3 bg-white p-4">
        <form-header :confirmAble="false" @refresh="refreshEntry" @save="createEntry" title="Add new customer"
            @back="$router.push({ name: 'customer.list' })" />
        <div class="card-body">
            <div class="row g-3">
                <div class="col-12">
                    <customer-name v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <customer-phone v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <customer-email v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <customer-country v-model="entry" />
                </div>
                <div class="col-12 col-md-6">
                    <customer-passport v-model="entry" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormHeader from "@/components/form/form-header.vue";
import CustomerName from "./partials/customer-name.vue";
import CustomerPhone from "./partials/customer-phone.vue";
import CustomerEmail from "./partials/customer-email.vue";
import CustomerCountry from "./partials/customer-country.vue";
import CustomerPassport from "./partials/customer-passport.vue";
import { mapActions } from "vuex";

export default {
    name: "CustomerUpdate",
    components: {
        FormHeader,
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
        };
    },
    methods: {
        ...mapActions('customer', ["CreateCustomer"]),
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
        async createEntry() {
            if (!this.validateEntry()) return;
            const result = await this.$swal.fire({
                title: "Do you want to create this customer?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Create",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            });

            if (result.isConfirmed) {
                try {
                    const response = await this.CreateCustomer(this.entry);
                    if (response.code === 201) {
                        await this.$swal.fire({
                            title: "Successfully created!",
                            text: "The customer has been added to the list.",
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                        this.$router.push({ name: "customer.list" });
                    } else {
                        throw new Error("Failed to create the customer!");
                    }
                } catch (error) {
                    this.$swal.fire({
                        title: "Error!",
                        text: "Unable to create the customer. Please try again!",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            }
        },
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
};
</script>
