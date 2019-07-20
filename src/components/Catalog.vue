<template>
  <div id="catalog" class="container">
    <h2>KOI</h2>
    <div class="row">
<<<<<<< HEAD
      <div v-for="tea in teaKoi" v-bind:key="tea.id" class="col-12 col-sm-4">
=======
      <div v-for="tea in teaKoi" :key="tea.teaId" class="col-12 col-sm-4">
>>>>>>> 727cfda... no errors
        <router-link :to="tea.teaRoute">
          <div class="card m-4">
            <img class="img-height" :src="tea.teaImage" />
            <div class="card-body">
              <p class="color-black">{{tea.teaType}}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div v-for="tea in teaKamu" :key="tea.teaId" class="col-12 col-sm-4">
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
<<<<<<< HEAD
          id: 1,
=======
          teaId: 100,
>>>>>>> 727cfda... no errors
          teaType: "Macchiato",
          teaImage: "/images/blackmac.jpg",
          teaRoute: "/orderconfirm/teakoimacchiato"
        },
        {
          teaId: 101,
          teaType: "Bubble Tea",
          teaImage: "/images/blacktea.jpg",
          teaRoute: "/orderconfirm/teakoibubble"
        },
        {
<<<<<<< HEAD
          id: 2,
=======
          teaId: 102,
>>>>>>> 727cfda... no errors
          teaType: "Latte",
          teaImage: "/images/blacklatte.jpg",
          teaRoute: "/orderconfirm/teakoilatte"
        }
      ],
      teaKamu: [
        {
<<<<<<< HEAD
          id: 3,
=======
          teaId: 103,
>>>>>>> 727cfda... no errors
          teaType: "Macchiato",
          teaImage: "/images/blackmac.jpg",
          teaRoute: "/orderconfirm"
        },
        {
<<<<<<< HEAD
          id: 4,
=======
          teaId: 104,
>>>>>>> 727cfda... no errors
          teaType: "Bubble Tea",
          teaImage: "/images/blacktea.jpg",
          teaRoute: "/orderconfirm"
        },
        {
<<<<<<< HEAD
          id: 5,
=======
          teaId: 105,
>>>>>>> 727cfda... no errors
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

