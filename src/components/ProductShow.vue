<template>
  <div id="product" class="container">
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
          v-for="(product, index) in {{ productRoutes }}.products"
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

        <p>
            {{ price}}
        </p>

        <button @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "ProductShow",
//   props: {
//       brand: {
//           type: String,
//           required: true
//       },
//       product: {
//           type: String,
//           required: true
//       },
//       products: Array
//   },
  data() {
    return {
      inStock: true,
      selectedProduct: 0,
      sugarLevel: null,
      cupSize: null,
      toppings: null,
      errors: [],
      price: null
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
          toppings: this.toppings,
          price: this.price
        };
        const productId = this.products[this.selectedProduct].productId
        const payload = {
            orderConfirmation,
            productId
        }
        this.$store.dispatch('addToCart', payload);
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
    },
    updatePrice() {
        if(this.cupSize === 'S' && this.product === 'Bubble Tea') {
            this.price = this.products[this.selectedProduct].priceS
        } else if(this.cupSize === 'M' && this.product === 'Bubble Tea') {
            this.price = this.products[this.selectedProduct].priceM
        } else if(this.cupSize === 'S' && this.product === 'Macchiato') {
            this.price = this.products[this.selectedProduct].priceS
        } else if(this.cupSize === 'M' && this.product === 'Macchiato') {
            this.price = this.products[this.selectedProduct].priceM
        } else if(this.cupSize ==='S' && this.product === 'Latte') {
            this.price = this.products[this.selectedProduct].priceS
        } else {
            this.price = this.products[this.selectedProduct].priceM
        }
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
    },
    ...mapGetters([
        'productRoutes'
    ])
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


