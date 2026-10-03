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

const modules = [Autoplay, Pagination];

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
                    <span class="font-lucky text-[42px]">
                        LEarN to SaY “HELLO”
                    </span>
                    <span class="text-grey text-[18px] mb-6">
                        Learn how to speak naturally in everyday moments.
                    </span>
                </div>

                <LanguageCard/>
            </section>

            <div class="flex justify-center items-center flex-col mt-4">
                <AppButton @click="handleGetStarted" class="px-12">
                    Get Started
                </AppButton>

                <span class="font-lucky text-[48px] md:text-[42px] mt-12 mb-4">
                    A hello is just the beginning.
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
                        class="relative flex h-140 w-full flex-col items-center justify-center p-8 text-center"
                    >
                        <img
                            :src="slide.image"
                            alt="slide image"
                            class="absolute h-full w-full"
                        />

                        <p class="absolute text-white bottom-20">
                            {{ slide.text }}
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <section class="max-w-5xl pt-12 pb-4 px-4 sm:px-6 w-full mx-auto flex justify-center items-center flex-col">
                <span class="font-lucky text-[42px] mt-12 mb-4">
                    WE MADE AFRICAN language learning EASY
                </span>
                <span class="text-grey text-[18px] mb-6 text-center!">
                    TalkSharp helps you learn through real conversations, 
                    culture, tone, and community and not just random words.
                </span>

                <div 
                    v-for="item, index in items"
                    :key="index"
                    :class="['mt-4 flex justify-between items-center gap-4 mb-12', item.invert ? 'flex-row-reverse' : 'flex-row']"
                >
                    <img
                        :src="item.image"
                        alt="african language learning"
                    />
                    <div class="flex justify-center flex-col">
                        <span class="font-lucky text-[32px]">
                            {{ item.title }}
                        </span>
                        <span class="font-grey text-[18px]">
                            {{ item.description }}
                        </span>
                    </div>
                </div>
            </section>

            <section class="pt-12 pb-4 px-4 sm:px-6 w-full flex justify-center items-center flex-col">
                <span class="font-lucky text-[42px] mt-12 mb-4">
                    PEOPLE’S LOVE
                </span>
                <span class="text-grey text-[18px] mb-6 text-center!">
                    From diaspora reconnecting with roots to kids surprising their grandparents.
                </span>
                <div 
                    class="flex flex-wrap gap-4"
                >
                    <div 
                        v-for="testimonial, index in testimonials"
                        :key="index"
                        :class="['flex flex-col w-full lg:flex-1 p-6 rounded-[28px]']"
                        :style="{ backgroundColor: testimonial.bg }"
                    >
                        <span class="text-[16px] leading-6 mb-4">
                            {{ testimonial.description }}
                        </span>
                        <div class="flex gap-2 items-center">
                            <div class="px-4 py-2 rounded-full bg-amber-600 flex justify-center items-center">
                                <span class="capitalize text-white font-bold text-[18px]">
                                    {{ testimonial.name.charAt(0) }}
                                </span>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-[15px]">
                                    {{ testimonial.name }}
                                </span>
                                <span class="font-light text-[13px] text-[#6B7280]">
                                    {{ testimonial.location }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-12 pb-4 w-full flex justify-center items-center flex-col bg-[#FFFAEA] mt-12">
                <span class="text-center font-lucky text-[42px] leading-12">
                    <span class="text-[#FA534A]">Got kids?</span><br/>
                    Let your kids learn your <br/>
                    culture and language.
                </span>

                <span class="text-[#333] text-[18px] text-center mt-4 max-w-4xl">
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
                    class="w-screen h-140 object-cover mt-18"
                    
                />
            </section>

            <BottomSection>
                <span class="font-lucky text-[55px] text-white text-center leading-16">
                    Your first<br/> hello is free.
                </span>
                <span class="text-white text-[20px] text-center mb-12">
                    Pick your language, say your first hello, and watch<br/> what it does to someone's face.
                </span>

                <AppStoreButtons />
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