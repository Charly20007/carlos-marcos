<script setup lang="ts"></script>

<template>
  <header class="header">
    <h1 class="header-title">Movies App</h1>
    <nav class="header-nav">
      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li> <!-- Lo puse para llenar el nav -->
        <li><a href="/">Contact</a></li>        <!-- Lo puse para llenar el nav -->
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/style/variables';

.header {
  background-color: $primary-color;
  padding: 1rem 2rem;
  @include flex-center;
  flex-direction: row;
  border-bottom: 1px solid $secondary-color;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
}

.header-title {
  font-size: 2rem;
  color: $secondary-color;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

.header-nav .nav-list {
  list-style: none;
  @include flex-center;
  gap: 1.5rem;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.header-nav .nav-list li a {
  text-decoration: none;
  color: $secondary-color;
  font-family: $font-family;
}

.header-nav .nav-list li a:hover {
  text-decoration: underline;
}
</style>
