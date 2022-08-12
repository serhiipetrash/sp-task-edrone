<template>
  <div class="container">

    <div class="item-body">
      <h2 class="item-title">Category</h2>
      <div class="item-container">
        <ul>
          <li><span>&times;</span> vegetarian</li>
          <li><span>&times;</span> food</li>
          <li><span>&times;</span> desert</li>
        </ul>
      </div>
    </div>

        <div class="item-body">
      <h2 class="item-title">Area</h2>
      <div class="item-container">
        <ul>
          <li><span>&times;</span> stockholm</li>
          <li><span>&times;</span> cracow</li>
          <li><span>&times;</span> poland</li>
        </ul>
      </div>
    </div>

        <div class="item-body">
      <h2 class="item-title">Tags</h2>
      <div class="item-container">
        <ul>
          <li><span>&times;</span> vegetarian</li>
          <li><span>&times;</span> food</li>
          <li><span>&times;</span> poland</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  width: 250px;
  height: calc(100vh - 4rem);
  background-color: #b7b7b7;
  padding: 1rem;
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
</style>
