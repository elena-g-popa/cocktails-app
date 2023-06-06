<template>
  <div v-if="cocktail" class="cocktail-recipe">
    <h1>{{ cocktail.strDrink }}</h1>
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
    <h2>Instructions:</h2>
    <p>{{ cocktail.strInstructions }}</p>
    <h2>Ingredients:</h2>
    <ul>
      <li v-for="i in ingredients" :key="i">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      // Import the Vuex getter to retrieve the selected cocktail
      ...mapGetters(['getSelectedCocktail']),
      // Get the selected cocktail from the Vuex store
      cocktail() {
        return this.getSelectedCocktail; 
      },

      ingredients() {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient = this.cocktail[`strIngredient${i}`]; // Get the ingredient value from the cocktail object
          const measure = this.cocktail[`strMeasure${i}`]; // Get the measurement value from the cocktail object
          if (ingredient && measure) {
            ingredients.push(`${ingredient} - ${measure}`); // Combine the ingredient and measurement and add to the ingredients array
          } else if (ingredient) {
            ingredients.push(ingredient); // Add the ingredient to the ingredients array
          }
        }
        return ingredients; // Return the array of ingredients
      },
    },
  };
</script>
