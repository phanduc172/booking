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
      const newQuery = { ...this.$route.query, status: newStatus || undefined };

      if (JSON.stringify(newQuery) !== JSON.stringify(this.$route.query)) {
        this.$router.push({ query: newQuery });
      }
    }

  },
  watch: {
    selectedStatus(newVal) {
      this.updateQuery(newVal);
    },
    '$route.query': {
      handler(newQuery) {
        this.selectedStatus = newQuery.status || ""; 
      },
      immediate: true
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