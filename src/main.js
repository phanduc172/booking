import Vue from 'vue';
import App from './App.vue';

import router from './core/router'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'boxicons/css/boxicons.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VuePageTransition from "vue-page-transition";
import VueApexCharts from 'vue-apexcharts';

library.add(faBars);

Vue.component('apex-chart', VueApexCharts);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VuePageTransition);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
