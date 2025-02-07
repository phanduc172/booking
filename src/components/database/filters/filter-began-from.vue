<template>
  <div class="form-group">
    <label class="form-label">Thời gian bắt đầu</label>
    <date-picker
      v-model="entry"
      placeholder="Từ ngày"
      value-type="YYYY-MM-DD"
      format="DD-MM-YYYY"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
  name: "FilterBeganFrom",
  components: { DatePicker },
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}
</style>
