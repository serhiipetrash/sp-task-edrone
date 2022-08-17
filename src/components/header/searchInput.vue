<script setup>
import { ref } from 'vue';
import searchIcon from '../icons/searchIcon.vue';

const term = ref('Soup')

function onSubmit() {
  const search = term.value
  console.log(search)

}

</script>
<template>
  <form class="search" id="submit">
    <button class="search-btn" type="submit" @click.prevent="onSubmit">
      <i>
        <searchIcon />
      </i>

    </button>
    <input type="text" id="search" placeholder="SEARCH" v-model.trim="term" />

  </form>
</template>

<style scoped>
.search {
  display: flex;
}

button {
  border: 1px solid #dedede;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 14px;
  /* padding: 4px 8px; */
  margin: 0;
  background-color: transparent;
}

input[type='text'] {
  width: 100%;
  /* font-size: 1rem; */
  border: 1px solid #dedede;
  background-color: transparent;
  border-left: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 6px 8px;
  /* font-size: 1rem; */
}

input[type='text']:focus {
  outline: none;
}

.search-btn {
  cursor: pointer;
  border-right: 0;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 1rem;

}

.search-btn i {
  display: flex;
  align-items: center;
}

.search-btn i svg {
  width: 1rem;
  height: 1rem;
  color: black;
}
</style>