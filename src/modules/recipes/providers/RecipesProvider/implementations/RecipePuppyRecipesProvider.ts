import axios from 'axios';
import IRecipe from '../models/IRecipe';
import IRecipesProvider from '../models/IRecipesProvider';

interface IResultDTO {
  title: string;
  ingredients: string;
  href: string;
}

interface ISearchRecipesResponseDTO {
  results: IResultDTO[];
}

class RecipePuppyRecipesProvider implements IRecipesProvider {
  public async searchRecipes(ingredients: string[]): Promise<IRecipe[]> {
    const {
      data: { results },
    } = await axios.get<ISearchRecipesResponseDTO>(
      `${process.env.PROVIDER_RECIPEPUPPY_URL}/api`,
      {
        params: {
          i: ingredients.toString(),
        },
      },
    );

    const recipes: IRecipe[] = results.map(result => ({
      title: result.title,
      link: result.href,
      ingredients: result.ingredients.split(',').sort(),
    }));

    return recipes;
  }
}

export default RecipePuppyRecipesProvider;
