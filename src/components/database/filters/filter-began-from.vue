<template>
  <div class="form-group">
    <div>
      <label class="form-label">Check-in Date</label>
      <i class="bx bx-chevron-down fs-5 ms-2"></i>
    </div>
    <date-picker v-model="entry" placeholder="From date" type="date" value-type="format" format="DD-MM-YYYY">
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import moment from "moment";

export default {
  name: "FilterBeganTo",
  components: { DatePicker },
  data() {
    return {
      entry: moment().format("DD-MM-YYYY"),
    };
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}

::v-deep(.mx-datepicker) {
  width: 100% !important;
}

::v-deep(.mx-input) {
  width: 100% !important;
  height: 45px !important;
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 8px;
}
</style>