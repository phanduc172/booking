<template>
  <div class="card-container">
    <form-header @refresh="refreshEntry" @save="updateEntry" title="Cập nhật khách hàng" @back="$router.back()" />

    <div class="card-body">
      <form @submit.prevent="updateEntry">
        <div class="row">
          <div class="col-md-4 mb-3">
            <label class="form-label fw-bold text-secondary">Tên khách hàng<span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="customer.name" />
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label fw-bold text-secondary">Loại phòng<span class="text-danger">*</span></label>
            <select class="form-control" v-model="customer.room_type">
              <option disabled value="">Chọn loại phòng</option>
              <option v-for="(type, index) in  roomTypes" :key="index" :value="type">
                {{ type }}
              </option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label fw-bold text-secondary">
              Trạng thái<span class="text-danger">*</span>
            </label>
            <select class="form-select" v-model="customer.status">
              <option v-for="status in roomStatuses" :key="status.value" :value="status.value">
                {{ status.label }}
              </option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label fw-bold text-secondary">Check-in<span class="text-danger">*</span></label>
            <date-picker v-model="customer.check_in" type="datetime" format="YYYY-MM-DD HH:mm" value-type="format"
              :time-picker-options="{ start: '00:00', step: '00:15', end: '23:45' }" :default-time="'14:00'"
              class="w-100" />
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label fw-bold text-secondary">Check-out<span class="text-danger">*</span></label>
            <date-picker v-model="customer.check_out" type="datetime" format="YYYY-MM-DD HH:mm" value-type="format"
              :time-picker-options="{ start: '00:00', step: '00:15', end: '23:45' }" :default-time="'10:00'"
              class="w-100" />
          </div>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FormHeader from "@/components/form/form-header.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "CustomerUpdate",
  components: { FormHeader, DatePicker },
  data() {
    return {
      customer: {
        customer_id: "1",
        name: "Nguyen Van A",
        room_type: "Deluxe",
        check_in: "2025-02-01 13:30",
        check_out: "2025-02-05 10:15",
        status: "confirmed",
      },
      roomTypes: ["Deluxe", "Standard", "Suite"],
      roomStatuses: [
        { value: "confirmed", label: "Đã xác nhận" },
        { value: "pending", label: "Chờ xử lý" },
        { value: "canceled", label: "Đã hủy" },
      ],
    };
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
</style>
