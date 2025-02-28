<template>
  <div class="table-container border-3">
    <customer-filters />
    <div class="bg-white custom-table-container shadow-sm rounded-3">
      <c-table>
        <template slot="thead">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Country</th>
            <th>Passport</th>
            <th></th>
          </tr>
        </template>
        <template slot="tbody">
          <tr v-for="(customer, index) in customers" :key="index">
            <td class="text-start">{{ customer.name }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.country }}</td>
            <td>{{ customer.passport }}</td>
            <td>
              <div class="action-buttons">
                <a
                  class="text-primary"
                  @click="showCustomerDetails(customer)"
                  data-bs-toggle="modal"
                  data-bs-target="#customerDetailModal"
                >
                  <i class="bx bx-info-circle fs-4 mx-1"></i>
                </a>
                <a
                  class="text-success"
                  @click="editCustomer(customer.customer_id)"
                >
                  <i class="bx bx-edit fs-4 1"></i>
                </a>
                <a
                  class="text-danger"
                  @click="deleteCustomer(room, customer_id)"
                >
                  <i class="bx bx-trash fs-4 1"></i>
                </a>
              </div>
            </td>
          </tr>
        </template>
      </c-table>
    </div>
  </div>
</template>

<script>
import CTable from "@/components/database/tabledata-custom.vue";
import FilterSearch from "@/components/database/filters/filter-search.vue";
import { formatDate } from "@/core/utils";

import { mapActions } from "vuex";
import CustomerFilters from "./partials/customer-filters.vue";

export default {
  name: "CustomerList",
  components: {
    CTable,
    FilterSearch,
    CustomerFilters,
  },
  data() {
    return {
      customers: [
        {
          customer_id: "1",
          name: "Phan Đức",
          phone: "0383181115",
          email: "phanduc172@gmail.com",
          country: "Viet Nam",
          passport: "132346456",
        },
        {
          id: "2",
          name: "Nguyen Van A",
          phone: "0987654321",
          email: "nguyenvana@gmail.com",
          country: "Viet Nam",
          passport: "6789098765",
        },
      ],
    };
  },
  methods: {
    ...mapActions("customer", ["GetListCustomer"]),

    formatDate,
    async getData() {
      const response = await this.GetListCustomer();
      if (response.status === 200) {
        this.customers = response.data;
      }
    },

    showCustomerDetails(room) {
      this.selectedRoom = room;
    },
    editCustomer(id) {
      this.$router.push({ name: "customers.update", params: { id: id } });
    },
    async deleteCustomer(id) {
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
            "Customer deleted successfully.",
            "success",
            id
          );
          // }
        } catch (error) {
          console.error("Error deleting customer:", error);
          this.$swal.fire("Error!", "Customer deleted failed.", "error");
        }
      }
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
}

.table-row td:nth-child(2),
.table-row td:nth-child(3) {
  min-width: 120px;
}

.table-row td:nth-child(4) {
  min-width: 120px;
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
