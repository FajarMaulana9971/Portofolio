import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index.js";
import Lenis from "@studio-freight/lenis";
import Aos from "aos";

// Import CSS AOS (Penting agar animasi jalan)
import "aos/dist/aos.css";
import "./style.css";
import "./styles/global.css";

const app = createApp(App);

Aos.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true, // animasi hanya jalan sekali
  offset: 100,
});

app.use(router);
app.mount("#app");

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

window.lenis = lenis;
export { lenis };
