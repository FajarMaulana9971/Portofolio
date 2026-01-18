<!-- ExperienceAndProjectSection -->
<template>
  <section
    class="relative min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 text-gray-100 overflow-hidden"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Experience <span class="text-emerald-400">&</span> Key Projects
        </h2>
        <div
          class="w-24 h-1 bg-linear-to-r from-emerald-400 to-emerald-500 mx-auto"
        ></div>
      </div>

      <!-- Timeline -->
      <div class="relative pb-24">
        <!-- Vertical line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 hidden md:block"
        ></div>

        <!-- Experience Cards -->
        <div class="space-y-16">
          <!-- PT MUST -->
          <div class="relative flex flex-col md:flex-row items-center">
            <!-- Left Card -->
            <div class="w-full md:w-1/2 md:pr-16 flex justify-end">
              <div
                class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full max-w-lg"
              >
                <div class="flex flex-col items-center text-center mb-4">
                  <div
                    class="from-emerald-200 to-emerald-900 w-17 h-17 bg-linear-to-br rounded-lg flex items-center justify-center mb-3"
                  >
                    <img
                      src="/img/projects/must.jpg"
                      alt="Logo PT MUST"
                      class="w-full h-full object-contain p-2"
                    />
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-2">
                    PT Mitra Utama Solusi Telematika
                  </h3>
                  <p class="text-emerald-400 font-semibold mb-1">
                    SENIOR JAVA DEVELOPER
                  </p>
                  <p class="text-gray-400">Oct 2025 - Present</p>
                </div>

                <div class="mt-6">
                  <p class="text-gray-300 text-sm mb-4 text-center">
                    Key Client Projects
                  </p>
                  <div class="flex justify-center">
                    <button
                      @click="openModal('PLN ICON PLUS (PERSERO)')"
                      class="relative group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>PLN ICON PLUS (PERSERO)</span>
                      <span
                        class="absolute -top-3 -right-4 min-w-6 h-6 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full flex items-center justify-center shadow-md shadow-emerald-500/40 ring-2 ring-gray-900"
                      >
                        2
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Timeline dot - Centered -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 flex items-center justify-center md:flex"
            >
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>

            <!-- Right Empty Space -->
            <div class="w-full md:w-1/2 md:pl-16"></div>
          </div>

          <!-- PT Mitra Integrasi Informatika -->
          <div class="relative flex flex-col md:flex-row items-center">
            <!-- Left Empty Space -->
            <div class="w-full md:w-1/2 md:pr-16"></div>

            <!-- Timeline dot - Centered -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 flex items-center justify-center hidden md:flex"
            >
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>

            <!-- Right Card -->
            <div class="w-full md:w-1/2 md:pl-16">
              <div
                class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full max-w-lg"
              >
                <div class="flex flex-col items-center text-center mb-4">
                  <div
                    class="from-emerald-200 to-emerald-900 w-20 h-20 bg-linear-to-br rounded-lg flex items-center justify-center mb-3"
                  >
                    <img
                      src="/img/projects/mii.png"
                      alt="Logo PT MUST"
                      class="w-full h-full object-contain p-2"
                    />
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-2">
                    PT Mitra Integrasi Informatika
                  </h3>
                  <p class="text-emerald-400 font-semibold mb-1">
                    JAVA DEVELOPER
                  </p>
                  <p class="text-gray-400">Sept 2023 - Sept 2025</p>
                </div>

                <div class="mt-6">
                  <p class="text-gray-300 text-sm mb-4 text-center">
                    Key Client Projects
                  </p>
                  <div class="flex flex-wrap justify-center gap-3">
                    <button
                      @click="openModal('PT BNI (PERSERO)')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>PT BNI (PERSERO)</span>
                    </button>
                    <button
                      @click="openModal('PT Metrodata')"
                      class="relative group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>PT METRODATA</span>
                      <span
                        class="absolute -top-3 -right-4 min-w-[1.5rem] h-6 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full flex items-center justify-center shadow-md shadow-emerald-500/40 ring-2 ring-gray-900"
                      >
                        3
                      </span>
                    </button>
                    <button
                      @click="openModal('PT FIFGROUP')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>PT FIFGROUP</span>
                    </button>
                    <button
                      @click="openModal('PT INDESSO CULINAROMA INTERNATIONAL')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>PT INDESSO CULINAROMA INTERNATIONAL</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ardha Codes -->
          <div class="relative flex flex-col md:flex-row items-center">
            <!-- Left Card -->
            <div class="w-full md:w-1/2 md:pr-16 flex justify-end">
              <div
                class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full max-w-lg"
              >
                <div class="flex flex-col items-center text-center mb-4">
                  <div
                    class="from-emerald-200 to-emerald-900 w-20 h-20 bg-linear-to-br rounded-lg flex items-center justify-center mb-3"
                  >
                    <img
                      src="/img/projects/ardhacodes.png"
                      alt="Logo PT MUST"
                      class="w-full h-full object-contain p-2"
                    />
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-2">
                    Ardha Codes
                  </h3>
                  <p class="text-emerald-400 font-semibold mb-1">
                    FULLSTACK DEVELOPER
                  </p>
                  <p class="text-gray-400">Jan 2022 - Mar 2023</p>
                </div>

                <div class="mt-6">
                  <p class="text-gray-300 text-sm mb-4 text-center">
                    Key Client Projects
                  </p>
                  <div class="flex flex-wrap justify-center gap-3">
                    <button
                      @click="openModal('Glorindo Group')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>Glorindo Group</span>
                    </button>
                    <button
                      @click="openModal('Eka Berkat Jaya')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>Eka Berkat Jaya</span>
                    </button>
                    <button
                      @click="openModal('Surabaya City Government')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>Surabaya City Government</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Timeline dot - Centered -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 flex items-center justify-center hidden md:flex"
            >
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>

            <!-- Right Empty Space -->
            <div class="w-full md:w-1/2 md:pl-16"></div>
          </div>

          <!-- Freelance -->
          <div class="relative flex flex-col md:flex-row items-center">
            <!-- Left Empty Space -->
            <div class="w-full md:w-1/2 md:pr-16"></div>

            <!-- Timeline dot - Centered -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 flex items-center justify-center hidden md:flex"
            >
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>

            <!-- Right Card -->
            <div class="w-full md:w-1/2 md:pl-16">
              <div
                class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full max-w-lg"
              >
                <div class="flex flex-col items-center text-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center mb-3"
                  >
                    <span class="text-white font-bold text-xl">FL</span>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-2">Freelance</h3>
                  <p class="text-emerald-400 font-semibold mb-1">
                    INDEPENDENT DEVELOPER
                  </p>
                </div>

                <div class="mt-6">
                  <p class="text-gray-300 text-sm mb-4 text-center">
                    Key Client Projects
                  </p>
                  <div class="flex justify-center gap-3">
                    <!-- <button
                      @click="openModal('Fintech')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>Finovaris Berichtssysteme GmbH</span>
                    </button> -->
                    <button
                      @click="openModal('PersonalPal')"
                      class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400"
                    >
                      <span>Personal Pal</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <ExperienceAndProjectModal :project="selectedProject" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ExperienceAndProjectModal from "../modal/ExperienceAndProjectModal.vue";

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};
</script>
