<template>
  <footer class="border-t border-gray-800 bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto px-6 py-6">
      <div
        class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
      >
        <!-- Left -->
        <p class="text-center sm:text-left">
          © {{ new Date().getFullYear() }} Fajar. All rights reserved.
        </p>

        <!-- Right -->
        <p class="flex items-center gap-1">
          Created with
          <span class="text-red-500 animate-pulse">❤</span>
          by
          <span class="text-emerald-400 font-medium">Fajar</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// no logic needed
</script>
