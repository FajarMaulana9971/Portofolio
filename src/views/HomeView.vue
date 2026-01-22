<script setup>
import { ref, onMounted } from "vue";

import WelcomeSection from "../components/section/WelcomeSection.vue";
import AboutSection from "../components/section/AboutSection.vue";
import ExperienceAndProjectSection from "../components/section/ExperienceAndProjectSection.vue";
import FooterSection from "../components/section/FooterSection.vue";
import Navbar from "../components/navbar/Navbar.vue";
import VerticalSlider from "../components/slider/VerticalSlider.vue";

const showWelcome = ref(true);

onMounted(() => {
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
