import { shallowMount } from '@vue/test-utils';
import CocktailItem from '@/components/CocktailItem.vue';
import CocktailRecipe from '@/components/CocktailRecipe.vue';
import { __createMocks as createStoreMocks } from '../../__mocks__/mockStore';
import { createRouter, createWebHistory } from 'vue-router';

jest.mock('@/store')

let wrapper;
const storeMocks = createStoreMocks();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/cocktail/:id',
      name: 'CocktailRecipe',
      component: CocktailRecipe,
    },
    {
      path: '/',
      name: 'CocktailList',
    }
  ],
});

describe('CocktailItem', () => {
  beforeEach(() => {
    wrapper = shallowMount(CocktailItem, {
      props: {
        cocktail: {
          idDrink: '1',
          strDrink: 'Cocktail 1',
          strDrinkThumb: 'thumbnail-url',
        },
      },
      global: {
        plugins: [storeMocks.store, router],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('calls fetchCocktailById with the correct cocktail ID', () => {
    storeMocks.actions.fetchCocktailById.mockClear(); // Reset the mock function

    wrapper.vm.goToCocktailRecipe();

    expect(storeMocks.actions.fetchCocktailById).toHaveBeenCalledWith(expect.anything(), '1');
  });

  it('navigates to the CocktailRecipe route with the correct ID', async () => {
    wrapper.vm.goToCocktailRecipe();

    await router.isReady(); // Wait for the router navigation to complete

    expect(wrapper.vm.$route.name).toBe('CocktailRecipe');
    expect(wrapper.vm.$route.params.id).toBe('1');
  });

});
