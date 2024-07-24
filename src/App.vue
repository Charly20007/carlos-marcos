<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
    <main>
      <router-view /> <!-- Aquí se renderizarán las vistas de tus rutas -->
    </main>
  <AppFooter />
</template>

<style scoped>

</style>
