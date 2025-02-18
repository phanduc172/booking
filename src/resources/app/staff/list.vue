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
                        <th>Position</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Shift</th>
                        <th>Salary</th>
                        <th>Hire Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </template>
                <template slot="tbody">
                    <tr v-for="(staff, index) in staffs" :key="index">
                        <td class="text-start">{{ staff.name }}</td>
                        <td>{{ staff.position }}</td>
                        <td class="text-start">{{ staff.email }}</td>
                        <td>{{ staff.phone }}</td>
                        <td>{{ staff.shift }}</td>
                        <td>{{ staff.salary }}$</td>
                        <td>{{ formatDate(staff.hire_date) }}</td>
                        <td>{{ staff.status }}</td>
                        <td>
                            <div class="action-buttons">
                                <a class="text-primary" @click="showstaffDetails(staff)" data-bs-toggle="modal"
                                    data-bs-target="#staffDetailModal">
                                    <i class="bx bx-info-circle fs-4 mx-1"></i>
                                </a>
                                <a class="text-success" @click="editstaff(staff.staff_id)">
                                    <i class="bx bx-edit fs-4 1"></i>
                                </a>
                                <a class="text-danger" @click="deletestaff(room, staff_id)">
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
    name: 'StaffList',
    components: {
        CTable,
        FilterSearch,
    },
    data() {
        return {
            staffs: [
                {
                    staff_id: "S001",
                    name: "Tran Van B",
                    position: "Lễ tân",
                    email: "tranvanb@example.com",
                    phone: "0912345678",
                    shift: "Ca sáng",
                    salary: 1200,
                    hire_date: "2025-01-07T12:15:00Z",
                    status: "Đang làm việc"
                },
                {
                    staff_id: "S002",
                    name: "Le Thi C",
                    position: "Buồng phòng",
                    email: "lethic@example.com",
                    phone: "0923456789",
                    shift: "Ca chiều",
                    salary: 1000,
                    hire_date: "2025-01-07T12:15:00Z",
                    status: "Đang làm việc"
                },
                {
                    staff_id: "S003",
                    name: "Nguyen Van D",
                    position: "Quản lý",
                    email: "nguyenvand@example.com",
                    phone: "0934567890",
                    shift: "Toàn thời gian",
                    salary: 2500,
                    hire_date: "2025-01-07T12:15:00Z",
                    status: "Đang làm việc"
                },
                {
                    staff_id: "S004",
                    name: "Pham Thi E",
                    position: "Bảo vệ",
                    email: "phamthie@example.com",
                    phone: "0945678901",
                    shift: "Ca đêm",
                    salary: 900,
                    hire_date: "2025-01-07T12:15:00Z",
                    status: "Đang làm việc"
                },
                {
                    staff_id: "S005",
                    name: "Hoang Van F",
                    position: "Kỹ thuật viên",
                    email: "hoangvanf@example.com",
                    phone: "0956789012",
                    shift: "Ca ngày",
                    salary: 1500,
                    hire_date: "2025-01-07T12:15:00Z",
                    status: "Nghỉ việc"
                }
            ]
        }
    },
    methods: {
        formatDate,
    }
}
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
