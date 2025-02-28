<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Price Per Night<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.pricePerNight" />
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
        pricePerNight: '',
      },
    }
  },
  watch: {
    'value.pricePerNight': {
      handler: function () {
        this.entry.pricePerNight = this.value.pricePerNight
      },
      deep: true,
    },
    'entry.pricePerNight': {
      handler() {
        this.$emit('update', {
          ...this.value,
          pricePerNight: this.entry.pricePerNight,
        })
      },
      deep: true,
    },
  },
  created() {
    this.entry = this.value
    console.log("🚀 ~ created ~ this.entry:", this.entry)
  },
};
</script>
