import Vue from 'vue';
import App from './App.vue';
import router from './core/router';
import store from './stores';

import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VuePageTransition from 'vue-page-transition';
import VueApexCharts from 'vue-apexcharts';
import DatePicker from "vue2-datepicker";
import moment from "moment";

import axios from 'axios';
import VueAxios from 'vue-axios';
import plugins from "./plugins";

import { prototype } from './core/prototype'



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'boxicons/css/boxicons.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import "vue2-datepicker/index.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Swal from 'sweetalert2';

library.add(faBars);

Vue.component('apex-chart', VueApexCharts);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component("DatePicker", DatePicker);

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(VuePageTransition);
Vue.use(VueAxios, axios);
Vue.use(plugins);
Vue.use(prototype)


Vue.prototype.$swal = Swal;
Vue.prototype.$moment = moment;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
