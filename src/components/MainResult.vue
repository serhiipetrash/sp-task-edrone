<script setup>

import { useStore } from '../stores/mainstore';
import MealItem from './MealItem.vue';
import SingleMeal from './SingleMeal.vue';
// import { useFetch } from './use/useFetch';

const search = useStore()


// const startURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Soup'

// const { data, error } = useFetch(search.getURL)

search.myFetch(search.getURL)
// search.mealsEl()

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
/* .container {
  position: relative;
} */

.result {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
  position: relative;
}
</style>