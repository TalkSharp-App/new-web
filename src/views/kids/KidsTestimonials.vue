<script setup lang="ts">
import TestimonialHeader from '@/components/TestimonialHeader.vue';
</script>


<template>
  <section class="pb-10 px-4 sm:px-6 w-full">
    <!-- path section -->
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-lucky text-4xl py-3 text-center">What parents are saying about talksharp for kids</h1>
      <p class="text-[#667085] text-lg text-center max-w-3xl">From diaspora reconnecting with roots to kids surprising their grandparents.</p>

      <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 max-w-6xl mx-auto mt-12 mb-6">
        <div class="flex flex-col gap-6 bg-[#FFF6D6] rounded-4xl p-6 sm:p-8">
          <p class="text-sm">Ever since my son started learning on TalkSharp he greets me like a Yoruba boy</p>
          <TestimonialHeader
            name="Tude O."
            location="London, UK"
            bgColor="bg-secondary"
            textColor="text-white"
          />
        </div>
        <div class="flex flex-col gap-6 bg-[#F0FFF4] rounded-4xl p-6 sm:p-8">
          <p class="text-sm">My daughter and I had a clean conversation in Igbo and I was so happy.</p>
          <TestimonialHeader
            name="Uche M."
            location="Toronto, Canada"
            bgColor="bg-app-green"
            textColor="text-white"
          />
        </div>
        <div class="flex flex-col gap-6 bg-[#F5F3FF] rounded-4xl p-6 sm:p-8">
          <p class="text-sm">Oh my God, my son just prostrated to greet me this morning. </p>
          <TestimonialHeader
            name="Kemi A."
            location="Houston, USA"
            bgColor="bg-app-purple"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
   </section>
</template>
