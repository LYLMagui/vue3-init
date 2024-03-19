// 所有的内容都和dog相关
import { reactive, onMounted } from "vue";
import axios from "axios";

// 使用export default 可以向外界暴露任何东西
export default function () {
  // 数据
  let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_5881.jpg",
  ]);

  async function getDog() {
    // await 会获取请求成功的结果，如果报错了，可以用try……catch捕获，或者使用axios拦截器
    let result = await axios.get(
      "https://dog.ceo/api/breed/pembroke/images/random"
    );
    dogList.push(result.data.message);
  }

	// 挂载钩子
	onMounted(() => {
		getDog()
	})
  // 向外提供东西
  return { dogList, getDog };
}
