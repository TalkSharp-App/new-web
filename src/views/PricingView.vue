<script lang="ts" setup>
import CloudImg from '@/assets/cloud.png';
import SealCheck from '@/assets/SealCheck.png';
import AppStoreButtons from '@/components/AppStoreButtons.vue';
import BottomSection from '@/components/BottomSection.vue';
import AppButton from '@/components/AppButton.vue';
import { computed, ref } from "vue";

const billedYearly = ref(false);

const price = computed(() => {
  return billedYearly.value ? "£79.99" : "£7.99";
});

const billingPeriod = computed(() => {
  return billedYearly.value ? "/ yearly" : "/ monthly";
});

// const priceFamily = computed(() => {
//   return billedYearly.value ? "£119.99" : "£11.99";
// });

const goToDemo = () => {
  window.location.href = "https://app.talksharp.co";
};

const checkout = (type: "family" | "premium") => {
    const plan = billedYearly.value ? `yearly` : `monthly`;

    // document.cookie = `
    //     plan=${plan}; 
    //     domain=.talksharp.co;
    //     path=/; Secure; 
    //     SameSite=Lax`;
    // window.location.href = `https://app.talksharp.co/checkout-start?plan=${plan}&type=${type}`;
    // window.location.href = `http://localhost:3000/checkout-start?plan=${plan}`
    const url = new URL("https://app.talksharp.co/checkout-start");

    url.searchParams.set("plan", plan);
    url.searchParams.set("type", type);

    window.location.href = url.toString();
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

const freeOffering = [
    "Start basic conversations",
    "Beginner lessons & module",
    "Limited practice"
]

const premiumOffering = [
    "Full lesson and module access",
    "Sauti AI for learning. Get real time feedback on your pronunciation.",
    "Progress tracking & streaks",
    "Real-life conversation scenarios"
]

const familyOffering = [
    "Everything in Premium",
    "Up to 2 child learning profiles",
    "Fun, age-appropriate lessons for kids",
    "Individual progress tracking for each child",
    "A shared journey to reconnect with your heritage"
]

type PlanType = {
    id: number;
    price: string;
    title: string;
    description: string;
    offering: string[];
    trigger: ()=>void;
    buttonTitle: string;
    save?: string;
}

const plans = computed<PlanType[]>(() => [
    {
        id: 1,
        price: "£0",
        title: "Free Plan",
        description: `Start your language journey with essential lessons 
        and explore TalkSharp at your own pace.`,
        offering: freeOffering,
        trigger: ()=>goToDemo(),
        buttonTitle: "Start Learning"
    },
    {
        id: 2,
        price: `${price.value} ${ billingPeriod.value }`,
        title: "Premium Plan",
        description: `Take your language learning further with full lesson
      access, personalized progress tracking, and Sauti AI guidance.`,
        offering: premiumOffering,
        trigger: ()=>checkout("premium"),
        buttonTitle: "Get Started",
        save: "£10.89"
    },
    {
        id: 3,
        price: "Coming Soon",//`${priceFamily.value} ${ billingPeriod.value }`,
        title: "Family Plan",
        description: `Bring language learning home with full Premium access
      for you and a fun, engaging learning experience for up to two children.`,
        offering: familyOffering,
        trigger: ()=>checkout("family"),
        buttonTitle: "Coming Soon...",
        save: "£15.89"
    }
]);

</script>
<template>
    <div class="bg-app-green w-full relative h-160 lg:mb-50 sm:mb-210 mb-210">
        <img
            v-for="img in ImageLang"
            :key="img.id"
            :src="img.image"
            alt="language"
            aria-hidden="true"
            :class="[img.class, 'z-1']"
        />

        <div class="pt-10 md:pt-16 px-6 relative flex flex-col justify-center z-10 w-full ">
            <h1 class="text-[32px] sm:text-5xl md:text-6xl text-white text-center font-lucky m-0 leading-8 sm:leading-12 md:leading-14">
                CHOOSe THe PAth THat FIts<br />
                <span class="text-app-yellow">YOU</span> 
                OR YOUR 
                <span class="text-app-yellow">FAmily</span>.
            </h1>
            
        </div>

        <div class="flex items-center justify-center gap-3 mt-20">
            <span
                class="transition-colors duration-200"
                :class="!billedYearly ? 'text-app-yellow font-semibold' : 'text-white/75 font-medium'"
            >
                Monthly
            </span>

            <button
                type="button"
                role="switch"
                :aria-checked="billedYearly"
                aria-label="Yearly billing"
                @click="billedYearly = !billedYearly"
                class="relative w-12 h-7 rounded-full transition-colors cursor-pointer"
                :class="billedYearly ? 'bg-green-500' : 'bg-gray-300'"
            >
                <span
                class="absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform"
                :class="billedYearly ? 'translate-x-5' : ''"
                />
            </button>

            <span
                class="transition-colors duration-200"
                :class="billedYearly ? 'text-app-yellow font-semibold' : 'text-white/75 font-medium'"
            >
                Yearly
            </span>

            <span class="text-xs text-green-700 bg-green-50 rounded-full px-3 py-1">
                Save up to 17%
            </span>
        </div>
        <div class="sm:mx-10 mx-5 absolute top-65 sm:top-60 md:top-85 lg:top-75 grid grid-row-3 lg:grid-cols-3 items-center justify-center gap-2">
            <div 
                v-for="plan in plans"
                :key="plan.id"
                :class="[
                    `p-6 w-full rounded-[34.52px] 
                    border-[2.87px] h-auto `,
                    plan.id === 2 ? 'bg-app-yellow ' : 'bg-white'
                ]"
                
            >
                <div class="w-full flex flex-col">
                    <p class="text-xl sm:text-2xl font-lucky">
                        {{ plan.price }}
                    </p>
                    <hr class="mt-6 text-slate-200"/>
                    <p class="font-bold text-xl sm:text-2xl mt-4 mb-2">
                        {{ plan.title }}
                    </p>
                    <p class="text-[12px] text-grey mb-4">
                        {{ plan.description }}
                    </p>
                </div>
                <div class="flex flex-col gap-2"> 
                    <div
                        class="flex gap-2"
                        v-for="value in plan.offering"
                        :key="value"
                    >
                        <img
                            :src="SealCheck"
                            alt="seal check"
                            class="w-4 h-4 sm:mt-1"
                            
                        /> 
                        <p class="text-[12px] sm:text-[14px] font-semibold">
                            {{ value }}
                        </p>   
                    </div> 
                </div>
                <AppButton 
                    v-if="plan.id !== 3"
                    class="mt-6 w-full"
                    @click="plan.trigger"
                    :variant="plan.id === 3 ? 'disabled' : 'primary'"
                >
                    {{ plan.buttonTitle }}
                </AppButton> 
            </div>
        </div>
    </div>

    <BottomSection>
        <span class="font-lucky text-[24px] sm:text-[55px] text-white text-center sm:leading-16 leading-6">
            Your first<br class="sm:block hidden"/> hello is free.
        </span>
        <span class="text-white text-[14px] sm:text-[20px] text-center mb-10">
            Pick your language, say your first hello, and watch<br class="sm:block hidden"/> what it does to someone's face.
        </span>
        
        <div class="flex justify-center w-full z-10 mb-4">
            <AppStoreButtons />
        </div>
    </BottomSection>
</template>