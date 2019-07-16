<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="index.html">
      <img
        src="images/mecodeGrayscaleLogo.svg"
        width="150"
        height="50"
        class="d-inline-block mx-4"
        alt
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#myNavbar"
      aria-controls="#myNavbar"
      aria-expanded="false"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="navbar-nav ml-auto align-items-center">
        <li class="nav-item">
          <router-link class="nav-link color-white" to="/home">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link color-white" to="/catalog">CATALOG</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link color-white" to="/koi">KOI</router-link>
        </li>
        <li class="nav-item">
          <div class="border-right mx-2 color-white"></div>
        </li>
        <li class="nav-item">
          <p class="nav-link color-white no-margin">ENG</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default {
  name: "NavBar"
};
</script>

<style scoped>
.border-right {
  height: 45px;
}

.no-margin {
  margin: 0;
}
</style>


