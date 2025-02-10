<template>
  <div class="form-group">
    <label class="form-label">Check-in Date</label>
    <date-picker v-model="entry" placeholder="Từ ngày" type="date" value-type="format" format="DD-MM-YYYY">
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
  name: "FilterBeganFrom",
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
</style>
