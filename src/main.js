import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store';
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";
import "./style.css";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueMoment from 'vue-moment';
const moment = require('moment');

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueCookies)
Vue.use(VueMoment, {
    moment
});
new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app')