<template>
    <div class="container my-4">
        <h5 class="text-center mb-4">List of available rooms</h5>
        <b-row>
            <b-col v-for="room in availableRooms" :key="room.id" cols="12" sm="6" md="4" lg="3">
                <b-card class="shadow-sm cursor-pointer mb-4">
                    <b-img class="p-0" fluid :src="room.images[0]" fluid-grow alt="Image"></b-img>
                    <div class="px-3 py-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="my-2">{{ room.name }}</h6>
                            <span class="fs-5 fw-bold text-danger my-2"> ${{ room.pricePerNight }}</span>
                        </div>
                        <b-card-text>
                            <h6>{{ room.typeOfRoom }}</h6>
                        </b-card-text>
                        <b-list-group flush>
                            <b-col v-for="service in room.services.slice(0, 2)" :key="service.id">
                                <img :src="`/assets/icons/${service.icon}`" alt="" class="icon" /> {{ service.name }}
                            </b-col>
                        </b-list-group>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-primary text-white text px-3 py-1">View More</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "IntroduceRoomList",
    data() {
        return {
            availableRooms: [
                {
                    id: 1,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
                {
                    id: 2,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
                {
                    id: 3,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
                {
                    id: 4,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
                {
                    id: 5,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
                {
                    id: 6,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
                {
                    id: 7,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
                {
                    id: 8,
                    name: "Deluxe Ocean View",
                    pricePerNight: 120,
                    amountAdult: 2,
                    amountChild: 1,
                    typeOfRoom: "Phòng Standard",
                    images: ["https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg"],
                    services: [
                        { id: 1, name: "Wi-Fi miễn phí", icon: "wifi-icon.png" },
                        { id: 2, name: "Bể bơi", icon: "pool-icon.png" },
                        { id: 3, name: "Dịch vụ phòng", icon: "room-service-icon.png" },
                        { id: 4, name: "Bữa sáng miễn phí", icon: "breakfast-icon.png" },
                        { id: 5, name: "Chỗ đậu xe", icon: "parking-icon.png" }
                    ]
                },
            ]
        };
    },
};
</script>

<style scoped>
.card-body {
    padding: 0
}

.btn-primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background-color: #199492;
    border-color: #199492;
}

.cursor-pointer {
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
}
</style>