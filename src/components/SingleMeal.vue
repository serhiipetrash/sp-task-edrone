<script setup>
import { useStore } from '../stores/mainstore';

const single = useStore()

single.getMealById()

console.log(single.meal.strIngredient1);
</script>

<template>

  <div class="single-meal">

    <img :src="single.meal.strMealThumb" :alt="single.meal.strMeal" />
    <div class="single-meal-info">
      <h2>Instruction</h2>
      <p>{{ single.meal.strInstructions }}</p>
      <h2>Ingredients + Measure</h2>
      <ul>
        <li v-for="ing in single.ingredients"> {{ ing }} </li>

        <!-- <li> {{ single.meal.strIngredient3 }} </li> -->

      </ul>
    </div>

  </div>
</template>

<style scoded>
.single-meal {
  position: absolute;
  background-color: rgba(233, 229, 229, 0.8);
  display: flex;
}

.single-meal img {
  width: 300px;
}

.single-meal-info {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.single-meal p {
  margin: 0;
  letter-spacing: 0.5px;
  line-height: 1.5;
}

.single-meal ul {
  padding-left: 0;
  list-style-type: none;
}

.single-meal ul li {
  border: 1px solid #ededed;
  border-radius: 5px;
  background-color: #fff;
  display: inline-block;
  color: #2d2013;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin: 0 5px 5px 0;
}
</style>