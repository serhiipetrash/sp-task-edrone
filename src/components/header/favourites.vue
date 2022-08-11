<script setup>
import FavouriteIcon from '../icons/favouriteIcon.vue';
</script>

<template>

<button class="favourites">
  <span>favourites</span>
  <i>
    <FavouriteIcon />
  </i>
</button>

</template>

<style scoped>
.favourites {
  cursor: pointer;
  background-color: transparent;
  padding: 4px 8px;
  text-transform: uppercase;
  border: 1px solid #dedede;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.favourites span {
  flex: 1;
  color: #505050;
}

.favourites i svg {
  width: 1rem;
  height: 1rem;
  color: #000000;

}
</style>