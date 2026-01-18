<!-- ExperienceAndProjectModal -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 modal-overlay"
        @click.self="$emit('close')"
        @wheel.prevent
        @touchmove.prevent
      >
        <button
          v-if="projectsList.length > 1"
          @click="previousProject"
          class="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-30 w-5 h-5 md:w-16 md:h-16 !rounded-full overflow-hidden bg-gray-900/70 backdrop-blur-lg border border-emerald-400/40 flex items-center justify-center transition-all duration-300 ease-out hover:bg-emerald-500/10 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95 animate-wiggle-left"
        >
          <svg
            class="w-7 h-7 md:w-8 md:h-8 text-emerald-300 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          v-if="projectsList.length > 1"
          @click="nextProject"
          class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-5 h-5 md:w-16 md:h-16 !rounded-full overflow-hidden bg-gray-900/70 backdrop-blur-lg border border-emerald-400/40 flex items-center justify-center transition-all duration-300 ease-out hover:bg-emerald-500/10 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95 animate-wiggle-right"
        >
          <svg
            class="w-7 h-7 md:w-8 md:h-8 text-emerald-300 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div class="absolute right-0 top-1/2 -translate-y-1/2 z-60">
          <VerticalSlider :scroll-container="modalContentRef" />
        </div>
        <div
          class="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-emerald-500/30 shadow-[0_0_60px_-10px_rgba(16,185,129,0.25)] relative"
          @wheel.stop
          @touchmove.stop
          data-aos="fade-up"
        >
          <!-- Modal Header -->
          <div
            class="bg-linear-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md p-6 border-b border-emerald-500/30"
          >
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-white">
                  Project Showcase :
                  <span class="text-emerald-400">{{
                    currentProjectData.name
                  }}</span>
                </h3>
                <p
                  v-if="projectsList.length > 1"
                  class="text-gray-400 text-sm mt-1"
                >
                  {{ currentIndex + 1 }} / {{ projectsList.length }}
                </p>
              </div>
              <button
                @click="$emit('close')"
                class="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span class="text-white text-2xl">×</span>
              </button>
            </div>
          </div>

          <!-- Modal Content -->
          <div
            ref="modalContentRef"
            class="p-6 overflow-y-auto max-h-[calc(90vh-100px)] modal-content"
          >
            <Transition name="slide" mode="out-in">
              <div :key="currentIndex">
                <p class="text-gray-300 mb-6 text-center">
                  {{ currentProjectData.description }}
                </p>

                <!-- Project Image -->
                <div
                  class="bg-gray-700/50 rounded-lg overflow-hidden border border-gray-600 mb-6"
                >
                  <div
                    v-if="currentProjectData.image"
                    class="relative bg-gradient-to-br from-gray-800 to-gray-900"
                  >
                    <img
                      :src="currentProjectData.image"
                      :alt="currentProjectData.name"
                      class="w-full h-full object-cover"
                      @error="handleImageError"
                      @load="handleImageLoad"
                    />
                    <div
                      v-if="imageLoading"
                      class="absolute inset-0 flex items-center justify-center bg-gray-900/50"
                    >
                      <div class="text-center">
                        <div
                          class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-2"
                        ></div>
                        <p class="text-gray-400 text-sm">Loading image...</p>
                      </div>
                    </div>
                  </div>

                  <div
                    v-else
                    class="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
                  >
                    <div class="text-center">
                      <div class="text-6xl mb-4">
                        {{ currentProjectData.icon }}
                      </div>
                      <p class="text-gray-400">
                        {{ currentProjectData.imageTitle }}
                      </p>
                      <p class="text-gray-500 text-sm mt-2">
                        {{ currentProjectData.imageSubtitle }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Project Details -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div
                    class="bg-gray-700/30 rounded-lg p-4 border border-gray-600"
                  >
                    <h4 class="text-center text-emerald-400 font-semibold mb-3">
                      Technologies
                    </h4>
                    <div class="flex justify-center flex-wrap gap-2">
                      <span
                        v-for="tech in currentProjectData.technologies"
                        :key="tech"
                        class="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-500/30"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                  <div
                    class="bg-gray-700/30 rounded-lg p-4 border border-gray-600"
                  >
                    <h4 class="text-emerald-400 font-semibold mb-2 text-center">
                      Role
                    </h4>
                    <p class="text-center text-gray-300 text-sm">
                      {{ currentProjectData.role }}
                    </p>
                  </div>
                </div>

                <!-- Key Achievements -->
                <div
                  v-if="
                    currentProjectData.achievements &&
                    currentProjectData.achievements.length > 0
                  "
                  class="bg-gray-700/30 rounded-lg p-4 border border-gray-600"
                >
                  <h4 class="text-emerald-400 font-semibold mb-3">
                    Key Achievements
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="achievement in currentProjectData.achievements"
                      :key="achievement"
                      class="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span class="text-emerald-400 mt-1">✓</span>
                      <span>{{ achievement }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onUnmounted, nextTick } from "vue";
import VerticalSlider from "../slider/VerticalSlider.vue";
import Lenis from "@studio-freight/lenis";

const props = defineProps({
  project: String,
});

const emit = defineEmits(["close"]);

const currentIndex = ref(0);
const imageLoading = ref(true);
const modalContentRef = ref(null);

// Lenis instances
let mainLenis = null;
let modalLenis = null;
let rafId = null;

// Get main Lenis from window
const getMainLenis = () => {
  if (!mainLenis && window.lenis) {
    mainLenis = window.lenis;
  }
  return mainLenis;
};

// Save scroll state
let scrollPosition = 0;
let originalBodyStyles = {
  overflow: "",
  position: "",
  top: "",
  width: "",
};

// Lock main scroll and setup modal Lenis
const setupModal = async () => {
  const lenis = getMainLenis();

  // Save scroll position
  scrollPosition = window.scrollY;

  // Save original body styles
  originalBodyStyles = {
    overflow: document.body.style.overflow,
    position: document.body.style.position,
    top: document.body.style.top,
    width: document.body.style.width,
  };

  // Lock body scroll
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";

  // Stop main Lenis
  if (lenis) {
    lenis.stop();
  }

  // Wait for DOM
  await nextTick();

  // Create modal Lenis
  if (modalContentRef.value && !modalLenis) {
    modalLenis = new Lenis({
      wrapper: modalContentRef.value,
      content: modalContentRef.value,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // RAF for modal Lenis
    const raf = (time) => {
      if (modalLenis) {
        modalLenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    };
    rafId = requestAnimationFrame(raf);
  }
};

// Cleanup modal and restore main scroll
const cleanupModal = () => {
  const lenis = getMainLenis();

  // Stop modal Lenis RAF
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  // Destroy modal Lenis
  if (modalLenis) {
    modalLenis.destroy();
    modalLenis = null;
  }

  // Restore body styles
  document.body.style.overflow = originalBodyStyles.overflow;
  document.body.style.position = originalBodyStyles.position;
  document.body.style.top = originalBodyStyles.top;
  document.body.style.width = originalBodyStyles.width;

  // Restore scroll position
  window.scrollTo(0, scrollPosition);

  // Start main Lenis
  if (lenis) {
    lenis.start();
  }
};

// Handle image loading
const handleImageLoad = () => {
  imageLoading.value = false;
};

// Handle image error
const handleImageError = (e) => {
  imageLoading.value = false;
  console.warn("Failed to load image:", e.target.src);
};

// Your projectsData here...
const projectsData = {
  "PLN ICON PLUS (PERSERO)": [
    {
      name: "CRM REPORT ULTIMATE",
      description:
        "Engineered a high-performance reporting engine specifically for PLN's customer service division, focusing on automated generation of critical service-level reports and operational data distribution.",
      icon: "⚡",
      image: "/img/projects/ap2t.png", // Path ke gambar di folder public/img/projects/
      imageTitle: "PLN Customer Service Reporting",
      imageSubtitle: "Automated report generation & distribution",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Oracle DB",
        "Redis",
        "Apache Kafka",
        "Microservices",
      ],
      role: "Backend Developer",
      achievements: [
        "Architected a scalable microservices-based reporting engine capable of processing 10M+ daily data points for customer service analytics.",
        "Streamlined the report generation workflow, reducing query execution time by 60% through advanced database optimization.",
        "Integrated WebSocket protocols to provide live status updates for long-running report generation processes.",
        "Established technical standards through rigorous code reviews and mentoring to ensure system stability.",
      ],
    },
    {
      name: "CRM REPORT TRANSACTION",
      description:
        "Developed a robust server-side analytics platform to bridge customer data management with external system integrations, facilitating deep-dive transaction analysis and cross-platform data reconciliation.",
      icon: "📊",
      image: "/img/projects/ap2t.png", // Path ke gambar
      imageTitle: "PLN Transaction Analytics",
      imageSubtitle: "Data integration & customer management hub",
      technologies: [
        "Java",
        "Quarkus",
        "PostgreSQL",
        "Oracle DB",
        "Redis",
        "Apache Kafka",
        "Microservices",
      ],
      role: "Backend Developer",
      achievements: [
        "Spearheaded the development of an automated reconciliation module that validates 5M+ daily transactions across integrated PLN systems.",
        "Built a versatile data integration layer that centralizes customer information from multiple legacy databases into a unified reporting format.",
        "Optimized server resource allocation and caching, resulting in a 45% reduction in overhead during peak analytical processing.",
        "Developed a drill-down reporting feature that allows granular analysis of customer transaction history for management decision-making.",
      ],
    },
  ],
  "PT FIFGROUP": [
    {
      name: "HUMAN CAPITAL MANAGEMENT SYSTEM",
      description:
        "Managed and enhanced an enterprise-scale HR platform for FIFGROUP, focusing on system stability, performance tuning, and the development of specialized modules to support thousands of employees nationwide.",
      icon: "🏢",
      image: "/img/projects/hcms.png", // Path ke gambar
      imageTitle: "FIFGROUP HCMS",
      imageSubtitle: "Enterprise Human Resource & Operations",
      technologies: [
        "Java",
        "Spring Boot",
        "Oracle DB",
        "Redis",
        "Kafka",
        "Microservices",
        "Java Mail Sender",
        "Scheduler",
      ],
      role: "Backend Developer",
      achievements: [
        "Engineered an automated email scheduling system to handle high-volume internal notifications and payroll alerts with guaranteed delivery.",
        "Developed high-performance Excel generation modules for complex HR data exports, ensuring efficient processing of large datasets without system lag.",
        "Significantly improved application responsiveness by optimizing legacy queries and implementing efficient server-side caching strategies.",
        "Spearheaded the integration of new functional modules into a mature system, ensuring seamless interoperability with existing HR workflows.",
      ],
    },
  ],
  "PT BNI (PERSERO)": [
    {
      name: "OPEX MANAGEMENT SYSTEM",
      description:
        "Developed and maintained OPEX, an internal enterprise application used by BNI Head Office to support operational excellence. The system consolidates multiple internal tools such as automated Excel-based reporting, email scheduling, employee management for out-of-town staff, and other operational support modules.",
      icon: "🏦",
      image: "/img/projects/opex.png", // Path ke gambar
      imageTitle: "BNI Internal OPEX System",
      imageSubtitle: "Operational excellence & internal management platform",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "IBM MQ",
        "Redis",
        "Java Mail Sender",
      ],
      role: "Backend Developer",
      achievements: [
        "Built and enhanced internal operational modules used by head office teams",
        "Developed automated reporting features that generate and distribute Excel reports via scheduled emails",
        "Implemented employee management features for monitoring and coordinating out-of-town staff",
        "Integrated messaging and caching mechanisms to ensure system reliability and performance",
        "Improved internal operational efficiency by reducing manual reporting and follow-up processes",
      ],
    },
  ],
  "PT INDESSO CULINAROMA INTERNATIONAL": [
    {
      name: "E - FORMULA",
      description:
        "Engineered a high-performance formula management system for R&D operations, enabling seamless formula creation, complex restriction tracking, and contaminant analysis for product formulations.",
      icon: "🧪",
      image: "/img/projects/indesso.png", // Path ke gambar
      imageTitle: "Indesso Formula Management",
      imageSubtitle: "R&D Formula & Compliance System",
      technologies: [
        "Java",
        "Spring Boot",
        "SQL SERVER",
        "LDAP",
        "Redis",
        "Caffeine",
        "Scheduler",
      ],
      role: "Backend Developer",
      achievements: [
        "Optimized system architecture to ensure high-speed performance when processing large-scale formula datasets and complex calculations.",
        "Developed a robust restriction and contaminant management module to ensure regulatory compliance and product safety.",
        "Engineered high-efficiency Excel generation and bulk data import features, significantly reducing processing time for R&D teams.",
        "Implemented multi-level caching using Redis and Caffeine to minimize database load and enhance application responsiveness.",
      ],
    },
  ],
  "PT Metrodata": [
    {
      name: "PICKME",
      description:
        "An internal resource management application designed to map employees to client sites efficiently, optimizing deployment and tracking operations.",
      icon: "📍",
      image: "/img/projects/pickme.png", // Path ke gambar
      imageTitle: "PICKME CLIENT MAPPING",
      technologies: [
        "Java",
        "Spring Boot",
        "MYSQL",
        "Thymeleaf",
        "Java Mail Sender",
      ],
      role: "Fullstack Developer",
      achievements: [
        "Successfully migrated legacy features from external applications into the PickMe ecosystem.",
        "Improved system performance and response time through code refactoring and database query optimization.",
        "Developed and integrated new core modules to enhance employee-to-client mapping accuracy.",
        "Resolved critical bugs across multiple features, ensuring a stable and reliable user experience.",
      ],
    },
    {
      name: "Metrodata Academy",
      description:
        "A comprehensive Learning Management System (LMS) for students and educators, facilitating registration, classroom organization, and curriculum management.",
      icon: "🎓",
      image: "/img/projects/metrodata-academy.png", // Path ke gambar
      imageTitle: "Metrodata Academy",
      technologies: [
        "Java",
        "Spring Boot",
        "MYSQL",
        "Redis",
        "Kafka",
        "Java Scheduler",
        "Java Mail Sender",
        "Microservices",
      ],
      role: "Backend Developer",
      achievements: [
        "Led the development of complex backend services requiring high scalability and rigorous security standards.",
        "Engineered efficient classroom and room management modules using Kafka for real-time data processing.",
        "Implemented high-performance caching strategies with Redis to handle high traffic during peak registration periods.",
        "Designed and maintained secure student-teacher interaction modules to protect educational data integrity.",
      ],
    },
    {
      name: "Inventory Management System",
      description:
        "A centralized asset management tool for office administrators to track stock availability, item status, and borrower history.",
      icon: "📦",
      image: "/img/projects/ims.png", // Path ke gambar
      imageTitle: "IMS",
      technologies: [
        "Java",
        "Spring Boot",
        "MYSQL",
        "Thymeleaf",
        "Java Mail Sender",
      ],
      role: "Fullstack Developer",
      achievements: [
        "Developed a comprehensive tracking system for asset lifecycle management, from procurement to borrowing status.",
        "Integrated automated email notification services to alert administrators of status changes and deadlines.",
        "Engineered an automated Excel reporting feature for seamless inventory audits and management summaries.",
        "Designed a user-friendly dashboard for Head Admins to monitor real-time stock levels and asset distribution.",
      ],
    },
  ],
  "Surabaya City Government": [
    {
      name: "SIRUMI",
      description:
        "A centralized management system for religious facilities across Surabaya, enabling organizations to register houses of worship and providing government officials with robust reporting tools.",
      icon: "🕌",
      image: "/img/projects/sirumi.png", // Path ke gambar
      imageTitle: "House Of Worship Management System",
      imageSubtitle: "City-wide facility management",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Chart.js"],
      role: "Fullstack Developer",
      achievements: [
        "Developed a streamlined registration workflow for religious organizations to register their facilities legally.",
        "Created an administrative reporting module to help the city government monitor and manage religious sites efficiently.",
        "Built a data visualization dashboard using Chart.js to display the distribution and status of houses of worship.",
        "Implemented a responsive UI with Tailwind CSS to ensure accessibility for government staff across different devices.",
      ],
    },
  ],
  "Glorindo Group": [
    {
      name: "Glorindo Book Catalog",
      description:
        "An integrated digital library and e-commerce platform where users can browse an extensive book catalog, read content online, and make direct purchases.",
      icon: "📚",
      image: "/img/projects/glorindo-group.png", // Path ke gambar
      imageTitle: "Book Catalog & E-Reader",
      imageSubtitle: "Digital Library & E-commerce",
      technologies: ["Javascript", "Express.js", "Vue.js", "MySQL", "Redis"],
      role: "Fullstack Developer",
      achievements: [
        "Architected an end-to-end book management system featuring an online reader and shopping cart functionality.",
        "Optimized book loading and browsing performance using Redis caching for high-speed content delivery.",
        "Developed a responsive and interactive frontend with Vue.js to provide a seamless reading experience.",
        "Integrated a secure transaction system for users to purchase physical or digital copies of books.",
      ],
    },
  ],
  "Eka Berkat Jaya": [
    {
      name: "Projenta",
      description:
        "A specialized project management tool tailored for the construction industry, inspired by Jira's workflow but optimized for large-scale construction project lifecycles.",
      icon: "🏗️",
      image: "/img/projects/projenta.png", // Path ke gambar
      imageTitle: "Construction Project Management",
      imageSubtitle: "Jira-style construction management",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf"],
      role: "Fullstack Developer",
      achievements: [
        "Designed and developed a task-tracking system to manage complex construction milestones and project timelines.",
        "Implemented a progress monitoring dashboard to help project managers track resource allocation and deadlines.",
        "Built a robust backend using Spring Boot and PostgreSQL to handle multi-layered project data and hierarchies.",
        "Developed automated notification and reporting features to keep stakeholders updated on construction status.",
      ],
    },
  ],
  // Fintech: [
  //   {
  //     name: "FINTECH",
  //     description:
  //       "Developed a high-performance financial management system for German-based clients, engineered to process and manage large-scale transaction data efficiently within a robust microservices architecture.",
  //     icon: "💶",
  //     image: "/img/projects/fintech.png", // Path ke gambar
  //     imageTitle: "International Finance Engine",
  //     imageSubtitle: "Microservices-based Transaction System",
  //     technologies: [
  //       "Golang",
  //       "Fiber",
  //       "PostgreSQL",
  //       "Redis",
  //       "Kafka",
  //       "Microservices",
  //       "JWT",
  //     ],
  //     role: "Backend Developer",
  //     achievements: [
  //       "Engineered a high-efficiency financial reporting module using batch processing to handle massive transaction volumes without overloading the core system.",
  //       "Optimized data retrieval speed by implementing Redis caching for pre-calculated financial reports, significantly reducing latency.",
  //       "Orchestrated seamless inter-service communication using Kafka as a message broker for high-throughput event-driven processing.",
  //       "Strengthened system security by implementing JWT-based authentication and secure communication protocols across multiple microservices.",
  //     ],
  //   },
  // ],
  PersonalPal: [
    {
      name: "Personal Pal",
      description:
        "Personal Pal is a personal daily tracking application designed to help users manage their finances and personal well-being. The app allows users to record daily income and expenses, track savings and debts, and automatically generate monthly reports that are sent directly to the user's email. In addition to financial tracking, Personal Pal includes health monitoring features such as weekly health logs and progress tracking, as well as a menstrual cycle tracker for female users.",
      icon: "💶",
      image: "/img/projects/personal-pal.png",
      imageTitle: "Personal Daily Management App",
      imageSubtitle: "Finance, Health, and Lifestyle Tracking",
      technologies: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Redis",
        "Kafka",
        "Microservices",
        "JWT",
      ],
      role: "Backend Developer",
      achievements: [
        "Built backend services for daily financial tracking, including income, expenses, savings, and debt records.",
        "Implemented a monthly report generation feature with automated email delivery to users.",
        "Improved data access performance by using Redis caching for frequently requested report data.",
        "Handled asynchronous communication between services using Kafka for background processing tasks.",
        "Implemented JWT-based authentication to secure user data across multiple services.",
      ],
    },
  ],
};

// Get projects list
const projectsList = computed(() => {
  if (!props.project) return [];
  return projectsData[props.project] || [];
});

// Get current project data
const currentProjectData = computed(() => {
  if (projectsList.value.length === 0) {
    return {
      name: "Project Not Found",
      description: "Project details coming soon...",
      icon: "📊",
      image: null,
      imageTitle: "Project Screenshot",
      imageSubtitle: "Image placeholder - to be added",
      technologies: ["Java", "Spring Boot"],
      role: "Developer",
      achievements: [],
    };
  }
  return projectsList.value[currentIndex.value];
});

// Navigation
const nextProject = () => {
  currentIndex.value =
    currentIndex.value < projectsList.value.length - 1
      ? currentIndex.value + 1
      : 0;
};

const previousProject = () => {
  currentIndex.value =
    currentIndex.value > 0
      ? currentIndex.value - 1
      : projectsList.value.length - 1;
};

// Reset on project change
watch(
  () => props.project,
  () => {
    currentIndex.value = 0;
    imageLoading.value = true;
  },
);

// Reset on navigation
watch(currentIndex, () => {
  imageLoading.value = true;

  // Scroll to top when changing projects
  if (modalLenis) {
    modalLenis.scrollTo(0, { immediate: true });
  } else if (modalContentRef.value) {
    modalContentRef.value.scrollTop = 0;
  }
});

// Keyboard navigation
const handleKeydown = (e) => {
  if (!props.project) return;

  if (e.key === "ArrowLeft") {
    previousProject();
  } else if (e.key === "ArrowRight") {
    nextProject();
  } else if (e.key === "Escape") {
    emit("close");
  }
};

// Manage modal state
import Aos from "aos";

watch(
  () => props.project,
  async (newVal) => {
    if (newVal) {
      await setupModal();
      await nextTick();
      Aos.refreshHard(); // ⬅️ PENTING
      window.addEventListener("keydown", handleKeydown);
    } else {
      cleanupModal();
      window.removeEventListener("keydown", handleKeydown);
    }
  },
);

// Cleanup
onUnmounted(() => {
  cleanupModal();
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-gray-800,
.modal-leave-active .bg-gray-800 {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-gray-800,
.modal-leave-to .bg-gray-800 {
  transform: scale(0.9);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

img {
  transition: opacity 0.3s ease;
}

/* Hide default scrollbar tapi tetap bisa scroll */
.modal-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.modal-content::-webkit-scrollbar {
  display: none;
}
</style>
