<template>
  <div class="card-container">
    <form-header @refresh="refreshEntry" @save="updateEntry" title="Update room" @back="$router.back()" />
    <div class="card-body">
      <div class="row g-3">
        <div class="col-12">
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
          <room-availability v-model="entry" @update="(e) => (entry = e)" />
        </div>
        <div class="row">
          <label class="form-label fw-bold text-secondary">Room Service<span class="text-danger">*</span></label>
          <div class="col-12 col-md-6 mb-4 d-flex gap-2">
            <input type="text" v-model="newService" class="form-control" placeholder="Enter new utility service"
              @keyup.enter="addService" />
            <button @click="addService" class="btn btn-primary text-white fw-bold">
              Thêm
            </button>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3" v-for="(service, i) in entry.services" :key="service.id">
                <RoomService :value="entry" :index="i" @remove="removeService" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormHeader from "@/components/form/form-header.vue";
import RoomName from "./partials/room-name.vue";
import RoomType from "./partials/room-type.vue";
import RoomCapacity from "./partials/room-capacity.vue";
import RoomPrice from "./partials/room-price.vue";
import RoomAvailability from "./partials/room-availability.vue";
import RoomService from "./partials/room-service.vue";
import { mapActions } from "vuex";

export default {
  name: "RoomUpdate",
  components: {
    FormHeader,
    RoomName,
    RoomType,
    RoomCapacity,
    RoomPrice,
    RoomAvailability,
    RoomService,
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
        services: [],
      },
      bedTypes: [
        "Single",
        "Double",
        "Queen",
        "King",
        "Twin",
        "Bunk",
        "Sofa Bed",
        "Rollaway",
      ],
      roomStatuses: [
        { value: "available", label: "Còn trống" },
        { value: "occupied", label: "Đang có khách" },
        { value: "reserved", label: "Đã đặt trước" },
        { value: "checked-in", label: "Đã nhận phòng" },
        { value: "checked-out", label: "Đã trả phòng" },
        { value: "cleaning", label: "Đang dọn dẹp" },
        { value: "out-of-order", label: "Hỏng / Không sử dụng được" },
        { value: "maintenance", label: "Đang bảo trì" },
      ],
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
        { field: "roomType", message: "Room type is required" },
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
          }
          const response = await this.UpdateRoom(body);
          if (response.code === 200) {
            await this.$swal.fire({
              title: "Updated successfully!",
              text: "Customer information has been updated.",
              icon: "success",
              confirmButtonText: "OK",
            });
            this.$router.push({ name: "customer.list" });
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
    addService() {
      if (!this.newService.trim()) return; // Không thêm nếu input rỗng

      const newService = {
        id: Date.now(), // Tạo ID duy nhất
        name: this.newService, // Lấy giá trị từ input
        icon: "default-icon.png",
      };
      this.entry.services.push(newService);
      this.newService = ""; // Xóa input sau khi thêm
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
