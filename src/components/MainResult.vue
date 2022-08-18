<script setup>

import MealItem from './MealItem.vue';
import SingleMeal from './SingleMeal.vue';
// import { useFetch } from './use/useFetch';

import { useStore } from '../stores/mainstore';
const search = useStore()


// const startURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Soup'

// const { data, error } = useFetch(search.getURL)

search.myFetch(search.getURL)


</script>

<template>
  <div class="container">

    <div v-if="search.error">Oops! Error encountered: {{ search.error }}</div>
    <div v-else-if="search.posts.meals" class="result" @click="search.mealsEl">
      <MealItem v-for="meal in search.posts.meals" :strMeal="meal.strMeal" :strMealThumb="meal.strMealThumb"
        :idMeal="meal.idMeal" />

    </div>
    <div v-else>Loading...</div>


    <SingleMeal />
  </div>


</template>

<style scoped>
.container {
  margin: 0 auto;
}

.result {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 1rem;
  position: relative;
}

@media (min-width: 1360px) {
  .result {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1000px) {
  .result {
    padding: 1rem;
    gap: 1rem;
  }
}

@media (max-width: 650px) {
  .result {
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
    gap: 0.5rem;
  }
}
</style>