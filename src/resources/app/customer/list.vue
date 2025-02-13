<template>
    <div class="bg-white vh-100 rounded-4 shadow-sm">
        <c-table>
            <template slot="thead">
                <tr>
                    <th>Name</th>
                    <th>Room Type</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Status</th>
                </tr>
            </template>
            <template slot="tbody">
                <tr>
                    <td>Nguyen Van A</td>
                    <td>Deluxe</td>
                    <td>2025-02-01</td>
                    <td>2025-02-05</td>
                    <td>Confirmed</td>
                </tr>
                <tr>
                    <td>Tran Thi B</td>
                    <td>Standard</td>
                    <td>2025-02-02</td>
                    <td>2025-02-06</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>Le Van C</td>
                    <td>Suite</td>
                    <td>2025-02-03</td>
                    <td>2025-02-07</td>
                    <td>Canceled</td>
                </tr>
            </template>
        </c-table>
    </div>
</template>

<script>
import CTable from '@/components/database/tabledata-custom.vue';

export default {
    name: "CustomerList",
    components: {
        CTable
    }
};
</script>
