import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SearchRecipesService from '@modules/recipes/services/SearchRecipesService';
import AppError from '@shared/errors/AppError';

export default class RecipesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const ingredients = String(request.query.i).split(',');

    if (ingredients.length > 3) {
      throw new AppError('Please, provide 3 ingredients or less');
    }

    const searchRecipes = container.resolve(SearchRecipesService);

    const recipes = await searchRecipes.execute({ ingredients });

    return response.json({
      keywords: ingredients,
      recipes,
    });
  }
}
