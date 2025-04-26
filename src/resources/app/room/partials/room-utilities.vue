<template>
  <div class="mb-3 w-100">
    <label class="form-label fw-bold text-secondary">
      Utilities
    </label>
    <multiselect v-model="selectedValues" :options="options" :multiple="true" :close-on-select="true"
      placeholder="Select utilities" label="name" track-by="id" select-label="" deselect-label=""
      @input="updateSelectedValues" />
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions } from "vuex";

export default {
  name: "RoomUtilities",
  components: {
    Multiselect,
  },
  props: {
    value: Object,
  },
  data() {
    return {
      selectedValues: [],
      options: [],
    };
  },
  watch: {
    selectedValues: {
      handler(newValue) {
        this.selectedValues = newValue;
      },
      deep: true,
      immediate: true,
    },
    "value.facilities": {
      handler(newVal) {
        console.log(newVal, "newVal");
        this.selectedValues = newVal
      }
    },
  },
  methods: {
    ...mapActions('facility', ['GetListFacility']),
    async getEntry() {
      const response = await this.GetListFacility();
      if (response.code === 200) {
        this.options = response.data;
      }
    },
    updateSelectedValues(values) {
      this.selectedValues = values;
      this.$emit('input', { ...this.value, facilities: values });
    },
  },
  created() {
    this.options = this.value.facilities
    this.getEntry()
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>