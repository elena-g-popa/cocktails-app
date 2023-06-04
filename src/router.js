import { createRouter, createWebHistory } from 'vue-router';
import CocktailList from './components/CocktailList.vue';
import CocktailRecipe from './components/CocktailRecipe.vue';

const routes = [
  {
    path: '/',
    name: 'CocktailList',
    component: CocktailList,
  },
  {
    path: '/cocktails/:id',
    name: 'CocktailRecipe',
    component: CocktailRecipe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
