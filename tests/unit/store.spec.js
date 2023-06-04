import axios from 'axios';
import { getters, actions, mutations, state } from '../../__mocks__/mockStore';

// Create a mock axios instance
jest.mock('axios');
const mockedAxios = axios;

describe('Vuex Store', () => {

  // ACTIONS
  it('fetches cocktails by search term', async () => {
    // Mocked response from the API
    const mockCocktails = [
      { id: 5, name: 'Cocktail 5' },
      { id: 6, name: 'Cocktail 6' },
    ];
    axios.get.mockResolvedValue({ data: { drinks: mockCocktails } });

    // Dispatch the action
    await actions.fetchCocktailsBySearch('test');

    // Check if the cocktails have been updated correctly
    expect(state.cocktails).toEqual(mockCocktails);
  });

  it('fetches cocktail by ID', async () => {
    const mockResponse = {
      data: {
        drinks: [{ id: 1, name: 'Cocktail 1' }],
      },
    };

    // Mock the axios get method
    mockedAxios.get.mockResolvedValue(mockResponse);

    // Dispatch the action to fetch cocktail by ID
    await actions.fetchCocktailById(1);

    // Check if the selected cocktail has been updated correctly
    expect(state.selectedCocktail).toEqual({ id: 1, name: 'Cocktail 1' });
  });

  it('fetches random cocktails', async () => {
    const mockResponse = {
      data: {
        drinks: [
          { id: 1, name: 'Cocktail 1' },
          { id: 2, name: 'Cocktail 2' },
          { id: 3, name: 'Cocktail 3' },
        ],
      },
    };

    // Mock the axios get method
    mockedAxios.get.mockResolvedValue(mockResponse);

    // Dispatch the action to fetch random cocktails
    await actions.fetchRandomCocktails();

    // Check if the random cocktails have been updated correctly
    expect(state.randomCocktails).toEqual([
      { id: 1, name: 'Cocktail 1' },
      { id: 2, name: 'Cocktail 2' },
      { id: 3, name: 'Cocktail 3' },
    ]);
  });

  // GETTERS
  it('returns the cocktails from the state', () => {
    const state = {
      cocktails: [
        { id: 5, name: 'Cocktail 5' },
        { id: 6, name: 'Cocktail 6' },
      ],
    };

    // Get the cocktails using the getter
    const cocktails = getters.getCocktails(state);

    // Check if the getter returns the correct value
    expect(cocktails).toEqual([
      { id: 5, name: 'Cocktail 5' },
      { id: 6, name: 'Cocktail 6' },
    ]);
  });

  it('returns the selected cocktail from the state', () => {
    const state = {
      selectedCocktail: { id: 1, name: 'Cocktail 1' },
    };

    // Get the selected cocktail using the getter
    const selectedCocktail = getters.getSelectedCocktail(state);

    // Check if the getter returns the correct value
    expect(selectedCocktail).toEqual({ id: 1, name: 'Cocktail 1' });
  });

  it('returns the random cocktails from the state', () => {
    const state = {
      randomCocktails: [
        { id: 1, name: 'Cocktail 1' },
        { id: 2, name: 'Cocktail 2' },
        { id: 3, name: 'Cocktail 3' },
      ],
    };

    // Get the random cocktails using the getter
    const randomCocktails = getters.getRandomCocktails(state);

    // Check if the getter returns the correct value
    expect(randomCocktails).toEqual([
      { id: 1, name: 'Cocktail 1' },
      { id: 2, name: 'Cocktail 2' },
      { id: 3, name: 'Cocktail 3' },
    ]);
  });

  //MUTATIONS
  it('should update the cocktails with the incoming data from the search by term action', () => {
    mutations.SET_COCKTAILS(state,[ {id: 5, name: 'Cocktail 5'}]);
    expect(state.cocktails[0]).toStrictEqual({id: 5, name: 'Cocktail 5'});
  });

  it('should update the selectedCocktail in the state', () => {
    mutations.SET_SELECTED_COCKTAIL(state,[ {id: 1, name: 'Cocktail 1'}]);
    expect(state.selectedCocktail).toStrictEqual({id: 1, name: 'Cocktail 1'});
  });

  it('should update the randomCocktails with the incoming data from the randomCocktails action', () => {
    mutations.SET_RANDOM_COCKTAILS(state,[ {id: 1, name: 'Cocktail 1'}]);
    expect(state.randomCocktails[0]).toStrictEqual({id: 1, name: 'Cocktail 1'});
  });
});
