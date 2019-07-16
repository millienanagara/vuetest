<template>
  <div id="catalog" class="container">
    <h2>KOI</h2>
    <div class="row">
      <div v-for="tea in teaKoi" v-bind:key="tea.id" class="col-12 col-sm-4">
        <router-link :to="tea.teaRoute">
          <div class="card m-4">
            <img class="img-height" :src="tea.teaImage" />
            <div class="card-body">
              <p class="color-black">{{tea.teaType}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  data() {
    return {
      teaBrand: ["KOI", "KAMU"],
      teaKoi: [
        {
          id: 1,
          teaType: "Macchiato",
          teaImage: "/images/blackmac.jpg",
          teaRoute: "/orderkoimacchiato"
        },
        {
          teaType: "Bubble Tea",
          teaImage: "/images/blacktea.jpg",
          teaRoute: "/orderkoibubble"
        },
        {
          id: 2,
          teaType: "Latte",
          teaImage: "/images/blacklatte.jpg",
          teaRoute: "/orderkoilatte"
        }
      ],
      teaKamu: [
        {
          id: 3,
          teaType: "Macchiato",
          teaImage: "/images/blackmac.jpg",
          teaRoute: "/orderconfirm"
        },
        {
          id: 4,
          teaType: "Bubble Tea",
          teaImage: "/images/blacktea.jpg",
          teaRoute: "/orderconfirm"
        },
        {
          id: 5,
          teaType: "Latte",
          teaImage: "/images/blacklatte.jpg",
          teaRoute: "/orderconfirm"
        }
      ]
    };
  }
};
</script>

<style scoped>
.img-height {
  height: 400px;
  object-fit: cover;
}

.color-black {
  color: black;
}
</style>

