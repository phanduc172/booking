<template>
  <div class="card-container">
    <form-header @refresh="refreshEntry" @save="updateEntry" title="Cập nhật phòng" @back="$router.back()" />

    <div class="card-body">
      <form @submit.prevent="updateEntry">
        <div class="row g-3">
          <div class="col-12">
            <room-name v-model="entry" />
          </div>
          <div class="col-12 col-md-6">
            <room-type v-model="entry" />
          </div>
          <div class="col-12 col-md-6">
            <room-capacity v-model="entry" />
          </div>
          <div class="col-12 col-md-6">
            <room-price v-model="entry" />
          </div>
          <div class="col-12 col-md-6">
            <room-availability v-model="entry" />
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
      </form>
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
        id: 1,
        name: "Deluxe Ocean View",
        pricePerNight: 120,
        amountAdult: 2,
        amountChild: 1,
        status: "Còn trống",
        typeOfRoom: "Phòng Standard",
        createDate: "2025-02-25",
        modifiedDate: "2025-02-25",
        services: [
          {
            id: 1,
            name: "Wi-Fi miễn phí",
            icon: "wifi-icon.png",
          },
          {
            id: 2,
            name: "Bể bơi",
            icon: "pool-icon.png",
          },
          {
            id: 4,
            name: "Bữa sáng miễn phí",
            icon: "breakfast-icon.png",
          },
        ],
      },
      roomTypes: [
        "Deluxe Room",
        "Suite Room",
        "Standard Room",
        "Family Room",
        "Presidential Suite",
        "Single Room",
        "Twin Room",
        "Honeymoon Suite",
      ],
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
    refreshEntry() {
      this.entry = {};
    },
    updateEntry() { },
  },
  created() { },
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
