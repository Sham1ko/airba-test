<template>
  <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mb-4">
    <div class="card">
      <img :src="drink.strDrinkThumb" class="card-img-top" alt="Drink Image" />
      <div class="card-body">
        <h5 class="card-title">{{ drink.strDrink }}</h5>
      </div>
      <div class="card-footer">
        <RouterLink :to="'/airba-test/' + drink.idDrink" class="btn btn-primary"
          >Подробнее</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import {RouterLink} from "vue-router";

export default {
  props: ["drink"],
};
</script>
