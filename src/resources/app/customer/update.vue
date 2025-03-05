<template>
  <div class="card-container rounded-3 bg-white p-4">
    <form-header
      @refresh="refreshEntry"
      @save="updateEntry"
      title="Cập nhật khách hàng"
      @back="$router.back()"
    />

    <div class="card-body">
      <form @submit.prevent="updateEntry">
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
      </form>
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
        customer_id: "1",
        name: "Nguyen Van A",
        phone: "0383181115",
        email: "phanduc@gmail.com",
        country: "Viet Nam",
        passport: "132346456",
      },
    };
  },
  methods: {
    refreshEntry() {
      this.entry = {};
    },
    updateEntry() {},
  },
};
</script>
