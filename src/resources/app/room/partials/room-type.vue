<template>
    <div class="table-container border border-2 rounded">
        <div class="shadow-sm bg-white">
            <div class="table-responsive">
                <table class="table align-middle m-0">
                    <thead class="table-light">
                        <tr>
                            <th class="p-3 text-dark fw-bold">Room Name</th>
                            <th class="p-3 text-dark fw-bold">Capacity</th>
                            <th class="p-3 text-dark fw-bold">Price</th>
                            <th class="p-3 text-dark fw-bold">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="room in rooms" :key="room.id" class="table-row">
                            <td class="p-3">{{ room.name }}</td>
                            <td class="p-3">{{ room.capacity }} guests</td>
                            <td class="p-3">${{ room.price }}</td>
                            <td class="p-3">
                                <span class="badge rounded-pill px-3 py-2"
                                    :class="getAvailabilityClass(room.availability)">
                                    {{ room.availability }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: "RoomType",
    data() {
        return {
            rooms: [
                { id: 1, name: "Deluxe Room", capacity: 2, price: 120, availability: "Available" },
                { id: 2, name: "Suite Room", capacity: 4, price: 250, availability: "Booked" },
                { id: 3, name: "Standard Room", capacity: 2, price: 80, availability: "Available" }
            ]
        };
    },
    methods: {
        getAvailabilityClass(availability) {
            return {
                "bg-available text-success": availability === "Available",
                "bg-booked text-danger": availability === "Booked"
            };
        }
    }
};
</script>

<style scoped>
.table-container {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    /* Đảm bảo bảng không tràn màn hình */
}

.table-responsive {
    width: 100%;
    overflow-x: auto;
    /* Cho phép cuộn ngang nếu cần */
}

.table {
    width: 100%;
    table-layout: fixed;
    /* Đảm bảo không bị tràn */
    word-wrap: break-word;
}

.table-row {
    transition: background 0.3s ease-in-out;
}

.table-row:hover {
    background: rgba(0, 0, 0, 0.02);
}

.bg-available {
    background-color: rgba(25, 135, 84, 0.1);
}

.bg-booked {
    background-color: rgba(220, 53, 69, 0.1);
}

th {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
}
</style>
