import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SearchRecipesService from '@modules/recipes/services/SearchRecipesService';

export default class RecipesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const ingredients = String(request.query.i).split(',');

    const searchRecipes = container.resolve(SearchRecipesService);

    const recipes = await searchRecipes.execute({ ingredients });

    return response.json({
      keywords: ingredients,
      recipes,
    });
  }
}
