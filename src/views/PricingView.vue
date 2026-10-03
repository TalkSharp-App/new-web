<script lang="ts" setup>
import CloudImg from '@/assets/cloud.png';

const ImageLang = [
  {
    id: 1,
    class: "absolute top-5 right-1 sm:right-22 w-24 sm:w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
  {
    id: 2,
    class: "absolute top-30 sm:bottom-12 left-3 sm:left-20 w-24 sm:w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
]

</script>
<template>
    <div class="bg-app-green w-full h-84 relative">

        <img
            v-for="img in ImageLang"
            :key="img.id"
            :src="img.image"
            alt="language"
            aria-hidden="true"
            :class="[img.class, 'z-1']"
        />

        <div class="relative flex justify-center items-end z-10">
            <!-- card and header text goes here -->
        </div>
    </div>
    <div>
        others
    </div>
</template>