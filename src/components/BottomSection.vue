<script lang="ts" setup>
import YoImg from '@/assets/yo.svg';
import IgbImg from '@/assets/igb.svg';
import TwiImg from '@/assets/twi.svg';
import PdImg from '@/assets/pd.svg';
import HauImg from '@/assets/hau.svg';

interface Props {
  widthClass?: string;
}

withDefaults(defineProps<Props>(), {
  widthClass: 'max-w-4xl',
});

const imageLang = [
  {
    id: 3,
    class: "absolute md:left-20 w-20 sm:w-30 pointer-events-none select-none z-0 sm:top-90",
    image: YoImg,
    alt: "cloud image"
  },
  {
    id: 4,
    class: "absolute bottom-12 left-2 md:left-20 w-20 sm:w-30 pointer-events-none select-none z-0 sm:top-10 top-6",
    image: IgbImg,
    alt: "cloud image"
  },
  {
    id: 5,
    class: "absolute sm:top-90 md:left-160 top-8 sm:left-140 left-35 w-20 sm:w-30 pointer-events-none select-none z-0",
    image: HauImg,
    alt: "cloud image"
  },
  {
    id: 6,
    class: "absolute top-80 right-5 sm:top-50 sm:right-22 w-20 sm:w-30 pointer-events-none select-none z-0",
    image: PdImg,
    alt: "pidgin"
  },
  {
    id: 7,
    class: "absolute top-6 right-4 sm:top-8 sm:right-16 md:right-24 w-20 sm:w-30 pointer-events-none select-none z-0",
    image: TwiImg,
    alt: "twi"
  }
];
</script>

<template>
  <section
    :class="[
      'relative pt-28 pb-20 sm:py-20 px-6 sm:px-12 w-full mx-auto bg-black rounded-[40px] my-12 overflow-hidden',
      widthClass
    ]"
  >
    <div class="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
      <slot />
    </div>
    <img
      v-for="img in imageLang"
      :key="img.id"
      :src="img.image"
      alt="language"
      aria-hidden="true"
      :class="[img.class, 'absolute pointer-events-none select-none z-0']"
    />
  </section>
</template>
