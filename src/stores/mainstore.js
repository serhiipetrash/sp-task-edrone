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
    showSingle: false,
    catList: [],
    areaList: [],
    tagsList: [],
    favoritList: [],
  }),
  getters: {
    getURL: (state) => {
      return state.templateURL + state.term;
    },
  },
  actions: {
    async myFetch(url) {
      this.showSingle = false;
      try {
        const result = await fetch(url);
        const data = await result.json();
        this.posts = data;

        // console.log(this.posts.meals[0]);

        //get all category list
        const allCatList = [];
        for (let i = 0; i < this.posts.meals.length; i++) {
          allCatList.push(this.posts.meals[i].strCategory);
        }
        //get unique category list
        const uniqueCatList = [...new Set(allCatList)];
        this.catList = [...uniqueCatList];
        // console.log(this.catList);

        ///////////////////////////////////
        //get all area list
        const allAreaList = [];
        for (let i = 0; i < this.posts.meals.length; i++) {
          allAreaList.push(this.posts.meals[i].strArea);
        }
        //get unique area list
        const uniqueAreaList = [...new Set(allAreaList)];
        this.areaList = [...uniqueAreaList];
        // console.log(this.areaList);

        //////////////////////////////////
        //get all tags list
        const allTagsList = [];
        for (let i = 0; i < this.posts.meals.length; i++) {
          allTagsList.push(this.posts.meals[i].strTags);
        }

        const filterTagsList = allTagsList.filter((item) => {
          return item !== null;
        });

        //get unique tags list
        const uniqueTagsList = [...new Set(filterTagsList)];
        this.tagsList = [...uniqueTagsList];
        // console.log(this.tagsList);
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
      this.showSingle = true;
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
        // console.log(this.mealID);
        // console.log(this.fullURL);
      }
    },
    getFavoritList() {
      const favoritArr = JSON.parse(localStorage.getItem('favoritList'));
      return favoritArr === null ? [] : favoritArr;
    },
  },
});
