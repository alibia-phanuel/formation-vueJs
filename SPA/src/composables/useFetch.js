import { ref, onMounted, watch, isRef } from "vue"; // ✅ import isRef

export function useFetch(url) {
  const data = ref(null);
  const state = ref("LOADING");

  const fetchData = () => {
    state.value = "LOADING";
    // isRef vérifie proprement si url est une ref/computed
    const fetchUrl = isRef(url) ? url.value : url;
    fetch(fetchUrl)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Erreur de chargement");
      })
      .then((json) => {
        data.value = json;
        state.value = "DONE";
      })
      .catch((err) => {
        console.error(err);
        state.value = "ERROR";
      });
  };

  onMounted(fetchData);

  // Si url est une ref ou computed, on watch les changements
  if (isRef(url)) {
    watch(url, fetchData);
  }

  return { data, state };
}
