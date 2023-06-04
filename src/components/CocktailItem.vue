<template>
    <div class="cocktail-item" @click="goToCocktailRecipe">
      <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
      <h2>{{ cocktail.strDrink }}</h2>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    props: ['cocktail'],
    methods: {
      ...mapActions(['fetchCocktailById']),
      goToCocktailRecipe() {
        this.fetchCocktailById(this.cocktail.idDrink);
        this.$router.push({ name: 'CocktailRecipe', params: { id: this.cocktail.idDrink } });
      },
    },
  };
  </script>
  
  <style scoped>
  .cocktail-item {
    width: 200px;
    margin: 10px;
    cursor: pointer;
  }
  
  .cocktail-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .cocktail-item h2 {
    margin-top: 10px;
  }
  </style>
  