import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    term: 'Soup',
    posts: [],
    error: null,
    mealID: null,
    meal: [],
    ingredients: [],
    templateURL: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    templateURLid: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
    fullURL: null,
  }),
  getters: {
    getURL: (state) => {
      return state.templateURL + state.term;
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
    getMealById() {
      this.ingredients = [];
      // const url = this.templateURL + this.mealID;
      const url = this.fullURL;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.meal = data.meals[0];

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
        });
    },
    mealsEl(e) {
      // console.log(e);
      const mealInfo = e.path.find((item) => {
        if (item.classList) {
          return item.classList.contains('meal');
        } else {
          return false;
        }
      });
      // console.log(mealInfo);
      if (mealInfo) {
        this.mealID = mealInfo.querySelector('span').innerText;
        this.fullURL = this.templateURLid + this.mealID;
        this.getMealById(this.fullURL);
        console.log(this.mealID);
        // console.log(this.fullURL);
      }
    },
  },
});
