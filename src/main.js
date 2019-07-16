import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import OrderConfirm from "./components/OrderConfirm.vue";
import Catalog from "./components/Catalog.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: "/orderconfirm", component: OrderConfirm },
  { path: "/catalog", component: Catalog }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
