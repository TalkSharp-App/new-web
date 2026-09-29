<script lang="ts" setup>
import CloudImg from '@/assets/cloud.png';
import YoImg from '@/assets/yo.svg';
import IgbImg from '@/assets/igb.svg';
import TwiImg from '@/assets/twi.svg';
import PdImg from '@/assets/pd.svg';
import HauImg from '@/assets/hau.svg';
import { computed } from 'vue';

interface PageLayoutType {
  showHero?: boolean;
  heroHeight?: string;
  heroWidth?: string;
  heroBg?: string;
  isHomeScreen?: boolean;
}

const images = [
  {
    id: 1,
    class: "hidden md:block absolute top-20 right-22 w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
  {
    id: 2,
    class: "hidden md:block absolute bottom-12 left-20 w-44 pointer-events-none select-none z-0 top-70",
    image: CloudImg,
    alt: "cloud image"
  },
  {
    id: 3,
    class: "hidden md:block absolute top-20 left-20 w-30 pointer-events-none select-none z-0 top-90",
    image: YoImg,
    alt: "cloud image"
  },
  {
    id: 4,
    class: "hidden md:block absolute bottom-12 left-20 w-30 pointer-events-none select-none z-0 top-10",
    image: IgbImg,
    alt: "cloud image"
  },
  {
    id: 5,
    class: "hidden md:block absolute top-20 left-140 w-30 pointer-events-none select-none z-0 top-110",
    image: HauImg,
    alt: "cloud image"
  },
  {
    id: 6,
    class: "hidden md:block absolute top-70 right-22 w-30 pointer-events-none select-none z-0",
    image: PdImg,
    alt: "pidgin"
  },
  {
    id: 7,
    class: "hidden md:block absolute top-2 left-140 w-30 pointer-events-none select-none z-0",
    image: TwiImg,
    alt: "twi"
  }
];

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
    ? images
    : images.slice(0, 2)
);
</script>

<template>
  <main class="flex flex-col bg-[#FCFFFC] min-h-screen">
    <div
      :class="['relative overflow-hidden w-full', props.heroHeight]"
      v-if="props.showHero"
    >
      <div :class="['absolute inset-0', props.heroBg]"></div>

      <img
        v-for="img in _images"
        :key="img.id"
        :src="img.image"
        alt=""
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
