import axios from 'axios';
import IGifsProvider from '../models/IGifsProvider';

interface IGifData {
  images: {
    original: {
      url: string;
    };
  };
}

interface IGetGifUrlResponse {
  data: IGifData[];
}

class GiphyGifsProvider implements IGifsProvider {
  public async getGifUrl(searchPhrase: string): Promise<string> {
    const response = await axios.get<IGetGifUrlResponse>(
      `${process.env.PROVIDER_GIPHY_URL}/v1/gifs/search`,
      {
        params: {
          api_key: process.env.PROVIDER_GIPHY_API_KEY,
          q: searchPhrase,
          limit: 1,
        },
      },
    );
    return response.data.data[0].images.original.url;
  }
}

export default GiphyGifsProvider;
