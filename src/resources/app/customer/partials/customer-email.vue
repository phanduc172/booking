<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Email<span class="text-danger">*</span></label>
    <input type="text" class="form-control" placeholder="Please enter a email" v-model="entry.email" />
  </div>
</template>

<script>
export default {
  name: "CustomerPhone",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        email: '',
      },
    }
  },
  watch: {
    'value.email': {
      handler: function () {
        this.entry.email = this.value.email
      },
      deep: true,
    },
    'entry.email': {
      handler() {
        this.$emit('update', {
          ...this.value,
          email: this.entry.email,
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
