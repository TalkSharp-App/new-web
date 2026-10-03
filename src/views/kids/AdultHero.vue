<script setup lang="ts">
import AppStoreButtons from '@/components/AppStoreButtons.vue';
</script>

<template>
  <section class="relative flex flex-col justify-center items-center gap-6 md:gap-8 py-10 md:py-16 px-4 sm:px-8 text-center max-w-235 mx-auto">
    <div class="relative z-10 flex flex-col items-center w-full sm:mb-0 mb-12">
      <h1 class="text-[32px] sm:text-5xl md:text-6xl text-app-yellow font-lucky m-0 leading-8 sm:leading-12 md:leading-14">
        Speak African <br/><span class="text-white pl-2 sm:pl-3">Languages</span><br/>
        <span class="text-white pl-2 sm:pl-3">with</span>
        <span class="text-app-yellow pl-2 sm:pl-3">confidence</span>
      </h1>

      <p class="text-white text-sm sm:text-base md:text-lg max-w-184 text-center font-light leading-6 px-2">
        Learn Igbo, Pidgin English, Swahili, Twi, and Yoruba through <br class="md:block hidden"/>
        AI-powered conversations, culture, and real context.
      </p>
    </div>

      <AppStoreButtons variant="white" />

  </section>
</template>
