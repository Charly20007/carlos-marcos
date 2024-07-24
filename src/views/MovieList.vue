<script setup lang="ts">
import MovieFilters from '@/components/MovieFilters.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useMovieFilter } from '@/composables/useMovieFilter'

const { filteredMovies } = useMovieFilter()
</script>

<template>
  <div class="movie-app">
    <MovieFilters />
    <div v-if="filteredMovies.length === 0" class="no-movies-message">
      No movies found
    </div>
    <div class="movies-grid">
      <MovieCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/variables';

.movie-app {
  padding: 2rem;
  background-color: $primary-color;
  min-height: 100vh;
  @include flex-center;
  flex-direction: column;
}

.no-movies-message {
  color: $text-color;
  font-size: 1.5rem;
  font-family: $font-family;
  margin-top: 2rem;
  text-align: center;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem; 
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px; 
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); 
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>

