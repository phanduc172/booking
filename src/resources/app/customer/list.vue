<template>
    <div class="table-container border-3">
        <div class="bg-white custom-table-container shadow-sm rounded-3 p-4 mb-3">
            <filter-search class="col-3" :placeholder="'Nhập từ khóa tìm kiếm'" />
        </div>
        <div class="bg-white custom-table-container shadow-sm rounded-3">
            <c-table>
                <template slot="thead">
                    <tr>
                        <th>Name</th>
                        <th>Room Type</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </template>
                <template slot="tbody">
                    <tr v-for="(customer, index) in customers" :key="index">
                        <td class="text-start">{{ customer.name }}</td>
                        <td>{{ customer.roomType }}</td>
                        <td>{{ formatDate(customer.checkIn) }}</td>
                        <td>{{ formatDate(customer.checkOut) }}</td>
                        <td class="p-3">
                            <b-button size="sm" class="text-nowrap px-3 py-2 rounded-pill shadow-sm" :variant="customer.status === 'Confirmed' ? 'outline-success' :
                                customer.status === 'Pending' ? 'outline-primary' : 'outline-danger'">
                                <i :class="customer.status === 'Confirmed' ? 'fas fa-check-circle' :
                                    customer.status === 'Pending' ? 'fas fa-exclamation-circle' : 'fas fa-times-circle'"
                                    class="mr-1"></i>
                                {{ customer.status }}
                            </b-button>
                        </td>
                        <td>
                            <div class="action-buttons">
                                <a class="text-primary" @click="showCustomerDetails(customer)" data-bs-toggle="modal"
                                    data-bs-target="#customerDetailModal">
                                    <i class="bx bx-info-circle fs-4 mx-1"></i>
                                </a>
                                <a class="text-success" @click="editCustomer(customer.customer_id)">
                                    <i class="bx bx-edit fs-4 1"></i>
                                </a>
                                <a class="text-danger" @click="deleteCustomer(room, customer_id)">
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
import CTable from '@/components/database/tabledata-custom.vue';
import FilterSearch from '@/components/database/filters/filter-search.vue';
import { formatDate } from "@/core/utils";


export default {
    name: "CustomerList",
    components: {
        CTable,
        FilterSearch,
    },
    data() {
        return {
            customers: [
                { customer_id: '1', name: "Nguyen Van A", roomType: "Deluxe", checkIn: "2025-02-01", checkOut: "2025-01-07T12:15:00Z", status: "Confirmed" },
                { customer_id: '2', name: "Tran Thi B", roomType: "Standard", checkIn: "2025-02-02", checkOut: "2025-01-07T12:15:00Z", status: "Pending" },
                { customer_id: '3', name: "Le Van C", roomType: "Suite", checkIn: "2025-02-03", checkOut: "2025-01-07T12:15:00Z", status: "Canceled" }
            ]
        };
    },
    methods: {
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
                    this.$swal.fire("Deleted!", "Room deleted successfully.", "success", id);
                    // }
                } catch (error) {
                    console.error("Error deleting room:", error);
                    this.$swal.fire("Error!", "Room deleted failed.", "error");
                }
            }
        },
        formatDate,
    }
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
