import Vue from "vue";
import api from "@/api";

export default {
  namespaced: true,
  state: {
    staff: [],
  },
  mutations: {
    SET_STAFFS(state, staff) {
      state.staff = staff;
    },
  },
  actions: {
    async GetListStaff(_, options) {
      let response = await Vue.axios({
        method: "GET",
        url: api.GetListStaff,
        params: options
      });
      return response.data;
    },
    async GetStaff(_, entryId) {
      let response = await Vue.axios({
        method: "GET",
        url: api.params("GetStaff", { id: entryId }),
      });
      return response.data;
    },
    async CreateStaff(_, data) {
      let response = await Vue.axios({
        method: "POST",
        url: api.CreateStaff,
        data: data
      });
      return response.data;
    },
    async UpdateStaff(_, data) {
      let response = await Vue.axios({
        method: "PUT",
        url: api.params('UpdateStaff', { id: data.id }),
        data: data
      });
      return response.data;
    },
    async DeleteStaff(_, id) {
      let response = await Vue.axios({
        method: "DELETE",
        url: api.params('DeleteStaff', { id: id }),
      })
      return response.data;
    }
  },
  getters: {
    customer: (state) => state.staff,
  },
};
