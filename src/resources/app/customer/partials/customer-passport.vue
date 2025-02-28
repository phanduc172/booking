<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Passport<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.passport" />
  </div>
</template>

<script>
export default {
  name: "CustomerPassport",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        phone: '',
      },
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
      },
      deep: true,
    },
  },
  created() {
    this.entry = this.value
  },
};
</script>
