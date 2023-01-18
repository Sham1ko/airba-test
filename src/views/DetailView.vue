<template>
  <main class="details-view container bg-light rounded">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 p-5">
        <img
          :src="drink.strDrinkThumb"
          class="img-thumbnail"
          alt="Drink Image" />
      </div>
      <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 p-5">
        <h3 class="fw-bold">{{ drink.strDrink }}</h3>
        <p>Категория: {{ drink.strCategory }}</p>
        <p>Алкогольность: {{ drink.strAlcoholic }}</p>
        <h4>Ингридиенты</h4>
        <ul>
          <li v-if="drink.strIngredient1">
            {{ drink.strIngredient1 }} - {{ drink.strMeasure1 }}
          </li>
          <li v-if="drink.strIngredient2">
            {{ drink.strIngredient2 }} - {{ drink.strMeasure2 }}
          </li>
          <li v-if="drink.strIngredient3">
            {{ drink.strIngredient3 }} - {{ drink.strMeasure3 }}
          </li>
          <li v-if="drink.strIngredient4">
            {{ drink.strIngredient4 }} - {{ drink.strMeasure4 }}
          </li>
          <li v-if="drink.strIngredient5">
            {{ drink.strIngredient5 }} - {{ drink.strMeasure5 }}
          </li>
          <li v-if="drink.strIngredient6">
            {{ drink.strIngredient6 }} - {{ drink.strMeasure6 }}
          </li>
          <li v-if="drink.strIngredient7">
            {{ drink.strIngredient7 }} - {{ drink.strMeasure7 }}
          </li>
          <li v-if="drink.strIngredient8">
            {{ drink.strIngredient8 }} - {{ drink.strMeasure8 }}
          </li>
          <li v-if="drink.strIngredient9">
            {{ drink.strIngredient9 }} - {{ drink.strMeasure9 }}
          </li>
          <li v-if="drink.strIngredient10">
            {{ drink.strIngredient10 }} - {{ drink.strMeasure10 }}
          </li>
          <li v-if="drink.strIngredient11">
            {{ drink.strIngredient11 }} - {{ drink.strMeasure11 }}
          </li>
          <li v-if="drink.strIngredient12">
            {{ drink.strIngredient12 }} - {{ drink.strMeasure12 }}
          </li>
          <li v-if="drink.strIngredient13">
            {{ drink.strIngredient13 }} - {{ drink.strMeasure13 }}
          </li>
          <li v-if="drink.strIngredient14">
            {{ drink.strIngredient14 }} - {{ drink.strMeasure14 }}
          </li>
          <li v-if="drink.strIngredient15">
            {{ drink.strIngredient15 }} - {{ drink.strMeasure15 }}
          </li>
        </ul>
        <h4>Инструкция по приготовлению</h4>
        <p>{{ drink.strInstructions }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import {RouterLink} from "vue-router";

export default {
  mounted() {
    this.getDetailCocktail();
  },
  data() {
    return {
      drink: {},
    };
  },
  methods: {
    async getDetailCocktail() {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`;
      let response = await fetch(url);
      let json = await response.json();
      this.drink = await json.drinks[0];
    },
  },
  components: {RouterLink},
};
</script>

<style></style>
