import IRecipe from './IRecipe';

export default interface IRecipesProvider {
  searchRecipes(ingredients: string[]): Promise<IRecipe[]>;
}
