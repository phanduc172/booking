import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import modules from './modules/_bootstrap';

const store = new Vuex.Store({
    modules,
    // Enable strict mode in development to get a warning
    // when mutating state outside of a mutation.
    // https://vuex.vuejs.org/guide/strict.html
    strict: process.env.NODE_ENV !== 'production',
});

Vue.prototype.$store = store;

export default store;
