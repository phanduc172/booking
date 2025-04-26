<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Price Per Night<span class="text-danger">*</span></label>
    <input type="number" min="1" class="form-control" v-model="entry.price_per_night" placeholder="Enter price per night" />
  </div>
</template>

<script>
export default {
  name: "RoomPrice",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        price_per_night: '',
      },
    }
  },
  watch: {
    'value.price_per_night': {
      handler: function () {
        this.entry.price_per_night = this.value.price_per_night
      },
      deep: true,
    },
    'entry.price_per_night': {
      handler() {
        this.$emit('update', {
          ...this.value,
          price_per_night: this.entry.price_per_night,
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
