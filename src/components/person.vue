<template>
  <div class="person">
    <h4>姓名：{{ name }}</h4>
    <h4>年龄：{{ age }}</h4>
    <h4>性别：{{ sex }}</h4>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "person",
  data() {
    return {
      name: "张三",
      age: 19,
      sex: "男",
      tel: 123123123,
    };
  },
  methods: {
    changeName() {
      this.name = "zhang-san"
    },
    changeAge() {
      this.age +=1
    },
    showTel() {
      alert(this.tel);
    },
  },
};
</script>

<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button{
  margin: 0 10px;
}
</style>
