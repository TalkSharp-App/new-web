<script lang="ts" setup>
interface PageLayoutType {
  showHero?: boolean;
  heroHeight?: string;
  heroWidth?: string;
  heroBg?: string;
}

withDefaults(
  defineProps<PageLayoutType>(), {
    showHero: true,
    heroHeight: "h-screen",
    heroWidth: "w-full",
    heroBg: "bg-app-green"
  }
);
</script>

<template>
  <main class="flex flex-col bg-[#FCFFFC] min-h-screen">
    <div
      :class="['relative overflow-hidden w-full', heroHeight]"
      v-if="showHero"
    >
      <div :class="['absolute inset-0', heroBg]"></div>

      <div class="relative z-10 flex flex-col items-center justify-start w-full pt-4 pb-12 md:pb-20">
        <slot name="hero" />
      </div>
    </div>

    <slot />
  </main>
</template>
