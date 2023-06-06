import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    cocktails: [],
    selectedCocktail: null,
    randomCocktails: [],
  },
  mutations: {
    // Set the cocktails in the state
    SET_COCKTAILS(state, cocktails) {
      state.cocktails = cocktails;
    },
    // Set the selected cocktail in the state
    SET_SELECTED_COCKTAIL(state, cocktail) {
      state.selectedCocktail = cocktail;
    },
    // Set the random cocktails in the state
    SET_RANDOM_COCKTAILS(state, cocktails) {
      state.randomCocktails = cocktails;
    },
  },
  actions: {
    // Fetch cocktails by search term
    async fetchCocktailsBySearch({ commit }, searchTerm) {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const cocktails = response.data.drinks;
        commit('SET_COCKTAILS', cocktails);
      } catch (error) {
        console.log(error);
      }
    },
    // Fetch cocktail by ID
    async fetchCocktailById({ commit }, id) {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const cocktail = response.data.drinks[0];
        commit('SET_SELECTED_COCKTAIL', cocktail);
      } catch (error) {
        console.log(error);
      }
    },
    // Fetch 6 random cocktails 
    async fetchRandomCocktails({ commit }) {
      try {
        const cocktails = [];

        for (let i = 0; i < 6; i++) {
          const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
          const cocktail = response.data.drinks[0];
          cocktails.push(cocktail);
        }

        commit('SET_RANDOM_COCKTAILS', cocktails);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    // Get the cocktails from the state
    getCocktails: state => state.cocktails,
    // Get the selected cocktail from the state
    getSelectedCocktail: state => state.selectedCocktail,
    // Get the random cocktails from the state
    getRandomCocktails: state => state.randomCocktails,
  },
});

export default store;
