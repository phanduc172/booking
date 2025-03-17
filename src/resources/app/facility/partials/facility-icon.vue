<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Name<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.icon" placeholder="Enter icon" />
  </div>
</template>

<script>
export default {
  icon: "FacilityIcon",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        icon: '',
      },
    }
  },
  watch: {
    'value.icon': {
      handler: function () {
        this.entry.icon = this.value.icon
      },
      deep: true,
    },
    'entry.icon': {
      handler() {
        this.$emit('update', {
          ...this.value,
          icon: this.entry.icon,
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
