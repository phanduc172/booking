<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Phone<span class="text-danger">*</span></label>
    <input type="text" class="form-control" placeholder="Please enter a phone" v-model="entry.phone"
      :readonly="readonly" @blur="handlePhoneFormat" @input="isTouched = true"
      :class="{ 'is-invalid': phoneError && isTouched }" />
    <div v-if="phoneError && isTouched" class="text-danger mt-1">{{ phoneError }}</div>

  </div>
</template>

<script>
import { formatPhone } from '@/core/utils';

export default {
  name: "CustomerPhone",
  props: {
    value: Object,
    readonly: Boolean,
  },
  data() {
    return {
      entry: {
        phone: '',
      },
      phoneError: '',
      isTouched: false,
    }
  },
  watch: {
    'value.phone': {
      handler: function () {
        this.entry.phone = this.value.phone
      },
      deep: true,
    },
    'entry.phone': {
      handler() {
        this.$emit('update', {
          ...this.value,
          phone: this.entry.phone,
        })
        if (this.isTouched) {
          this.validatePhone();
        }
      },
      deep: true,
    },
  },
  methods: {
    handlePhoneFormat() {
      this.isTouched = true;
      const formatted = formatPhone(this.entry.phone);
      this.entry.phone = formatted ? formatted : this.entry.phone;
      this.validatePhone();
    },
    validatePhone() {
      if (!this.entry.phone) {
        this.phoneError = "Phone number cannot be blank!";
      } else if (!formatPhone(this.entry.phone)) {
        this.phoneError = "Phone number is not in correct format!";
      } else {
        this.phoneError = "";
      }
    },
  },
  created() {
    this.entry = this.value
  },
};
</script>
