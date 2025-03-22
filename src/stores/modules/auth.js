import Vue from "vue";
import api from "@/api";

export default {
    namespaced: true,
    actions: {
        async Login(_, data) {
            let response = await Vue.axios({
                method: "POST",
                url: api.Login,
                data: data
            });
            return response.data;
        },
    }
};
