import IRecipe from '../models/IRecipe';
import IRecipesProvider from '../models/IRecipesProvider';

class FakeRecipesProvider implements IRecipesProvider {
  public async searchRecipes(ingredients: string[]): Promise<IRecipe[]> {
    return [
      {
        title: 'Greek Omelet with Feta',
        ingredients,
        link:
          'http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx',
      },
      {
        title: 'Guacamole Dip Recipe',
        ingredients: ['avocado', 'onions', 'tomato'],
        link: 'http://cookeatshare.com/recipes/guacamole-dip-2783',
      },
    ];
  }
}

export default FakeRecipesProvider;
