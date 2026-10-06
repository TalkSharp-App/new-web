<script lang="ts" setup>
import PageLayout from '@/components/PageLayout.vue';
import KidsHero from './kids/KidsHero.vue';
import KidsSolution from './kids/KidsSolution.vue';
import OverlapImg from '@/assets/overlapImg.png'
import KidsTestimonials from './kids/KidsTestimonials.vue';
import KidsFaq from './kids/KidsFaq.vue';

</script>
<template>
  <PageLayout>
    <template #hero>
      <KidsHero />
    </template>

    <div class="relative z-30 w-full max-w-4xl mx-auto px-4 h-0">
      <img
        :src="OverlapImg"
        alt="App Preview"
        class="w-full h-auto object-contain mx-auto -translate-y-1/2 drop-shadow-xl pointer-events-none select-none"
      />
    </div>

    <KidsSolution />
    <KidsTestimonials />
    <KidsFaq />
  </PageLayout>
</template>
