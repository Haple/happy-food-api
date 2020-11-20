import FakeGifsProvider from '@modules/recipes/providers/GifsProvider/fakes/FakeGifsProvider';
import FakeRecipesProvider from '@modules/recipes/providers/RecipesProvider/fakes/FakeRecipesProvider';
import SearchRecipesService from './SearchRecipesService';

let fakeGifsProvider: FakeGifsProvider;
let fakeRecipesProvider: FakeRecipesProvider;
let searchRecipes: SearchRecipesService;

describe('SearchRecipes', () => {
  beforeEach(() => {
    fakeGifsProvider = new FakeGifsProvider();
    fakeRecipesProvider = new FakeRecipesProvider();

    searchRecipes = new SearchRecipesService(
      fakeGifsProvider,
      fakeRecipesProvider,
    );
  });

  it('should be able to search recipes', async () => {
    const recipes = await searchRecipes.execute({
      ingredients: ['tomato', 'onion'],
    });

    expect(recipes.length).toBeGreaterThan(0);
  });
});
