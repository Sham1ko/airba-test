<template>
    <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 m-3">
        <div class="card" style="min-height: 28rem;">
            <img :src=drink.strDrinkThumb class="card-img-top" alt="Drink Image">
            <div class="card-body">
                <h5 class="card-title">{{ drink.strDrink }}</h5>
                <p class="card-text">{{ drink.strCategory }}</p>
                <p class="card-text">{{ drink.strAlcoholic }}</p>
                <RouterLink :to="'/' + drink.idDrink" class="btn btn-primary">Ингридиенты</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    props: ['drink']
}
</script>