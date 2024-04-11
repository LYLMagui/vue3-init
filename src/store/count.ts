import { defineStore } from "pinia";

// 参数：1.id名，和文件名一致 2.配置对象
export const useCountStore = defineStore('count', {
	// acitons里放置的是一个一个的方法，用于响应组件中的动作
	actions: {
		incremnet(value:number) {
			if (this.sum <= 10) {
				this.sum += value;
				
			}
			
		}
	},
	state() {
		return {
			sum:0
		}
	}
})