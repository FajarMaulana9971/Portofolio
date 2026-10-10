<!-- ExperienceAndProjectSection -->
<template>
  <section
    class="relative min-h-screen bg-gradient-to-b from-[#071322] via-[#091a32] to-[#071322] text-slate-100 pt-4 md:pt-8"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Smooth blending mask from previous section -->
      <div
        class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#071322] via-[#071322]/70 to-transparent pointer-events-none z-10"
      ></div>
      <!-- Center radial glow positioned in middle, fading smoothly before edges -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(56,189,248,0.15)_0%,rgba(45,212,191,0.1)_35%,transparent_75%)]"></div>
      <!-- Upper Cyan-Sky orb, shifted away from top boundary -->
      <div class="absolute top-36 -left-10 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-transparent rounded-full blur-[90px] animate-pulse" style="animation-duration: 9s;"></div>
      <!-- Bottom-right vibrant Emerald-Teal orb, shifted away from bottom boundary -->
      <div class="absolute bottom-28 -right-10 w-[32rem] h-[32rem] bg-gradient-to-tl from-emerald-400/30 via-teal-400/25 to-transparent rounded-full blur-[95px] animate-pulse" style="animation-duration: 11s;"></div>
      <!-- Center-left violet accent -->
      <div class="absolute top-1/2 -left-20 w-[24rem] h-[24rem] bg-indigo-500/20 rounded-full blur-[90px]"></div>
    </div>

    <div class="relative z-20 max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16 pt-8">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
          <span class="title-gradient-exp bg-clip-text text-transparent px-1 pb-2 drop-shadow-[0_0_18px_rgba(56,189,248,0.4)]">
            Experience
          </span>
          <span class="text-teal-200 font-normal pb-2 drop-shadow-[0_0_14px_rgba(45,212,191,0.6)]">
            &
          </span>
          <span class="title-gradient-key bg-clip-text text-transparent px-2 pb-2 drop-shadow-[0_0_20px_rgba(167,139,250,0.35)]">
            Key Projects
          </span>
        </h2>
        <div class="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_20px_rgba(45,212,191,0.85)]"></div>
      </div>

      <!-- Timeline -->
      <div class="relative pb-24">
        <!-- Vertical line desktop only -->
        <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-teal-400/70 to-transparent shadow-[0_0_12px_rgba(45,212,191,0.5)] hidden md:block"></div>

        <div class="space-y-8 md:space-y-16">
          
          <!-- PT NAWA DATA -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="hidden md:block md:w-1/2 md:pr-16"></div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-300 to-emerald-400 rounded-full border-4 border-[#071322] shadow-[0_0_16px_rgba(45,212,191,0.9)] z-10 hidden md:flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-[#071322] rounded-full"></div>
            </div>
            <div class="w-full md:w-1/2 md:pl-16">
              <div class="bg-slate-900/60 backdrop-blur-md border border-teal-500/30 rounded-2xl p-5 md:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-16 h-16 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                    <img src="/img/projects/nawa-data.png" alt="Logo MII" loading="lazy" decoding="async" class="w-full h-full object-contain p-2 rounded-lg" />
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">PT Nawa Data Solution</h3>
                  <p class="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold mb-1 text-sm md:text-base drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">JAVA & SAP Developer</p>
                  <p class="text-cyan-200/60 text-sm">Jun 2026 - Present</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <p class="text-slate-300 text-sm mb-4 text-center font-medium">Key Client Project</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('ASTRA INTERNATIONAL')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">PT Astra International</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- PT MUST -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 md:pr-16 md:flex md:justify-end">
              <div class="bg-slate-900/60 backdrop-blur-md border border-teal-500/30 rounded-2xl p-5 md:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-16 h-16 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                    <img src="/img/projects/must.jpg" alt="Logo PT MUST" loading="lazy" decoding="async" class="w-full h-full object-contain p-2 rounded-lg" />
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">PT Mitra Utama Solusi Telematika</h3>
                  <p class="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold mb-1 text-sm md:text-base drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">SENIOR SOFTWARE ENGINER</p>
                  <p class="text-cyan-200/60 text-sm">Oct 2025 - May 2026</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <p class="text-slate-300 text-sm mb-4 text-center font-medium">Key Client Project</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('PLN ICON PLUS')" class="relative group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">
                      PT Indonesia Comnets Plus
                      <span class="absolute -top-3 -right-3 min-w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 text-xs font-bold rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.7)] ring-2 ring-slate-900">2</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-300 to-emerald-400 rounded-full border-4 border-[#071322] shadow-[0_0_16px_rgba(45,212,191,0.9)] z-10 hidden md:flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-[#071322] rounded-full"></div>
            </div>
            <div class="hidden md:block md:w-1/2 md:pl-16"></div>
          </div>

          <!-- PT Mitra Integrasi Informatika -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="hidden md:block md:w-1/2 md:pr-16"></div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-300 to-emerald-400 rounded-full border-4 border-[#071322] shadow-[0_0_16px_rgba(45,212,191,0.9)] z-10 hidden md:flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-[#071322] rounded-full"></div>
            </div>
            <div class="w-full md:w-1/2 md:pl-16">
              <div class="bg-slate-900/60 backdrop-blur-md border border-teal-500/30 rounded-2xl p-5 md:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-16 h-16 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                    <img src="/img/projects/mii.png" alt="Logo MII" loading="lazy" decoding="async" class="w-full h-full object-contain p-2 rounded-lg" />
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">PT Mitra Integrasi Informatika</h3>
                  <p class="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold mb-1 text-sm md:text-base drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">JAVA DEVELOPER</p>
                  <p class="text-cyan-200/60 text-sm">Sept 2023 - Sept 2025</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <p class="text-slate-300 text-sm mb-4 text-center font-medium">Key Client Projects</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('PT Metrodata')" class="relative group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">
                      PT Metrodata Electronics Tbk
                      <span class="absolute -top-3 -right-3 min-w-[1.5rem] h-6 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 text-xs font-bold rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.7)] ring-2 ring-slate-900">3</span>
                    </button>
                    <button @click="openModal('PT FIFGROUP')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">PT Federal International Finance</button>
                    <button @click="openModal('PT INDESSO CULINAROMA INTERNATIONAL')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">PT Indesso Culinaroma International</button>
                    <button @click="openModal('PT BNI')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">PT Bank Negara Indonesia (Persero) Tbk</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ardhacodes -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 md:pr-16 md:flex md:justify-end">
              <div class="bg-slate-900/60 backdrop-blur-md border border-teal-500/30 rounded-2xl p-5 md:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-16 h-16 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                    <img src="/img/projects/ardhacodes.png" alt="Logo Ardhacodes" loading="lazy" decoding="async" class="w-full h-full object-contain p-2 rounded-lg" />
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Ardhacodes Teknologi Indonesia</h3>
                  <p class="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold mb-1 text-sm md:text-base drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">FULLSTACK DEVELOPER</p>
                  <p class="text-cyan-200/60 text-sm">Jan 2022 - Mar 2023</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <p class="text-slate-300 text-sm mb-4 text-center font-medium">Key Client Projects</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('Glorindo Group')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">Glorindo Group</button>
                    <button @click="openModal('Eka Berkat Jaya')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">Eka Berkat Jaya</button>
                    <button @click="openModal('Surabaya City Government')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">Surabaya City Government</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-300 to-emerald-400 rounded-full border-4 border-[#071322] shadow-[0_0_16px_rgba(45,212,191,0.9)] z-10 hidden md:flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-[#071322] rounded-full"></div>
            </div>
            <div class="hidden md:block md:w-1/2 md:pl-16"></div>
          </div>

          <!-- Other Projects -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="hidden md:block md:w-1/2 md:pr-16"></div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-300 to-emerald-400 rounded-full border-4 border-[#071322] shadow-[0_0_16px_rgba(45,212,191,0.9)] z-10 hidden md:flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-[#071322] rounded-full"></div>
            </div>
            <div class="w-full md:w-1/2 md:pl-16">
              <div class="bg-slate-900/60 backdrop-blur-md border border-teal-500/30 rounded-2xl p-5 md:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 rounded-xl flex items-center justify-center mb-3 shadow-[0_0_16px_rgba(45,212,191,0.6)]">
                    <span class="text-slate-950 font-extrabold text-xl">FL</span>
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Other Projects</h3>
                  <p class="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold mb-1 text-sm md:text-base drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">INDEPENDENT DEVELOPER</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <div class="flex flex-wrap justify-center gap-2">
                    <!-- <button @click="openModal('PersonalPal')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">Personal Pal</button> -->
                    <button @click="openModal('Spendly')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">Spendly</button>
                    <button @click="openModal('SpringIntializr')" class="group bg-slate-800/70 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 text-white hover:text-cyan-200 px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] border border-slate-700 hover:border-cyan-400 text-sm">Serverapp Initialzr</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <ExperienceAndProjectModal
      :project="selectedProject"
      :initial-scroll-position="clickedScrollPos"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const ExperienceAndProjectModal = defineAsyncComponent(() =>
  import("../modal/ExperienceAndProjectModal.vue")
);

const selectedProject = ref(null);
const clickedScrollPos = ref(0);

const openModal = (project) => {
  const lenis = window.lenis;
  const currentScroll =
    lenis && typeof lenis.scroll === "number"
      ? lenis.scroll
      : window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;

  clickedScrollPos.value = Math.round(currentScroll);
  selectedProject.value = project;
};

const closeModal = () => {
  const targetScroll = clickedScrollPos.value;
  selectedProject.value = null;

  requestAnimationFrame(() => {
    const lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(targetScroll, { immediate: true, force: true });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "instant" });
      window.scrollTo(0, targetScroll);
    }
  });
};
</script>

<style scoped>
.title-gradient-exp {
  background-image: linear-gradient(90deg, #67e8f9, #38bdf8, #5eead4);
}

.title-gradient-key {
  background-image: linear-gradient(
    90deg,
    #6ee7b7,
    #67e8f9,
    #38bdf8,
    #a78bfa,
    #67e8f9,
    #6ee7b7
  );
  background-size: 200% auto;
  animation: title-shimmer 8s linear infinite;
}

@keyframes title-shimmer {
  to {
    background-position: 200% center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .title-gradient-key {
    animation: none;
  }
}
</style>