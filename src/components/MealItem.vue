<script setup>

import { ref } from 'vue';
import { useStore } from '../stores/mainstore';
const search = useStore()

const inputProps = defineProps({
  strMeal: String,
  strMealThumb: String,
  idMeal: String
})

const addToLocalFavList = []

const addToFavoritList = () => {
  const { idMeal, strMeal, strMealThumb } = inputProps
  addToLocalFavList.push({ idMeal, strMeal, strMealThumb })

  if (localStorage.getItem('favoritList') === null) {
    localStorage.setItem('favoritList', JSON.stringify(addToLocalFavList))
  } else {
    const curent = JSON.parse(localStorage.getItem('favoritList'))
    const mergedArr = [...addToLocalFavList, ...curent]
    localStorage.setItem('favoritList', JSON.stringify(mergedArr))
  }
  window.location.reload();

  // return addToLocalFavList;
}

// const addToFavoritList = () => {
//   const { idMeal, strMeal, strMealThumb } = inputProps
//   search.favoritList.push({ idMeal, strMeal, strMealThumb })
//   // console.log(search.favoritList);
//   localStorage.setItem('favoritList', JSON.stringify(search.favoritList))
//   window.location.reload();
// }


</script>

<template>
  <div class="meal" data-mealID="{{ idMeal }}">
    <img :src="strMealThumb" :alt="strMeal" />
    <div class="meal-info">
      <h3>{{ strMeal }}</h3>
    </div>
    <span>{{ idMeal }}</span>

    <b @click.stop="addToFavoritList">&#9825;</b>

  </div>
</template>

<style >
.meal {
  cursor: pointer;
  position: relative;
  max-height: 340px;
  max-width: 280px;
  text-align: center;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.meal img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.meal-info h3 {
  padding: 0.5rem;
}

.meal span {
  display: none;
}

.meal b {
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 4rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
}

.meal b:hover {
  color: red;
}

@media (max-width: 600px) {
  .meal {
    max-width: 170px;
  }
}
</style>