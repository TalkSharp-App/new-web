<script lang="ts" setup>
import PageLayout from '@/components/PageLayout.vue';
import AdultHero from './kids/AdultHero.vue';
import LanguageCard from '@/components/LanguageCard.vue';
import Couple from "@/assets/couple.png"
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
import BottomSection from '@/components/BottomSection.vue';
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { computed, ref } from 'vue';
import FrequentlyAsked from './kids/FrequentlyAsked.vue';
import { adultFaqs } from '@/constant/helper.ts';
import { db } from '@/config/firebase.ts';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { 
    SelectContent, SelectIcon, SelectItem, 
    SelectItemText, SelectPortal, SelectRoot, 
    SelectTrigger, SelectValue, 
    SelectViewport 
} from 'reka-ui';

const languages = [
    "Twi",
    "Swahili",
    "Hausa"
];

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

const handleTryFree = () => {
  window.location.href = "https://app.talksharp.co/guest";
};

const email = ref('');
const successMsg = ref('');
const selectedLanguage = ref('');
const customLanguage = ref("");
const errorMsg = ref('');
const isSubmitted = ref(false);
const isLoading = ref(false);
const isOpen = ref(false);

const finalLanguage = computed(() => {
  return selectedLanguage.value === "other"
    ? customLanguage.value.trim()
    : selectedLanguage.value;
});

