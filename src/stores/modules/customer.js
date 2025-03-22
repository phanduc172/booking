import Vue from "vue";
import api from "@/api";

export default {
  namespaced: true,
  state: {
    customer: [],
  },
  mutations: {
    SET_CUSTOMERS(state, customer) {
      state.customer = customer;
    },
  },
  actions: {
    async GetListCustomer(_, options) {
      let response = await Vue.axios({
        method: "GET",
        url: api.GetListCustomer,
        params: options
      });
      return response.data;
    },
    async GetCustomer(_, entryId) {
      let response = await Vue.axios({
        method: "GET",
        url: api.params("GetCustomer", { id: entryId }),
      });
      return response.data;
    },
    async CreateCustomer(_, data) {
      let response = await Vue.axios({
        method: "POST",
        url: api.CreateCustomer,
        data: data
      });
      return response.data;
    },
    async UpdateCustomer(_, data) {
      let response = await Vue.axios({
        method: "PUT",
        url: api.params('UpdateCustomer', { id: data.id }),
        data: data
      });
      return response.data;
    },
    async DeleteCustomer(_, id) {
      let response = await Vue.axios({
        method: "DELETE",
        url: api.params('DeleteCustomer', { id: id }),
      })
      return response.data;
    }
  },
  getters: {
    customer: (state) => state.customer,
  },
};
