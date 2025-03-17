<template>
  <div class="form-group w-100">
    <label class="form-label mb-1  fw-bold text-muted">Room Status</label>
    <select v-model="selectedStatus" class="form-select">
      <option value="" disabled>Select status</option>
      <option v-for="status in statuses" :key="status.id" :value="status.id">
        {{ status.status_name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "FilterRoomStatus",
  data() {
    return {
      statuses: [],
      selectedStatus: this.$route.query.status || ""
    };
  },
  methods: {
    ...mapActions('status', ['GetListStatus']),
    async getData() {
      const response = await this.GetListStatus();
      if (response.code === 200) {
        this.statuses = response.data
      }
    },
    updateQuery(newStatus) {
      this.$router.push({ query: { ...this.$route.query, status: newStatus || undefined } });
    }
  },
  watch: {
    selectedStatus(newVal) {
      this.updateQuery(newVal);
    }
  },
  created() {
    this.getData();
  }
};
</script>


<style scoped>
.form-select {
  height: 45px;
}
</style>