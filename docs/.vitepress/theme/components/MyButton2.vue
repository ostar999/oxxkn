<script setup>
defineProps(["text"]);
</script>

<template>
  <button class="my-button2">{{ text }}</button>
</template>

<style>
.my-button2 {
  padding: 10px 20px;
  background-color: #cd963c;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
