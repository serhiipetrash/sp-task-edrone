import { defineStore } from 'pinia';

export const useCategory = defineStore('category', {
  state: () => ({
    catFind: '',
    showCategory: true,
  }),
  getters: {
    // toggleCategory: (state) => {
    //   return (state.showCategory = !state.showCategory);
    // },
  },
  actions: {
    // async fetchCategory() {
    //   const url = this.urlCategorys;
    //   try {
    //     const result = await fetch(url);
    //     const data = await result.json();
    //     this.cat = data;
    //     // console.log(this.cat);
    //   } catch (err) {
    //     this.error = err.message;
    //   }
    // },
    toggleCategory() {
      this.showCategory = !this.showCategory;
    },
    findCategory(e) {
      const find = e.path.find((item) => {
        if (item.classList) {
          return item.classList.contains('catitem');
        } else {
          return false;
        }
      });

      if (find) {
        this.catFind = find.querySelector('span').innerText;
        console.log(this.catFind);
      }
    },
  },
});
