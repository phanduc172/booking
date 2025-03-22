<template>
  <div class="card-container shadow-lg">
    <form-header :saveAble="false" @refresh="refreshEntry" @save="updateEntry" title="Booking Details"
      @back="$router.push({ name: 'booking.list' })" />

    <div class="card-body">
      <div v-if="booking">
        <div class="row">
          <div class="col-md-6">
            <h5 class="text-primary fw-bold"><i class="bi bi-person-circle"></i> Customer Information</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Name:</strong> {{ booking.customer.name }}</li>
              <li class="list-group-item"><strong>Phone:</strong> {{ booking.customer.phone }}</li>
              <li class="list-group-item"><strong>Email:</strong> {{ booking.customer.email }}</li>
            </ul>
          </div>

          <div class="col-md-6">
            <h5 class="text-primary fw-bold"><i class="bi bi-building"></i> Room Information</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Room:</strong> {{ booking.room.room_number }} - {{
                booking.room.room_type }}</li>
              <li class="list-group-item"><strong>View:</strong> {{ booking.room.view }}</li>
              <li class="list-group-item"><strong>Capacity:</strong> {{ booking.room.capacity }} people</li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-md-6">
            <h5 class="text-primary fw-bold"><i class="bi bi-calendar-check"></i> Booking Details</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Check-in:</strong> {{ formatDate(booking.check_in) }}</li>
              <li class="list-group-item"><strong>Check-out:</strong> {{ formatDate(booking.check_out) }}</li>
              <li class="list-group-item"><strong>Payment Method:</strong> {{ booking.payment_method }}</li>
            </ul>
          </div>

          <div class="col-md-6">
            <h5 class="text-primary fw-bold"><i class="bi bi-cash-stack"></i> Total Price</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Price:</strong> {{ booking.total_price }}$</li>
              <li class="list-group-item">
                <strong>Discount:</strong> {{ booking.discount.amount }}
                {{ booking.discount.type === "percent" ? "%" : "$" }}
              </li>
              <li class="list-group-item">
                <strong>Status:</strong>
                <span :class="getStatusClass(booking.status)" class="badge ms-2">
                  {{ booking.status }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-muted mt-4">
        <p>
          <i class="bi bi-exclamation-circle-fill"></i> Booking information not found.
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import FormHeader from "@/components/form/form-header.vue";
import { formatDate } from "@/core/utils";

export default {
  name: "BookingDetail",
  components: {
    FormHeader,
  },
  data() {
    return {
      booking: {
        booking_id: "B001",
        customer: {
          name: "Nguyen Van A",
          phone: "0987654321",
          email: "nguyenvana@example.com",
        },
        room: {
          room_number: "A101",
          room_type: "Deluxe Room",
          view: "Biển",
          capacity: 2,
        },
        check_in: "2025-02-01T14:00:00Z",
        check_out: "2025-02-05T12:00:00Z",
        total_price: 432,
        discount: { amount: 10, type: "percent" },
        status: "Confirmed",
        payment_method: "Credit Card",
      },
    };
  },
  methods: {
    formatDate,
    getStatusClass(status) {
      switch (status) {
        case "Confirmed":
          return "bg-success text-white";
        case "Cancelled":
          return "bg-danger text-white";
        case "Pending":
          return "bg-warning text-dark";
        default:
          return "bg-secondary text-white";
      }
    },
  },
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
