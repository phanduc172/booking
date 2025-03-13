<template>
    <div class="card-container rounded-3 bg-white p-4">
        <form-header @refresh="refreshEntry" @save="createEntry" title="Add new staff" @back="$router.back()" />

        <div class="card-body">
            <div class="row g-3">
                <div class="col-6">
                    <staff-name v-model="entry" />
                </div>
                <div class="col-6">
                    <staff-position v-model="entry" />
                </div>
                <div class="col-6">
                    <staff-email v-model="entry" />
                </div>
                <div class="col-6">
                    <staff-phone v-model="entry" />
                </div>
                <div class="col-6">
                    <staff-shift v-model="entry" />
                </div>
                <div class="col-6">
                    <staff-salary v-model="entry" />
                </div>
                <div class="col-6">
                    <staff-hire-date v-model="entry" />
                </div>
                <div class="col-6">
                    <staff-status v-model="entry" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import FormHeader from "@/components/form/form-header.vue";
import StaffName from "./partials/staff-name.vue";
import StaffPosition from "./partials/staff-position.vue";
import StaffEmail from "./partials/staff-email.vue";
import StaffPhone from "./partials/staff-phone.vue";
import StaffShift from "./partials/staff-shift.vue";
import StaffSalary from "./partials/staff-salary.vue";
import StaffHireDate from "./partials/staff-hire-date.vue";
import StaffStatus from "./partials/staff-status.vue";

export default {
    name: "RoomCreate",
    components: {
        FormHeader,
        StaffName,
        StaffPosition,
        StaffEmail,
        StaffPhone,
        StaffShift,
        StaffSalary,
        StaffHireDate,
        StaffStatus,
    },
    data() {
        return {
            entry: {
                name: "",
                position: "",
                email: "",
                phone: "",
                shift: "",
                salary: 0,
                hire_date: "",
                status: "",
            },
        };
    },
    methods: {
        ...mapActions('staff', ["CreateStaff"]),
        validateEntry() {
            const requiredFields = [
                { field: "name", message: "Name is required" },
                { field: "position", message: "Position is required" },
                { field: "email", message: "Email is required" },
                { field: "phone", message: "Phone is required" },
                { field: "shift", message: "Shift is required" },
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
        async createEntry() {
            if (!this.validateEntry()) return;  
            const result = await this.$swal.fire({
                title: "Do you want to create this staff?",
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
                    const response = await this.CreateStaff(body);
                    if (response.code === 201) {
                        await this.$swal.fire({
                            title: "Successfully created!",
                            text: "The staff has been added to the list.",
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                        this.$router.push({ name: "staff.list" });
                    } else {
                        throw new Error("Failed to create the staff!");
                    }
                } catch (error) {
                    this.$swal.fire({
                        title: "Error!",
                        text: "Unable to create the staff. Please try again!",
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
    createAction() {
        this.$router.push({ name: 'staff.create' })
    },
    created() {
    }
};
</script>
