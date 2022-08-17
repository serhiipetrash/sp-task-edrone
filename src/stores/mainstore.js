import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    term: 'Soup',
    posts: [],
    error: null,
    mealID: 52973,
    meal: [],
    ingredients: [],
  }),
  getters: {
    getURL: (state) => {
      const templateURL =
        'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      return templateURL + state.term;
    },
  },
  actions: {
    async myFetch(url) {
      try {
        const result = await fetch(url);
        const data = await result.json();
        this.posts = data;
      } catch (err) {
        this.error = err.message;
      }
    },
    async getMealById() {
      fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52973')
        .then((res) => res.json())
        .then((data) => {
          this.meal = data.meals[0];
          // console.log(data.meals[0]);
          // console.log(this.meal);

          // console.log(this.meal.strIngredient1);
          // console.log(this.meal.strIngredient2);
          // console.log(this.meal.strIngredient3);
          // let i = 3;
          // console.log(this.meal[`strIngredient${i}`]);

          // const ingredients = [];

          for (let i = 1; i <= 20; i++) {
            if (this.meal[`strIngredient${i}`]) {
              this.ingredients.push(
                `${this.meal[`strIngredient${i}`]} - ${
                  this.meal[`strMeasure${i}`]
                }`
              );
            } else {
              break;
            }
          }
          console.log(this.ingredients);
        });
    },
  },
});
