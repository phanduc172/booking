<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">
      Capacity<span class="text-danger">*</span>
    </label>
    <input type="text" class="form-control" v-model="entry.amountAdult" />
  </div>
</template>

<script>
export default {
  name: "RoomCapacity",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: { amountAdult: '', amountChild: '' },
    };
  },
  watch: {
    value: {
      handler(newValue) {
        if (newValue) {
          this.entry = { ...newValue }; 
        }
      },
      deep: true,
      immediate: true,
    },
    entry: {
      handler(newEntry) {
        this.$emit("update", { ...this.value, ...newEntry });
      },
      deep: true,
    },
  },
};
</script>
