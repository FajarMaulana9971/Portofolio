<template>
  <section
    class="fixed inset-0 w-full h-screen bg-black flex items-center justify-center px-4 overflow-hidden"
  >
    <div class="text-white text-center">
      <!-- Main container -->
      <div class="relative inline-block">
        <!-- positioned above and to the right of A -->
        <div
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          class="absolute -top-6 md:-top-10 -right-4 md:-right-8 text-xl md:text-2xl font-light z-10"
          style="
            font-family:
              Times New Roman,
              Times,
              serif;
          "
        >
          <h1>I'm</h1>
        </div>

        <!-- main text -->
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="600"
          class="text-7xl md:text-9xl lg:text-[10rem] font-bold italic leading-none relative"
        >
          <h2
            class="text-emerald-400"
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
              <!-- Curved arrow path starting from K -->
              <path
                d="M 5 0 Q 60 100, 240 90"
                stroke="white"
                stroke-width="2"
                fill="none"
                class="line-draw"
              />
              <!-- Arrow head -->
              <path
                d="M 235 85 L 250 90 L 235 95 Z"
                fill="white"
                class="arrow-head"
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
          class="absolute left-48 md:left-72 top-48 md:top-52 text-left"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="2500"
        >
          <div class="text-lg md:text-xl lg:text-2xl font-light">
            <p class="typing-text inline-block"></p>
          </div>
          <div
            class="text-lg md:text-xl lg:text-2xl font-light mt-2 typing-text"
          >
            <p
              class="text-emerald-400"
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
}

@media (max-width: 480px) {
  .arrow-line {
    transform: scale(0.6);
  }
}
</style>
