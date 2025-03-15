import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    state: {
        booking: [],
    },
    mutations: {
        SET_BOOKING(state, booking) {
            state.booking = booking;
        },
    },
    actions: {
        async GetListBooking(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListBooking,
                params: options
            });
            return response.data;
        },
        async GetBooking(_, entryId) {
            let response = await Vue.axios({
                method: "GET",
                url: api.params("GetBooking", { id: entryId }),
            });
            return response.data;
        },
        async CreateBooking(_, data) {
            let response = await Vue.axios({
                method: "POST",
                url: api.CreateBooking,
                data: data
            });
            return response.data;
        },
        // async UpdateRoom(_, data) {
        //     let response = await Vue.axios({
        //         method: "PUT",
        //         url: api.params('UpdateRoom', { id: data.id }),
        //         data: data
        //     });
        //     return response.data;
        // },
        // async DeleteRoom(_, id) {
        //     let response = await Vue.axios({
        //         method: "DELETE",
        //         url: api.params('DeleteRoom', { id: id }),
        //     })
        //     return response.data;
        // }
    },
    getters: {
        getBooking: (state) => state.booking,
    }
};
