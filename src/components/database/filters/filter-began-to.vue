<template>
  <div class="form-group">
    <label class="form-label">Check-out Date</label>
    <date-picker v-model="entry" placeholder="To date" type="date" value-type="format" format="DD-MM-YYYY">
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
  name: "FilterBeganTo",
  components: { DatePicker },
  data() {
    return {
      entry: "",
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
