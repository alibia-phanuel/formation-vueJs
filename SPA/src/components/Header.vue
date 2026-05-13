<template>
  <div class="header">
    <a href="#" class="header_logo">Mon site</a>
    <nav>
      <a href="#blog">blog</a>
      <a href="#contact">contact</a>
    </nav>
  </div>
</template>

<script setup></script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  width: 100%; /* ✅ force la pleine largeur */
  max-width: 100%; /* ✅ écrase la limite de Pico */
  margin: 0; /* ✅ supprime les marges auto de Pico */
}
.header a {
  text-decoration: none;
  color: inherit;
  margin: 0 0.5rem;
}
.header_logo {
  font-size: 1.5rem;
}
</style>
