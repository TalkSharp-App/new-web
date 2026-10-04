<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>

<template>
  <section class="relative flex flex-col justify-center items-center gap-6 md:gap-8 pt-10 md:pt-16 mt-8 px-4 sm:px-8 text-center max-w-235 mx-auto">
    <div class="relative z-10 flex flex-col items-center w-full">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-lucky m-0 sm:leading-tight">
        PASS DOWN your MOTHER TONGUE to<span class="text-app-yellow pl-2 sm:pl-3">your kids.</span>
      </h1>

      <p class="text-white text-base md:text-lg max-w-184 text-center leading-relaxed px-2">
        Help your child build vocabulary and practise everyday phrases in your family’s language through word games, songs, and African folktales.
      </p>
    </div>

    <div class="mt-8">
      <AppButton class="h-11 px-10 bg-white" text-color="black">
        Join Waitlist
      </AppButton>
    </div>

  </section>
</template>
