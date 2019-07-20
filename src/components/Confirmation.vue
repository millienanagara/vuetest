<template>
  <div class="container">
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
export default {
  name: "Confirmation"
};
</script>