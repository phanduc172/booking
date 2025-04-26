<template>
  <div class="w-100">
    <label class="form-label fw-bold text-secondary">Email<span class="text-danger">*</span></label>
    <input type="email" class="form-control" v-model="entry.email" placeholder="Please enter email"
      @blur="handleEmailFormat" @input="isTouched = true" :class="{ 'is-invalid': emailError && isTouched }" />
    <div v-if="emailError && isTouched" class="text-danger mt-1">{{ emailError }}</div>
  </div>
</template>

<script>
import { formatEmail } from '@/core/utils';

export default {
  name: "StaffEmail",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        email: '',
      },
      emailError: '',
      isTouched: false,
    }
  },
  watch: {
    "value.email": {
      handler() {
        this.entry.email = this.value.email;
      },
      deep: true,
    },
    "entry.email": {
      handler() {
        this.$emit("update", {
          ...this.value,
          email: this.entry.email,
        });
        if (this.isTouched) {
          this.validateEmail();
        }
      },
      deep: true,
    },
  },
  methods: {
    handleEmailFormat() {
      this.isTouched = true;
      const formatted = formatEmail(this.entry.email);
      this.entry.email = formatted ? formatted : this.entry.email;
      this.validateEmail();
    },
    validateEmail() {
      if (!this.entry.email) {
        this.emailError = "Email cannot be empty!";
      } else if (!formatEmail(this.entry.email)) {
        this.emailError = "Email is not in correct format!";
      } else {
        this.emailError = "";
      }
    },
  },
  created() {
    this.entry = this.value;
  },
};
</script>
