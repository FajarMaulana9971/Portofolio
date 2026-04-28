<!-- ExperienceAndProjectModal -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 modal-overlay"
        @click.self="$emit('close')"
      >
        <button
          v-if="projectsList.length > 1"
          @click="previousProject"
          class="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-16 md:h-16 rounded-full bg-gray-900/70 backdrop-blur-lg border border-emerald-400/40 flex items-center justify-center transition-all duration-300 ease-out hover:bg-emerald-500/10 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95"
        >
          <svg class="w-4 h-4 md:w-8 md:h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          v-if="projectsList.length > 1"
          @click="nextProject"
          class="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-16 md:h-16 rounded-full bg-gray-900/70 backdrop-blur-lg border border-emerald-400/40 flex items-center justify-center transition-all duration-300 ease-out hover:bg-emerald-500/10 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95"
        >
          <svg class="w-4 h-4 md:w-8 md:h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- VerticalSlider hidden on mobile -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 z-60 hidden md:block">
          <VerticalSlider :scroll-container="modalContentRef" />
        </div>

        <div
          class="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-emerald-500/30 shadow-[0_0_60px_-10px_rgba(16,185,129,0.25)] relative"
          @wheel.stop
          data-aos="fade-up"
        >
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md p-4 md:p-6 border-b border-emerald-500/30">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <h3 class="text-base md:text-2xl font-bold text-white leading-tight">
                  <span class="text-gray-400 text-sm md:text-base font-normal block md:inline">Project Showcase: </span>
                  <span class="text-emerald-400">{{ currentProjectData.name }}</span>
                </h3>
                <p v-if="projectsList.length > 1" class="text-gray-400 text-xs md:text-sm mt-1">
                  {{ currentIndex + 1 }} / {{ projectsList.length }}
                </p>
              </div>
              <button
                @click="$emit('close')"
                class="shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span class="text-white text-xl md:text-2xl leading-none">×</span>
              </button>
            </div>
          </div>

          <!-- Modal Content - native scroll on mobile, Lenis on desktop -->
          <div
            ref="modalContentRef"
            class="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-130px)] modal-content"
          >
            <Transition name="slide" mode="out-in" @after-enter="onSlideTransitionEnd">
              <div :key="currentIndex">
                <p class="text-gray-300 mb-6 text-center text-sm md:text-base">
                  {{ currentProjectData.description }}
                </p>

                <!-- Project Image -->
                <div class="bg-gray-700/50 rounded-lg overflow-hidden border border-gray-600 mb-6">
                  <div v-if="currentProjectData.image" class="relative bg-gradient-to-br from-gray-800 to-gray-900 h-64 md:h-110">
                    <img
                      :src="currentProjectData.image"
                      :alt="currentProjectData.name"
                      class="w-full h-full object-cover"
                      @error="handleImageError"
                      @load="handleImageLoad"
                    />
                    <div v-if="imageLoading" class="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                      <div class="text-center">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-2"></div>
                        <p class="text-gray-400 text-sm">Loading image...</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div class="text-center">
                      <p class="text-gray-400">{{ currentProjectData.imageTitle }}</p>
                      <p class="text-gray-500 text-sm mt-2">{{ currentProjectData.imageSubtitle }}</p>
                    </div>
                  </div>
                </div>

                <!-- Project Details -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div class="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                    <h4 class="text-center text-emerald-400 font-semibold mb-3">Technologies</h4>
                    <div class="flex justify-center flex-wrap gap-2">
                      <span
                        v-for="tech in currentProjectData.technologies"
                        :key="tech"
                        class="bg-gray-800 text-emerald-300 px-3 py-1 rounded-full text-xs md:text-sm border border-emerald-500/30"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                  <div class="bg-gray-700/30 rounded-lg p-4 border border-gray-600 flex flex-col items-center justify-center min-h-[120px]">
                    <h4 class="text-emerald-400 font-semibold mb-2 text-center">Role</h4>
                      <div class="flex-1 flex items-center justify-center">
                    <p class="text-center text-white font-semibold text-sm md:text-base tracking-wide px-2">{{ currentProjectData.role }}</p>
                  </div>
                  </div>
                </div>

                <!-- Key Achievements -->
                <div
                  v-if="currentProjectData.achievements && currentProjectData.achievements.length > 0"
                  class="bg-gray-700/30 rounded-lg p-4 border border-gray-600"
                >
                  <h4 class="text-emerald-400 font-semibold mb-3">Key Achievements</h4>
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

