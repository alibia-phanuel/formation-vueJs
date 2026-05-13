<template>
  <!-- Le <a> englobe tout l'article pour le rendre cliquable -->
  <a :href="'#post:' + props.post.id" class="post-card">
    <article>
      <img
        :src="'https://picsum.photos/seed/' + props.post.id + '/400/200'"
        :alt="props.post.title"
      />

      <div>
        <h3>{{ props.post.title }}</h3>
        <p>{{ props.post.body }}</p>
      </div>

      <footer>
        <small>Article #{{ props.post.id }}</small>
      </footer>
    </article>
  </a>
</template>

<script setup>
const props = defineProps({
  post: Object,
});
</script>

<style scoped>
.post-card {
  text-decoration: none;
  color: inherit; /* hérite la couleur du texte, pas de bleu de lien */
  display: block; /* le <a> prend toute la largeur */
}

.post-card:hover article {
  /* légère élévation au survol pour indiquer que c'est cliquable */
  transform: translateY(-4px);
  transition: transform 0.2s;
}

img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

h3 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.875rem;
  color: var(--pico-muted-color);
}
</style>
