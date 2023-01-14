<template>
  <main>
    <div class="input-group mb-3 d-flex">
      <input type="text" class="form-control" placeholder="Введите название коктейля" aria-label="Username"
        aria-describedby="basic-addon1" v-model="nameCocktail" />
      <button @click="getData()" type="button" class="btn btn-success">Поиск</button>
      <div v-if="this.data">{{ this.data.drinks[0].strDrink }}</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      nameCocktail: ''
    }
  },
  methods: {
    async getData() {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.nameCocktail}`
      let response = await fetch(url)
      let json = await response.json()
      this.data = json
      console.log(this.data.drinks[0].strDrink)
    }
  }
}
</script>