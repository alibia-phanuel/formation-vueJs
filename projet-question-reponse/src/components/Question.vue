<template>
  <div class="question">
    <h6>{{ question.question }}</h6>
    <ul>
      <li v-for="(choice, index) in rendomChoices" :key="choice">
        <Answer
          :id="`choice-${index}`"
          :disabled="hasAnser"
          :value="choice"
          v-model="answer"
          :correctAnswer="question.correct_answer"
        />
      </li>
    </ul>
    <button :disabled="!hasAnser" @click="emits('answer', answer)">
      Question suivante
    </button>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { shuffleArray } from "../functions/array.js";
import Answer from "./Answer.vue";
const props = defineProps({
  question: Object,
});
const emits = defineEmits(["answer"]);
const answer = ref(null);
const hasAnser = computed(() => answer.value !== null);
const rendomChoices = computed(() => shuffleArray(props.question.choices));
</script>

<style scoped>
.question {
  padding-top: 2rem 0;
}

.question button {
  margin-left: auto;
  display: block;
}
</style>
