<template>
  <main class="home-view container">
    <div
      class="search-logo w-75 mx-auto text-white fs-1 text-center mb-5 fw-bold">
      Search Cocktail
    </div>
    <div class="search w-75 mx-auto mb-5">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Введите название коктейля"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="nameCocktail" />
      </div>
      <div class="search-buttons w-100 d-flex justify-content-center">
        <div class="gx-5">
          <button @click="getData()" type="button" class="btn btn-success mx-2">
            Поиск
          </button>
          <button
            @click="randomCocktail()"
            type="button"
            class="btn btn-primary mx-2">
            Рандом
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <cocktail-card v-for="item in this.data.drinks" :drink="item" />
    </div>
  </main>
</template>

<script>
import CocktailCard from "@/components/CocktailCard.vue";

export default {
  data() {
    return {
      data: {
        drinks: {},
      },
      nameCocktail: "",
    };
  },
  methods: {
    async getData() {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.nameCocktail}`;
      let response = await fetch(url);
      this.data = await response.json();
    },
    async randomCocktail() {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
      let response = await fetch(url);
      let randomDrink = await response.json();
      this.$router.push(`/airba-test/${randomDrink.drinks[0].idDrink}`);
    },
  },
  components: {CocktailCard},
};
</script>

<style>
.home-view {
  margin-top: 22vh;
}
</style>
