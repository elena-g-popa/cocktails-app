import { shallowMount } from '@vue/test-utils';
import CocktailList from '@/components/CocktailList.vue';
import { __createMocks as createStoreMocks } from '../../__mocks__/mockStore';

jest.mock('@/store')

let wrapper;
const storeMocks = createStoreMocks();

describe('CocktailList', () => {
  beforeEach(() => {
    wrapper = shallowMount(CocktailList, {
      global: {
        plugins: [storeMocks.store],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays random cocktails', () => {
    const randomCocktails = [
      { id: 1, name: 'Cocktail 1' },
      { id: 2, name: 'Cocktail 2' },
    ];
    storeMocks.getters.getRandomCocktails.mockReturnValue(randomCocktails);

    const cocktailItems = wrapper.findAllComponents({ name: 'CocktailItem' });
    expect(cocktailItems[0].props('cocktail')).toStrictEqual(randomCocktails[0]);
    expect(cocktailItems[1].props('cocktail')).toStrictEqual(randomCocktails[1]);
  });

  it('calls fetchCocktailsBySearch with the correct search term', () => {
    const searchTerm = 'Mojito';
    storeMocks.actions.fetchCocktailsBySearch.mockClear(); // Reset the mock function

    wrapper.vm.searchTerm = searchTerm;
    wrapper.vm.searchCocktails();

    expect(storeMocks.actions.fetchCocktailsBySearch).toHaveBeenCalledWith(expect.anything(), searchTerm);
  
  });

});
