<template>
  <div class="table-container border-3">
    <div class="bg-white custom-table-container shadow-sm rounded-3 p-4 mb-3">
      <filter-search class="col-12 col-sm-6 col-md-3" :placeholder="'Enter search keyword'" />
      <div class="row mt-3">
        <div class="col-12 col-sm-6 col-md-3">
          <filter-room-type />
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <filter-status />
        </div>
      </div>
    </div>
    <div class="bg-white custom-table-container shadow-sm rounded-3 p-4">
      <div v-if="this.entries.length > 0">
        <div class="d-flex justify-content-end p-3">
          <table-actions :create-action="createAction" />
        </div>
        <c-table>
          <template #thead>
            <tr>
              <th class="p-3 text-dark fw-bold">Room Name</th>
              <th class="p-3 text-dark fw-bold">Room Type</th>
              <th class="p-3 text-dark fw-bold">Capacity</th>
              <th class="p-3 text-dark fw-bold">Price Per Night</th>
              <th class="p-3 text-dark fw-bold">Availability</th>
              <th class="p-3 text-dark fw-bold">Utilities</th>
              <!-- <th class="p-3 text-dark fw-bold">Description</th> -->
              <th class="p-3 text-dark fw-bold"></th>
            </tr>
          </template>

          <template #tbody>
            <tr v-for="room in entries" :key="room.id" class="table-row">
              <td class="p-3">{{ room?.name }}</td>
              <td class="p-3 text-start">{{ room.roomType?.name }}</td>
              <td class="p-3">
                {{ room.amount_adult }} guests | {{ room.amount_child }} children
              </td>
              <td class="p-3">${{ room.price_per_night }}</td>
              <td class="p-3">{{ room.roomStatus?.status_name }}</td>
              <td class="p-3">
                <ul class="list-unstyled mb-0">
                  <li v-for="service in room.facilities" :key="service.id">
                    <img :src="service.icon" alt="" width="20" class="me-2" />
                    {{ service.name }}
                  </li>
                </ul>
              </td>
              <!-- <td class="p-3">{{ room.roomType?.description }}</td> -->
              <td class="p-3">
                <div class="action-buttons">
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
      <div v-else>
        <div class="d-flex flex-column justify-content-between align-items-center">
          <img src="@/assets/images/icon_empty.png" alt="" width="250" height="250">
          <span class="fw-bold fs-5 text-muted">Không có dữ liệu</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTable from "@/components/database/tabledata-custom.vue";
import FilterSearch from "@/components/database/filters/filter-search.vue";
import { mapActions } from "vuex";
import { formatDate } from "@/core/utils";
import TableActions from "@/components/database/table-actions.vue";
import FilterRoomType from "@/components/database/filters/filter-room-type.vue";
import FilterStatus from "@/components/database/filters/filter-status.vue";

export default {
  name: "RoomList",
  components: {
    CTable,
    FilterSearch,
    FilterRoomType,
    FilterStatus,
    TableActions,
  },
  data() {
    return {
      entries: [],
      searchQuery: "",
    };
  },
  watch: {
    '$route.query': {
      handler() {
        this.getData();
      }
    }
  },
  methods: {
    showRoomDetails() {
      this.$router.push({ name: "rooms.detail" });
    },
    ...mapActions("room", ["GetListRoom", "DeleteRoom"]),

    formatDate,

    async getData() {
      let query = this.$route.query
      const response = await this.GetListRoom(query);
      if (response.code === 200) {
        this.entries = response.data;
      }
    },

    editRoom(id) {
      this.$router.push({ name: "room.update", params: { id: id } });
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
        const response = await this.DeleteRoom(id);
        if (response.code === 200) {
          this.$swal.fire({
            title: "Deleted!",
            text: "Customer has been successfully deleted.",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
        }
        this.getData();
      }
    },
    createAction() {
      this.$router.push({ name: 'room.create' })
    },
  },
  async created() {
    await this.getData();
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
  text-align: start;
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

.action-buttons:hover {
  cursor: pointer;
}
</style>
