<script lang="ts" setup>
import YoImg from '@/assets/yo.svg';
import IgbImg from '@/assets/igb.svg';
import TwiImg from '@/assets/twi.svg';
import PdImg from '@/assets/pd.svg';
import HauImg from '@/assets/hau.svg';

const imageLang = [
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
    class: "hidden md:block absolute top-90 left-160 w-30 pointer-events-none select-none z-0",
    image: HauImg,
    alt: "cloud image"
  },
  {
    id: 6,
    class: "hidden md:block absolute top-50 right-22 w-30 pointer-events-none select-none z-0",
    image: PdImg,
    alt: "pidgin"
  },
  {
    id: 7,
    class: "hidden md:block absolute top-10 left-150 w-30 pointer-events-none select-none z-0",
    image: TwiImg,
    alt: "twi"
  }
];

</script>

<template>
    <section class="relative max-w-4xl py-20 px-6 sm:px-6 w-full mx-auto bg-black rounded-[40px] my-12">
        <div class="h-full w-full flex flex-col items-center justify-center">
            <slot />
        </div>
        <img
            v-for="img in imageLang"
            :key="img.id"
            :src="img.image"
            alt="language"
            aria-hidden="true"
            :class="[img.class, 'absolute']"
        />
    </section>
</template>