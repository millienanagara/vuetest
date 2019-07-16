<template>
  <div id="catalog">
    <h2>KOI</h2>
    <div class="row">
      <div v-for="tea in teas" :key="tea" class="col-12 col-sm-4">
        <div class="card">
          <img :src="tea.teaImage" />
          <div class="card-body">
            <p>{{tea.teaType}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  data() {
    return {
      teaBrand: "KOI",
      teas: [
        {
          teaType: "Macchiato",
          teaImage: "/images/blackmac.jpg"
        },
        {
          teaType: "Bubble Tea",
          teaImage: "/images/blacktea.jpg"
        },
        {
          teaType: "Latte",
          teaImage: "/images/blacklatte.jpg"
        }
      ]
    };
  }
};
</script>
