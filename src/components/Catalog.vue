<template>
  <div id="catalog" class="container">
    <h2>KOI</h2>
    <div class="row">
      <div v-for="tea in teaKoi" :key="tea" class="col-12 col-sm-4">
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
          teaType: "Latte",
          teaImage: "/images/blacklatte.jpg",
          teaRoute: "/orderkoilatte"
        }
      ],
      teaKamu: [
        {
          teaType: "Macchiato",
          teaImage: "/images/blackmac.jpg",
          teaRoute: "/orderconfirm"
        },
        {
          teaType: "Bubble Tea",
          teaImage: "/images/blacktea.jpg",
          teaRoute: "/orderconfirm"
        },
        {
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

