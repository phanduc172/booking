import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    actions: {
        async GetMonthlyRevenue(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetMonthlyRevenue,
                params: options
            });
            return response.data;
        },
        async GetStatiscRoom(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetStatiscRoom,
                params: options
            });
            return response.data;
        },
        async GetStatiscStatus(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetStatiscStatus,
                params: options
            });
            return response.data;
        },
        async GetStatiscBookingDate(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetStatiscBookingDate,
                params: options
            });
            return response.data;
        },
    },
};
