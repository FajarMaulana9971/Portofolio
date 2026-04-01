import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index.js";
import Lenis from "@studio-freight/lenis";
import Aos from "aos";

import "aos/dist/aos.css";
import "./style.css";
import "./styles/global.css";

const app = createApp(App);

Aos.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true,
  offset: 100,
});

app.use(router);
app.mount("#app");

let lenis = null;

function initLenis() {
  const isMobile = window.innerWidth <= 1024; 

  if (isMobile) {
    if (lenis) {
      lenis.destroy();
      lenis = null;
      console.log("Lenis Disabled (Mobile)");
    }
  } else {
    if (!lenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      function raf(time) {
        if (lenis) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      }
      requestAnimationFrame(raf);
      console.log("Lenis Enabled (Desktop)");
    }
  }
  
  window.lenis = lenis;
}

initLenis();

window.addEventListener("resize", () => {
  initLenis();
});

export { lenis };