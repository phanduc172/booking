<template>
  <div class="w-100">
    <label class="form-label fw-bold text-secondary">Salary<span class="text-danger">*</span></label>
    <input type="number" class="form-control" v-model="entry.salary" placeholder="Please enter salary" />
  </div>
</template>

<script>
export default {
  name: "StaffSalary",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        salary: 0,
      },
    }
  },
  watch: {
    'value.salary': {
      handler: function () {
        this.entry.salary = this.value.salary
      },
      deep: true,
    },
    'entry.salary': {
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
