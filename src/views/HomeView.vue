<template>
  <main class="container">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Введите название коктейля" aria-label="Username"
        aria-describedby="basic-addon1" v-model="nameCocktail" />
      <button @click="getData()" type="button" class="btn btn-success">Поиск</button>
    </div>
    <div class="row">
      <cocktail-card v-for="item in this.data.drinks" :drink="item" />
    </div>
  </main>
</template>

<script>
import CocktailCard from "@/components/CocktailCard.vue"

export default {
  data() {
    return {
      data: {
        drinks: {}
      },
      nameCocktail: ''
    }
  },
  methods: {
    async getData() {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.nameCocktail}`
      let response = await fetch(url)
      this.data = await response.json()
    }
  },
  components: { CocktailCard }
}
</script>