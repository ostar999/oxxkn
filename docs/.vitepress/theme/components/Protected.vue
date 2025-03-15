<script setup>
import { ref } from "vue";
import { useData } from "vitepress";

// 获取当前页面的 frontmatter 数据
const { frontmatter } = useData();
const password = ref(""); // 密码输入框
const isAuthenticated = ref(false); // 是否已通过密码验证

// ✅ 校验密码
function checkPassword() {
  if (password.value === frontmatter.value.password) {
    isAuthenticated.value = true;
  } else {
    alert("密码错误，请重新输入！");
  }
}
</script>

<template>
  <div v-if="isAuthenticated">
    <!-- ✅ 通过密码验证后，展示页面内容 -->
    <Content />
  </div>

  <div v-else class="protected-container">
    <h1>🔐 此页面受密码保护</h1>
    <p>请输入密码以访问此页面：</p>
    <input v-model="password" type="password" placeholder="输入密码" />
    <button @click="checkPassword">提交</button>
  </div>
</template>

<style scoped>
.protected-container {
  text-align: center;
  margin-top: 20%;
}
input,
button {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
