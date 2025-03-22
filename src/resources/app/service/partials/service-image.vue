<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Image<span class="text-danger">*</span></label>
    <input type="text" class="form-control" v-model="entry.image" placeholder="Enter image" />
  </div>
</template>

<script>
export default {
  image: "ServiceImage",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        image: '',
      },
    }
  },
  watch: {
    'value.image': {
      handler: function () {
        this.entry.image = this.value.image
      },
      deep: true,
    },
    'entry.image': {
      handler() {
        this.$emit('update', {
          ...this.value,
          image: this.entry.image,
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
