<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="card shadow-lg p-3 m-3 p-md-4 w-100 rounded-4 bg-light">
      <div class="row d-flex align-items-center">
        <div class="col-12 col-sm-6 mb-3">
          <FilterPerson @update="handlePersonUpdate" />
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <IntroduceDate @update="handleDateRangeUpdate" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 text-center">
          <button class="btn btn-primary" @click="searchQuery">🔍 Tìm kiếm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FilterPerson from "@/components/database/filters/filter-person.vue";
import IntroduceDate from "./introduce-date.vue";
import IntroduceRoomList from "./introduce-room-list.vue";

export default {
  name: "IntroduceSearchRoom",
  components: { IntroduceDate, FilterPerson, IntroduceRoomList },
  data() {
    return {
      roomAvailable: [],
      dateRange: [],
      person: {}
    };
  },
  watch: {
    roomAvailable(newRoomAvailable) {
      this.setRoomAvailable(newRoomAvailable);
    }
  },
  methods: {
    ...mapActions("introduce", ["GetRoomAvailble", "setRoomAvailable"]),

    validateForm() {
      if (!this.dateRange.length) return "Please select a valid date range.";
      if (!this.person.adults || this.person.adults < 1) return "Please enter the number of adults.";
      if (this.person.children < 0) return "Invalid number of children.";
      return null;
    },

    async searchQuery() {
      const errorMessage = this.validateForm();
      if (errorMessage) {
        return this.$swal.fire({ icon: "error", title: "Error!", text: errorMessage });
      }
      const response = await this.GetRoomAvailble({
        amount_adult: this.person.adults,
        amount_child: this.person.children,
        check_in: this.dateRange[0],
        check_out: this.dateRange[1],
      });

      this.roomAvailable = response.code === 200 ? response.data : [];
    },
    handleDateRangeUpdate(newDateRange) {
      this.dateRange = newDateRange;
    },

    handlePersonUpdate(newPerson) {
      this.person = newPerson;
    },
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
  font-size: 16px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

@media screen and (min-width: 480px) and (max-width: 1023.89px) {
  .card {
    width: 90% !important;
  }
}
</style>
