<template>
  <form action="" @submit.prevent="addTodo">
    <input
      v-model="Newtodo"
      type="text"
      id="todoInput"
      name="todoInput"
      placeholder="Ajouter une tâche"
    />
    <button :disabled="!Newtodo.trim()" type="submit">Ajouter</button>
  </form>

  <div v-if="todoList.length === 0" class="empty-state">
    <p>Aucune tâche à afficher.</p>
  </div>

  <div v-else class="todo-wrapper">
    <ul class="todo-list">
      <!--
        Avant : sortTodos() → fonction appelée à chaque rendu
        Après : sortedTodos  → computed, recalculée seulement si
                               todoList ou hideCompleted changent
      -->
      <li
        v-for="todo in sortedTodos"
        :key="todo.date"
        :class="{ completed: todo.completed }"
        class="todo-item"
      >
        <label class="todo-label">
          <input v-model="todo.completed" type="checkbox" />
          {{ todo.title }}
        </label>
      </li>
    </ul>

    <label class="hide-label">
      <input type="checkbox" v-model="hideCompleted" />
      Masquer les tâches complétées
    </label>
    <Checkbox
      label="bonjour"
      @check="console.log('Checkbox checked')"
      @uncheck="console.log('Checkbox unchecked')"
    />
  </div>
</template>

<script setup>
// On importe computed en plus de ref

import Checkbox from "./Checkbox.vue";
import { ref, computed } from "vue";

const todoList = ref([]);
const Newtodo = ref("");
const hideCompleted = ref(false);

const addTodo = () => {
  if (Newtodo.value.trim() !== "") {
    todoList.value.push({
      title: Newtodo.value,
      completed: false,
      date: Date.now(),
    });
    Newtodo.value = "";
  }
};

/*
  AVANT : fonction normale
  const sortTodos = () => {
    ...
  }

  APRÈS : computed()
  - Vue surveille todoList et hideCompleted automatiquement
  - Si aucune des deux ne change → Vue retourne la valeur en cache
  - Si l'une d'elles change → Vue recalcule
*/
const sortedTodos = computed(() => {
  // On trie : les tâches non complétées (false) passent avant (true)
  const sorted = todoList.value.toSorted((a, b) =>
    a.completed > b.completed ? 1 : -1,
  );

  // Si hideCompleted est true, on filtre les tâches terminées
  if (hideCompleted.value) {
    return sorted.filter((todo) => !todo.completed);
  }

  return sorted;
});
</script>
<style>
/* ===================== GLOBAL ===================== */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  margin: 0;
}

/* ===================== FORMULAIRE ===================== */
form {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}

input[type="text"]:focus {
  border-color: #4a90e2;
}

button {
  padding: 10px 18px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:not(:disabled) {
  background-color: #357abd;
}

button:disabled {
  background-color: #b0c4de;
  cursor: not-allowed;
}

/* ===================== MESSAGE LISTE VIDE ===================== */
.empty-state {
  text-align: center;
  color: #999;
  font-style: italic;
  margin-top: 30px;
}

/* ===================== LISTE DES TÂCHES ===================== */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.todo-item {
  background: white;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: opacity 0.2s;
}

.todo-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 15px;
}

/* ===================== TÂCHE COMPLÉTÉE ===================== */
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

/* ===================== CASE MASQUER ===================== */
.hide-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  margin-top: 8px;
}
</style>
