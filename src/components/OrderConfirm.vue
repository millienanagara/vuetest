<template>
  <div class="container">
    <ProductShow :brand="brand" :product="product" :products="products"></ProductShow>
    <div class="mt-3">
      <p>Cart({{this.$store.state.cart.length}})</p>
      <h2>Order Confirmation</h2>
      <p v-if="!this.$store.state.orderConfirmations.length">There are no orders yet.</p>
      <ol>
        <li
          v-for="confirmation in this.$store.state.orderConfirmations"
          :key="confirmation.productId"
        >
          <p>Sugar Level: {{ confirmation.sugarLevel }}</p>
          <p>Cup Size: {{ confirmation.cupSize }}</p>
          <p>Flavor: {{ confirmation.flavor }}</p>
          <p>Toppings: {{confirmation.toppings}}</p>
          <p>Price: {{confirmation.price}}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import ProductShow from "./ProductShow.vue";

export default {
  name: "OrderConfirm",
  components: {
    ProductShow
  }
  // props: {
  //   brand: {
  //     type: String,
  //     required: true
  //   },
  //   product: {
  //     type: String,
  //     required: true
  //   },
  //   products: Array
  // }
};
</script>

