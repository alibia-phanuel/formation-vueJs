<template>
  <div class="grid" :style="style">
    <slot></slot>
  </div>
</template>
<script setup>
import { computed } from "vue"; 
const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
});
const style = computed(() => ({
  "--width": `${props.width}px`,
}));
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--width), 1fr));
  gap: 1rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
