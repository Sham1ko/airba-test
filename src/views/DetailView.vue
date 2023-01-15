<template>
    <main class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ drink.strDrink }}</li>
            </ol>
        </nav>
        <div class="mt-3">
            <p>Name: {{ drink.strDrink }}</p>
        </div>
    </main>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    mounted() {
        this.getDetailCocktail();
    },
    data() {
        return {
            drink: {}
        };
    },
    methods: {
        async getDetailCocktail() {
            let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`;
            let response = await fetch(url);
            let json = await response.json();
            this.drink = await json.drinks[0];
        }
    },
    components: { RouterLink }
}
</script>

<style>

</style>