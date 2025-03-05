<template>
  <div class="table-container border-3">
    <div class="bg-white custom-table-container shadow-sm rounded-3 p-4 mb-3">
      <filter-search class="col-12 col-sm-6 col-md-4 col-lg-3" :placeholder="'Enter search keyword'" />
    </div>
    <div class="bg-white custom-table-container shadow-sm rounded-3">
      <c-table>
        <template #thead>
          <tr>
            <th class="p-3 text-dark fw-bold">Room Name</th>
            <th class="p-3 text-dark fw-bold">Room Type</th>
            <th class="p-3 text-dark fw-bold">Capacity</th>
            <th class="p-3 text-dark fw-bold">Price Per Night</th>
            <th class="p-3 text-dark fw-bold">Availability</th>
            <th class="p-3 text-dark fw-bold">Services</th>
            <th class="p-3 text-dark fw-bold"></th>
          </tr>
        </template>

        <template #tbody>
          <tr v-for="room in rooms" :key="room.id" class="table-row">
            <td class="p-3">{{ room.name }}</td>
            <td class="p-3 text-start">{{ room.typeOfRoom }}</td>
            <td class="p-3">
              {{ room.amountAdult }} guests | {{ room.amountChild }} children
            </td>
            <td class="p-3">${{ room.pricePerNight }}</td>
            <td class="p-3">{{ room.status }}</td>
            <td class="p-3">
              <ul class="list-unstyled mb-0">
                <li v-for="service in room.services" :key="service.id">
                  <img :src="service.icon" alt="" width="20" class="me-2" />
                  {{ service.name }}
                </li>
              </ul>
            </td>
            <td class="p-3">
              <div class="action-buttons">
                <a class="text-primary" @click="showRoomDetails()">
                  <i class="bx bx-info-circle fs-4 mx-1"></i>
                </a>
                <a class="text-success" @click="editRoom(room.id)">
                  <i class="bx bx-edit fs-4"></i>
                </a>
                <a class="text-danger" @click="deleteRoom(room.id)">
                  <i class="bx bx-trash fs-4"></i>
                </a>
              </div>
            </td>
          </tr>
        </template>
      </c-table>
    </div>

    <RoomTypeDetail :room="selectedRoom" />
  </div>
</template>

<script>
import CTable from "@/components/database/tabledata-custom.vue";
import RoomTypeDetail from "./partials/room-type-detail.vue";
import EntryActions from "@/components/database/entry-actions.vue";
import FilterSearch from "@/components/database/filters/filter-search.vue";

export default {
  name: "RoomType",
  components: {
    CTable,
    RoomTypeDetail,
    EntryActions,
    FilterSearch,
  },
  data() {
    return {
      rooms: [
        {
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
        {
          id: 3,
          name: "VIP Beachfront",
          pricePerNight: 250,
          amountAdult: 3,
          amountChild: 2,
          status: "Còn trống",
          typeOfRoom: "Phòng VIP",
          createDate: "2025-02-25",
          modifiedDate: "2025-02-25",
          services: [
            {
              id: 1,
              name: "Wi-Fi miễn phí",
              icon: "wifi-icon.png",
            },
            {
              id: 3,
              name: "Dịch vụ phòng",
              icon: "room-service-icon.png",
            },
            {
              id: 5,
              name: "Chỗ đậu xe",
              icon: "parking-icon.png",
            },
          ],
        },
      ],
      roomStatuses: [
        { value: "available", label: "Available" },
        { value: "occupied", label: "Occupied" },
        { value: "reserved", label: "Reserved" },
        { value: "checked-in", label: "Checked In" },
        { value: "checked-out", label: "Checked Out" },
        { value: "cleaning", label: "Cleaning" },
        { value: "out-of-order", label: "Out of Order" },
        { value: "maintenance", label: "Under Maintenance" },
      ],
      selectedRoom: null,
    };
  },
  methods: {
    showRoomDetails() {
      this.$router.push({ name: "rooms.detail" });
    },
    editRoom(id) {
      this.$router.push({ name: "rooms.update", params: { id: id } });
    },
    async deleteRoom(id) {
      const result = await this.$swal.fire({
        title: "Are you sure you want to delete?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        try {
          // const response = await axios.delete(`/api/rooms/${id}`);
          // if (response.status === 200) {
          this.$swal.fire(
            "Deleted!",
            "Room deleted successfully.",
            "success",
            id
          );
          // }
        } catch (error) {
          console.error("Error deleting room:", error);
          this.$swal.fire("Error!", "Room deleted failed.", "error");
        }
      }
    },
    changeRoomAvailability(room) {
      this.$swal
        .fire({
          title: "Confirm status change",
          text: `Are you sure you want to change this room's status?`,
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          confirmButtonText: "Agree",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
        })
        .then((result) => {
          if (result.isConfirmed) {
            room.availability =
              room.availability === "Available" ? "Booked" : "Available";
            this.updateRoomAvailability(room);
            this.$swal.fire({
              title: "Success!",
              text: "Room status has been updated.",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
        });
    },
    updateRoomAvailability(room) {
      console.log(
        `Cập nhật trạng thái phòng ${room.room_number} thành ${room.availability}`
      );
    },
    getRoomStatusClass(status) {
      switch (status) {
        case "available":
          return "border-success text-success";
        case "occupied":
          return "border-danger text-danger";
        case "reserved":
          return "border-warning text-warning";
        case "checked-in":
          return "border-primary text-primary";
        case "checked-out":
          return "border-secondary text-secondary";
        case "cleaning":
          return "border-info text-info";
        case "out-of-order":
          return "border-dark text-dark";
        case "maintenance":
          return "border-danger text-danger";
        default:
          return "border-light text-muted";
      }
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  table-layout: auto;
  white-space: nowrap;
}

.table th,
.table td {
  padding: 12px;
  text-align: center;
}

.table td {
  max-width: 250px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}

.table-row td:nth-child(1) {
  min-width: 50px;
}

.table-row td:nth-child(2),
.table-row td:nth-child(3) {
  min-width: 120px;
}

.table-row td:nth-child(4) {
  min-width: 120px;
}

.table-row td:nth-child(8) {
  max-width: 200px;
}

.table-row td:last-child {
  width: 50px;
  text-align: center;
}

.custom-table-container,
.table-responsive {
  overflow-x: auto;
  border-radius: 8px;
}

.table-container .table-row td {
  vertical-align: middle;
  width: auto;
}

.action-buttons {
  display: flex;
  justify-content: center;
}
</style>
