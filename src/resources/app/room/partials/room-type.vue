<template>
  <div class="col-md-4 mb-3 w-100">
    <label class="form-label fw-bold text-secondary">
      Room Type <span class="text-danger">*</span>
    </label>
    <select class="form-select" v-model="entry.type_of_room_id">
      <option value="" disabled>Select Room Type</option>
      <option v-for="room in entries" :key="room.id" :value="room.id">
        {{ room.name }}
      </option>
    </select>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "RoomType",
  props: {
    value: Object,
  },
  data() {
    return {
      entries: [],
      entry: {
        type_of_room_id: '',
      },
    }
  },
  watch: {
    'value.type_of_room_id': {
      handler: function () {
        this.entry.type_of_room_id = this.value.type_of_room_id
      },
      deep: true,
    },
    'entry.type_of_room_id': {
      handler() {
        this.$emit('update', {
          ...this.value,
          type_of_room_id: this.entry.type_of_room_id,
        })
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions('roomType', ["GetListRoomType"]),

    async getDataRoomType() {
      const response = await this.GetListRoomType()
      if (response.code === 200) {
        this.entries = response.data
      }
    },
  },
  created() {
    this.getDataRoomType();
    this.entry = this.value
  },
};
</script>
