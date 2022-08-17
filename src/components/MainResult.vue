<script setup>

import MealItem from './MealItem.vue';
import { useFetch } from './use/useFetch';

const startURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Soup'

const { data, error } = useFetch(startURL)

</script>

<template>

  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data" class="result">
    <MealItem v-for="meal in data.meals" :strMeal="meal.strMeal" :strMealThumb="meal.strMealThumb"
      :idMeal="meal.idMeal" />

  </div>
  <div v-else>Loading...</div>

</template>
<style scoped>
.result {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
}
</style>