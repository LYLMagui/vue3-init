<template>
  <div class="person">
    <h4>姓名：{{ name }}</h4>
    <h4>年龄：{{ age }}</h4>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "person",
  setup() {
    //数据
    let name = "张三"
    let age = 19
    let tel = 1388888888

    //方法
    function changeName() {
      name = "zhang-san"
    }

    function changeAge() {
      age += 1
    }

    function showTel() {
      alert(tel)
    }

    return {name,age,changeName,changeAge,showTel}

  }
  
};
</script>
