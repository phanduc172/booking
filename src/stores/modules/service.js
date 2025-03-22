import Vue from "vue";
import api from "@/api";

export default {
  namespaced: true,
  state: {
    service: [],
  },
  actions: {
    async GetListService(_, options) {
      let response = await Vue.axios({
        method: "GET",
        url: api.GetListService,
        params: options
      });
      return response.data;
    },
    async GetService(_, entryId) {
      let response = await Vue.axios({
        method: "GET",
        url: api.params("GetService", { id: entryId }),
      });
      return response.data;
    },
    async CreateService(_, data) {
      let response = await Vue.axios({
        method: "POST",
        url: api.CreateService,
        data: data
      });
      return response.data;
    },
    async UpdateService(_, data) {
      let response = await Vue.axios({
        method: "PUT",
        url: api.params('UpdateService', { id: data.id }),
        data: data
      });
      return response.data;
    },
    async DeleteService(_, id) {
      let response = await Vue.axios({
        method: "DELETE",
        url: api.params('DeleteService', { id: id }),
      })
      return response.data;
    }
  },
};
