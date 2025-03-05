<template>
  <b-card class="header mb-4 border-0 shadow-sm">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-10 mb-3">
        <filter-search placeholder="Enter customer name" />
      </div>
      <div class="col-lg-9 col-md-6 col-2 text-end mt-4">
        <b-button
          variant="light"
          class="btn-refresh mt-1"
          @click="refresh"
          title="Clear search"
        >
          <i class="bx bx-sync fs-4 fw-bolder"></i>
        </b-button>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-lg-3 col-md-6 col-10 mb-3">
        <filter-began-from />
      </div>
      <div class="col-lg-3 col-md-6 col-10 mb-3">
        <filter-began-to />
      </div>
    </div> -->
  </b-card>
</template>

<script>
import FilterBeganFrom from "@/components/database/filters/filter-began-from.vue";
import FilterBeganTo from "@/components/database/filters/filter-began-to.vue";
import FilterSearch from "@/components/database/filters/filter-search.vue";

export default {
  name: "CustomerFilters",
  components: {
    FilterBeganFrom,
    FilterBeganTo,
    FilterSearch,
  },
  methods: {
    refresh() {
      let query = {};
      this.$router
        .push({
          name: this.$route.name,
          query: query,
        })
        .catch((err) => err);
    },
  },
};
</script>
<style scoped lang="scss">
.col-refresh {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
