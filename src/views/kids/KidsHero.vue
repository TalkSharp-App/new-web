<script setup lang="ts">
import AppStoreButtons from '@/components/AppStoreButtons.vue';
import CloudImg from '@/assets/cloud.png';
</script>

<template>
  <section class="relative flex flex-col justify-center items-center gap-6 md:gap-8 py-10 md:py-16 mt-8 px-4 sm:px-8 text-center max-w-235 mx-auto">
    <img
      :src="CloudImg"
      alt=""
      aria-hidden="true"
      class="hidden md:block absolute top-20 -right-22 w-44 pointer-events-none select-none z-0"
    />

    <img
      :src="CloudImg"
      alt=""
      aria-hidden="true"
      class="hidden md:block absolute bottom-12 -left-10 w-44 pointer-events-none select-none z-0"
    />

    <div class="relative z-10 flex flex-col items-center w-full">
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-lucky m-0 leading-tight">
        PASS DOWN your MOTHER TONGUE to<span class="text-app-yellow pl-2 sm:pl-3">your kids.</span>
      </h1>

      <p class="text-white text-sm sm:text-base md:text-lg max-w-184 text-center font-light leading-relaxed px-2">
        TalkSharp Kids weaves interactive word games, playful songs, and African folktales into an experience they look forward to every day.
      </p>
    </div>

      <AppStoreButtons variant="white" />

  </section>
</template>
