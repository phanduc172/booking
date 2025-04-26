import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    state: {
        roomtype: [],
    },
    actions: {
        async GetListRoomType(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListRoomType,
                params: options
            });
            return response.data;
        },
    },
};
