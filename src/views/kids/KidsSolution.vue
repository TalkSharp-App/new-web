<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import QuoteSvg from '@/assets/quote-up.svg';
import SlideImage from '@/assets/kidscarousel.png';
import QuestImage from '@/assets/Question.png';
import LearnImage from '@/assets/kidslearn.png'
import AppButton from '@/components/AppButton.vue';

// Carousel Slides Data
const slides = [
  {
    id: 1,
    image: SlideImage,
    caption: "TalkSharp teaches your kids through interactive lessons, games on how to greet parents and also elders.",
  },
  {
    id: 2,
    image: SlideImage,
    caption: "Playful songs and traditional folktales crafted to keep children connected to their cultural roots.",
  },
  {
    id: 3,
    image: SlideImage,
    caption: "Daily immersion stories designed to build language confidence step-by-step.",
  },
];

const currentIndex = ref(0);
let autoPlayTimer: ReturnType<typeof setInterval> | null = null;

const touchStartX = ref(0);
const touchEndX = ref(0);
const isDragging = ref(false);

const startAutoPlay = () => {
  stopAutoPlay();
  autoPlayTimer = setInterval(() => {
    nextSlide();
  }, 4000);
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  startAutoPlay();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};

const handleTouchStart = (e: TouchEvent) => {
  stopAutoPlay();
  touchStartX.value = e.touches[0]?.clientX ?? 0;
};

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0]?.clientX ?? 0;
  handleSwipe();
  startAutoPlay();
};

const handleMouseDown = (e: MouseEvent) => {
  stopAutoPlay();
  isDragging.value = true;
  touchStartX.value = e.clientX;
};

const handleMouseUp = (e: MouseEvent) => {
  if (!isDragging.value) return;
  isDragging.value = false;
  touchEndX.value = e.clientX;
  handleSwipe();
  startAutoPlay();
};

