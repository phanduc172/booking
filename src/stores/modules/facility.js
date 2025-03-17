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
    async GetFacility(_, entryId) {
      let response = await Vue.axios({
        method: "GET",
        url: api.params("GetFacility", { id: entryId }),
      });
      return response.data;
    },
    async CreateFacility(_, data) {
      let response = await Vue.axios({
        method: "POST",
        url: api.CreateFacility,
        data: data
      });
      return response.data;
    },
    async UpdateFacility(_, data) {
      let response = await Vue.axios({
        method: "PUT",
        url: api.params('UpdateFacility', { id: data.id }),
        data: data
      });
      return response.data;
    },
    async DeleteFacility(_, id) {
      let response = await Vue.axios({
        method: "DELETE",
        url: api.params('DeleteFacility', { id: id }),
      })
      return response.data;
    }
  },

};
