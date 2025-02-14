<template>
    <div class="card-container">
        <form-header @refresh="refreshEntry" @save="updateEntry" title="Cập nhật phòng" @back="$router.back()" />

        <div class="card-body">
            <form @submit.prevent="updateEntry">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Số phòng<span
                                class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="room.room_number" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Loại phòng<span
                                class="text-danger">*</span></label>
                        <select class="form-control" v-model="room.room_type">
                            <option disabled value="">Chọn loại phòng</option>
                            <option v-for="(type, index) in roomTypes" :key="index" :value="type">
                                {{ type }}
                            </option>
                        </select>

                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Sức chứa<span
                                class="text-danger">*</span></label>
                        <input type="number" class="form-control" v-model="room.capacity" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Giá mỗi đêm<span
                                class="text-danger">*</span></label>
                        <input type="number" class="form-control" v-model="room.price_per_night" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Tầng<span class="text-danger">*</span></label>
                        <input type="number" class="form-control" v-model="room.floor" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">
                            Tình trạng<span class="text-danger">*</span>
                        </label>
                        <select class="form-select" v-model="room.availability">
                            <option v-for="status in roomStatuses" :key="status.value" :value="status.value">
                                {{ status.label }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Loại giường<span
                                class="text-danger">*</span></label>
                        <select class="form-control" v-model="room.bed_type">
                            <option value="" disabled selected>Chọn loại giường</option>
                            <option v-for="bed in bedTypes" :key="bed" :value="bed">{{ bed }}</option>
                        </select>

                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Kích thước phòng<span
                                class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="room.room_size" />
                    </div>
                    <div class="col-12 mb-3">
                        <label class="form-label fw-bold text-secondary">Tiện ích<span
                                class="text-danger">*</span></label>

                        <div class="row mb-3">
                            <div class="col-md-12 mb-2">
                                <input type="text" v-model="newAmenity" class="form-control"
                                    placeholder="Nhập tiện ích mới" @keyup.enter="addAmenity" />
                            </div>
                            <div class="col-md-2">
                                <button @click="addAmenity" class="btn btn-warning text-white fw-bold">Thêm</button>
                            </div>
                        </div>
                        <div class="row">
                            <div v-for="(amenity, index) in room.amenities" :key="index" class="col-md-3 mb-2">
                                <div class="d-flex align-items-center">
                                    <input type="text" v-model="room.amenities[index]" class="form-control me-2" />
                                    <button @click="removeAmenity(index)" class="btn btn-danger btn-sm">X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-3">
                        <label class="form-label fw-bold text-secondary">Mô tả<span class="text-danger">*</span></label>
                        <textarea class="form-control" rows="3" v-model="room.description"></textarea>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-bold text-secondary">Giảm giá (%)<span
                                class="text-danger">*</span></label>
                        <input type="number" class="form-control" v-model="room.discount.amount" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import FormHeader from "@/components/form/form-header.vue";

export default {
    name: "RoomUpdate",
    components: { FormHeader },
    data() {
        return {
            room: {
                room_number: "A101",
                room_type: "",
                capacity: 1,
                price_per_night: 20,
                floor: 1,
                availability: "available",
                bed_type: "King",
                room_size: "30",
                amenities: [
                    "WiFi miễn phí",
                    "TV màn hình phẳng",
                    "Điều hòa nhiệt độ",
                    "Máy pha trà",
                    "Két an toàn",
                ],
                description: "",
                discount: { amount: 0 },
            },
            roomTypes: [
                "Deluxe Room",
                "Suite Room",
                "Standard Room",
                "Family Room",
                "Presidential Suite",
                "Single Room",
                "Twin Room",
                "Honeymoon Suite"
            ],
            bedTypes: ["Single", "Double", "Queen", "King", "Twin", "Bunk", "Sofa Bed", "Rollaway"],
            roomStatuses: [
                { value: "available", label: "Còn trống" },
                { value: "occupied", label: "Đang có khách" },
                { value: "reserved", label: "Đã đặt trước" },
                { value: "checked-in", label: "Đã nhận phòng" },
                { value: "checked-out", label: "Đã trả phòng" },
                { value: "cleaning", label: "Đang dọn dẹp" },
                { value: "out-of-order", label: "Hỏng / Không sử dụng được" },
                { value: "maintenance", label: "Đang bảo trì" }
            ],
            newAmenity: ""
        };
    },
    methods: {
        async fetchRoomData() { },
        async updateEntry() { },
        refreshEntry() {
            this.fetchRoomData();
        },
        addAmenity() {
            if (this.newAmenity.trim() !== "") {
                this.room.amenities.push(this.newAmenity.trim());
                this.newAmenity = "";
            }
        },
        removeAmenity(index) {
            this.room.amenities.splice(index, 1);
        },
    },
    created() {
        this.fetchRoomData();
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
