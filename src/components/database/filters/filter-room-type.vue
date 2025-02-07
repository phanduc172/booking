<template>
  <div class="form-group">
    <label class="form-label">Type Room</label>
    <select id="roomtype" v-model="selectedRoomType" class="form-select">
      <option value="" disabled>Select type room</option>
      <option v-for="type in roomTypes" :key="type.value" :value="type.value">
        {{ type.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterRoomType",
  props: {
    value: String,
  },
  data() {
    return {
      selectedRoomType: "",
      roomTypes: [
        { value: "single", label: "Single Room" },
        { value: "double", label: "Double Room" },
        { value: "suite", label: "Suite Room" },
      ],
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.selectedRoomType = newValue || "";
      },
    },
  },
  methods: {
    updateValue(value) {
      this.selectedRoomType = value;
      this.$emit("input", value);
    },
  },
};
</script>
