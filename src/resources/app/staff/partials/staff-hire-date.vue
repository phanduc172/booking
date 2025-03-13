<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Hire Date<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.hire_date" placeholder="Please enter hire date" />
  </div>
</template>

<script>
export default {
  name: "StaffHireDate",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        hire_date: '',
      },
    }
  },
  watch: {
    'value.hire_date': {
      handler: function () {
        this.entry.hire_date = this.value.hire_date
      },
      deep: true,
    },
    'entry.hire_date': {
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
