<script setup lang="ts">
import MovieFilters from '@/components/MovieFilters.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useMovieFilter } from '@/composables/useMovieFilter'

const { filteredMovies } = useMovieFilter()

</script>

<template>
  <div>
    <MovieFilters />
    <div v-if="filteredMovies.length === 0">No movies found</div>
    <div v-for="movie in filteredMovies" :key="movie.id">      
        <MovieCard :movie="movie" />
    </div>
  </div>
</template>

<style scoped>

</style>
