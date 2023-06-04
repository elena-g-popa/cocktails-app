import { createStore } from 'vuex';

export const getters = {
  getCocktails: jest.fn().mockReturnValue([
    { id: 5, name: 'Cocktail 5' },
    { id: 6, name: 'Cocktail 6' },
  ]),
  getSelectedCocktail: jest.fn().mockReturnValue({ id: 1, name: 'Cocktail 1' }),
  getRandomCocktails: jest.fn().mockReturnValue([
    { id: 1, name: 'Cocktail 1' },
    { id: 2, name: 'Cocktail 2' },
    { id: 3, name: 'Cocktail 3' },
  ]),
}

export const actions = {
  fetchCocktailsBySearch: jest.fn(),
  fetchCocktailById: jest.fn(),
  fetchRandomCocktails: jest.fn(),
}

export const mutations = {
  SET_COCKTAILS: jest.fn(),
  SET_SELECTED_COCKTAIL: jest.fn(),
  SET_RANDOM_COCKTAILS: jest.fn(),
}

export const state = {
  cocktails: [
    { id: 5, name: 'Cocktail 5' },
    { id: 6, name: 'Cocktail 6' },
  ],
  selectedCocktail: { id: 1, name: 'Cocktail 1' },
  randomCocktails: [
    { id: 1, name: 'Cocktail 1' },
    { id: 2, name: 'Cocktail 2' },
    { id: 3, name: 'Cocktail 3' },
  ],
}
export function __createMocks(custom = {}) {
  const mockState = { ...state, ...custom.state };
  const mockGetters = { ...getters, ...custom.getters };
  const mockActions = { ...actions, ...custom.actions };
  const mockMutations = { ...mutations, ...custom.mutations };

  return {
    state: mockState,
    getters: mockGetters,
    actions: mockActions,
    mutations: mockMutations,
    store: createStore({
      state() { return mockState; },
      getters: mockGetters,
      actions: mockActions,
      mutations: mockMutations,
    }),
  };
}

export const { store } = __createMocks();
