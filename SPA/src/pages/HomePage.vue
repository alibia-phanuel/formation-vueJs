<template>
  <div class="home-page">
    <section class="hero">
      <h1>Bienvenue sur le blog</h1>
      <p>
        Des articles sur le développement web, Vue.js, JavaScript et bien plus
        encore.
      </p>
      <RouterLink :to="{ name: 'blog' }" class="cta"
        >Lire les articles →</RouterLink
      >
    </section>

    <section class="features">
      <div class="card" v-for="feature in features" :key="feature.title">
        <span class="icon">{{ feature.icon }}</span>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>

    <section class="latest">
      <h2>À la une</h2>
      <ul>
        <li v-for="post in latestPosts" :key="post.id">
          <RouterLink :to="{ name: 'post', params: { id: post.id } }">
            {{ post.title }}
          </RouterLink>
          <span class="tag">{{ post.tag }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    icon: "✍️",
    title: "Articles de qualité",
    description: "Des contenus rédigés avec soin pour apprendre efficacement.",
  },
  {
    icon: "⚡",
    title: "Conseils pratiques",
    description: "Des astuces directement applicables dans vos projets.",
  },
  {
    icon: "🎯",
    title: "Sujets ciblés",
    description: "Vue.js, JavaScript, CSS et performance web au programme.",
  },
];

const latestPosts = [
  { id: 1, title: "Comprendre les composables Vue 3", tag: "Vue.js" },
  { id: 2, title: "CSS Grid en pratique", tag: "CSS" },
  { id: 3, title: "Optimiser ses requêtes API", tag: "Performance" },
];
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0;
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  color: var(--pico-muted-color);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.cta {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  background: var(--pico-primary);
  color: var(--pico-primary-inverse);
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.2s;
}

.cta:hover {
  opacity: 0.85;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.25rem;
  border: 1px solid var(--pico-muted-border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.icon {
  font-size: 1.5rem;
}

.card h3 {
  font-size: 1rem;
  margin: 0;
}

.card p {
  font-size: 0.875rem;
  color: var(--pico-muted-color);
  margin: 0;
}

.latest h2 {
  margin-bottom: 1rem;
}

.latest ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.latest li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.latest a {
  color: inherit;
  text-decoration: none;
  font-size: 0.95rem;
}

.latest a:hover {
  text-decoration: underline;
}

.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--pico-secondary-background);
  color: var(--pico-muted-color);
}
</style>
