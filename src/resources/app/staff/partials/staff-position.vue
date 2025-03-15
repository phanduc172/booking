<template>
  <div class="w-100">
    <label class="form-label fw-bold text-secondary">Position<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.position" placeholder="Please enter position" />
  </div>
</template>

<script>
export default {
  name: "StaffPosition",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        position: '',
      },
    }
  },
  watch: {
    'value.position': {
      handler: function () {
        this.entry.position = this.value.position
      },
      deep: true,
    },
    'entry.position': {
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
