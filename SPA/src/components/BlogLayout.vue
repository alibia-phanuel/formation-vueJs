<script setup lang="ts">
import { RouterView } from "vue-router";

const categories = [
  { label: "JavaScript", count: 12 },
  { label: "Vue.js", count: 8 },
  { label: "CSS", count: 5 },
  { label: "Performance", count: 3 },
];

const recentPosts = [
  { id: 1, title: "Comprendre les composables Vue 3" },
  { id: 2, title: "CSS Grid en pratique" },
  { id: 3, title: "Optimiser ses requêtes API" },
];
</script>

<template>
  <div class="blog-layout">
    <main>
      <RouterView />
    </main>

    <aside>
      <section>
        <h3>Catégories</h3>
        <ul>
          <li v-for="cat in categories" :key="cat.label">
            {{ cat.label }}
            <span class="count">{{ cat.count }}</span>
          </li>
        </ul>
      </section>

      <section>
        <h3>Articles récents</h3>
        <ul>
          <li v-for="post in recentPosts" :key="post.id">
            <RouterLink :to="{ name: 'post', params: { id: post.id } }">
              {{ post.title }}
            </RouterLink>
          </li>
        </ul>
      </section>

      <section>
        <h3>Newsletter</h3>
        <p>Recevez les nouveaux articles chaque semaine.</p>
        <input type="email" placeholder="votre@email.com" />
        <button>S'abonner</button>
      </section>
    </aside>
  </div>
</template>

<style scoped>
.blog-layout {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 2rem;
}

aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h3 {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  color: var(--pico-muted-color);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

li {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.count {
  background: var(--pico-secondary-background);
  padding: 0 6px;
  border-radius: 4px;
  font-size: 0.8rem;
}

a {
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

input {
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
}

button {
  width: 100%;
  font-size: 0.85rem;
}
</style>
