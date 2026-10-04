 <script setup lang="ts">
import { ref } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import TestimonialHeader from '@/components/TestimonialHeader.vue';

interface Testimonial {
  description: string;
  name: string;
  location: string;
  bg: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    description: "Ever since my son started learning on TalkSharp he greets me like a Yoruba boy",
    name: "Tude O.",
    location: "London, UK",
    bg: "#FFF6D6",
    avatarBg: "bg-secondary"
  },
  {
    description: "My daughter and I had a clean conversation in Igbo and I was so happy.",
    name: "Uche M.",
    location: "Toronto, Canada",
    bg: "#F0FFF4",
    avatarBg: "bg-app-green"
  },
  {
    description: "Oh my God, my son just prostrated to greet me this morning.",
    name: "Kemi A.",
    location: "Houston, USA",
    bg: "#F5F3FF",
    avatarBg: "bg-app-purple"
  }
];

const testimonialContainer = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (testimonialContainer.value) {
    testimonialContainer.value.scrollBy({ left: -320, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (testimonialContainer.value) {
    testimonialContainer.value.scrollBy({ left: 320, behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="pb-10 px-4 sm:px-6 w-full flex justify-center items-center flex-col">
    <div class="flex flex-col justify-center items-center mb-8 sm:mb-12">
      <h2 class="font-lucky text-2xl sm:text-4xl md:text-[52px] text-center leading-tight sm:leading-16 py-2 sm:py-5">
        What parents are saying<br class="hidden sm:block" /> about talksharp for kids
      </h2>
      <p class="text-[#667085] text-sm md:text-lg text-center max-w-3xl leading-relaxed">
        From diaspora reconnecting with roots to kids surprising their grandparents.
      </p>
    </div>

    <div class="flex overflow-x-auto w-full sm:hidden hide-scrollbar gap-4 px-2">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="flex w-[85%] shrink-0 flex-col justify-between rounded-4xl p-6"
        :style="{ backgroundColor: item.bg }"
      >
        <p class="text-sm leading-6 mb-6">
          {{ item.description }}
        </p>

        <TestimonialHeader
          :name="item.name"
          :location="item.location"
          :bgColor="item.avatarBg"
          textColor="text-white"
        />
      </div>
    </div>

    <div class="relative hidden sm:block w-full max-w-6xl mx-auto">
      <button
        @click="scrollLeft"
        class="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft :size="22" />
      </button>

      <div
        ref="testimonialContainer"
        class="flex gap-6 overflow-x-auto scroll-smooth px-4 hide-scrollbar"
      >
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="flex w-[320px] lg:w-87.5 shrink-0 flex-col justify-between rounded-4xl p-6 sm:p-8"
          :style="{ backgroundColor: item.bg }"
        >
          <p class="text-sm sm:text-base leading-relaxed mb-6">
            {{ item.description }}
          </p>

          <TestimonialHeader
            :name="item.name"
            :location="item.location"
            :bgColor="item.avatarBg"
            textColor="text-white"
          />
        </div>
      </div>

      <button
        @click="scrollRight"
        class="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight :size="22" />
      </button>
    </div>
  </section>
</template>
