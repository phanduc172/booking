import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    state: {
        dateRange: [],
    },
    mutations: {
        SET_DATE_RANGE(state, payload) {
            state.dateRange = payload;
        },
    },
    actions: {
        setDateRange({ commit }, dateRange) {
            commit("SET_DATE_RANGE", dateRange);
        },
        async GetListRoomSearch(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListRoom,
                params: options
            });
            return response.data;
        },
        async GetRoomBooking(_, entryId) {
            let response = await Vue.axios({
                method: "GET",
                url: api.params("GetRoomDetail", { id: entryId }),
            });
            return response.data;
        },
    },
    getters: {
        getDateRange: (state) => state.dateRange,
    },
};
