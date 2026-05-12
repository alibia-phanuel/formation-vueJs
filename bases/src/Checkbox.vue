<template>
  <label>
    <input type="checkbox" @change="onChange" @change="onChange" />
    {{ label }}
  </label>
</template>

<script setup>
const model = defineModel({
  label: String,
});
const props = defineProps({
  label: String,
});
console.log(props.label);

const emits = defineEmits(["check", "uncheck"]);

const onChange = (event) => {
  if (event.target.checked) {
    emits("check", event.currentTarget);
  } else {
    emits("uncheck", event.currentTarget);
  }
};
</script>
