export interface FetchAdapter {
  fetch<T>(source: string): Promise<T>;
}
