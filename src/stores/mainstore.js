import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    term: 'Soup',
    posts: [],
    error: null,
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
  },
});
