import { computed } from 'vue';
import { useMovieStore } from '@/stores/movieStore';

export function useMovieFilter() {
  const movieStore = useMovieStore();

  const setFilter = (key: keyof typeof movieStore.filters, value: string) => {
    movieStore.filters[key] = value;
  };

const filteredMovies = computed(() => {
    const result = movieStore.filteredMovies;
    return result;
  });

  return {
    setFilter,
    filteredMovies,
  };
}
