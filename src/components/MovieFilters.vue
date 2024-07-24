<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMovieFilter } from '@/composables/useMovieFilter'
import type { Movie } from '@/models/Movie'
import moviesJson from '../../public/assets/movies.json'

const { setFilter } = useMovieFilter()
const title = ref('')
const description = ref('')
const genre = ref('')

const genres = computed(() => {
  const genreSet = new Set<string>()
  moviesJson.forEach((movie: Movie) => genreSet.add(movie.genre))
  return Array.from(genreSet)
})

const updateFilter = (key: string, value: string) => {
  setFilter(key as keyof typeof setFilter, value)
}
</script>

<template>
  <div class="filter-container">
    <input
      v-model="title"
      @input="updateFilter('title', title)"
      placeholder="Filtrar por título"
      class="filter-input"
    />
    <input
      v-model="description"
      @input="updateFilter('description', description)"
      placeholder="Filtrar por descripción"
      class="filter-input"
    />
    <select v-model="genre" @change="updateFilter('genre', genre)" class="filter-select">
      <option value="">Selecciona un género</option>
      <option v-for="g in genres" :key="g" :value="g">{{ g }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/variables';

.filter-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: $primary-color;
  border-radius: $border-radius;
}

.filter-input,
.filter-select {
  padding: 0.5rem;
  border: 1px solid $secondary-color;
  border-radius: $border-radius;
  font-size: 1rem;
  font-family: $font-family;
}

.filter-input::placeholder {
  color: $secondary-color;
}

.filter-select {
  color: $secondary-color;
}
</style>