let mainLenis = null;
let modalLenis = null;
let rafId = null;

const getMainLenis = () => {
  if (!mainLenis && window.lenis) mainLenis = window.lenis;
  return mainLenis;
};

let scrollPosition = 0;
let originalBodyStyles = { overflow: "", position: "", top: "", width: "" };

const isMobile = () => window.innerWidth < 768;

const setupModal = async () => {
  const lenis = getMainLenis();
  scrollPosition = window.scrollY;
  originalBodyStyles = {
    overflow: document.body.style.overflow,
    position: document.body.style.position,
    top: document.body.style.top,
    width: document.body.style.width,
  };
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
  if (lenis) lenis.stop();

  await nextTick();
  await nextTick();

  // Only use Lenis on desktop
  if (!isMobile() && modalContentRef.value && !modalLenis) {
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
      autoResize: true,
    });
    const raf = (time) => {
      if (modalLenis) {
        modalLenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    };
    rafId = requestAnimationFrame(raf);
  }
};

const cleanupModal = () => {
  const lenis = getMainLenis();
  if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  if (modalLenis) { modalLenis.destroy(); modalLenis = null; }
  document.body.style.overflow = originalBodyStyles.overflow;
  document.body.style.position = originalBodyStyles.position;
  document.body.style.top = originalBodyStyles.top;
  document.body.style.width = originalBodyStyles.width;
  window.scrollTo(0, scrollPosition);
  if (lenis) lenis.start();
};

const handleImageLoad = () => { imageLoading.value = false; };
const handleImageError = (e) => {
  imageLoading.value = false;
  console.warn("Failed to load image:", e.target.src);
};

