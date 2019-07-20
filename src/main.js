import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import OrderConfirm from "./components/OrderConfirm.vue";
import Confirmation from "./components/Confirmation.vue";
import Catalog from "./components/Catalog.vue";
import Home from "./components/Home.vue";
import store from "./store/store";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/confirmation", component: Confirmation },
  { path: "/orderconfirm/:teaname", component: OrderConfirm },
  { path: "/catalog", component: Catalog },
  { path: "/", component: Home }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
