import BlogPage from "./pages/BlogPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";
import PostPage from "./pages/PostPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import BlogLayout from "./components/BlogLayout.vue";

export const routes = [
  { path: "/", name: "home", component: HomePage },
  {
    path: "/blog",
    component: BlogLayout,
    children: [
      { path: "", name: "blog", component: BlogPage }, // ✅ "" au lieu de "/"
      { path: ":id(\\d+)", name: "post", component: PostPage, props: true },
    ],
  },
  { path: "/contact", name: "contact", component: ContactPage },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
];
