<template>
  <div id="product">
    <div class="row">
      <div class="col-12 col-sm-6">
        <img class="h-100 w-100" :src="image" />
      </div>

      <div class="col-12 col-sm-6">
        <p v-if="errors.length">
          <b>Please fill these out:</b>
          <ul>
              <li v-for="error in errors" :key="error">
                {{error}}
              </li>
          </ul>
        </p>
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>{{ detail }}</p>

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

        <p>
          <label for="toppings">Toppings:</label>
          <select id="toppings" v-model="toppings">
            <option>Golden Bubble</option>
            <option>Glass Jelly</option>
            <option>No Toppings</option>
          </select>
        </p>

        <button @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductShow",
  data() {
    return {
      brand: "Koi",
      product: "Bubble Tea",
      inStock: true,
      selectedProduct: 0,
      sugarLevel: null,
      cupSize: null,
      toppings: null,
      errors: [],
      products: [
        {
          productId: 1000,
          productFlavor: "black",
          productColor: "#95240e",
          productImage: "/images/blacktea.jpg",
          productDetails: "black tea"
        },
        {
          productId: 1001,
          productFlavor: "ovaltine",
          productColor: "#88624f",
          productImage: "/images/ovaltinetea.jpg",
          productDetails: "ovaltine tea"
        },
        {
          productId: 1002,
          productFlavor: "milk",
          productColor: "#d9c6af",
          productImage: "/images/milktea.jpg",
          productDetails: "milk tea"
        },
        {
          productId: 1003,
          productFlavor: "jasmine",
          productColor: "#f2b305",
          productImage: "/images/jasminetea.jpg",
          productDetails: "jasmine tea"
        }
      ]
    };
  },
  methods: {
    addToCart() {
      if (this.sugarLevel && this.cupSize && this.toppings) {
        let orderConfirmation = {
          productId: this.products[this.selectedProduct].productId,
          sugarLevel: this.sugarLevel,
          cupSize: this.cupSize,
          flavor: this.products[this.selectedProduct].productFlavor,
          toppings: this.toppings
        };
        this.$emit(
          "add-to-cart",
          this.products[this.selectedProduct].productId,
          orderConfirmation
        );
        this.sugarLevel = null;
        this.cupSize = null;
        this.toppings = null;
      } else {
        if (!this.sugarLevel) {
          this.errors.push("Please fill in your sugar level.");
        }
        if (!this.cupSize) {
          this.errors.push("Please fill in your cup size.");
        }
        if (!this.toppings) {
          this.errors.push("Please fill in your toppings.");
        }
      }
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
};
</script>

<style scoped>
.color-box {
  height: 45px;
  width: 45px;
  margin-bottom: 4px;
}
</style>


