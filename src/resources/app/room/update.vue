<template>
    <div class="card shadow-sm p-3">
        <form-header @refresh="refreshEntry" @save="updateEntry" title="Cập nhật phòng" @back="$router.back()" />

        <form @submit.prevent="updateEntry">
            <div class="mb-3">
                <label class="form-label">Số phòng</label>
                <input type="text" class="form-control" v-model="room.room_number" />
            </div>
            <div class="mb-3">
                <label class="form-label">Loại phòng</label>
                <input type="text" class="form-control" v-model="room.room_type" />
            </div>
            <div class="mb-3">
                <label class="form-label">Sức chứa</label>
                <input type="number" class="form-control" v-model="room.capacity" />
            </div>
            <div class="mb-3">
                <label class="form-label">Giá mỗi đêm</label>
                <input type="number" class="form-control" v-model="room.price_per_night" />
            </div>
            <div class="mb-3">
                <label class="form-label">Floor</label>
                <input type="number" class="form-control" v-model="room.floor" />
            </div>
            <div class="mb-3">
                <label class="form-label">Tình trạng</label>
                <select class="form-control" v-model="room.availability">
                    <option value="available">Còn trống</option>
                    <option value="occupied">Đã đặt</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Loại giường</label>
                <input type="text" class="form-control" v-model="room.bed_type" />
            </div>
            <div class="mb-3">
                <label class="form-label">Kích thước phòng</label>
                <input type="text" class="form-control" v-model="room.room_size" />
            </div>
            <div class="mb-3">
                <label class="form-label">Tiện ích</label>
                <textarea class="form-control" v-model="room.amenities"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Mô tả</label>
                <textarea class="form-control" v-model="room.description"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Giảm giá (%)</label>
                <input type="number" class="form-control" v-model="room.discount.amount" />
            </div>
        </form>
    </div>
</template>

<script>
import FormHeader from '@/components/form/form-header.vue';

export default {
    name: "RoomUpdate",
    components: {
        FormHeader
    },
    data() {
        return {
            room: {
                room_number: "",
                room_type: "",
                price_per_night: 0,
                capacity: 0,
                availability: "available",
                bed_type: "",
                room_size: "",
                amenities: "",
                description: "",
                discount: { amount: 0 }
            }
        };
    },
    methods: {
        async fetchRoomData() {

        },
        async updateEntry() {

        },
        back() {
            console.log("AAAAA");

        }
    },
    created() {
        this.fetchRoomData();
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
}

.form-label {
    font-weight: bold;
    color: #595959;
}
</style>
