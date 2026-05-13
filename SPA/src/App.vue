<template>
  <Header></Header>
  <main>
    <HomePage v-if="page === 'home'"></HomePage>
    <BlogPage v-else-if="page === 'blog'"></BlogPage>
    <PostPage v-else-if="page === 'post'" :id="pageId" />
    <ContactPage v-else-if="page === 'contact'"></ContactPage>
    <p v-else>Page non trouvée</p>
  </main>
</template>

<script setup>
import Header from "./components/Header.vue";
import HomePage from "./pages/HomePage.vue";
import BlogPage from "./pages/BlogPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import PostPage from "./pages/PostPage.vue";
import { usePage } from "./composables/usePage";
const { page, pageId } = usePage();
</script>

<style>
main {
  padding: 20px;
  max-width: calc(100vw -4rem);
}
</style>
