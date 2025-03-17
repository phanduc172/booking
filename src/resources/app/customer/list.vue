<template>
  <div class="table-container border-3">
    <div class="bg-white custom-table-container shadow-sm rounded-3 p-4 mb-3">
      <filter-search class="col-12 col-sm-6 col-md-3" :placeholder="'Enter search keyword'" />
    </div>
    <div class="bg-white custom-table-container shadow-sm rounded-3 p-4">
      <div v-if="this.entries.length > 0">
        <div class="d-flex justify-content-end p-3">
          <table-actions :create-action="createAction" />
        </div>
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
            <tr v-for="(customer, index) in entries" :key="index">
              <td class="text-start">{{ customer.name }}</td>
              <td>{{ customer.phone }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.country }}</td>
              <td>{{ customer.passport }}</td>
              <td>
                <div class="action-buttons">
                  <a class="text-success" @click="editCustomer(customer.id)">
                    <i class="bx bx-edit fs-4 1"></i>
                  </a>
                  <a class="text-danger" @click="deleteCustomer(customer.id)">
                    <i class="bx bx-trash fs-4 1"></i>
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
import { formatDate } from "@/core/utils";
import { mapActions } from "vuex";
import CTable from "@/components/database/tabledata-custom.vue";
import FilterSearch from "@/components/database/filters/filter-search.vue";
import CustomerFilters from "./partials/customer-filters.vue";
import TableActions from "@/components/database/table-actions.vue";

export default {
  name: "CustomerList",
  components: {
    CTable,
    FilterSearch,
    CustomerFilters,
    TableActions
  },
  data() {
    return {
      entries: [],
      searchQuery: "",
    };
  },
  watch: {
    '$route.query.search': {
      handler() {
        this.getData();
      }
    }
  },
  methods: {
    ...mapActions("customer", ["GetListCustomer", "DeleteCustomer"]),

    formatDate,

    async getData() {
      let query = this.$route.query.search
      const response = await this.GetListCustomer({ search: query });
      if (response.code === 200) {
        this.entries = response.data;
      }
    },

    editCustomer(id) {
      this.$router.push({ name: "customer.update", params: { id: id } });
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
        const response = await this.DeleteCustomer(id);
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
      this.$router.push({ name: 'customer.create' })
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

.action-buttons:hover {
  cursor: pointer;
}
</style>
