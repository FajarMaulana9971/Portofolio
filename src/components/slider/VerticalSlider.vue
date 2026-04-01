<template>
  <div class="relative flex flex-col items-center p-4">
    <!-- Slider Container -->
    <div
      ref="sliderRef"
      class="relative w-2 h-32 bg-gray-700 rounded-full cursor-pointer select-none"
      @mousedown="handleMouseDown"
      @touchstart.prevent.stop="handleTouchStart"
      @touchmove.prevent.stop="handleTouchMoveOnElement"
      @touchend.stop="handleTouchEnd"
    >
      <!-- Fill Bar -->
      <div
        class="absolute top-0 left-0 w-full bg-emerald-500 rounded-full transition-all duration-100 pointer-events-none"
        :style="{ height: scrollProgress + '%' }"
      ></div>

      <!-- Slider Thumb -->
      <div
        class="absolute left-1/2 -translate-x-1/2 w-12 h-12 transition-all duration-100 pointer-events-none"
        :style="{ top: `calc(${scrollProgress}% - 24px)` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  scrollContainer: {
    type: Object,
    default: null,
  },
});

const scrollProgress = ref(0);
const sliderRef = ref(null);
const isDragging = ref(false);
let scrollListener = null;

// Update scroll progress
const updateScrollProgress = () => {
  const container = props.scrollContainer;

  if (!container) {
    const scrolled = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const maxScroll = scrollHeight - clientHeight;
    const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
    scrollProgress.value = Math.min(100, Math.max(0, progress));
    return;
  }

  const scrolled = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  const maxScroll = scrollHeight - clientHeight;

  if (maxScroll <= 0) {
    scrollProgress.value = 0;
    return;
  }

  const progress = (scrolled / maxScroll) * 100;
  scrollProgress.value = Math.min(100, Math.max(0, progress));
};

// Update scroll from slider position
const updateScrollFromSlider = (clientY) => {
  if (!sliderRef.value) return;

  const rect = sliderRef.value.getBoundingClientRect();
  const y = clientY - rect.top;
  const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));

  const container = props.scrollContainer;

  if (container) {
    const maxScroll = container.scrollHeight - container.clientHeight;
    const scrollTo = (percentage / 100) * maxScroll;
    container.scrollTo({ top: scrollTo, behavior: "auto" });
  } else {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTo = (percentage / 100) * documentHeight;
    window.scrollTo({ top: scrollTo, behavior: "auto" });
  }
};

// Mouse events
const handleMouseDown = (e) => {
  e.preventDefault();
  e.stopPropagation();
  isDragging.value = true;
  updateScrollFromSlider(e.clientY);
};

const handleMouseMove = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  updateScrollFromSlider(e.clientY);
};

const handleMouseUp = () => {
  isDragging.value = false;
};

// Touch events - ALL handled directly on the element, NO global touchmove listener
const handleTouchStart = (e) => {
  isDragging.value = true;
  updateScrollFromSlider(e.touches[0].clientY);
};

const handleTouchMoveOnElement = (e) => {
  // This only fires when touch moves ON the slider element itself
  updateScrollFromSlider(e.touches[0].clientY);
};

const handleTouchEnd = () => {
  isDragging.value = false;
};

// Watch scroll container changes
watch(
  () => props.scrollContainer,
  (newContainer, oldContainer) => {
    if (oldContainer && scrollListener) {
      oldContainer.removeEventListener("scroll", scrollListener);
    }
    if (scrollListener && !oldContainer) {
      window.removeEventListener("scroll", scrollListener);
    }

    scrollListener = updateScrollProgress;

    if (newContainer) {
      newContainer.addEventListener("scroll", scrollListener, { passive: true });
    } else {
      window.addEventListener("scroll", scrollListener, { passive: true });
    }

    updateScrollProgress();
  },
  { immediate: true }
);

onMounted(() => {
  // Only mouse events globally - NO global touch listeners at all
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
});

onUnmounted(() => {
  const container = props.scrollContainer;

  if (container && scrollListener) {
    container.removeEventListener("scroll", scrollListener);
  } else if (scrollListener) {
    window.removeEventListener("scroll", scrollListener);
  }

  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
});
</script>

<style scoped>
.select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>