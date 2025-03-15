  <template>
    <div class="d-flex flex-column w-100">
      <label class="form-label fw-bold text-secondary">Hire Date<span class="text-danger">*</span></label>
      <date-picker v-model="entry.hire_date" placeholder="Select hire date" type="date" value-type="format"
        format="DD-MM-YYYY" class="w-100"></date-picker>
    </div>
  </template>

<script>
export default {
  name: "StaffHireDate",
  props: {
    value: Object,
  },
  data() {
    return {
      entry: {
        hire_date: '',
      },
    }
  },
  watch: {
    'value.hire_date': {
      handler: function () {
        this.entry.hire_date = this.value.hire_date
      },
      deep: true,
      immediate: true
    },
    'entry.hire_date': {
      handler() {
        this.$emit('update', {
          ...this.value,
          position: this.entry.position,
        })
      },
      deep: true,
      immediate: true
    },
  },
  created() {
    this.entry = this.value
  },
};
</script>
