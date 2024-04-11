import { defineStore } from "pinia";

export const useLoveWordsStore = defineStore("loveWords", {
state: () => {
	return {
    words: [
    { id: "5655", hitokoto: "昔去雪如花，今来花似雪。", from: "别诗" },
    {id: "5085",hitokoto: "梦如同黎明的泡沫一样渐渐消失。",from: "幽兰黛尔"},
    ],
};
},
});
