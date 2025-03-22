<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">Status<span class="text-danger">*</span></label>
    <select class="form-select" v-model="entry.status">
      {{ entries }}
      <option value="" disabled>Select status</option>
      <option v-for="entry in entries" :key="entry.id" :value="entry.id">
        {{ entry.status_name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "RoomStatus",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        status: '',
      },
      entries: [],
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
  methods: {
    ...mapActions('status', ['GetListStatus']),
    async getEntry() {
      const response = await this.GetListStatus();
      if (response.code === 200) {
        this.entries = response.data;
      }
    }
  },
  created() {
    this.entry = this.value;
    this.getEntry();
  },
};
</script>