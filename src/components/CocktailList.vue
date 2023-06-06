<template>
  <div class="container">
    <h1>Sunday Cocktail Bar</h1>
    <p>
      Welcome to the world of delightful concoctions and exquisite flavors! Step
      into the realm of cocktails, where creativity and craftsmanship blend
      seamlessly to create liquid artistry. Explore a symphony of flavors, from
      classic libations that have stood the test of time to innovative mixology
      marvels that push the boundaries of taste.
    </p>
    <p>
      Join us on a journey where every drink tells a story, where the clinking
      of glasses is a celebration of life's moments, big and small. Unwind with
      friends, savor the ambiance, and let the allure of our mixological
      masterpieces transport you to a world of taste sensations.
    </p>
    <p>
      Cheers to memorable evenings, new discoveries, and the magic that happens
      when art meets mixology. Welcome to our cocktails sanctuary, where every
      sip is an adventure waiting to be savored.
    </p>
  </div>
  <div class="image-container"></div>
  <div class="cocktail-section">
    <h2 class="section-title">Today's Cocktail Selection</h2>
    <div class="cocktail-list">
      <CocktailItem
        v-for="cocktail in getRandomCocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
  <div class="search-section">
    <h2 class="section-title">Discover Your Perfect Cocktail</h2>
    <div>
      <p>
        Are you ready to embark on a tantalizing journey of flavors and mixology
        mastery? At Sunday Cocktail Bar, we invite you to explore our extensive
        inventory of exquisite cocktails. Whether you're a seasoned connoisseur
        or an adventurous newcomer, our collection has something to satisfy
        every palate.
      </p>
      <p>
        Indulge in the classics, like the timeless Old Fashioned or the elegant
        Martini, expertly crafted with precision and finesse. Craving something
        more adventurous? Immerse yourself in our innovative concoctions, where
        unique flavor combinations and artistic presentation take center stage.
      </p>
    </div>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search cocktails"
        @keyup.enter="searchCocktails"
      />
      <button @click="searchCocktails">Search</button>
    </div>
    <div class="cocktail-list" v-if="getCocktails.length !== 0">
      <CocktailItem
        v-for="cocktail in getCocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
    <div v-else class="monthly-cocktail">
      <div class="monthly-cocktail-info">
        <h2 class="card-title">Cocktail of the Month: Aperol Spritz</h2>
        <p class="card-description">
          Aperol Spritz is a refreshing and vibrant cocktail that perfectly
          captures the essence of summer. Made with Aperol, Prosecco, and a
          splash of soda water, this iconic Italian cocktail is known for its
          bright orange hue and bittersweet flavor profile.
        </p>
      </div>
      <div class="monthly-cocktail-card">
        <div class="card-front"></div>
        <div class="card-back">
          <div class="ingredients-column">
            <h3 class="card-title">Ingredients</h3>
            <ul>
              <li>3 parts Aperol</li>
              <li>3 parts Prosecco</li>
              <li>1 part soda water</li>
              <li>Orange slice, for garnish</li>
              <li>Ice cubes</li>
            </ul>
          </div>
          <div class="instructions-column">
            <h3 class="card-title">Instructions</h3>
            <ol>
              <li>Fill a wine glass with ice cubes.</li>
              <li>Add Aperol and Prosecco.</li>
              <li>Top with soda water.</li>
              <li>Gently stir to combine.</li>
              <li>Garnish with an orange slice.</li>
              <li>Serve and enjoy!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import CocktailItem from "./CocktailItem.vue";

  export default {
    components: {
      CocktailItem,
    },
    data() {
      return {
        // Holds the search term entered by the user
        searchTerm: "",
      };
    },
    mounted() {
      // Fetches random cocktails when the component is mounted
      this.fetchRandomCocktails();
    },
    computed: {
      // Maps the getters to component's computed properties
      ...mapGetters(["getCocktails", "getRandomCocktails"]),
    },
    methods: {
      // Maps the actions to component's methods
      ...mapActions(["fetchCocktailsBySearch", "fetchRandomCocktails"]),
      // Search fn for cocktail lookup by user
      searchCocktails() {
        this.fetchCocktailsBySearch(this.searchTerm);
      },
    },
  };
</script>
