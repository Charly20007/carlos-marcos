<template>
  <div>
    <input 
        v-model="title" 
        @input="updateFilter('title', title)" 
        placeholder="Filtrar por titulo" 
    />
    <input
        v-model="description"
        @input="updateFilter('description', description)"
        placeholder="Filtrar por descripción"
    />
    <select 
        v-model="genre" 
        @change="updateFilter('genre', genre)"
    >
      <option value="">Selecciona un género</option>
      <option v-for="g in genres" :key="g" :value="g">{{ g }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMovieFilter } from '@/composables/useMovieFilter'
import type { Movie } from '@/models/Movie';
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

<style scoped>

</style>
