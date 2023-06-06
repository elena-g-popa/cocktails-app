<template>
  <div class="cocktail-item" @click="goToCocktailRecipe">
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
    <h3>{{ cocktail.strDrink }}</h3>
    <p>{{ cocktail.strCategory }}</p>
  </div>
</template>
  
<script>
  import { mapActions } from "vuex";

  export default {
    props: ["cocktail"],

    methods: {
      // Import the Vuex action to fetch cocktail details by ID
      ...mapActions(["fetchCocktailById"]), 

      goToCocktailRecipe() {
        // Fetch the cocktail details by invoking the Vuex action with the cocktail ID
        this.fetchCocktailById(this.cocktail.idDrink); 
        // Navigate to the "CocktailRecipe" route with the cocktail ID as a parameter
        this.$router.push({
          name: "CocktailRecipe",
          params: { id: this.cocktail.idDrink }, 
        });
      },
    },
  };
</script>

  