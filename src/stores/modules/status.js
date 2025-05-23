import Vue from "vue";
import api from "@/api";

export default {
  namespaced: true,
  actions: {
    async GetListStatus(_, options) {
      let response = await Vue.axios({
        method: "GET",
        url: api.GetListStatus,
        params: options
      });
      return response.data;
    },
  },
};
