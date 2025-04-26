import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    state: {
        dateRange: [],
        roomAvailable: [],
    },
    mutations: {
        SET_DATE_RANGE(state, payload) {
            state.dateRange = payload;
        },
        SET_ROOM_AVAILABLE(state, payload) {
            state.roomAvailable = payload;
        },
    },
    actions: {
        setDateRange({ commit }, dateRange) {
            commit("SET_DATE_RANGE", dateRange);
        },
        setRoomAvailable({ commit }, roomAvailable) {
            commit("SET_ROOM_AVAILABLE", roomAvailable);
        },
        async GetRoomAvailble(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetRoomAvailble,
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
        getRoomAvailable: (state) => state.roomAvailable,
    },
};
