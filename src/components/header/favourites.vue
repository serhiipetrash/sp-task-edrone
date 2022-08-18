<script setup>
import FavouriteIcon from '../icons/favouriteIcon.vue';

import { useStore } from '@/stores/mainstore';
import { ref } from 'vue';
const search = useStore()
const localArr = ref([])

//Get favoritList from local storage
const getFavoritList = () => {

  const favoritArr = JSON.parse(localStorage.getItem('favoritList'));
  // console.log(favoritArr);
  return favoritArr === null ? [] : favoritArr;
}
localArr.value = getFavoritList()

</script>

<template>
  <div class="favoritContainer">
    <button class="favourites">
      <span>favourites</span>
      <i>
        <FavouriteIcon />
      </i>
    </button>
    <div class="favoritList" @click="search.favoritEl">

      <div class="favoritItem" v-for="item in localArr">
        <img :src="item.strMealThumb" alt="title">
        <div class="favoritTitle">{{ item.strMeal }}</div>
        <span>{{ item.idMeal }}</span>
      </div>

      <!-- <div class="favoritItem">
        <img src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" alt="title">
        <div class="favoritTitle">Teriyaki Chicken Casserole</div>
      </div> -->

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
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.favourites:hover {
  background-color: #ffffff;
}

.favoritContainer:hover .favoritList {
  display: flex;
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
  border: 1px solid #dedede;
  border-top: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: none;
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

.favoritList .favoritItem span {
  display: none;
}
</style>