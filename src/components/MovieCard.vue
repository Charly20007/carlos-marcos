<template>
  <div>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.description }}</p>
    <span>{{ movie.genre }}</span>
    <img :src="movie.imageUrl" :alt="movie.title" class="movie-image" />
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/models/Movie'
import { defineProps } from 'vue'

// Definir las propiedades que el componente acepta
const props = defineProps<{
  movie: Movie
}>()

const { movie } = props;

</script>

<style scoped>

</style>
