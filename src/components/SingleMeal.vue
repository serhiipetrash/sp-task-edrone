<script setup>
import { useStore } from '../stores/mainstore';

const single = useStore()

single.getMealById()

</script>

<template>

  <div class="single-meal">
    <!-- {{ single.meal.strYoutube }} -->

    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/BgRifcCwinY" title="YouTube video player"
      frameborder="0" allowfullscreen></iframe> -->
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
  top: 10%;
  left: 1rem;
  background-color: rgba(233, 229, 229, 0.9);
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 8px #82766a;
}

.single-meal img {
  width: 300px;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.single-meal-info {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.single-meal-info h2:nth-child(3) {
  margin: 1rem;
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