<script setup lang="ts">
import type { Movie } from '@/models/Movie'
import { defineProps } from 'vue'

const props = defineProps<{
  movie: Movie
}>()

const { movie } = props
</script>

<template>
  <div class="movie-card">
    <img :src="movie.imageUrl" :alt="movie.title" class="movie-image" />
    <div class="movie-info">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.description }}</p>
      <span>{{ movie.genre }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/variables';

.movie-card {
  border: 1px solid $secondary-color;
  border-radius: $border-radius;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  background-color: $primary-color;
  @include box-shadow($text-color);

  .movie-image {
    max-width: 100%;
    height: auto;
    border-radius: $border-radius;
    margin-bottom: 1rem;
  }

  .movie-info {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: $secondary-color;
      font-family: $font-family;
    }

    p {
      font-size: 1rem;
      color: $text-color;
      font-family: $font-family;
    }

    span {
      font-size: 0.875rem;
      color: $secondary-color;
    }
  }
}
</style>
