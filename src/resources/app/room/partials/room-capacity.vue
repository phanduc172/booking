<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">
      Capacity<span class="text-danger">*</span>
    </label>
    <div class="row">
      <div class="col">
        <input type="number" min="1" class="form-control" v-model="entry.amount_adult" placeholder="Enter adults" />
      </div>
      <div class="col">
        <input type="number" min="1" class="form-control" v-model="entry.amount_child" placeholder="Enter children" />
      </div>
    </div>
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
      entry: {
        amount_adult: 0,
        amount_child: 0,

      },
    }
  },
  watch: {
    'value.amount_adult': {
      handler: function () {
        this.entry.amount_adult = this.value.amount_adult
      },
      deep: true,
    },
    'entry.amount_adult': {
      handler() {
        this.$emit('update', {
          ...this.value,
          amount_adult: this.entry.amount_adult,
        })
      },
      deep: true,
    },
    'value.amount_child': {
      handler: function () {
        this.entry.amount_child = this.value.amount_child
      },
      deep: true,
    },
    'entry.amount_child': {
      handler() {
        this.$emit('update', {
          ...this.value,
          amount_child: this.entry.amount_child,
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
