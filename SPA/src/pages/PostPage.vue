<template>
  <div class="post-page">
    <!-- Bouton retour vers le blog -->
    <RouterLink :to="{ name: 'blog' }">← Retour au blog</RouterLink>

    <p v-if="state === 'ERROR'">❌ Erreur de chargement de l'article.</p>

    <div :aria-busy="state === 'LOADING'">
      <template v-if="state === 'DONE'">
        <article>
          <img
            v-if="data?.id"
            :src="`https://picsum.photos/seed/${data.id}/800/300`"
            :alt="data.title"
            class="cover"
          />
          <h1>{{ data.title }}</h1>
          <p>{{ data.body }}</p>
          <footer>
            <small>Article #{{ data.id }}</small>
          </footer>
        </article>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useFetch } from "../composables/useFetch.js";
import { useRoute } from "vue-router";
const props = defineProps({
  id: String, // l'id vient de App.vue via pageId
});
const route = useRoute(); // on peut aussi récupérer l'id depuis la route avec useRoute() et route.params.id
// L'URL se construit avec l'id reçu en prop
const url = computed(
  () => `https://jsonplaceholder.typicode.com/posts/${props.id}`,
);

const { data, state } = useFetch(url);
</script>

<style scoped>
.cover {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
</style>