const handleSwipe = () => {
  const swipeDistance = touchStartX.value - touchEndX.value;
  const threshold = 50;

  if (swipeDistance > threshold) {
    nextSlide();
  } else if (swipeDistance < -threshold) {
    prevSlide();
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section class="pt-28 md:pt-44 pb-16 md:pb-24 px-4 sm:px-6 w-full mx-auto">
    <div class="text-center my-20 md:my-28 max-w-4xl mx-auto">
      <div class="relative inline-block px-8 py-6 md:px-16 md:py-10">
        <img
          :src="QuoteSvg"
          alt=""
          aria-hidden="true"
          class="absolute -top-2 left-0 w-8 md:w-16 pointer-events-none select-none"
        />

        <figure class="flex flex-col items-center">
          <blockquote class="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed md:leading-snug max-w-3xl text-center">
            But if you know your mother tongue, and add other languages, that is empowerment.
          </blockquote>

          <figcaption class="mt-4 text-xl sm:text-2xl md:text-3xl font-bold">
            — Ngũgĩ wa Thiong’o
          </figcaption>
        </figure>

        <img
          :src="QuoteSvg"
          alt=""
          aria-hidden="true"
          class="absolute -bottom-1 right-0 w-8 md:w-16 pointer-events-none select-none -scale-x-100"
        />
      </div>
    </div>

    <!-- Carousel Container -->
    <div class="flex flex-col items-center max-w-4xl mx-auto">
      <h1 class="font-lucky text-4xl py-5">What we are solving</h1>
      <div
        class="w-full overflow-hidden rounded-2xl md:rounded-3xl cursor-grab active:cursor-grabbing select-none"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
      >
        <div
          class="flex transition-transform duration-500 ease-out w-full"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="slide in slides"
            :key="slide.id"
            class="w-full shrink-0"
          >
            <img
              :src="slide.image"
              :alt="slide.caption"
              class="w-full h-auto object-cover rounded-2xl md:rounded-3xl pointer-events-none"
            />
          </div>
        </div>
      </div>

      <!-- Dynamic Caption under Image -->
      <p class="mt-6 text-center text-sm sm:text-base md:text-lg font-medium max-w-2xl px-4 min-h-12">
        {{ slides[currentIndex]?.caption }}
      </p>
      <div class="flex items-center justify-center gap-2 mt-6">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
          :class="[
            'h-3 rounded-full transition-all duration-300 ease-in-out cursor-pointer',
            currentIndex === index
              ? 'w-8 bg-red-500'
              : 'w-3 bg-red-500/30 hover:bg-red-500/60'
          ]"
        />
      </div>
    </div>

    <!-- path section -->
    <div class="flex flex-col justify-center items-center my-20 md:my-28">
      <h1 class="font-lucky text-4xl py-3">The path changes as the child grows.</h1>
      <p class="text-[#667085] text-lg text-center max-w-3xl">Younger children begin with big visuals, simple choices, and lots of listening. Older children move into richer stories, more independence, and more conversational confidence.</p>

      <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 max-w-6xl mx-auto mt-12 mb-6">
        <div class="flex flex-col gap-6 bg-[#FFF1F2] rounded-4xl p-6 sm:p-8">
          <p class="bg-white border border-border py-1.5 px-3.5 rounded-2xl w-fit">Ages 4-7</p>
          <h3 class="font-lucky text-2xl">Little ears, big curiosity.</h3>
          <p>Matching games, animal names, family words, and short prompts build familiarity, without making learning feel like school.</p>
        </div>
        <div class="flex flex-col gap-6 bg-[#EFF6EF] rounded-4xl p-6 sm:p-8">
          <p class="bg-white border border-border py-1.5 px-3.5 rounded-2xl w-fit">Ages 8-11</p>
          <h3 class="font-lucky text-2xl">More language, more independence.</h3>
          <p>Children begin connecting phrases to stories, culture quizzes, and short speaking tasks that encourage them to try out full lines.</p>
        </div>
        <div class="flex flex-col gap-6 bg-[#FAF9FF] rounded-4xl p-6 sm:p-8">
          <p class="bg-white border border-border py-1.5 px-3.5 rounded-2xl w-fit">Ages 12-14</p>
          <h3 class="font-lucky text-2xl">Deeper stories, bigger confidence.</h3>
          <p>Older children can carry more context, explore cultural meaning, and practice phrases they may want to use with relatives, friends, or family gatherings.</p>
        </div>
      </div>
    </div>


    <div class="mt-20 mb-10 md:mt-28 md:mb-14 flex flex-col justify-center items-center max-w-4xl mx-auto">
      <div class="block font-lucky text-4xl py-5 text-center">
        <h1>Built for  your kids </h1>
        <h1>for better learning</h1>
      </div>
      <p class="text-[#667085] text-sm md:text-lg text-center max-w-3xl">Instead of passive viewing, children play an active role - talking, mimicking, laughing, and building actual cognitive connections to Yoruba, Igbo, Swahili, and Twi.</p>

      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 my-11">
        <img
          :src="QuestImage"
          alt="screenshot of kid's question screen"
          aria-hidden="true"
          class="w-56 md:w-72 h-auto pointer-events-none select-none"
        />
        <div class="flex flex-col justify-center">
          <h3 class="font-lucky text-3xl">Play by learning</h3>
          <p class="text-grey text-sm md:text-lg">Your kids gets preferential games based on there age for there effective learning.</p>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
        <div class="flex flex-col justify-center">
          <h3 class="font-lucky text-3xl">Conversation Learning</h3>
          <p class="text-grey text-sm md:text-lg">Your kids learns by one to one conversation, with clear visuals. </p>
        </div>
        <img
          :src="LearnImage"
          alt="screenshot of kid's learn screen"
          aria-hidden="true"
          class="w-56 md:w-72 h-auto pointer-events-none select-none"
        />
      </div>

      <div class="mt-8">
        <AppButton class="h-11 px-10">
          Join Waitlist
        </AppButton>
      </div>
    </div>
  </section>
</template>
