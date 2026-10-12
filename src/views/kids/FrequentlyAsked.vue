<script setup lang="ts">
import { kidsFaqs, type FaqItem } from '@/constant/helper';
import { ref } from 'vue';

const openId = ref<number | null>(1);

const toggleFaq = (id: number) => {
  openId.value = openId.value === id ? null : id;
};

defineProps<{
  faq: FaqItem[];
}>();
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
          v-for="faq in kidsFaqs"
          :key="faq.id"
          class="border border-border rounded-2xl bg-white overflow-hidden transition-all duration-200"
        >
          <button
            type="button"
            @click="toggleFaq(faq.id)"
            class="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer select-none focus:outline-none"
            :aria-expanded="openId === faq.id"
          >
            <p class="font-bold text-base 2xl:text-lg text-black pr-4">
              {{ faq.question }}
            </p>

            <span
              class="shrink-0 text-gray-500 transition-transform duration-300"
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
            class="grid transition-all duration-300 ease-in-out px-4 sm:px-5"
            :class="[
              openId === faq.id
                ? 'grid-rows-[1fr] opacity-100 pb-4 sm:pb-5'
                : 'grid-rows-[0fr] opacity-0 pb-0'
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
  </section>
</template>
