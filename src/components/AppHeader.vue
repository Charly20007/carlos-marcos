<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/">Setting</router-link></li>
        <li><router-link to="/">Example</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}
</style>
