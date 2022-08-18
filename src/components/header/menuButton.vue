<script setup>
import menuIcon from '../icons/menuIcon.vue';
import { useCategory } from '@/stores/category';
const catStore = useCategory()
</script>

<template>
  <button class="menuButton" @click="catStore.toggleCategory">
    <i>
      <menuIcon />
    </i>

  </button>

</template>

<style scoped>
.menuButton {
  width: 3.5rem;
  border: 0;
  background-color: transparent;
}
</style>