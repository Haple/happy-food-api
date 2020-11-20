import AppError from '@shared/errors/AppError';
import axios from 'axios';
import IRecipeDTO from '../models/IRecipeDTO';
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
  public async searchRecipes(ingredients: string[]): Promise<IRecipeDTO[]> {
    try {
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

      const recipes: IRecipeDTO[] = results.map(result => ({
        title: result.title,
        link: result.href,
        ingredients: result.ingredients
          .split(',')
          .sort()
          .map(i => i.trim()),
      }));

      return recipes;
    } catch (ex) {
      console.error('RecipePuppyRecipesProvider error: ', ex);
      throw new AppError("RecipePuppy's API is unavailable", 503);
    }
  }
}

export default RecipePuppyRecipesProvider;
