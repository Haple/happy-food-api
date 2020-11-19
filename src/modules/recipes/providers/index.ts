import { container } from 'tsyringe';

import IGifsProvider from './GifsProvider/models/IGifsProvider';
import GiphyGifsProvider from './GifsProvider/implementations/GiphyGifsProvider';

container.registerSingleton<IGifsProvider>('GifsProvider', GiphyGifsProvider);
