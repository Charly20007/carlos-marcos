import type { Movie } from '@/models/Movie';

export class MovieService {
  private async fetchMovies(): Promise<Movie[]> {
    const response = await fetch('/assets/movies.json');
    if (!response.ok) {
      throw new Error('Error fetching movies');
    }
    return response.json();
  }

  public async getMovies(): Promise<Movie[]> {
    return this.fetchMovies();
  }
}
