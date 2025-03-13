<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Country<span class="text-danger">*</span></label>
    <input type="text" class="form-control" placeholder="Please enter a country" v-model="entry.country" />
  </div>
</template>

<script>
export default {
  name: "CustomerCountry",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        country: '',
      },
    }
  },
  watch: {
    'value.country': {
      handler: function () {
        this.entry.country = this.value.country
      },
      deep: true,
    },
    'entry.country': {
      handler() {
        this.$emit('update', {
          ...this.value,
          country: this.entry.country,
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
