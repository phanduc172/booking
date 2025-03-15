<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Passport<span class="text-danger">*</span></label>
    <input type="text" class="form-control" placeholder="Please enter a passport" v-model="entry.passport" />
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
        passport: '',
      },
    }
  },
  watch: {
    'value.passport': {
      handler: function () {
        this.entry.passport = this.value.passport
      },
      deep: true,
    },
    'entry.passport': {
      handler() {
        this.$emit('update', {
          ...this.value,
          passport: this.entry.passport,
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
