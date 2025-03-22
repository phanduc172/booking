<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Name<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.name" placeholder="Enter name" />
  </div>
</template>

<script>
export default {
  name: "FacilityName",
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
