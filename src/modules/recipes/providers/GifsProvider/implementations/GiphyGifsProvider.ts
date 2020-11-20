import AppError from '@shared/errors/AppError';
import axios from 'axios';
import IGifsProvider from '../models/IGifsProvider';

interface IGifDataDTO {
  images: {
    original: {
      url: string;
    };
  };
}

interface IGetGifUrlResponseDTO {
  data: IGifDataDTO[];
}

class GiphyGifsProvider implements IGifsProvider {
  public async getGifUrl(searchPhrase: string): Promise<string> {
    try {
      const {
        data: { data },
      } = await axios.get<IGetGifUrlResponseDTO>(
        `${process.env.PROVIDER_GIPHY_URL}/v1/gifs/search`,
        {
          params: {
            api_key: process.env.PROVIDER_GIPHY_API_KEY,
            q: searchPhrase,
            limit: 1,
          },
        },
      );
      return data[0].images.original.url;
    } catch (ex) {
      console.error('GiphyGifsProvider error: ', ex);
      throw new AppError("Giphy's API is unavailable", 503);
    }
  }
}

export default GiphyGifsProvider;