const projectsData = {
  "PLN ICON PLUS": [
    {
      name: "CRM REPORT ULTIMATE",
      description: "CRM Report Ultimate is one of the reporting services within AP2T (Aplikasi Pelayanan Pelanggan Terpusat), a centralized enterprise platform used by PT PLN (Persero) to handle end-to-end customer and billing operations across Indonesia. The service is designed to support large-scale report generation and distribution, enabling operational and analytical insights for high-volume processes such as billing, meter data processing, and customer lifecycle management",
      image: "/img/projects/ap2t.png",
      imageTitle: "PLN Customer Service Reporting",
      imageSubtitle: "Automated report generation & distribution",
      technologies: ["Java", "Quarkus", "PostgreSQL", "Oracle DB", "Redis", "Apache Kafka", "PL SQL", "Microservices", "Apache Nexus Repository", "Jesper Reports", "Crystal Reports", "Docker"],
      role: "Backend Developer",
      achievements: [
        "Led the migration from a Java Spring Boot and Oracle PL/SQL–centric architecture to a Java Quarkus–based backend with PostgreSQL, consolidating business logic into the application layer.",
        "Re-architected the system using reactive programming to improve throughput and ensure stable performance under high-volume reporting workloads.",
        "Mentored junior developers by providing technical guidance, code reviews, and hands-on support to resolve development challenges.",
        "Optimized database design by applying selective denormalization and removing unused tables, improving query efficiency and reducing system complexity.",
        "Performed end-to-end performance tuning across application and database layers, significantly enhancing report generation speed and system responsiveness.",
      ],
    },
    {
      name: "CRM REPORT TRANSACTION",
      description: "CRM Report Transaction is a backend service within the PLN Mobile ecosystem, designed to manage and process customer transaction data. It serves as a core component for handling transaction-related reporting, enabling data integration across multiple internal systems, and providing reliable data for other services within PLN Mobile.",
      image: "/img/projects/pln-mobile.png",
      imageTitle: "PLN Transaction Analytics",
      imageSubtitle: "Data integration & customer management hub",
      technologies: ["Java", "Quarkus", "PostgreSQL", "Oracle DB", "Redis", "Apache Kafka", "GRPC" ,"PL SQL", "Microservices", "Apache Nexus Repository", "GRPC", "Docker"],
      role: "Backend Developer",
      achievements: [
        "Migrated transaction processing logic from Oracle PL/SQL and Java Spring Boot into a Java Quarkus backend with PostgreSQL, centralizing business logic within the service layer.",
        "Implemented a fully reactive programming model to handle high concurrency, improving system scalability and response time for transaction-heavy operations.",
        "Collaborated with and mentored junior developers, assisting in troubleshooting issues and ensuring consistent development practices.",
        "Enhanced data model efficiency by denormalizing relevant tables and eliminating unused structures to streamline data processing.",
        "Continuously tuned application and database performance, resulting in more efficient transaction processing and improved system stability.",
      ],
    },
  ],
  "PT FIFGROUP": [
    {
      name: "HUMAN CAPITAL MANAGEMENT SYSTEM",
      description: "HCMS (Human Capital Management System) at FIFGROUP is an enterprise platform that manages the entire lifecycle and operations of thousands of employees across Indonesia. The system is designed with a robust microservices architecture to handle critical HR business processes, ranging from centralized data management and payroll systems to automated information distribution. ",
      image: "/img/projects/hcms.png",
      imageTitle: "FIFGROUP HCMS",
      imageSubtitle: "Enterprise Human Resource & Operations",
      technologies: ["Java", "Spring Boot", "Oracle DB", "Redis", "Kafka", "Microservices", "Java Mail Sender", "Scheduler", "Apache POI", "Docker", "Gitlab", "JUnit"],
      role: "Backend Developer",
      achievements: [
        "Engineered an automated email scheduling system to handle high-volume internal notifications and payroll alerts with guaranteed delivery.",
        "Developed high-performance Excel generation modules for complex HR data exports, ensuring efficient processing of large datasets without system lag.",
        "Significantly improved application responsiveness by optimizing legacy queries and implementing efficient server-side caching strategies.",
        "Spearheaded the integration of new functional modules into a mature system, ensuring seamless interoperability with existing HR workflows.",
      ],
    },
  ],
  "PT BNI": [
    {
      name: "OPEX MANAGEMENT SYSTEM",
      description: "OPEX Monitoring Application is internal enterprise application used by BNI Head Office to support operational excellence. The system consolidates multiple internal tools such as automated Excel-based reporting, email scheduling, employee management for out-of-town staff, and other operational support modules.",
      image: "/img/projects/opex.jpg",
      imageTitle: "BNI Internal OPEX System",
      imageSubtitle: "Operational excellence & internal management platform",
      technologies: ["PHP", "PDO", "PostgreSQL", "Predis", "PHPMailer"],
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
      description: "E-Formula is an integrated application used for managing product formula creation at PT Indesso Culinaroma International. It enables end-to-end formula management, including material composition setup, contaminant control, and regulatory compliance handling. The application consolidates two existing systems (Culinaroma and Cheezaroma) into a single unified platform to streamline and standardize R&D processes.",
      image: "/img/projects/indesso.png",
      imageTitle: "Indesso Formula Management",
      imageSubtitle: "R&D Formula & Compliance System",
      technologies: ["Java", "Spring Boot", "SQL server", "LDAP", "Redis", "Caffeine", "Scheduler", "kafka", "Apache POI", "Apache Nifi", "Apache Nexus Repository", "kafka"],
      role: "Backend Developer & Technical Lead",
      achievements: [
        "Migrated and developed the application using Java Spring Boot with a microservices architecture.",
        "Led and mentored junior Java backend developers, including providing technical guidance and code reviews.",
        "Optimized system architecture to ensure high-speed performance when processing large-scale formula datasets and complex calculations.",
        "Implemented Apache Kafka for event streaming to enable asynchronous communication between services.",
        "Engineered high-efficiency Excel generation and bulk data import features, significantly reducing processing time for R&D teams.",
        "Implemented multi-level caching using Redis and Caffeine to minimize database load and enhance application responsiveness.",
        "Performed data migration from existing legacy systems into the new unified platform."
      ],
    },
  ],
  "PT Metrodata": [
    {
      name: "PICKME",
      description: "PickMe is a Talent Sourcing and Recruitment platform developed by PT Mitra Integrasi Informatika (MII) to connect IT talent providers with companies in need of skilled professionals. The application is designed to modernize the recruitment process through the management of a curated talent database based on expertise, in-depth candidate profile exploration including portfolios and certifications, and integrated interview scheduling features.",
      image: "/img/projects/pickme.png",
      imageTitle: "PICKME CLIENT MAPPING",
      technologies: ["Java", "Spring Boot", "mySQL", "Caffeine", "Java Mail Sender", "Thymeleaf", "Tailwind CSS"],
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
      description: "Metrodata Academy is a Learning Management System (LMS) and digital talent development platform managed by PT Mitra Integrasi Informatika (MII), serving as the central hub for IT education within the Metrodata Group. It is designed to train, certify, and prepare IT talent for industry needs through structured learning programs. The platform provides a wide range of IT courses, participant management for programs such as internships and bootcamps, automated digital certification upon completion, and integration with recruitment platforms like PickMe to streamline talent distribution into the workforce.",
      image: "/img/projects/metrodata-academy.png",
      imageTitle: "Metrodata Academy",
      technologies: ["Java", "Spring Boot", "mySQL", "Redis", "Apache Kafka", "Java Scheduler", "Java Mail Sender", "Microservices", "Spring Boot Scheduler", "Midtrans"],
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
      description: "Inventory Management System is an internal enterprise application used within PT Mitra Integrasi Informatika (MII) to systematically track and manage company assets and inventory. As a leading system integrator, MII utilizes this system to monitor the movement of hardware such as servers, laptops, and network devices as well as software licenses used internally or delivered to clients. The system includes features such as end to end asset tracking from warehouse intake to allocation and delivery, automated stock monitoring with low level alerts, detailed audit trails for tracking changes and asset movements, and reporting dashboards that provide insights into asset value, depreciation, and periodic stock mutations.",
      image: "/img/projects/ims.png",
      imageTitle: "IMS",
      technologies: ["Java", "Spring Boot", "mySQL", "Caffeine", "Java Mail Sender", "Crystal Reports", "Fast Excel", "Spring Boot Scheduler"],
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
      description: "A centralized management system for religious facilities across Surabaya, enabling organizations to register houses of worship and providing government officials with robust reporting tools.",
      image: "/img/projects/sirumi.png",
      imageTitle: "House Of Worship Management System",
      imageSubtitle: "City-wide facility management",
      technologies: ["PHP", "Laravel", "mySQL", "Tailwind CSS", "Chart.js"],
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
      description: "An integrated digital library and e-commerce platform where users can browse an extensive book catalog, read content online, and make direct purchases.",
      image: "/img/projects/glorindo-group.png",
      imageTitle: "Book Catalog & E-Reader",
      imageSubtitle: "Digital Library & E-commerce",
      technologies: ["Javascript", "Express.js", "Vue.js", "mySQL", "Redis"],
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
      description: "A specialized project management tool tailored for the construction industry, inspired by Jira's workflow but optimized for large-scale construction project lifecycles.",
      image: "/img/projects/projenta.png",
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
  PersonalPal: [
    {
      name: "Personal Pal",
      description: "Personal Pal is a personal daily tracking application designed to help users manage their finances and personal well-being. The app allows users to record daily income and expenses, track savings and debts, and automatically generate monthly reports that are sent directly to the user's email. In addition to financial tracking, Personal Pal includes health monitoring features such as weekly health logs and progress tracking, as well as a menstrual cycle tracker for female users.",
      image: "/img/projects/personal-pal.png",
      imageTitle: "Personal Daily Management App",
      imageSubtitle: "Finance, Health, and Lifestyle Tracking",
      technologies: ["JavaScript", "Node.js", "Express.js", "mySQL", "Redis", "Kafka", "Microservices", "JWT"],
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
  Spendly: [
    {
      name: "Spendly",
      description: "Spendly is a mobile-first expense management application designed for couples to collaboratively manage shared finances. The application allows both partners to record expenses, assign and track payable balances between each other, and maintain transparency in daily spending.",
      image: "/img/projects/spendly.png",
      imageTitle: "Couple Expense Management App",
      imageSubtitle: "Shared Finance Tracking for Partners",
      technologies: ["JavaScript", "Node.js", "Express.js", "Vue.js", "PostgreSQL", "Supabase", "Redis", "JWT", "SonarCloud", "GitHub Actions", "Vercel"],
      role: "Fullstack Developer",
      achievements: [
        "Developed a mobile-first expense tracking system tailored for couples, enabling shared financial visibility and accountability.",
        "Implemented a balance tracking feature that allows users to assign expenses and automatically calculate payable amounts between partners.",
        "Designed and built RESTful APIs using Node.js and Express.js to handle transaction management and user interactions.",
        "Built responsive frontend interfaces using Vue.js optimized for mobile user experience.",
        "Integrated PostgreSQL database hosted on Supabase for reliable and scalable data storage.",
        "Implemented JWT-based authentication to ensure secure access to user data.",
        "Set up CI pipeline using SonarCloud to maintain code quality and enforce best practices.",
        "Configured CD pipeline using GitHub Actions to automate deployment to Vercel.",
        "Improved application performance and responsiveness through efficient API design and caching strategy using Redis.",
      ],
    },
  ],
  SpringIntializr: [
    {
      name: "Serverapp Initialzr",
      description: "Serverapp Initialzr is a community-driven backend generator platform designed to accelerate the development of scalable backend applications. The platform allows developers to generate ready-to-use backend projects with customizable configurations such as base entity structure, JWT authentication, standardized API response format, and other common backend patterns.",
      image: "/img/projects/Spring-Intializr.png",
      imageTitle: "Backend Generator Platform",
      imageSubtitle: "Automated Backend Setup for Multiple Tech Stacks",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Code Generation"],
      role: "Backend Developer",
      achievements: [
        "Designed and developed a backend generator system to automate the creation of production-ready backend services.",
        "Implemented configurable project scaffolding, allowing users to customize features such as base entity, authentication (JWT), and standardized API response structure.",
        "Built RESTful APIs using Spring Boot to handle dynamic project generation and configuration management.",
        "Designed database schema using PostgreSQL to support flexible configuration and template management.",
        "Structured the application to support multi-framework generation, including future support for Quarkus, Golang, and Express.js.",
        "Applied modular and scalable architecture to ensure extensibility for additional features and frameworks.",
        "Planned and initiated implementation of centralized logging system to enhance monitoring and debugging capabilities.",
        "Collaborated in a community-driven development environment, contributing to system design and feature evolution.",
      ],
    },
  ],
};

const projectsList = computed(() => {
  if (!props.project) return [];
  return projectsData[props.project] || [];
});

const currentProjectData = computed(() => {
  if (projectsList.value.length === 0) {
    return {
      name: "Project Not Found",
      description: "Project details coming soon...",
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

const nextProject = () => {
  currentIndex.value = currentIndex.value < projectsList.value.length - 1 ? currentIndex.value + 1 : 0;
};

const previousProject = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : projectsList.value.length - 1;
};

watch(() => props.project, () => {
  currentIndex.value = 0;
  imageLoading.value = true;
});

watch(currentIndex, async () => {
  imageLoading.value = true;
  if (modalLenis) {
    modalLenis.scrollTo(0, { immediate: true });
  } else if (modalContentRef.value) {
    modalContentRef.value.scrollTop = 0;
  }

  await nextTick();
  if(modalLenis){
    modalLenis.resize();
  }
});

const handleKeydown = (e) => {
  if (!props.project) return;
  if (e.key === "ArrowLeft") previousProject();
  else if (e.key === "ArrowRight") nextProject();
  else if (e.key === "Escape") emit("close");
};

import Aos from "aos";

watch(() => props.project, async (newVal) => {
  if (newVal) {
    await setupModal();
    await nextTick();
    Aos.refreshHard();
    window.addEventListener("keydown", handleKeydown);
  } else {
    cleanupModal();
    window.removeEventListener("keydown", handleKeydown);
  }
});

onUnmounted(() => {
  cleanupModal();
  window.removeEventListener("keydown", handleKeydown);
});

const onSlideTransitionEnd = () => {
  if (modalLenis) {
    modalLenis.resize();
  }
};
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
.modal-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
.modal-content::-webkit-scrollbar {
  display: none;
}
</style>