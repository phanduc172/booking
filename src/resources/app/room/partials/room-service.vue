<template>
  <div class="d-flex align-items-center w-100 mb-2">
    <input 
      type="text" 
      v-model="entry.services[index].name" 
      class="form-control me-2"
      @input="updateService"
    />
    <button @click="removeService" class="btn btn-danger btn-sm">
      X
    </button>
  </div>
</template>

<script>
export default {
  name: "RoomService",
  props: {
    value: Object,
    index: Number,
  },
  data() {
    return {
      entry: { services: [] },
    };
  },
  watch: {
    value: {
      handler(newValue) {
        this.entry = { ...newValue };
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    updateService() {
      this.$emit("update", { ...this.entry });
    },
    removeService() {
      this.$emit("remove", this.index);
    },
  },
};
</script>
