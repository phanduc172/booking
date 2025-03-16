<template>
    <div class="card-container shadow-lg">
        <form-header :saveAble="false" @refresh="refreshEntry" @save="updateEntry" title="Booking Details"
            @back="$router.push({ name: 'booking.list' })" />

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
                        <li class="list-group-item"><strong>Price:</strong> {{ entry.room.price_per_night }}$</li>
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
                        <li class="list-group-item"><strong>Payment Method:</strong> {{ entry.payment_method }}
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
                            {{ entry.roomStatus.status_name }}
                        </li>
                    </ul>
                </div>
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
            entry: {}
        };
    },
    components: {
        FormHeader
    },
    methods: {
        ...mapActions('booking', ['GetBooking']),
        formatDate,
        async getEntry() {
            const response = await this.GetBooking(this.$route.params.id);
            if (response.code === 200) {
                this.entry = response.data
            }
        },
        refreshEntry() { },
        updateEntry() { }
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
