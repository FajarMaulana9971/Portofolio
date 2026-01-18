import { onMounted, onUnmounted } from "vue";

let lenisInstance = null;

export function useLenis() {
  let scrollPosition = 0;
  let originalBodyStyles = {
    overflow: "",
    position: "",
    top: "",
    width: "",
  };

  const getLenis = () => {
    if (!lenisInstance && window.lenis) {
      lenisInstance = window.lenis;
    }
    return lenisInstance;
  };

  const lockScroll = () => {
    const lenis = getLenis();

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

    if (lenis) {
      lenis.stop();
    }
  };

  const unlockScroll = () => {
    const lenis = getLenis();

    document.body.style.overflow = originalBodyStyles.overflow;
    document.body.style.position = originalBodyStyles.position;
    document.body.style.top = originalBodyStyles.top;
    document.body.style.width = originalBodyStyles.width;

    window.scrollTo(0, scrollPosition);

    if (lenis) {
      lenis.start();
    }
  };

  return {
    lockScroll,
    unlockScroll,
    getLenis,
  };
}
