<template>
  <div class="w-100">
    <label class="form-label fw-bold text-secondary">Name<span class="text-danger">*</span></label>
    <input type="text" class="form-control" placeholder="Please enter a name" v-model="entry.name" />
  </div>
</template>

<script>
export default {
  name: "StaffName",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        name: '',
      },
    }
  },
  watch: {
    'value.name': {
      handler: function () {
        this.entry.name = this.value.name
      },
      deep: true,
    },
    'entry.name': {
      handler() {
        this.$emit('update', {
          ...this.value,
          name: this.entry.name,
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
