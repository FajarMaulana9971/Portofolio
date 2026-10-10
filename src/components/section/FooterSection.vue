<template>
  <footer class="relative border-t border-teal-500/30 bg-gradient-to-b from-[#071322] to-[#040b15] text-slate-400 overflow-hidden">
    <!-- Top glowing accent line -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.7)] pointer-events-none"></div>
    <!-- Ambient radial glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12)_0%,rgba(45,212,191,0.08)_40%,transparent_75%)] pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-6 py-6 relative z-10">
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
      >
        <p class="flex items-center gap-1 text-slate-300">
          Created with
          <span class="text-rose-500 animate-pulse">❤</span>
          by
          <span class="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent font-bold drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]">Fajar</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// no logic needed
</script>
