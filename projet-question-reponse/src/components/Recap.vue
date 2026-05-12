<template>
  <h1>Recap</h1>
  <p>Score: {{ score }} / {{ quiz.questions.length }}</p>
  <p>Score : {{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  answers: Array,
  quiz: Object,
});
const score = computed(() => {
  return props.quiz.questions.reduce((acc, question, index) => {
    if (props.answers[index] === question.correct_answer) {
      return acc + 1;
    }
    return acc;
  }, 0);
});

const hasWon = computed(() => score.value >= props.quiz.minimum_score);
</script>
