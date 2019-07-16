<template>
  <div>
    <ProductShow @add-to-cart="updateCart"></ProductShow>
    <div class="mt-3">
      <p>Cart({{cart.length}})</p>
      <h2>Order Confirmation</h2>
      <p v-if="!orderConfirmations.length">There are no orders yet.</p>
      <ol>
        <li v-for="confirmation in orderConfirmations" :key="confirmation.productId">
          <p>Sugar Level: {{ confirmation.sugarLevel }}</p>
          <p>Cup Size: {{ confirmation.cupSize }}</p>
          <p>Flavor: {{ confirmation.flavor }}</p>
          <p>Toppings: {{confirmation.toppings}}</p>
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
  },
  data() {
    return {
      cart: [],
      orderConfirmations: []
    };
  },
  methods: {
    updateCart(id, confirmation) {
      this.cart.push(id);
      this.orderConfirmations.push(confirmation);
    }
  }
};
</script>

