<script lang="ts" setup>
import CloudImg from '@/assets/cloud.png';
import CEO from '@/assets/ceo.jpeg';
import { MoveRight } from 'lucide-vue-next';
import Principle from '@/assets/principle.png';
import Star from '@/assets/Star.svg';
import Sig from '@/assets/Sig.svg';
import LinkedIn from '@/assets/LinkedInLogo.svg';
import Letter from '@/assets/Letter.png';
import AppButton from '@/components/AppButton.vue';

const goToDemo = () => {
  window.location.href = "https://app.talksharp.co/guest";
};

const ImageLang = [
  {
    id: 1,
    class: "absolute top-5 right-1 sm:right-22 w-24 sm:w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
  {
    id: 2,
    class: "absolute top-30 sm:bottom-12 left-3 sm:left-20 w-24 sm:w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
]

const mission = [
  {
    smallText: "FOR ADULT",
    title1: "EvEryday language.",
    title2: "Meaningful connection.",
    content: "Build confidence for family conversations through culturally grounded practice.",
    link: "/",
    linkText: "Explore adult learning",
    bgColor: "bg-[#E9FFF3]"
  },
  {
    smallText: "FOR KIDS",
    title1: "Little lEarners.",
    title2: "Lasting roots.",
    content: "Discover language through stories, rhythm, and play with family along for the journey.",
    link: "/kids",
    linkText: "Explore kid's learning",
    bgColor: "bg-[#FFF5CC]"
  }
]

const principles = [
    {
        title: "Culture Over Mechanics",
        content: "No grammar drills. Learn through proverbs, idioms, values, and real cultural context that makes sense on the dining table."
    },
    {
        title: "AI Guided, Culturally Tuned",
        content: "Sauti listens as you speak and gives you real time feedback on pronunciation and tone, helping you sound more natural and confident."
    },
    {
        title: "Preservation for All Generations",
        content: "From toddlers discovering Swahili to adults reclaiming Hausa - we bridge ancestral heritage across global borders."
    }
]

const team = [
    {
        name: "Kola",
        role: "CEO/CO-FOUNDER",
        linkedIn: "https://www.linkedin.com/in/kola-oreoluwa"
    },
    {
        name: "Ayo",
        role: "CTO/LEAD ENGINEER",
        linkedIn: "https://www.linkedin.com/in/ayobamiajibola"
    },
    {
        name: "Sophie",
        role: "HEAD OF COMMUNITY & PARTNERSHIP",
        linkedIn: "https://www.linkedin.com/in/sophie-abache"
    },
    {
        name: "David",
        role: "PRODUCT DESIGN",
        linkedIn: "https://www.linkedin.com/in/davidaustin9"
    },
    {
        name: "Betty",
        role: "SOFTWARE DEVELOPER",
        linkedIn: "https://www.linkedin.com/in/elizabethafolabib"
    },
    {
        name: "Emma",
        role: "SOFTWARE DEVELOPER",
        linkedIn: ""
    }
]

</script>
<template>
    <div class="bg-app-green w-full h-120 relative">
        <img
            v-for="img in ImageLang"
            :key="img.id"
            :src="img.image"
            alt="language"
            aria-hidden="true"
            :class="[img.class, 'z-1']"
        />

        <div class="relative flex justify-center items-center z-10 flex-col pt-12">
            <span class="font-lucky sm:text-[40px] md:text-[64px] text-[32px] text-white -mb-6">
                our goal is to preserve
            </span>
            <span class="font-lucky sm:text-[40px] md:text-[64px] text-[32px] text-app-yellow">
                africa heritage
            </span>

            <div class="mt-20 bg-white sm:w-[90%] md:w-[80%] sm:h-140 
                rounded-[34.519px] border-[2.866px] 
                border-solid border-[#F0F0F0]
                flex justify-between items-center sm:flex-row flex-col
                "
            >
                <div class="w-full sm:w-[40%] h-full flex flex-col justify-start items-start">
                    <div class="bg-black rounded-tr-[34.519px] sm:rounded-tr-none rounded-tl-[34.519px] p-6 flex items-center w-full">
                        <span class="sm:text-[24] md:text-[32px] text-white font-lucky">
                            TalkSharp Story
                        </span>
                    </div>

                    <div class="w-full sm:h-70 md:h-80 px-4 mt-6 flex justify-center">
                        <img
                            :src="CEO"
                            alt="talksharp ceo"
                            class="h-full sm:w-full md:w-[80%] object-fill rounded-2xl"
                        />
                    </div>
                    <div class="flex flex-col justify-center items-center w-full mt-2">
                        <span class="font-lucky text-[24px]">KOLA</span>
                        <span class="text-grey text-[18px]">CEO/CO-FOUNDER</span>
                    </div>
                </div>

                <div class="flex-1 h-auto w-full px-4 my-4 sm:border-none border-t border-solid border-t-slate-200 py-4">
                    
                </div>
            </div>
        </div>
    </div>

    <div class="mt-80 sm:mt-110 flex justify-center items-center flex-col">
        <span class="text-[32px] sm:text-[40px] text-center md:text-[56px] font-lucky">
            ONe mission. Two ways to lEarn.
        </span>
        <div class="grid grid-row-2 sm:grid-cols-2 gap-6 px-4 md:px-20 sm:px-10">
            <div
                v-for="item in mission"
                :key="item.smallText"
                :class="[
                    'flex-1 p-6 md:p-10 rounded-[28px] flex-col flex',
                    item.bgColor
                ]"
            >
                <span class="text-[14px]">
                    {{ item.smallText }}
                </span>
                <span class="text-[24px] md:text-[34px] font-lucky mt-4">
                    {{ item.title1 }}
                </span>
                <span class="text-[24px] md:text-[34px] font-lucky -mt-3">
                    {{ item.title1 }}
                </span>
                <span class="sm:text-[14px] md:text-[18px] text-grey leading-5">
                    {{ item.content }}
                </span>
                <a class="flex gap-2 items-center mt-4"
                    :href="item.link"
                >
                    <span
                        class="text-app-green font-semibold cursor-pointer text-[14px] sm:text-[12px] md:text-[14px]"
                    >{{ item.linkText }}</span> 
                    <MoveRight class="text-app-green mt-1"/>
                </a>
            </div>
        </div>
    </div>

    <div class="mt-20 flex justify-center items-center flex-col">
        <span class="text-[32px] sm:text-[40px] text-center md:text-[56px] font-lucky">
            Our Core Principles
        </span>
        <div class="px-10 sm:px-20 flex justify-between items-center gap-12 md:flex-row flex-col ">
            <div class="w-full sm:w-[80%] h-full">
                <img
                    :src="Principle"
                    alt="principle"
                    class="w-full h-full object-fill"
                />
            </div>

            <div class="flex justify-center items-center flex-col gap-6">
                <div
                    v-for="value, index in principles"
                    :key="index"
                    class="flex gap-6"
                >
                    <img
                        :src="Star"
                        alt="start bullet"
                        class="sm:w-12.5 sm:h-12.5 mt-4 w-8 h-8"
                    />
                    <div class="flex flex-col">
                        <span class="text-[18px] sm:text-[24px] font-lucky">
                            {{ value.title }}
                        </span>
                        <span class="text-grey text-[14px] sm:text-[16px]">
                            {{ value.content }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-start items-start flex-1 w-full">
        <img
            :src="Sig"
            alt="signature"
            class="md:h-42 md:w-42 h-32 w-32"
        />
    </div>

    <div class="-mt-10 sm:-mt-20 flex justify-center items-center flex-col">
        <span class="text-[32px] sm:text-[40px] text-center md:text-[56px] font-lucky">
            The team
        </span>
        <div class="p-2 sm:px-20 flex justify-between items-center gap-12">
            <div class="w-[45%] h-full md:block hidden">
                <img
                    :src="Principle"
                    alt="principle"
                    class="w-full h-full object-fill"
                />
            </div>

            <div class="flex flex-1 flex-col gap-4 border-t border-r border-l border-solid border-[#D6D6D6]">
                <div
                    v-for="item, index in team"
                    :key="index"
                    :class="[`w-full p-4 flex justify-between 
                                items-center 
                                border-solid`,
                                index === 0 ? 'border-black border' : 'border-b border-b-[#D6D6D6]'
                            ]"
                >
                    <span class="text-[18px] sm:text-[24px] font-lucky mt-2">
                        {{ item.name }}
                    </span>
                    <span :class="['text-center text-[14px] sm:text-[18px]', index === 0 && 'font-semibold']">
                        {{ item.role }}
                    </span>
                    <a 
                        :href="item.linkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="cursor-pointer"
                    >
                        <img
                            :src="LinkedIn"
                            alt="linkedin logo"
                            class="w-8 h-8"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-20 mb-16 flex justify-center items-center flex-col">
        <span class="text-[32px] sm:text-[40px] md:text-[56px] font-lucky text-center leading-10 sm:leading-12 md:leading-16">
            A transparent<br/> statement of intent.
        </span>
        <img
            :src="Letter"
            alt="TalkSharp letter"
            class="md:h-240 md:w-200 object-fill sm:h-160 sm:w-120"
        />

        <AppButton class="font-semibold px-12"
            @click="goToDemo"
        >
            Quick Demo
        </AppButton>
    </div>
</template>