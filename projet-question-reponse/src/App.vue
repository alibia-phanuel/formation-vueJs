<template>
  <!-- main.container de Pico centre le contenu -->
  <main class="container">
    <!-- ===== ÉTAT ERREUR ===== -->
    <article v-if="state === 'ERROR'">
      <!-- Pico style <article> comme une card automatiquement -->
      <p>❌ Erreur de chargement du quiz</p>
    </article>

    <!-- ===== ÉTAT LOADING / DONE ===== -->
    <!--
      aria-busy="true" → Pico affiche un spinner automatiquement
      aria-busy="false" → Pico affiche le contenu normalement
    -->
    <article :aria-busy="state === 'LOADING'">
      <template v-if="state === 'DONE'">
        <Quiz :quiz="quiz" v-if="quiz" />
      </template>
    </article>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Quiz from "./components/Quiz.vue";
const quiz = ref(null);
const state = ref("LOADING");

onMounted(() => {
  fetch("/quiz.json")
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error("Erreur de chargement du quiz");
    })
    .then((data) => {
      quiz.value = data;
      state.value = "DONE"; // ← on passe en DONE quand les données arrivent
    })
    .catch((err) => {
      state.value = "ERROR";
      console.error(err);
    });
});
</script>
