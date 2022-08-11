<script setup>

import searchComponent from './header/searchInput.vue';
import favourites from './header/favourites.vue';
import menuButton from './header/menuButton.vue';

</script>

<template>

<div class="header">

  <menuButton />

  <searchComponent />

  <favourites />
  
</div>

</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #ffff8d;
  padding: 0 1rem;
}

@media (max-width: 400px) {
  .header { gap: 0.5rem; }
}
</style>
