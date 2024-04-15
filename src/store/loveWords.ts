import { defineStore } from "pinia";

// export const useLoveWordsStore = defineStore("loveWords", {
// state: () => {
// 	return {
//     words: JSON.parse(localStorage.getItem("loveWords") as string) || [],
//   };
// },
// });

import { reactive } from "vue";
import axios from "axios";
export const useLoveWordsStore = defineStore("loveWords", () => {
    
    const words = reactive(JSON.parse(localStorage.getItem("loveWords") as string) || []);


    async function getTalk() {
      // 连续解构 + 重命名
      let { data: res } = await axios.get(
        "https://international.v1.hitokoto.cn/"
      );
        let obj = { id: res.id, hitokoto: res.hitokoto, from: res.from };
        words.unshift(obj);
      
    }
    return { words, getTalk };

});