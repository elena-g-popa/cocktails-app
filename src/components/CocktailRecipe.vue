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
    ...mapGetters(['getSelectedCocktail']),
    cocktail() {
      return this.getSelectedCocktail;
    },
    ingredients() {
      const ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];
        if (ingredient && measure) {
          ingredients.push(`${ingredient} - ${measure}`);
        } else if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      return ingredients;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 30px;
}

.cocktail-recipe img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

h2 {
  margin-top: 20px;
}

ul {
  margin-left: 20px;
}
</style>
