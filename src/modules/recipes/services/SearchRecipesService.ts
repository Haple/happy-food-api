import { injectable, inject } from 'tsyringe';
import ISearchRecipesResponseDTO from '@modules/recipes/dtos/ISearchRecipesResponseDTO';
import IGifsProvider from '../providers/GifsProvider/models/IGifsProvider';
import IRecipesProvider from '../providers/RecipesProvider/models/IRecipesProvider';

interface IRequest {
  ingredients: string[];
}

@injectable()
class SearchRecipesService {
  constructor(
    @inject('GifsProvider')
    private gifsProvider: IGifsProvider,

    @inject('RecipesProvider')
    private recipesProvider: IRecipesProvider,
  ) {}

  public async execute({
    ingredients,
  }: IRequest): Promise<ISearchRecipesResponseDTO[]> {
    const providerRecipes = await this.recipesProvider.searchRecipes(
      ingredients,
    );

    const recipes: ISearchRecipesResponseDTO[] = await Promise.all(
      providerRecipes.map(async providerRecipe => ({
        ...providerRecipe,
        gif: await this.gifsProvider.getGifUrl(providerRecipe.title),
      })),
    );

    return recipes;
  }
}

export default SearchRecipesService;
