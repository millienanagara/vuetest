import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(Vuex);

const state = {
  cart: [],
  orderConfirmations: [],
  teaKoiBubble: {
    brand: "Koi",
    product: "Bubble Tea",
    products: [
      {
        productId: 1000,
        productFlavor: "black",
        productColor: "#95240e",
        productImage: "/images/blacktea.jpg",
        productDetails: "black tea",
        priceS: 55,
        priceM: 75
      },
      {
        productId: 1001,
        productFlavor: "ovaltine",
        productColor: "#88624f",
        productImage: "/images/ovaltinetea.jpg",
        productDetails: "ovaltine tea",
        priceS: 70,
        priceM: 90
      },
      {
        productId: 1002,
        productFlavor: "milk",
        productColor: "#d9c6af",
        productImage: "/images/milktea.jpg",
        productDetails: "milk tea",
        priceS: 60,
        priceM: 80
      },
      {
        productId: 1003,
        productFlavor: "jasmine",
        productColor: "#f2b305",
        productImage: "/images/jasminetea.jpg",
        productDetails: "jasmine tea",
        priceS: 55,
        priceM: 75
      }
    ]
  },
  teaKoiMacchiato: {
    brand: "Koi",
    product: "Macchiato",
    products: [
      {
        productId: 1004,
        productFlavor: "ovaltine",
        productColor: "#4b2c2a",
        productImage: "/images/ovaltinemac.jpg",
        productDetails: "ovaltine macchiato",
        priceS: 85,
        priceM: 105
      },
      {
        productId: 1005,
        productFlavor: "green",
        productColor: "#554f12",
        productImage: "/images/greenmac.jpg",
        productDetails: "matcha macchiato",
        priceS: 75,
        priceM: 95
      },
      {
        productId: 1006,
        productFlavor: "black",
        productColor: "#952813",
        productImage: "/images/blackmac.jpg",
        productDetails: "black macchiato",
        priceS: 60,
        priceM: 80
      }
    ]
  },
  teaKoiLatte: {
    brand: "Koi",
    product: "Latte",
    products: [
      {
        productId: 1007,
        productFlavor: "black",
        productColor: "#9b4126",
        productImage: "/images/blacklatte.jpg",
        productDetails: "Black Tea Latte",
        priceS: 70,
        priceM: 90
      },
      {
        productId: 1008,
        productFlavor: "jasmine",
        productColor: "#f6b13a",
        productImage: "/images/jasminelatte.jpg",
        productDetails: "Jasmine Tea Latte",
        priceS: 70,
        priceM: 90
      },
      {
        productId: 1009,
        productFlavor: "green",
        productColor: "#4d4922",
        productImage: "/images/greenlatte.jpg",
        productDetails: "Matcha Latte",
        priceS: 80,
        priceM: 100
      }
    ]
  }
};

const mutations = {
  incrementCart(state, payload) {
    state.cart.push(payload.productId);
  },
  incrementConfirmation(state, payload) {
    state.orderConfirmations.push(payload.orderConfirmation);
  }
  // decrementCart(state) {
  //   state.cart.filter();
  // }
};

const actions = {
  addToCart(context, payload) {
    context.commit("incrementCart", payload);
    context.commit("incrementConfirmation", payload);
  },
  removeFromCart(context) {
    context.commit("decrementCart");
    context.commit("decrementConfirmation");
  }
};

const getters = {
  productRoutes(state) {
    if (this.$route.param.teaname === "teakoibubble") {
      return state.teaKoiBubble;
    } else if (this.$route.param.teaname === "teakoimacchiato") {
      return state.teaKoiMacchiato;
    } else if (this.$route.param.teaname === "teakoilatte") {
      return state.teaKoiLatte;
    } else {
      return null;
    }
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
