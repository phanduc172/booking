import Vue from "vue";
import api from "@/api";

export default {
  namespaced: true,
  actions: {
    async GetListFacility(_, options) {
      let response = await Vue.axios({
        method: "GET",
        url: api.GetListFacility,
        params: options
      });
      return response.data;
    },
  },
};
