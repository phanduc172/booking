<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Name<span class="text-danger">*</span></label>
    <input type="text" class="form-control" placeholder="Please enter a name" v-model="entry.name"
      :readonly="readonly" />
  </div>
</template>

<script>
export default {
  name: "CustomerName",
  props: {
    value: Object,
    readonly: Boolean
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

<style>
.form-control:focus {
  box-shadow: none;
  border-color: #dee2e6;
}
</style>
