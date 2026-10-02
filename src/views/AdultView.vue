<script lang="ts" setup>
import PageLayout from '@/components/PageLayout.vue';
import AdultHero from './kids/AdultHero.vue';
import LanguageCard from '@/components/LanguageCard.vue';
import Couple from "@/assets/couple.png"
import Professional from "@/assets/professional.png"
import Parent from "@/assets/parent.png"
import Convo from "@/assets/convo.png"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AppButton from '@/components/AppButton.vue';
import Frame1 from '@/assets/Frame1.svg';
import Frame2 from '@/assets/Frame2.svg';
import Frame3 from '@/assets/Frame3.svg';
import KindsImg from '@/assets/kids.svg';
import AppStoreButtons from '@/components/AppStoreButtons.vue';
import BottomSection from '@/components/BottomSection.vue';
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref } from 'vue';

const modules = [Autoplay, Pagination];
const testimonialContainer = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  const container = testimonialContainer.value;

  if (!container) return;

  container.scrollBy({
    left: -container.clientWidth * 0.8,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  const container = testimonialContainer.value;

  if (!container) return;

  container.scrollBy({
    left: container.clientWidth * 0.8,
    behavior: "smooth",
  });
};

const handleGetStarted = () => {
  window.location.href = "https://app.talksharp.co";
};

const slides = [
  {
    text: "Have a clear conversation with your partner without stammering.",
    image: Couple
  },
  {
    text: "",
    image: Professional
  },
  {
    text: "",
    image: Parent
  },
  {
    text: "",
    image: Convo
  }
]

const items = [
    {
        title: "Native speaker audio",
        description: "Every word, every phrase, every tone spoken by real native speakers. Because in Yoruba, tone isn't accent. It's meaning.",
        invert: false,
        image: Frame1
    },
    {
        title: "Cultural context",
        description: `Words without context are just sounds. TalkSharp teaches you what to say, 
        who to say it to, and why it matters — through proverbs, traditions, and the stories your culture is 
        built on.`,
        invert: true,
        image: Frame2
    },
    {
        title: "Community",
        description: "Learn alongside others. Track your progress, and stay motivated on your journey back to the language that was always yours.",
        invert: false,
        image: Frame3
    }
]

const testimonials = [
    {
        description: "I called my grandmother for the first time in Igbo. She cried. I cried. TalkSharp made it happen in 3 months.",
        name: "Adaeze O.",
        location: "London, UK",
        bg: "#FFF6D6"
    },
    {
        description: "My 7-year-old now greets his Twi-speaking teacher every morning. His confidence has completely transformed.",
        name: "Kwame M.",
        location: "Toronto, Canada",
        bg: "#F0FFF4"
    },
    {
        description: 'I travel to Lagos for work and I can finally hold real conversations beyond "fine and you." Yoruba changed everything.',
        name: "Tunde A.",
        location: "Houston, USA",
        bg: "#F5F3FF"
    }
]

</script>

<template>
    <PageLayout :isHomeScreen="true">
        <template #hero>
            <AdultHero/>
        </template>

        <div>
            <section class="max-w-4xl pt-12 pb-4 px-4 sm:px-6 w-full mx-auto">
                <div class="flex justify-center items-center flex-col">
                    <span class="font-lucky text-[24px] sm:text-[42px] text-center">
                        LEarN to SaY “HELLO”
                    </span>
                    <span class="text-grey text-[14px] sm:text-[18px] mb-6 text-center">
                        Learn how to speak naturally in everyday moments.
                    </span>
                </div>

                <LanguageCard/>
            </section>

            <div class="flex justify-center items-center flex-col sm:mt-4 mt-8">
                <AppButton @click="handleGetStarted" class="px-12">
                    Get Started
                </AppButton>

                <span class="font-lucky text-[24px] sm:text-[48px] md:text-[42px] mt-12 mb-4 text-center leading-6">
                    A hello is just the <br class="sm:hidden block"/> beginning.
                </span>
            </div>

            <Swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="20"
                :loop="true"
                :pagination="{
                    clickable: true,
                }"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :speed="600"
                class="w-full"
            >
                <SwiperSlide
                    v-for="(slide, index) in slides"
                    :key="index"
                >
                    <div
                        class="relative flex h-60 sm:h-140 w-full flex-col items-center justify-center p-8 text-center"
                    >
                        <img
                            :src="slide.image"
                            alt="slide image"
                            class="absolute h-full w-full object-cover"
                        />

                        <p class="absolute text-white sm:bottom-20 bottom-16">
                            {{ slide.text }}
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <section class="max-w-5xl pt-12 pb-4 px-4 sm:px-6 w-full mx-auto flex justify-center items-center flex-col">
                <span class="font-lucky text-[24px] sm:text-[42px] sm:mt-12 sm:mb-4 text-center leading-8">
                    WE MADE AFRICAN language learning EASY
                </span>
                <span class="text-grey text-[14px] sm:text-[18px] sm:mb-6 text-center!">
                    TalkSharp helps you learn through real conversations, 
                    culture, tone, and community and not just random words.
                </span>

                <div 
                    v-for="item, index in items"
                    :key="index"
                    :class="['mt-4 flex justify-between items-center gap-4 mb-12', item.invert ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row']"
                >
                    <img
                        :src="item.image"
                        alt="african language learning"
                    />
                    <div class="flex justify-center flex-col">
                        <span class="font-lucky sm:text-[32px] text-[18px]">
                            {{ item.title }}
                        </span>
                        <span class="font-grey sm:text-[18px] text-[14px]">
                            {{ item.description }}
                        </span>
                    </div>
                </div>

                <div class="flex justify-center items-center">
                    <AppButton class="px-6" @click="handleGetStarted">
                        Start Learning
                    </AppButton>
                </div>
            </section>

            <section class="sm:pt-12 pb-4 px-4 sm:px-6 w-full flex justify-center items-center flex-col">
                <span class="font-lucky text-[24px] sm:text-[42px] mt-12 sm:mb-4">
                    PEOPLE’S LOVE
                </span>
                <span class="text-grey sm:text-[18px] mb-6 text-center! text-[14px]">
                    From diaspora reconnecting with roots to kids surprising their grandparents.
                </span>
                <div class="flex overflow-x-auto md:px-0 sm:hidden hide-scrollbar">
                    <div 
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                        class="flex mr-2 w-[85%] shrink-0 flex-col rounded-[28px] p-4 sm:w-100 sm:p-6 lg:w-[32%]"
                        :style="{ backgroundColor: testimonial.bg }"
                    >
                        <span class="mb-4 text-sm leading-6 sm:text-[16px]">
                        {{ testimonial.description }}
                        </span>

                        <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center rounded-full bg-amber-600 px-3 py-2 sm:px-4">
                            <span class="text-sm font-bold capitalize text-white sm:text-[18px]">
                            {{ testimonial.name.charAt(0) }}
                            </span>
                        </div>

                        <div class="flex flex-col">
                            <span class="text-xs font-bold sm:text-[15px]">
                            {{ testimonial.name }}
                            </span>
                            <span class="text-xs font-light text-[#6B7280] sm:text-[13px]">
                            {{ testimonial.location }}
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="relative sm:block hidden">
                    <button
                        @click="scrollLeft"
                        class="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2
                                items-center justify-center rounded-full bg-white shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft :size="22" />
                    </button>

                    <div
                        ref="testimonialContainer"
                        class="flex gap-4 overflow-x-auto scroll-smooth px-6 md:px-0 hide-scrollbar"
                    >
                    <div
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                        class="flex w-[85%] shrink-0 flex-col rounded-[28px] p-4
                            sm:w-100 sm:p-6 lg:w-[32%]"
                        :style="{ backgroundColor: testimonial.bg }"
                    >
                        <span class="mb-4 text-sm leading-6 sm:text-[16px]">
                        {{ testimonial.description }}
                        </span>

                        <div class="flex items-center gap-2">
                        <div
                            class="flex items-center justify-center rounded-full
                                bg-amber-600 px-3 py-2 sm:px-4"
                        >
                            <span
                            class="text-sm font-bold capitalize text-white sm:text-[18px]"
                            >
                            {{ testimonial.name.charAt(0) }}
                            </span>
                        </div>

                        <div class="flex flex-col">
                            <span class="text-xs font-bold sm:text-[15px]">
                            {{ testimonial.name }}
                            </span>

                            <span class="text-xs font-light text-[#6B7280] sm:text-[13px]">
                            {{ testimonial.location }}
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>

                    <button
                        @click="scrollRight"
                        class="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2
                                items-center justify-center rounded-full bg-white shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight :size="22" />
                    </button>
                </div>
            </section>

            <section class="pt-12 sm:pb-4 w-full flex justify-center items-center flex-col bg-[#FFFAEA] mt-12">
                <span class="text-center font-lucky text-[24px] sm:text-[42px] sm:leading-12 leading-6">
                    <span class="text-[#FA534A]">Got kids?</span><br/>
                    Let your kids learn your <br/>
                    culture and language.
                </span>

                <span class="text-[#333] text-[14px] sm:text-[18px] text-center sm:mt-4 max-w-4xl">
                    Children learn languages faster - especially when it feels like play. 
                    TalkSharp Kids uses games, songs, and culture quizzes to teach Twi, Igbo, 
                    Yoruba, and Hausa with a guide who cheers every win.
                </span>
                <AppButton class="px-12 my-8"
                     @click="$router.push('/kids')"
                >
                    Meet TalkSharp Kids
                </AppButton>
                <img
                    :src="KindsImg"
                    alt="kids image"
                    class="w-screen h-140 object-cover sm:mt-18"
                    
                />
            </section>

            <BottomSection>
                <span class="font-lucky text-[24px] sm:text-[55px] text-white text-center sm:leading-16 leading-6">
                    Your first<br class="sm:block hidden"/> hello is free.
                </span>
                <span class="text-white text-[14px] sm:text-[20px] text-center mb-12">
                    Pick your language, say your first hello, and watch<br class="sm:block hidden"/> what it does to someone's face.
                </span>
                
                <div class="-mt-8 sm:mt-0 flex w-full z-9999">
                <AppStoreButtons />
                </div>
            </BottomSection>
        </div>
    </PageLayout>
</template>

<style scoped>
:deep(.swiper) {
  padding-bottom: 40px;
}

:deep(.swiper-pagination) {
  bottom: 80px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #FA534A;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 24px;
  border-radius: 9999px;
  background: #FA534A;
  opacity: 1;
}
</style>