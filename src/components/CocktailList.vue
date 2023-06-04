<template>
  <h1>Welcome to Vodafone's Bar</h1>
  <div>
    <h2>Random Cocktails</h2>
    <div class="cocktail-list">
      <CocktailItem
        v-for="cocktail in getRandomCocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
  <div>
    <h2>Search Cocktails</h2>
    <div class="search-bar">
      <input type="text" v-model="searchTerm" placeholder="Search cocktails" />
      <button @click="searchCocktails">Search</button>
    </div>
    <div class="cocktail-list">
      <CocktailItem
        v-for="cocktail in getCocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CocktailItem from './CocktailItem.vue';

export default {
  components: {
    CocktailItem,
  },
  data() {
    return {
      // Holds the search term entered by the user
      searchTerm: '', 
    };
  },
  mounted() {
    // Fetches random cocktails when the component is mounted
    this.fetchRandomCocktails(); 
  },
  computed: {
    // Maps the getters to component's computed properties
    ...mapGetters(['getCocktails', 'getRandomCocktails']),
  },
  methods: {
    // Maps the actions to component's methods
    ...mapActions(['fetchCocktailsBySearch', 'fetchRandomCocktails']),
    // Search fn for cocktail lookup by user 
    searchCocktails() {
      this.fetchCocktailsBySearch(this.searchTerm);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 30px;
}

.search-bar {
  margin-bottom: 20px;
}

.cocktail-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
