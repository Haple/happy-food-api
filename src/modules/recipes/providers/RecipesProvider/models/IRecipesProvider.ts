import IRecipeDTO from './IRecipeDTO';

export default interface IRecipesProvider {
  searchRecipes(ingredients: string[]): Promise<IRecipeDTO[]>;
}
