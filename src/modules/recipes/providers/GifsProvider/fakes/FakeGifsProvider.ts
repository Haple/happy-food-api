import IGifsProvider from '../models/IGifsProvider';

class FakeGifsProvider implements IGifsProvider {
  public async getGifUrl(searchPhrase: string): Promise<string> {
    return searchPhrase;
  }
}

export default FakeGifsProvider;
