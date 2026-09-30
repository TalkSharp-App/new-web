<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>

<template>
  <section class="w-full my-6">
    <div class="bg-[#F4F7F4] py-10">
      <h1 class="font-lucky text-4xl py-3 text-center">A few quick answers for parents.</h1>
      <div class="flex flex-col gap-6 max-w-4xl mx-auto px-4">
        <div class="border border-border rounded-2xl p-4 space-y-3 bg-white">
          <p class="font-bold text-base 2xl:text-lg">Is TalkSharp Kids suitable for complete beginners?</p>
          <p class="text-[#667085] text-xs">Yes. Children start with listening, matching, and simple repetition. These activities help them become familiar with the language and build confidence before moving on to more advanced practice.</p>
        </div>
        <div class="border border-border rounded-2xl p-4 space-y-3 bg-white">
          <p class="font-bold text-base 2xl:text-lg">How can I follow my child’s learning progress?</p>
          <p class="text-[#667085] text-xs">You can view your child’s recent activity, progress updates, and learning milestones. These help you stay involved, support their learning, and celebrate their progress.</p>
        </div>
        <div class="border border-border rounded-2xl p-4 space-y-3 bg-white">
          <p class="font-bold text-base 2xl:text-lg">Can my child learn more than one language?</p>
          <p class="text-[#667085] text-xs">Yes. Your child can explore multiple languages, whether you want to connect them with your family’s heritage, support everyday conversations, or encourage their curiosity.</p>
        </div>
        <div class="border border-border rounded-2xl p-4 space-y-3 bg-white">
          <p class="font-bold text-base 2xl:text-lg">Can I manage my child’s screen time?</p>
          <p class="text-[#667085] text-xs">Yes. You can manage your child’s screen time through the TalkSharp app for adults.</p>
        </div>
      </div>
    </div>

    <div class="relative w-full max-w-6xl mx-auto my-20 px-4 sm:px-6">
      <div class="w-full bg-linear-to-b from-neutral-900 to-black text-white rounded-4xl sm:rounded-[40px] px-10 py-16 sm:p-20 md:p-24 flex flex-col justify-center items-center text-center shadow-2xl ring-1 ring-white/10 overflow-hidden">
        <div class="flex flex-col items-center max-w-5xl mx-auto z-10">
          <h2 class="font-lucky text-3xl sm:text-5xl md:text-[56px] leading-[1.1] text-balance mb-6">
            Give Your Child The Gift of Confident Heritage!
          </h2>
          <p class="text-white/80 font-normal leading-relaxed text-sm sm:text-base text-balance max-w-2xl mb-8">
            TalkSharp Kids helps your children connect with family, humor, heritage, and the people who matter most — one playful moment at a time.
          </p>

        </div>
        <div>
          <AppButton class="h-11 px-10">
            Join Waitlist
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
