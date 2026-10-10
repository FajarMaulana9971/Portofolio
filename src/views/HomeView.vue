<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

import WelcomeSection from "../components/section/WelcomeSection.vue";

const AboutSection = defineAsyncComponent(() =>
  import("../components/section/AboutSection.vue")
);
const ExperienceAndProjectSection = defineAsyncComponent(() =>
  import("../components/section/ExperienceAndProjectSection.vue")
);
const FooterSection = defineAsyncComponent(() =>
  import("../components/section/FooterSection.vue")
);
const Navbar = defineAsyncComponent(() =>
  import("../components/navbar/Navbar.vue")
);
const VerticalSlider = defineAsyncComponent(() =>
  import("../components/slider/VerticalSlider.vue")
);

const showWelcome = ref(true);

onMounted(() => {
  // Preload main content chunks during the 6s welcome animation idle period
  const preloadMainContent = () => {
    import("../components/section/AboutSection.vue");
    import("../components/section/ExperienceAndProjectSection.vue");
    import("../components/section/FooterSection.vue");
    import("../components/navbar/Navbar.vue");
    import("../components/slider/VerticalSlider.vue");
  };

  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(preloadMainContent);
  } else {
    setTimeout(preloadMainContent, 1000);
  }

  setTimeout(() => {
    showWelcome.value = false;
    document.body.style.overflow = "auto";
  }, 6000);
});

document.body.style.overflow = "hidden";
</script>

<template>
  <!-- WELCOME -->
  <WelcomeSection v-if="showWelcome" />

  <!-- MAIN CONTENT -->
  <template v-else>
    <div class="fixed top-1/2 -translate-y-1/2 z-50 right-2 sm:right-8">
      <VerticalSlider />
    </div>

    <AboutSection />
    <ExperienceAndProjectSection />
    <FooterSection />
    <Navbar />
  </template>
</template>