let messageTimeout: ReturnType<typeof setTimeout> | null = null;
const showMessage = (message: string, type: "error" | "success") => {
  if (messageTimeout) clearTimeout(messageTimeout);

  errorMsg.value = "";
  successMsg.value = "";

  const target = type === "error" ? errorMsg : successMsg;
  target.value = message;

  messageTimeout = setTimeout(() => {
    target.value = "";
    messageTimeout = null;
  }, 4000);
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const handleSubmit = async () => {
    const normalizedEmail = email.value.trim().toLowerCase();

    errorMsg.value = "";

    if (!normalizedEmail) {
        showMessage("Please enter your email address.", "error");
        return;
    }

    if (!finalLanguage.value.trim()) {
        showMessage("Please select or enter a language.", "error");
        return;
    }

    if(!emailRegex.test(normalizedEmail)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    isLoading.value = true;

    try {
        const emailDocumentId = encodeURIComponent(normalizedEmail);
        const waitlistRef = doc(
            db,
            "community",
            emailDocumentId
        );

        await setDoc(waitlistRef, {
            email: normalizedEmail,
            language: finalLanguage.value.trim(),
            createdAt: serverTimestamp(),
        });

        isSubmitted.value = true;
        email.value = '';
        selectedLanguage.value = '';
        showMessage("Welcome to the community! We're glad you're here.", "success");
    } catch (error) {
        console.error("Waitlist subscription error:", error);
        showMessage( "Something went wrong. Please try again.", "error");
    } finally {
        isLoading.value = false;
    }
};

const slides = [
  {
    text: "Have a clear conversation with your partner without stammering.",
    image: Couple
  },
  {
    text: "Speak with your mother or father with confidence.",
    image: Parent
  },
  {
    text: "Price commodities with there language and win a lower price.",
    image: Convo
  }
]

const items = [
    {
        title: "Native speaker audio",
        description: "Every word, phrase and tone is recorded by native speakers. In tonal languages like Yoruba and Igbo, tone isn’t just an accent, it carries its own meaning.",
        invert: false,
        image: Frame1
    },
    {
        title: "Cultural context",
        description: `Words without context are just sounds. TalkSharp teaches 
        you what to say, who to say it to, and why it matters through proverbs, 
        traditions, and the stories your culture is 
        built on.`,
        invert: true,
        image: Frame2
    },
    {
        title: "Community",
        description: "Learn alongside family and friends. Track your progress, keep your streak, and find your way back to the language that was always yours.",
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
                <AppButton @click="handleTryFree" class="px-12">
                    Try a Free Lesson
                </AppButton>

                <span class="font-lucky text-[24px] sm:text-[48px] md:text-[42px] mt-20 mb-4 text-center leading-6">
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
                <span class="font-lucky text-[24px] sm:text-[42px] sm:mt-12 sm:mb-4 text-center sm:leading-12 leading-6">
                    Learn the way your language <br class="sm:block hidden"/>
                    is really spoken
                </span>
                <span class="text-grey text-[14px] sm:text-[18px] sm:mb-6 text-center!">
                    TalkSharp walks you through this journey with real conversations, cultural context, 
                    total feedback, and a growing community.
                </span>

                <div
                    v-for="item, index in items"
                    :key="index"
                    :class="['mt-4 flex justify-between items-center gap-4 mb-12', item.invert ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row']"
                >
                    <img
                        :src="item.image"
                        alt="african language learning"
                        class="md:h-140 md:w-120 object-fill h-100 w-80"
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
                     Stories from our learners
                </span>
                <span class="text-grey sm:text-[18px] mb-6 text-center! text-[14px]">
                    From adults reconnecting with their roots to children surprising their grandparents.
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
                <div class="relative sm:block hidden w-full">
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
                    <span class="text-secondary">Got kids?</span><br/>
                    Let your kids learn your <br/>
                    culture and language.
                </span>

                <span class="text-[#333] text-[14px] sm:text-[18px] text-center sm:mt-4 max-w-4xl px-4">
                    Children learn languages faster" is a contested claim, and parents will look for safety signals.
                    TalkSharp Kids (ages 5-12) teaches Yoruba through songs, games, and culture quizzes, 
                    with a friendly guide who celebrates every win. 
                    Igbo, Twi and Hausa are coming soon.
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

            <FrequentlyAsked :faq="adultFaqs"/>

            <BottomSection>
                <h2 class="font-lucky text-[28px] sm:text-[40px] text-white text-center sm:leading-12 leading-tight mb-4">
                    Learn. Speak it. Pass it on. <br class="hidden sm:block" /> Supporting line
                </h2>
                <p class="text-white/90 text-[14px] sm:text-[20px] text-center max-w-xl mx-auto mb-8 sm:mb-10 leading-6">
                    Join the TalkSharp community for early access, <br class="hidden sm:block" /> 
                    free phrases and stories from the diaspora. <br class="hidden sm:block" /> 
                    Starting with Yoruba and Igbo, with more on the way.
                </p>
                <div class="p-6 gap-4 rounded-2xl flex flex-col justify-center w-full z-10 bg-white md:max-w-lg">
                    <div>
                        <label for="waitlist-email" class="block text-xs font-semibold text-gray-700 mb-1 text-left">
                            Email Address
                        </label>
                        <input
                            id="waitlist-email"
                            v-model="email"
                            type="email"
                            required
                            placeholder="name@example.com"
                            class="w-full rounded-xl border border-gray-300 p-3.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        />
                    </div>
                    
                    <div class="space-y-3">
                        <SelectRoot
                            v-model="selectedLanguage"
                            v-model:open="isOpen"
                        >
                            <SelectTrigger
                                style="border: 1px solid #EBEBF0; padding: 12px; width: 100%; background: white; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;"
                            >
                                <SelectValue placeholder="Select a language" />

                                <SelectIcon>
                                    <ChevronDown :size="16" />
                                </SelectIcon>
                            </SelectTrigger>

                            <SelectPortal>
                                <SelectContent
                                    position="popper"
                                    side="bottom"
                                    :side-offset="4"
                                    class="z-9999 w-(--reka-select-trigger-width) rounded-xl border border-[#EBEBF0] bg-white shadow-lg"
                                >
                                    <SelectViewport class="w-full p-1">
                                    <SelectItem
                                        v-for="language in languages"
                                        :key="language"
                                        :value="language"
                                        class="w-full cursor-pointer rounded-lg px-4 py-2 outline-none data-highlighted:bg-neutral-100"
                                    >
                                        <SelectItemText>{{ language }}</SelectItemText>
                                    </SelectItem>

                                    <SelectItem
                                        value="other"
                                        class="w-full cursor-pointer rounded-lg px-4 py-2 outline-none data-highlighted:bg-neutral-100"
                                    >
                                        <SelectItemText>Other (Specify)</SelectItemText>
                                    </SelectItem>
                                    </SelectViewport>
                                </SelectContent>
                            </SelectPortal>
                        </SelectRoot>

                        <input
                            v-if="selectedLanguage === 'other'"
                            v-model="customLanguage"
                            type="text"
                            placeholder="Enter your language"
                            style="border: 1px solid #EBEBF0; padding: 12px; width: 100%; border-radius: 12px;"
                        />
                    </div>

                    <AppButton
                        class="w-full py-2"
                        variant="secondary"
                        @click="handleSubmit"
                    >
                        <span class="text-black">{{ isLoading ? 'Loading...' : 'Submit' }}</span>
                    </AppButton>
                    <div class="flex justify-center items-center">
                        <span
                            :class="[
                                'text-center text-xs font-light mt-2',
                                errorMsg && 'text-red-700',
                                successMsg && 'text-app-green'
                            ]"
                        >{{ errorMsg || successMsg }}</span>
                    </div>
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
