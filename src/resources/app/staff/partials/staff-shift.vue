<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Shift<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.shift" placeholder="Please enter shift" />
  </div>
</template>

<script>
export default {
  name: "StaffShift",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        shift: '',
      },
    }
  },
  watch: {
    'value.shift': {
      handler: function () {
        this.entry.shift = this.value.shift
      },
      deep: true,
    },
    'entry.shift': {
      handler() {
        this.$emit('update', {
          ...this.value,
          shift: this.entry.shift,
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
