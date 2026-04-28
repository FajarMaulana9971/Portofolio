<!-- ExperienceAndProjectSection -->
<template>
  <section
    class="relative min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 text-gray-100"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16 pt-8">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Experience <span class="text-emerald-400">&</span> Key Projects
        </h2>
        <div class="w-24 h-1 bg-linear-to-r from-emerald-400 to-emerald-500 mx-auto"></div>
      </div>

      <!-- Timeline -->
      <div class="relative pb-24">
        <!-- Vertical line desktop only -->
        <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 hidden md:block"></div>

        <div class="space-y-8 md:space-y-16">

          <!-- PT MUST -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 md:pr-16 md:flex md:justify-end">
              <div class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-5 md:p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-3">
                    <img src="/img/projects/must.jpg" alt="Logo PT MUST" class="w-full h-full object-contain p-2 rounded-lg" />
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">PT Mitra Utama Solusi Telematika</h3>
                  <p class="text-emerald-400 font-semibold mb-1 text-sm md:text-base">SENIOR SOFTWARE ENGINER</p>
                  <p class="text-gray-400 text-sm">Oct 2025 - Apr 2026</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <p class="text-gray-300 text-sm mb-4 text-center">Key Client Projects</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('PLN ICON PLUS')" class="relative group bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">
                      PT Indonesia Comnets Plus
                      <span class="absolute -top-3 -right-3 min-w-6 h-6 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full flex items-center justify-center shadow-md shadow-emerald-500/40 ring-2 ring-gray-900">2</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 hidden md:flex items-center justify-center">
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
            <div class="hidden md:block md:w-1/2 md:pl-16"></div>
          </div>

          <!-- PT Mitra Integrasi Informatika -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="hidden md:block md:w-1/2 md:pr-16"></div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 hidden md:flex items-center justify-center">
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
            <div class="w-full md:w-1/2 md:pl-16">
              <div class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-5 md:p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-3">
                    <img src="/img/projects/mii.png" alt="Logo MII" class="w-full h-full object-contain p-2 rounded-lg" />
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">PT Mitra Integrasi Informatika</h3>
                  <p class="text-emerald-400 font-semibold mb-1 text-sm md:text-base">JAVA DEVELOPER</p>
                  <p class="text-gray-400 text-sm">Sept 2023 - Sept 2025</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <p class="text-gray-300 text-sm mb-4 text-center">Key Client Projects</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('PT Metrodata')" class="relative group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">
                      PT Metrodata Electronics Tbk
                      <span class="absolute -top-3 -right-3 min-w-[1.5rem] h-6 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full flex items-center justify-center shadow-md shadow-emerald-500/40 ring-2 ring-gray-900">3</span>
                    </button>
                    <button @click="openModal('PT FIFGROUP')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">PT Federal International Finance</button>
                    <button @click="openModal('PT INDESSO CULINAROMA INTERNATIONAL')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">PT Indesso Culinaroma International</button>
                    <button @click="openModal('PT BNI')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">PT Bank Negara Indonesia (Persero) Tbk</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ardhacodes -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 md:pr-16 md:flex md:justify-end">
              <div class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-5 md:p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-3">
                    <img src="/img/projects/ardhacodes.png" alt="Logo Ardhacodes" class="w-full h-full object-contain p-2 rounded-lg" />
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Ardhacodes Teknologi Indonesia</h3>
                  <p class="text-emerald-400 font-semibold mb-1 text-sm md:text-base">FULLSTACK DEVELOPER</p>
                  <p class="text-gray-400 text-sm">Jan 2022 - Mar 2023</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <p class="text-gray-300 text-sm mb-4 text-center">Key Client Projects</p>
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('Glorindo Group')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">Glorindo Group</button>
                    <button @click="openModal('Eka Berkat Jaya')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">Eka Berkat Jaya</button>
                    <button @click="openModal('Surabaya City Government')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">Surabaya City Government</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 hidden md:flex items-center justify-center">
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
            <div class="hidden md:block md:w-1/2 md:pl-16"></div>
          </div>

          <!-- Other Projects -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="hidden md:block md:w-1/2 md:pr-16"></div>
            <!-- Desktop dot only -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50 z-10 hidden md:flex items-center justify-center">
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
            <div class="w-full md:w-1/2 md:pl-16">
              <div class="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-5 md:p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 w-full md:max-w-lg">
                <div class="flex flex-col items-center text-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                    <span class="text-white font-bold text-xl">FL</span>
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Other Projects</h3>
                  <p class="text-emerald-400 font-semibold mb-1 text-sm md:text-base">INDEPENDENT DEVELOPER</p>
                </div>
                <div class="mt-4 md:mt-6">
                  <div class="flex flex-wrap justify-center gap-2">
                    <button @click="openModal('PersonalPal')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">Personal Pal</button>
                    <button @click="openModal('Spendly')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">Spendly</button>
                    <button @click="openModal('SpringIntializr')" class="group bg-gray-700/50 hover:bg-gray-600/50 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border border-gray-600 hover:border-emerald-400 text-sm">Serverapp Initialzr</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <ExperienceAndProjectModal :project="selectedProject" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ExperienceAndProjectModal from "../modal/ExperienceAndProjectModal.vue";

const selectedProject = ref(null);
const openModal = (project) => { selectedProject.value = project; };
const closeModal = () => { selectedProject.value = null; };
</script>