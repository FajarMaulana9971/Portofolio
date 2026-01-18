import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Aos from "aos";

const routes = [{ path: "/", name: "welcome", component: HomeView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  setTimeout(() => {
    Aos.refresh();
  }, 50);
});

export default router;
