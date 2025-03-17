<template>
  <div class="card-container">
    <form-header :confirmAble="false" @refresh="refreshEntry" @save="updateEntry" title="Update room"
      @back="$router.push({ name: 'room.list' })" />
    <div class="card-body">
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <room-name v-model="entry" @update="(e) => (entry = e)" />
        </div>
        <div class="col-12 col-md-6">
          <room-capacity v-model="entry" @update="(e) => (entry = e)" />
        </div>
        <div class="col-12 col-md-6">
          <room-type v-model="entry" @update="(e) => (entry = e)" />
        </div>
        <div class="col-12 col-md-6">
          <room-price v-model="entry" @update="(e) => (entry = e)" />
        </div>
        <div class="col-12 col-md-6">
          <room-status v-model="entry" @update="(e) => (entry = e)" />
        </div>
        <div class="col-12 col-md-6">
          <room-utilities v-model="entry" @update="(e) => (entry = e)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FormHeader from "@/components/form/form-header.vue";
import RoomName from "./partials/room-name.vue";
import RoomType from "./partials/room-type.vue";
import RoomCapacity from "./partials/room-capacity.vue";
import RoomPrice from "./partials/room-price.vue";
import RoomUtilities from "./partials/room-utilities.vue";
import RoomStatus from "./partials/room-status.vue";

export default {
  name: "RoomUpdate",
  components: {
    FormHeader,
    RoomName,
    RoomType,
    RoomCapacity,
    RoomPrice,
    RoomStatus,
    RoomUtilities,
  },
  data() {
    return {
      entry: {
        name: "",
        amount_adult: 0,
        amount_child: 0,
        price_per_night: 0,
        status: "",
        type_of_room_id: "",
        facilities: []
      },
      newService: "",
    };
  },
  methods: {
    ...mapActions('room', ["GetRoom", 'UpdateRoom']),
    ...mapActions('room-type', ["GetListRoomType"]),
    async getEntry() {
      const response = await this.GetRoom(this.$route.params.id);
      if (response.code === 200) {
        this.entry = response.data
      }
    },
    async getListRoomType() {
      const response = await this.GetListRoomType(this.$route.params.id);
      if (response.code === 200) {
        this.roomTypes = response.data
      }
    },
    validateEntry() {
      const requiredFields = [
        { field: "name", message: "Name is required" },
        { field: "type_of_room_id", message: "Room type is required" },
        { field: "amount_adult", message: "Capacity is required" },
        { field: "price_per_night", message: "Price per night is required" },
        { field: "status", message: "Status is required" },
      ];

      for (const { field, message } of requiredFields) {
        if (!this.entry[field]) {
          this.$swal.fire({
            icon: "error",
            title: message,
          });
          return false;
        }
      }
      return true;
    },
    async updateEntry() {
      if (!this.validateEntry()) return;
      const result = await this.$swal.fire({
        title: "Update this customer?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Update",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      });
      if (result.isConfirmed) {
        try {
          let body = {
            id: this.entry.id,
            name: this.entry.name,
            amount_adult: this.entry.amount_adult,
            amount_child: this.entry.amount_child,
            price_per_night: this.entry.price_per_night,
            type_of_room_id: this.entry.type_of_room_id,
            status: this.entry.status,
            facilities: this.entry.facilities.map(entry => entry.id)
          }
          const response = await this.UpdateRoom(body);
          if (response.code === 200) {
            await this.$swal.fire({
              title: "Updated successfully!",
              text: "Customer information has been updated.",
              icon: "success",
              confirmButtonText: "OK",
            });
            this.$router.push({ name: "room.list" });
          } else {
            throw new Error(response.message || "Update failed.");
          }
        } catch (error) {
          this.$swal.fire({
            title: "Error!",
            text: error.message || "Unable to connect to server.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    },
    refreshEntry() {
      this.entry = {};
    },
    removeService(index) {
      console.log("Index", this.entry.services);

      this.entry.services.splice(index, 1);
    },
  },
  created() {
    this.getEntry();
  },
};
</script>

<style scoped>
.card-container {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.input-group input,
.input-group select,
.input-group textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  border-color: #007bff;
  outline: none;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.form-control:focus,
.form-select:focus {
  border-color: #ddd !important;
  box-shadow: none !important;
}

.text-primary {
  color: var(--primary-color) !important;
}

.btn-primary {
  background: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
}
</style>
