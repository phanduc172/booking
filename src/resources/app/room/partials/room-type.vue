<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Room Type<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.typeOfRoom" />
  </div>
</template>

<script>
export default {
  name: "RoomType",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        typeOfRoom: '',
      },
    }
  },
  watch: {
    'value.typeOfRoom': {
      handler: function () {
        this.entry.typeOfRoom = this.value.typeOfRoom
      },
      deep: true,
    },
    'entry.typeOfRoom': {
      handler() {
        this.$emit('update', {
          ...this.value,
          typeOfRoom: this.entry.typeOfRoom,
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
