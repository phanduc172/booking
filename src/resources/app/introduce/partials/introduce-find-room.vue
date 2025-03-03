<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="card shadow-lg p-4 w-75 rounded-4 bg-light">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3 m-md-0">
          <FilterPerson />
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-3 m-md-0">
          <IntroduceDate />
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
          <button class="btn btn-primary btn-lg">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBeganFrom from "@/components/database/filters/filter-began-from.vue";
import FilterBeganTo from "@/components/database/filters/filter-began-to.vue";
import FilterPerson from "@/components/database/filters/filter-person.vue";
import IntroduceDate from "./introduce-date.vue";



export default {
  name: "IntroduceFindRoom",
  components: {
    FilterBeganFrom,
    IntroduceDate,
    FilterBeganTo,
    FilterPerson,
  },
};
</script>

<style scoped>
.card {
  max-width: 900px;
  border-radius: 20px;
  background: white;
}

.btn-primary {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-primary:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
}


button {
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
