export default interface IGifsProvider {
  getGifUrl(searchPhrase: string): Promise<string>;
}
