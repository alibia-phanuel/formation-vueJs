<template>
  <div class="not-found">
    <div class="content">
      <span class="code">404</span>
      <h1>Page introuvable</h1>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <RouterLink to="/" class="btn-home">
        <i class="ti ti-arrow-left" aria-hidden="true"></i>
        Retour à l'accueil
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
// Aucune logique nécessaire pour cette page
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.code {
  font-size: 6rem;
  font-weight: 700;
  color: var(--pico-primary);
  line-height: 1;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
}

p {
  color: var(--pico-muted-color);
  margin: 0;
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  background: var(--pico-primary);
  color: var(--pico-primary-inverse);
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.btn-home:hover {
  opacity: 0.85;
}
</style>
