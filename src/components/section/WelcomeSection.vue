<template>
  <section
    class="fixed inset-0 w-full h-screen bg-gradient-to-b from-[#081329] via-[#091a32] to-[#071322] flex items-center justify-center px-4 overflow-hidden"
  >
    <!-- Radiant Aurora Background Effects -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Ambient dual-ellipse base glow -->
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_-10%,rgba(14,165,233,0.3)_0%,transparent_70%),radial-gradient(ellipse_85%_75%_at_50%_110%,rgba(20,184,166,0.28)_0%,transparent_70%)]"
      ></div>

      <!-- Top-left vibrant Cyan-Blue Aurora -->
      <div
        class="absolute -top-16 -left-16 w-[36rem] sm:w-[48rem] h-[36rem] sm:h-[48rem] bg-gradient-to-br from-cyan-400/45 via-sky-500/35 to-indigo-600/30 rounded-full blur-[90px] animate-pulse"
        style="animation-duration: 7s"
      ></div>

      <!-- Bottom-right vibrant Emerald-Teal Aurora -->
      <div
        class="absolute -bottom-16 -right-16 w-[38rem] sm:w-[50rem] h-[38rem] sm:h-[50rem] bg-gradient-to-tl from-emerald-400/45 via-teal-400/40 to-cyan-500/30 rounded-full blur-[95px] animate-pulse"
        style="animation-duration: 9s"
      ></div>

      <!-- Top-right Violet-Indigo accent -->
      <div
        class="absolute -top-10 -right-10 w-[26rem] sm:w-[36rem] h-[26rem] sm:h-[36rem] bg-indigo-500/30 rounded-full blur-[90px]"
      ></div>

      <!-- Center luminous radiant spotlight behind typography -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] sm:w-[48rem] h-[26rem] sm:h-[34rem] bg-gradient-to-r from-cyan-400/30 via-teal-300/35 to-emerald-400/30 rounded-full blur-[70px]"
      ></div>

      <!-- Radiant Center Radial Beam -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25)_0%,rgba(45,212,191,0.2)_35%,rgba(16,185,129,0.1)_60%,transparent_85%)]"
      ></div>

      <!-- High-tech Grid Lines with Cyan glow -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.12)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_60%,transparent_100%)]"
      ></div>
    </div>

    <div class="text-white text-center relative z-10">
      <!-- Main container -->
      <div class="relative inline-block">
        <!-- positioned above and to the right of A -->
        <div
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          class="absolute -top-6 md:-top-10 -right-4 md:-right-8 text-xl md:text-2xl z-10"
          style="
            font-family:
              Times New Roman,
              Times,
              serif;
          "
        >
          <h1 class="text-white font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">I'm</h1>
        </div>

        <!-- main text -->
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="600"
          class="text-7xl md:text-9xl lg:text-[10rem] font-bold italic leading-none relative"
        >
          <h2
            class="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_55px_rgba(45,212,191,0.85)] filter inline-block px-2 pt-1 pb-6 sm:pb-8 md:pb-12 -mb-6 sm:-mb-8 md:-mb-12"
            style="
              font-family:
                Times New Roman,
                Times,
                serif;
            "
          >
            Fajar
          </h2>
          <!-- Arrow starting from A -->
          <div class="absolute left-0 md:left-2 top-full mt-4">
            <svg
              class="arrow-line"
              width="280"
              height="180"
              viewBox="0 0 280 180"
            >
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#38bdf8" />
                  <stop offset="50%" stop-color="#2dd4bf" />
                  <stop offset="100%" stop-color="#34d399" />
                </linearGradient>
              </defs>
              <!-- Curved arrow path starting from K -->
              <path
                d="M 5 0 Q 60 100, 240 90"
                stroke="url(#arrowGradient)"
                stroke-width="3"
                fill="none"
                class="line-draw drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              />
              <!-- Arrow head -->
              <path
                d="M 235 85 L 250 90 L 235 95 Z"
                fill="#38bdf8"
                class="arrow-head drop-shadow-[0_0_16px_rgba(56,189,248,0.9)]"
              />
            </svg>
          </div>
        </div>

        <!-- aligned with fajar but slightly offset -->
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="1000"
          class="text-4xl md:text-5xl lg:text-6xl font-light italic mt-1 ml-4 md:ml-8"
        >
          <p
            class="bg-gradient-to-r from-white via-slate-100 to-teal-100 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            style="
              font-family:
                Times New Roman,
                Times,
                serif;
            "
          >
            Anwari
          </p>
        </div>

        <div
          class="role-container absolute md:left-72 md:top-52 text-left"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="2500"
        >
          <div class="hidden md:block text-lg md:text-xl lg:text-2xl font-light">
            <p class="typing-text inline-block"></p>
          </div>
          <div
            class="text-xs sm:text-base md:text-xl lg:text-2xl font-light mt-0 md:mt-2 typing-text"
          >
            <p
              class="bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(45,212,191,0.8)] font-bold tracking-wide"
              style="
                font-family:
                  Times New Roman,
                  Times,
                  serif;
              "
            >
              Fullstack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        once: true,
        mirror: false,
      });
    }
  },
};
</script>

<style scoped>
.arrow-line {
  opacity: 0;
  animation: fadeInArrow 0.5s ease-in-out 1.8s forwards;
}

@keyframes fadeInArrow {
  to {
    opacity: 1;
  }
}

.line-draw {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawLine 1.5s ease-in-out 2s forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

.arrow-head {
  opacity: 0;
  animation: showArrowHead 0.3s ease-in-out 3.3s forwards;
}

@keyframes showArrowHead {
  to {
    opacity: 1;
  }
}

.typing-text {
  opacity: 0;
  overflow: hidden;
  border-right: 2px solid white;
  white-space: nowrap;
  width: 0;
  animation:
    fadeInTyping 0.1s 3.6s forwards,
    typing 1.5s steps(17) 3.7s forwards,
    blink 0.75s step-end 3.7s 3,
    removeBorder 0.1s 5.2s forwards;
}

@keyframes fadeInTyping {
  to {
    opacity: 1;
  }
}

@keyframes typing {
  to {
    width: 17ch;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes removeBorder {
  to {
    border-right: none;
  }
}

@media (max-width: 768px) {
  .arrow-line {
    transform: scale(0.8);
    transform-origin: top left;
  }
  .role-container {
    left: 205px;
    top: 152px;
  }
}

@media (max-width: 480px) {
  .arrow-line {
    transform: scale(0.6);
  }
  .role-container {
    left: 155px;
    top: 134px;
  }
}
</style>
