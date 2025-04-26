<template>
    <div class="card-container shadow-lg">
        <form-header title="Booking Details" :saveAble="false" :confirmAble="isConfirm" @confirm="confirmBooking"
            @cancel="cancelBooking" @back="$router.push({ name: 'booking.list' })" />
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="text-primary fw-bold"><i class="bi bi-person-circle"></i> Customer Information</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Name:</strong> {{ entry.customer.name }}</li>
                        <li class="list-group-item"><strong>Phone:</strong> {{ entry.customer.phone }}</li>
                        <li class="list-group-item"><strong>Email:</strong> {{ entry.customer.email }}</li>
                    </ul>
                </div>

                <div class="col-md-6">
                    <h5 class="text-primary fw-bold"><i class="bi bi-building"></i> Room Information</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Room:</strong> {{ entry.room.name }} </li>
                        <li class="list-group-item"><strong>Price per night:</strong> {{ entry.room.price_per_night }}$
                        </li>
                        <li class="list-group-item"><strong>Capacity:</strong>
                            {{ entry.room.amount_adult }} person | {{ entry.room.amount_child }} children
                        </li>
                    </ul>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col-md-6">
                    <h5 class="text-primary fw-bold"><i class="bi bi-calendar-check"></i> Booking Details</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Check-in:</strong> {{ formatDate(entry.check_in) }} </li>
                        <li class="list-group-item"><strong>Check-out:</strong> {{ formatDate(entry.check_out) }}
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-start align-content-center">
                                <strong class="mt-1">Payment Method:</strong>
                                <select class="form-select w-50 ms-2" aria-label="Select payment method">
                                    <option selected disabled>Select payment method</option>
                                    <option value="credit_card">Credit Card</option>
                                    <option value="bank_transfer">Bank Transfer</option>
                                    <option value="cash">Cash</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="col-md-6">
                    <h5 class="text-primary fw-bold"><i class="bi bi-cash-stack"></i> Total Price</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Price:</strong> {{ entry.total_price }}$</li>
                        <li class="list-group-item">
                            <strong>Discount:</strong>
                            {{ entry.discount ? entry.discount + "%" : "0" }}
                        </li>
                        <li class="list-group-item">
                            <strong>Status:</strong>
                            {{ entry.status }}
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="this.entry.status === 'Confirmed'" class=" d-flex justify-content-end">
                <button class="btn btn-danger" @click="confirmCheckout">
                    Check-out Confirmation
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import FormHeader from '@/components/form/form-header.vue';
import { formatDate } from '@/core/utils';
import { mapActions } from 'vuex';


export default {
    name: "BookingDetail",
    data() {
        return {
            entry: {},
            isConfirm: true,
        };
    },
    components: {
        FormHeader
    },
    methods: {
        ...mapActions('booking', ['GetBooking', 'UpdateStatusBooking']),
        ...mapActions('room', ['UpdateRoomStatus']),
        formatDate,
        async getEntry() {
            const response = await this.GetBooking(this.$route.params.id);
            if (response.code === 200) {
                this.entry = response.data
                this.isConfirm = !["Confirmed", "Canceled"].includes(this.entry.status);
            }
        },
        async confirmBooking() {
            const id = this.$route.params.id;
            const response = await this.UpdateStatusBooking({ id: id, status: "Confirmed" });
            let room_id = response.data.room_id
            if (response.code === 200) {
                await this.UpdateRoomStatus({ id: room_id, status: 3 })
                this.$swal.fire({
                    icon: "success",
                    title: "Confirmed successfully!",
                    text: "The booking status has been updated.",
                    confirmButtonText: "OK"
                });
            }
            this.$router.push({ name: "booking.list" });
        },
        async cancelBooking() {
            const id = this.$route.params.id;
            const response = await this.UpdateStatusBooking({ id: id, status: "Canceled" });
            let room_id = response.data.room_id
            if (response.code === 200) {
                await this.UpdateRoomStatus({ id: room_id, status: 1 })
                this.$swal.fire({
                    icon: "success",
                    title: "Cancel successfully!",
                    text: "The booking status has been updated.",
                    confirmButtonText: "OK"
                });
            }
            this.$router.push({ name: "booking.list" });
        },
        async confirmCheckout() {
            const result = await this.$swal.fire({
                title: "Confirm Check-out?",
                text: "Are you sure you want to complete this booking?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, confirm!",
                cancelButtonText: "Cancel",
            });

            if (result.isConfirmed) {
                const id = this.$route.params.id;
                const response = await this.UpdateStatusBooking({ id: id, status: "Completed" });
                if (response.code === 200) {
                    let room_id = response.data.room_id
                    await this.UpdateRoomStatus({ id: room_id, status: 1 })
                }
                this.$swal.fire("Success!", "Booking status has been updated.", "success");
                this.$router.push({ name: "booking.list" });
            }
        }
    },
    created() {
        this.getEntry();
    }
};
</script>
<style scoped>
.card-container {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.card-container:hover {
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15);
}

.text-primary {
    color: var(--primary-color) !important
}

.list-group-item {
    background: transparent;
    border: none;
    padding: 8px 0;
    margin-left: 16px;
}

.badge {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 12px;
}
</style>
