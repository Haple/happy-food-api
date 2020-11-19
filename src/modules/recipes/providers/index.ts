import { container } from 'tsyringe';

import IGifsProvider from './GifsProvider/models/IGifsProvider';
import GiphyGifsProvider from './GifsProvider/implementations/GiphyGifsProvider';

import IRecipesProvider from './RecipesProvider/models/IRecipesProvider';
import RecipePuppyRecipesProvider from './RecipesProvider/implementations/RecipePuppyRecipesProvider';

container.registerSingleton<IGifsProvider>('GifsProvider', GiphyGifsProvider);

container.registerSingleton<IRecipesProvider>(
  'RecipesProvider',
  RecipePuppyRecipesProvider,
);
