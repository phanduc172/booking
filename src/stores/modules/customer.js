import Vue from "vue";
import api from "@/api";

export default {
  namespaced: true,
  state: {
    customers: [],
  },
  mutations: {
    SET_CUSTOMERS(state, customers) {
      state.customers = customers;
    },
  },
  actions: {
    async GetListCustomer() {
      let response = await Vue.axios({
        method: "GET",
        url: api.GetListCustomer,
      });
      return response;
    },
  },
  getters: {
    customers: (state) => state.customers,
  },
};
