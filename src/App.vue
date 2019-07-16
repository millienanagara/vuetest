<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import NavBar from "./components/NavBar.vue";
import OrderConfirm from "./components/OrderConfirm.vue";
import Catalog from "./components/Catalog.vue";

const routes = [
  { path: "/orderconfirm", component: OrderConfirm },
  { path: "/catalog", component: Catalog }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount("#app");

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
