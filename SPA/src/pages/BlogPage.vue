<template>
  <div class="blog-page">
    <h1>Blog</h1>

    <p v-if="state === 'ERROR'">❌ Erreur de chargement des articles.</p>

    <div :aria-busy="state === 'LOADING'">
      <Grid v-if="state === 'DONE'" :width="250">
        <PostCard v-for="post in data" :key="post.id" :post="post" />
      </Grid>
    </div>

    <!-- ===== PAGINATION ===== -->
    <nav class="pagination">
      <!-- Bouton précédent désactivé si on est à la page 1 -->
      <button :disabled="page === 1" @click="page--">← Précédent</button>

      <span>Page {{ page }}</span>

      <!-- Bouton suivant désactivé s'il n'y a plus de données -->
      <button :disabled="!data || data.length < 10" @click="page++">
        Suivant →
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFetch } from "../composables/useFetch.js";
import PostCard from "../components/PostCard.vue";
import Grid from "../components/Grid.vue";

// page courante, démarre à 1
const page = ref(1);

// L'URL est une computed — elle se recalcule automatiquement quand page change
// computed retourne une ref, donc useFetch va la watcher
const url = computed(
  () =>
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page.value}`,
);

const { data, state } = useFetch(url);
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
