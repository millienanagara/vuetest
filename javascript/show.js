var app = new Vue({
  el: "#app",
  data: {
    cart: [],
    orderConfirmations: []
  },
  methods: {
    updateCart(id, confirmation) {
      this.cart.push(id);
      this.orderConfirmations.push(confirmation);
    }
  }
});

Vue.component("product", {
  template: `<div id="product">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <ul>
        <li>{{ detail }}</li>
      </ul>

      <div
        class="color-box"
        v-for="(product, index) in products"
        :key="product.productId"
        :style="{ backgroundColor: product.productColor }"
        @mouseover="updateProduct(index)"
      ></div>

      <p>
        <label for="sugarLevel">Sugar Level:</label>
        <select id="sugarLevel" v-model="sugarLevel">
          <option>0%</option>
          <option>25%</option>
          <option>50%</option>
          <option>75%</option>
          <option>100%</option>
        </select>
      </p>

      <p>
        <label for="cupSize">Cup Size:</label>
        <select id="cupSize" v-model="cupSize">
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
      </p>

      <button @click="addToCart">
        Add to cart
      </button>
    </div>

  </div>`,
  data() {
    return {
      brand: "Koi",
      product: "Bubble Tea",
      inStock: true,
      selectedProduct: 0,
      sugarLevel: null,
      cupSize: null,
      products: [
        {
          productId: 1000,
          productFlavor: "black",
          productColor: "#95240e",
          productImage: "../images/blacktea.jpg",
          productDetails: "black tea"
        },
        {
          productId: 1001,
          productFlavor: "ovaltine",
          productColor: "#88624f",
          productImage: "../images/ovaltinetea.jpg",
          productDetails: "ovaltine tea"
        },
        {
          productId: 1002,
          productFlavor: "milk",
          productColor: "#d9c6af",
          productImage: "../images/milktea.jpg",
          productDetails: "milk tea"
        },
        {
          productId: 1003,
          productFlavor: "jasmine",
          productColor: "#f2b305",
          productImage: "../images/jasminetea.jpg",
          productDetails: "jasmine tea"
        }
      ]
    };
  },
  methods: {
    addToCart() {
      let orderConfirmation = {
        sugarLevel: this.sugarLevel,
        cupSize: this.cupSize,
        flavor: this.products[this.selectedProduct].productFlavor
      };
      this.$emit(
        "add-to-cart",
        this.products[this.selectedProduct].productId,
        orderConfirmation
      );
      this.sugarLevel = null;
      this.cupSize = null;
    },
    updateProduct(index) {
      this.selectedProduct = index;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.products[this.selectedProduct].productImage;
    },
    detail() {
      return this.products[this.selectedProduct].productDetails;
    }
  }
});
