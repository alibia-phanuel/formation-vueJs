// src/composables/usePage.js
import { ref, onMounted, onUnmounted } from "vue";

/**
 * Composable qui suit la page active en lisant le hash de l'URL
 * ex: localhost/#blog   → page = "blog", pageId = null
 * ex: localhost/#post:3 → page = "post", pageId = "3"
 * ex: localhost/        → page = "home" (valeur par défaut)
 */
export function usePage() {
  // ref réactive initialisée avec le hash actuel de l'URL
  const page = ref(parseHash().page);
  const pageId = ref(parseHash().id); // id du post si présent ex: #post:3 → "3"

  // appelée à chaque changement de hash dans l'URL
  const onHashChange = () => {
    page.value = parseHash().page; // met à jour page → Vue re-render automatiquement
    pageId.value = parseHash().id; // met à jour pageId
  };

  // on écoute l'événement hashchange quand le composant est monté dans le DOM
  onMounted(() => window.addEventListener("hashchange", onHashChange));

  // on supprime l'écouteur quand le composant est détruit
  // important pour éviter les fuites mémoire
  onUnmounted(() => window.removeEventListener("hashchange", onHashChange));

  return { page, pageId }; // on expose page et pageId pour les utiliser dans les composants
}

/**
 * Lit le hash de l'URL et le découpe en page et id
 * ex: "#post:3" → { page: "post", id: "3" }
 * ex: "#blog"   → { page: "blog", id: null }
 * ex: ""        → { page: "home", id: null }
 */
function parseHash() {
  const hash = window.location.hash.replace("#", "") || "home";
  // split(":") découpe sur ":" → ["post", "3"] ou ["blog"]
  const [page, id] = hash.split(":");
  return { page, id: id ?? null }; // si pas d'id → null
}
