<script setup>
defineProps({
  strMeal: String,
  strMealThumb: String,
  idMeal: String
})

</script>
<template>
  <div class="meal">
    <img :src="strMealThumb" :alt="strMeal" />
    <div class="meal-info" data-mealID="{{ idMeal }}">
      <h3>{{ strMeal }}</h3>
    </div>
  </div>
</template>

<style scoped>
.meal {
  cursor: pointer;
  position: relative;
  /* height: 280px; */
  width: 280px;
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
</style>