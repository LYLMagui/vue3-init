// 所有的内容都和sum相关
import { ref } from "vue";

export default function () {
  // 数据
  let sum = ref(0);

  // 方法
  function add() {
    sum.value += 1;
  }

  return { sum, add };
}
