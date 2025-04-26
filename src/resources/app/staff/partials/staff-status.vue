<template>
  <div class="w-100">
    <label class="form-label fw-bold text-secondary">Status<span class="text-danger">*</span></label>
    <select class="form-select" v-model="entry.status">
      <option value="" disabled>Please select status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "StaffStatus",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        status: '',
      },
    }
  },
  watch: {
    'value.status': {
      handler: function () {
        this.entry.status = this.value.status
      },
      deep: true,
    },
    'entry.status': {
      handler() {
        this.$emit('update', {
          ...this.value,
          position: this.entry.position,
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
