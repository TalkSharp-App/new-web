<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';

// import AppStoreButtons from '@/components/AppStoreButtons.vue';
const handleGetStarted = () => {
  window.location.href = "https://app.talksharp.co";
};
</script>

<template>
  <section class="relative flex flex-col justify-center items-center gap-6 md:gap-8 py-10 md:py-16 px-4 sm:px-8 text-center max-w-235 mx-auto">
    <div class="relative z-10 flex flex-col items-center w-full sm:mb-0 mb-12">
      <h1 class="text-[32px] sm:text-5xl md:text-6xl text-app-yellow font-lucky m-0 leading-8 sm:leading-12 md:leading-14">
       Reconnect <span class="text-white">With</span><br/><span class="text-white pl-2 sm:pl-3">Your Roots,</span><br/>
        <span class="text-white">One</span><span class="text-app-yellow pl-2 sm:pl-3">Word</span>
        <span class="text-white pl-2 sm:pl-3">At a time.</span>
      </h1>

      <p class="text-white text-sm sm:text-base md:text-lg max-w-184 text-center font-light leading-6 px-2">
        Learn Yoruba and Igbo today with native-speaker audio and the <br class="md:block hidden"/>
        cultural context that makes every word land. <br class="md:block hidden"/>
        Twi and Nigerian Pidgin coming soon.
      </p>
    </div>

    <!-- <AppStoreButtons variant="white" /> -->
    <div>
      <AppButton 
        @click="handleGetStarted" 
        class="h-11 px-10" 
        textColor="black"
        variant="tertiary"
      >
        Get Started
      </AppButton>
    </div>

  </section>
</template>
