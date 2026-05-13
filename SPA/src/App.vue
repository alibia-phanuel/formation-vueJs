<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
main {
  padding: 20px;
  max-width: calc(100vw -4rem);
}
</style>
