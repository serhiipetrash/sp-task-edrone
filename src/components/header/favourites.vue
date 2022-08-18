<script setup>
import FavouriteIcon from '../icons/favouriteIcon.vue';
import { useCategory } from '@/stores/category';
const catStore = useCategory()
</script>

<template>
  <div class="favoritContainer">
    <button class="favourites" @click="catStore.toggleFavorit">
      <span>favourites</span>
      <i>
        <FavouriteIcon />
      </i>
    </button>
    <div class="favoritList" v-if="catStore.showFavorit">

      <div class="favoritItem">
        <img src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" alt="title">
        <div class="favoritTitle">Teriyaki Chicken Casserole</div>
      </div>

      <div class="favoritItem">
        <img src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" alt="title">
        <div class="favoritTitle">Teriyaki Chicken Casserole</div>
      </div>

      <div class="favoritItem">
        <img src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" alt="title">
        <div class="favoritTitle">Teriyaki Chicken Casserole</div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.favoritContainer {
  position: relative;

}

.favourites {
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  padding: 4px 8px;
  text-transform: uppercase;
  border: 1px solid #dedede;
  border-radius: 4px;
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

.favoritList {
  position: absolute;
  top: 26px;
  z-index: 1;
  width: 100%;
  /* min-width: 320px; */
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  /* padding: 1rem; */
  font-size: 14px;
}

.favoritList .favoritItem {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
}

.favoritList .favoritItem:hover {
  background-color: #dedede;
}

.favoritList .favoritItem img {
  width: 50px;
  height: 35px;
  border-radius: 4px;
  margin: 0 0.5rem;
}

.favoritList .favoritItem .favoritTitle {
  text-transform: uppercase;
}
</style>