<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Status<span class="text-danger">*</span></label>
    <input type="number" class="form-control" v-model="entry.status" placeholder="Enter availability"/>
  </div>
</template>

<script>
export default {
  name: "RoomAvailability",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        status: '',
      },
    }
  },
  watch: {
    'value.status': {
      handler: function () {
        this.entry.status = this.value.status
      },
      deep: true,
    },
    'entry.status': {
      handler() {
        this.$emit('update', {
          ...this.value,
          status: this.entry.status,
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
