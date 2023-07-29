import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import store from "./store"
import globalConst from "./utils/global-const"
import Assets from "./utils/assets"
/* import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js" */

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    // You can set your default options here
};
import '@mdi/font/css/materialdesignicons.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.headers.common['Authorization'] = globalConst.authHeader();

let app = createApp(App)
app.config.globalProperties.globalConst = globalConst;
app.config.globalProperties.$assets = Assets;

// Vue.config.productionTip = false
app.use(router).use(store).use(VueAxios, axios).use(VueSweetalert2).use(Toast, options).mount('#app')