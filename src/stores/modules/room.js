import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    state: {
        rooms: [],
    },
    mutations: {
        SET_ROOMS(state, rooms) {
            state.rooms = rooms;
        },
    },
    actions: {
        async GetListRoom(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListRoom,
                params: options
            });
            return response.data;
        },
        async GetRoom(_, entryId) {
            let response = await Vue.axios({
                method: "GET",
                url: api.params("GetRoom", { id: entryId }),
            });
            return response.data;
        },
        async CreateRoom(_, data) {
            let response = await Vue.axios({
                method: "POST",
                url: api.CreateRoom,
                data: data
            });
            return response.data;
        },
        async UpdateRoom(_, data) {
            let response = await Vue.axios({
                method: "PUT",
                url: api.params('UpdateRoom', { id: data.id }),
                data: data
            });
            return response.data;
        },
        async UpdateRoomStatus(_, data) {
            let response = await Vue.axios({
                method: "PUT",
                url: api.params('UpdateRoomStatus', { id: data.id }),
                data: data
            });
            return response.data;
        },
        async DeleteRoom(_, id) {
            let response = await Vue.axios({
                method: "DELETE",
                url: api.params('DeleteRoom', { id: id }),
            })
            return response.data;
        }
    },
    getters: {
        getRooms: (state) => state.rooms,
    }
};
