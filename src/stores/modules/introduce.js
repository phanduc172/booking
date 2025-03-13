import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    actions: {
        async GetListRoomSearch(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListRoom,
                params: options
            });
            return response.data;
        },
    },
};
