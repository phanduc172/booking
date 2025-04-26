<template>
  <div class="form-group w-100">
    <label class="form-label mb-1 fw-bold text-muted">Type Room</label>
    <select v-model="selectedRoomType" class="form-select">
      <option value="" disabled>Select type room</option>
      <option v-for="type in roomTypes" :key="type.id" :value="type.id">
        {{ type.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "FilterRoomType",
  data() {
    return {
      roomTypes: [],
      selectedRoomType: this.$route.query.type || ""
    };
  },
  methods: {
    ...mapActions('roomType', ['GetListRoomType']),
    async getData() {
      const response = await this.GetListRoomType();
      if (response.code === 200) {
        this.roomTypes = response.data.map(entry => ({
          id: entry.id,
          name: entry.name
        }));
      }
    },
    updateQuery(newType) {
      this.$router.push({ query: { ...this.$route.query, type: newType || undefined } });
    }
  },
  watch: {
    selectedRoomType(newVal) {
      this.updateQuery(newVal);
    },
    '$route.query': {
      handler(newQuery) {
        this.selectedRoomType = newQuery.type || "";
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