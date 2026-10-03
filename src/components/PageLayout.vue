<script lang="ts" setup>
import { ImageLang } from '@/constant/helper';
import { computed } from 'vue';

interface PageLayoutType {
  showHero?: boolean;
  heroHeight?: string;
  heroWidth?: string;
  heroBg?: string;
  isHomeScreen?: boolean;
}

const props = withDefaults(
  defineProps<PageLayoutType>(), {
    showHero: true,
    heroHeight: "h-screen",
    heroWidth: "w-full",
    heroBg: "bg-app-green",
    isHomeScreen: false
  }
);

const _images = computed(() =>
  props.isHomeScreen
    ? ImageLang
    : ImageLang.slice(0, 2)
);
</script>

<template>
  <main class="flex flex-col sm:min-h-screen">
    <div
      :class="['relative overflow-hidden w-full', props.heroHeight]"
      v-if="props.showHero"
    >
      <div :class="['absolute inset-0', props.heroBg]"></div>

      <img
        v-for="img in _images"
        :key="img.id"
        :src="img.image"
        alt="language"
        aria-hidden="true"
        :class="img.class"
      />

      <div class="relative z-10 flex flex-col items-center justify-start w-full pt-4 pb-12 md:pb-20">
        <slot name="hero" />
      </div>
    </div>

    <slot />
  </main>
</template>
