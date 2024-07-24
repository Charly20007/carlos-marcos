import { defineStore } from 'pinia';
import { ref, computed, onMounted } from 'vue';
import { MovieService } from '@/services/MovieService';
import type { Movie } from '@/models/Movie';

export const useMovieStore = defineStore('movie', () => {
  const movieService = new MovieService();
  const movies = ref<Movie[]>([]);
  const filters = ref({
    id: '',
    title: '',
    description: '',
    genre: '',
  });

  const fetchMovies = async () => {
    movies.value = await movieService.getMovies();
  };

  onMounted(() => {
    fetchMovies();
  });

  const filteredMovies = computed(() => {
    const result = movies.value.filter(movie => {
      return (
        movie.title.toLowerCase().includes(filters.value.title.toLowerCase()) &&
        movie.description.toLowerCase().includes(filters.value.description.toLowerCase()) &&
        movie.genre.toLowerCase().includes(filters.value.genre.toLowerCase())
      );
    });
    console.log('Filtered Movies:', result); // Añadir aquí
    return result;
  });

  return {
    movies,
    filters,
    filteredMovies,
  };
});
