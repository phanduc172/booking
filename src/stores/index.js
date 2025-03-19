import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import modules from './modules/_bootstrap';
import customer from './modules/customer';
import room from './modules/room';
import roomType from './modules/room_type';
import service from './modules/service';
import status from './modules/status';
import auth from './modules/auth';
import facility from './modules/facility';
import statisc from './modules/statisc';

const store = new Vuex.Store({
    modules,
    customer,
    room,
    roomType,
    service,
    status,
    auth,
    facility,
    statisc,
    // Enable strict mode in development to get a warning
    // when mutating state outside of a mutation.
    // https://vuex.vuejs.org/guide/strict.html
    strict: process.env.NODE_ENV !== 'production',
});

Vue.prototype.$store = store;

export default store;
