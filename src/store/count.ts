import { defineStore } from "pinia";

// 参数：1.id名，和文件名一致 2.配置对象
export const useCountStore = defineStore('count', {
	state() {
		return {
			sum:0
		}
	}
})