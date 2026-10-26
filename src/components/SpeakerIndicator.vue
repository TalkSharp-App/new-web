<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
    barCount?: number;
    height?: number;
    speed?: number;
  }>(),
  {
    color: "#16a34a",
    barCount: 5,
    height: 18,
    speed: 700,
  }
);
</script>

<template>
  <div class="flex h-5 items-center justify-center gap-0.75">
    <span
      v-for="index in barCount"
      :key="index"
      class="speaking-bar block w-0.75 shrink-0 rounded-full"
      :style="{
        height: `${height}px`,
        backgroundColor: color,
        animationDuration: `${speed}ms`,
        animationDelay: `${(index - 1) * 120}ms`,
      }"
    />
  </div>
</template>

<style scoped>
.speaking-bar {
  transform-origin: center;
  animation: speaking-wave 700ms ease-in-out infinite alternate;
}

@keyframes speaking-wave {
  0% {
    transform: scaleY(0.3);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>