<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Description<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.description" placeholder="Enter desciption" />
  </div>
</template>

<script>
export default {
  icon: "FacilityDesciption",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: { description: '' },
    };
  },
  watch: {
    value: {
      handler(newValue) {
        this.entry = newValue
      },
      immediate: true,
      deep: true,
    },
    'entry.description': {
      handler() {
        this.$emit('update', {
          ...this.value,
          description: this.entry.description,
        });
      },
    },
  },
};
</script>
