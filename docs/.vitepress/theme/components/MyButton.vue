<script setup>
defineProps(["text"]);
</script>

<template>
  <button class="my-button">{{ text }}</button>
</template>

<style>
.my-button {
  padding: 10px 20px;
  background-color: #42b983;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
