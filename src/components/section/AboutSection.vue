<!-- AboutSection -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 text-gray-100 p-8"
  >
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div
        class="absolute right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-150 left-100 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="w-full">
      <!-- Introduction -->
      <div class="mb-16">
        <div class="flex justify-center">
          <h1 class="text-5xl font-bold mb-4">
            <span class="text-gray-300">👋 Hi, I'm </span>
            <span class="text-emerald-400">Fajar</span>
          </h1>
        </div>
        <p class="text-xl text-gray-400 italic mb-6">
          Turning concepts into code and visions into reality
        </p>
        <div class="flex justify-center">
          <p class="text-gray-300 max-w-3xl leading-relaxed">
            As a
            <span class="text-emerald-400 font-semibold"
              >Fullstack Developer</span
            >
            with a strong focus on
            <span class="text-emerald-400 font-semibold"
              >Backend Development using Java</span
            >, I've built robust, scalable applications that are fast, secure,
            and maintainable. I'm quietly confident, naturally curious, and
            continuously honing my skills—solving one problem at a time while
            striving for excellence in every project.
          </p>
        </div>
      </div>

      <!-- Technologies & Skills Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Technologies Section (Left) -->
        <div
          class="border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-8 justify-center">
            <div
              class="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-emerald-400"
              >
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-emerald-400">Technologies</h2>
          </div>
          <div class="grid grid-cols-4 sm:grid-cols-5 gap-4">
            <div
              v-for="(tech, idx) in allTechnologies"
              :key="idx"
              class="flex flex-col items-center gap-1 group cursor-pointer"
            >
              <div
                class="w-14 h-14 bg-gray-800/50 border border-gray-700 rounded-xl p-2.5 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
              >
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span
                class="text-xs text-gray-500 text-center group-hover:text-emerald-400 transition-colors font-medium"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Main Skills Section (Right) -->
        <div class="flex flex-col gap-6">
          <div class="mt-7 flex items-center gap-3 mb-2 justify-center">
            <div
              class="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-emerald-400"
              >
                <path
                  d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                ></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-emerald-400">Main Skills</h2>
          </div>

          <!-- Backend Developer -->
          <div
            class="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group"
          >
            <div class="flex items-center gap-3 mb-4 justify-center">
              <div
                class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-emerald-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3
                class="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors"
              >
                Backend Developer
              </h3>
            </div>
            <p class="text-gray-400 leading-relaxed text-sm">
              Building robust and scalable server-side applications with modern
              frameworks like Spring Boot, Quarkus, Express.js, and Fiber.
              Expertise in microservices architecture, REST APIs, JWT
              authentication, and data migration.
            </p>
          </div>

          <!-- Frontend Developer -->
          <div
            class="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-gray-800/40 transition-all duration-300 group"
          >
            <div class="flex items-center gap-3 mb-4 justify-center">
              <div
                class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-emerald-400"
                >
                  <circle
                    cx="13.5"
                    cy="6.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="17.5"
                    cy="10.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle
                    cx="6.5"
                    cy="12.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                  ></path>
                </svg>
              </div>
              <h3
                class="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors"
              >
                Frontend Developer
              </h3>
            </div>
            <p class="text-gray-400 leading-relaxed text-sm">
              Crafting intuitive and responsive user interfaces with Vue.js,
              HTML5, CSS3, and modern UI frameworks. Strong focus on user
              experience and creating visually polished applications with
              Bootstrap and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const technologies = {
  data: [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "Quarkus",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Go",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      name: "Fiber",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fiber/fiber-plain.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },

    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Oracle",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
    {
      name: "Sql Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "Kafka",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "GitLab",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
  ],
};

const allTechnologies = computed(() => [...technologies.data]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
