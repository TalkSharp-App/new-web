<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import BottomSection from '@/components/BottomSection.vue';
import { ref } from 'vue';
import WaitlistModal from '@/components/WaitList.vue';

const isWaitlistOpen = ref(false);

const handleWaitlistSubmit = (email: string) => {
  console.log('Submitted email to waitlist:', email);
};

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Is TalkSharp Kids suitable for complete beginners?',
    answer:
      'Yes. Children start with listening, matching, and simple repetition. These activities help them become familiar with the language and build confidence before moving on to more advanced practice.',
  },
  {
    id: 2,
    question: 'How can I follow my child’s learning progress?',
    answer:
      'You can view your child’s recent activity, progress updates, and learning milestones. These help you stay involved, support their learning, and celebrate their progress.',
  },
  {
    id: 3,
    question: 'Can my child learn more than one language?',
    answer:
      'Yes. Your child can explore multiple languages, whether you want to connect them with your family’s heritage, support everyday conversations, or encourage their curiosity.',
  },
  {
    id: 4,
    question: 'Can I manage my child’s screen time?',
    answer:
      'Yes. You can manage your child’s screen time through the TalkSharp app for adults.',
  },
];

const openId = ref<number | null>(1);

const toggleFaq = (id: number) => {
  openId.value = openId.value === id ? null : id;
};
</script>

<template>
  <section class="w-full my-6">
    <div class="bg-[#F4F7F4] py-10 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
      <h2 class="font-lucky text-2xl sm:text-3xl md:text-4xl py-3 text-center mb-6 md:mb-8 text-black">
        A few quick answers for parents.
      </h2>

      <div class="flex flex-col gap-4 sm:gap-6">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="border border-border rounded-2xl bg-white overflow-hidden transition-all duration-200"
        >
          <button
            type="button"
            @click="toggleFaq(faq.id)"
            class="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer md:cursor-default select-none focus:outline-none"
            :aria-expanded="openId === faq.id"
          >
            <p class="font-bold text-base 2xl:text-lg text-black pr-4">
              {{ faq.question }}
            </p>

            <span
              class="md:hidden shrink-0 text-gray-500 transition-transform duration-300"
              :class="{ 'rotate-180': openId === faq.id }"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>

          <div
            class="grid transition-all duration-300 ease-in-out px-4 sm:px-5 md:grid-rows-[1fr] md:opacity-100"
            :class="[
              openId === faq.id
                ? 'grid-rows-[1fr] opacity-100 pb-4 sm:pb-5'
                : 'grid-rows-[0fr] opacity-0 pb-0 md:pb-5'
            ]"
          >
            <div class="overflow-hidden">
              <p class="text-[#667085] text-xs sm:text-sm leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="px-4 sm:px-6">
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
    </div>
  </section>
</template>
