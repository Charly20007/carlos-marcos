<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <p class="footer-text">&copy; 2024 Movies App. All rights reserved.</p>
    <nav class="footer-nav">
      <ul class="nav-list">
        <li><a href="/">Privacy Policy</a></li>        <!-- Lo puse para llenar el foote -->
        <li><a href="/">Terms of Service</a></li>        <!-- Lo puse para llenar el foote -->
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/style/variables';

.footer {
  background-color: $primary-color;
  padding: 1rem 2rem;
  @include flex-center;
  flex-direction: column;
  border-top: 1px solid $secondary-color;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-text {
  color: $text-color;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}

.footer-nav .nav-list {
  list-style: none;
  @include flex-center;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.footer-nav .nav-list li a {
  text-decoration: none;
  color: $secondary-color;
  font-family: $font-family;
}

.footer-nav .nav-list li a:hover {
  text-decoration: underline;
}
</style>
