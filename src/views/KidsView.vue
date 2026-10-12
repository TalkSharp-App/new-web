<script lang="ts" setup>
import PageLayout from '@/components/PageLayout.vue';
import KidsHero from './kids/KidsHero.vue';
import KidsSolution from './kids/KidsSolution.vue';
import OverlapImg from '@/assets/overlapImg.png'
import FrequentlyAsked from './kids/FrequentlyAsked.vue';
import AppButton from '@/components/AppButton.vue';
import BottomSection from '@/components/BottomSection.vue';
import WaitlistModal from '@/components/WaitList.vue';
import { ref } from 'vue';
import { kidsFaqs } from '@/constant/helper.ts';

const isWaitlistOpen = ref(false);

const handleWaitlistSubmit = (email: string) => {
  console.log('Submitted email to waitlist:', email);
};

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
    <!-- <KidsTestimonials /> -->
    <FrequentlyAsked :faq="kidsFaqs"/>
    <BottomSection widthClass="max-w-6xl">
      <h2 class="font-lucky text-2xl sm:text-4xl md:text-[52px] text-white text-center leading-tight sm:leading-16 mb-4">
        Give Your Child The Gift of<br class="hidden sm:block" /> Confident Heritage!
      </h2>

      <p class="text-white/80 text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-8 leading-relaxed">
        TalkSharp Kids helps your children connect with family, humor, heritage, and the people who matter most — one playful moment at a time.
      </p>

      <div class="flex justify-center w-full z-10">
        <AppButton @click="isWaitlistOpen = true" class="h-12 px-10 text-base font-semibold">
          Join Waitlist
        </AppButton>
      </div>
      <WaitlistModal
        :isOpen="isWaitlistOpen"
        @close="isWaitlistOpen = false"
        @submit="handleWaitlistSubmit"
      />
    </BottomSection>
  </PageLayout>
</template>
