<script setup>
import { useCategory } from '../stores/category';
const catStore = useCategory()

import { useStore } from '../stores/mainstore';
const search = useStore()

</script>

<template>
  <div class="container" v-show="catStore.showCategory">

    <div class="item-body">
      <h2 class="item-title">Category</h2>
      <div class="item-container" @click="catStore.findCategory">
        <ul>
          <li class="catitem" v-for="item in search.catList">
            &times;<span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="item-body">
      <h2 class="item-title">Area</h2>
      <div class="item-container">
        <ul>
          <li class="areaitem" v-for="item in search.areaList">
            &times;<span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="item-body">
      <h2 class="item-title">Tags</h2>
      <div class="item-container">
        <ul>
          <li class="tagsitem" v-for="item in search.tagsList">
            &times;<span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  width: 250px;
  background-color: #b7b7b7;
  padding: 1rem;
  transition: transform 0.3 ease;
}

.item-title {
  margin: 1rem 0;
}

.item-container ul {
  padding-left: 0;
  list-style-type: none;
  padding: 0.5rem;
  border: 1px solid #313131;
  border-radius: 8px;
  min-height: 10rem;
}

.item-container ul li {
  border: 1px solid #ededed;
  border-radius: 5px;
  background-color: #ffffff;
  display: inline-block;
  color: #2d2013;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  margin: 0 5px 5px 0;
  cursor: pointer;
}

@media (max-width: 1177px) {
  .container {
    position: absolute;
    z-index: 1;
    /* display: none; */

  }
}
</style>
