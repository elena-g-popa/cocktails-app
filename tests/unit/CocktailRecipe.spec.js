import { shallowMount } from '@vue/test-utils';
import CocktailRecipe from '@/components/CocktailRecipe';
import { __createMocks as createStoreMocks } from '../../__mocks__/mockStore';

jest.mock('@/store')

let wrapper;
const storeMocks = createStoreMocks();

// Mock cocktail data
const cocktail = {
  strDrink: 'Mock Cocktail',
  strDrinkThumb: 'mock_image.jpg',
  strInstructions: 'Mock instructions',
  strIngredient1: 'Ingredient 1',
  strIngredient2: 'Ingredient 2',
  strMeasure1: 'Measure 1',
  strMeasure2: 'Measure 2',
};

describe('CocktailRecipe', () => {
  beforeEach(() => {
    wrapper = shallowMount(CocktailRecipe, {
      global: {
        plugins: [storeMocks.store],
      },
      computed: {
        cocktail: () => cocktail,
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('displays the cocktail name', () => {
    const cocktailName = wrapper.find('h1');
    expect(cocktailName.text()).toBe('Mock Cocktail');
  });

  it('displays the cocktail image', () => {
    const cocktailImage = wrapper.find('img');
    expect(cocktailImage.attributes('src')).toBe('mock_image.jpg');
    expect(cocktailImage.attributes('alt')).toBe('Mock Cocktail');
  });

  it('displays the cocktail instructions', () => {
    const cocktailInstructions = wrapper.find('p');
    expect(cocktailInstructions.text()).toBe('Mock instructions');
  });
});
