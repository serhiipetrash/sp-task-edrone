<script setup>
import MainHeader from './MainHeader.vue'
import MainCategory from './MainCategory.vue';
import MainResult from './MainResult.vue';


</script>

<template>
  <MainHeader />
  <div class="mainPage">
    <MainCategory />
    <MainResult />

  </div>

</template>

<style>
.mainPage {
  display: flex;
  align-items: stretch;

}
</style>