import { defineStore } from "pinia";

export const useLoveWordsStore = defineStore("loveWords", {
state: () => {
	return {
    words: JSON.parse(localStorage.getItem("loveW") as string) || [],
  };
},
});
