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

const goToDemo = () => {
  window.location.href = "https://app.talksharp.co";
};

const checkout = () => {
    const plan = billedYearly.value ? "yearly" : "monthly";

    document.cookie = `
        plan=${plan}; 
        domain=.talksharp.co;
        path=/; Secure; 
        SameSite=Lax`;
    window.location.href = `https://app.talksharp.co/checkout-start?plan=${plan}`;
    // window.location.href = `http://localhost:3000/checkout-start?plan=${plan}`
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
    "Up to 2 child profiles included",
    "Real-life conversation scenarios"
]

type PlanType = {
    id: number;
    price: string;
    title: string;
    description: string;
    offering: string[];
    trigger: ()=>void;
    buttonTitle: string;
}

const plans = computed<PlanType[]>(() => [
    {
        id: 1,
        price: "£0",
        title: "Free",
        description: `Start your language journey with essential lessons 
        and explore TalkSharp at your own pace.`,
        offering: freeOffering,
        trigger: ()=>goToDemo(),
        buttonTitle: "Start Learning"
    },
    {
        id: 2,
        price: `${price.value} ${ billingPeriod.value }`,
        title: "Premium",
        description: `Unlock the complete TalkSharp experience 
        with full lesson access, Sauti AI, and learning profiles for your children.`,
        offering: premiumOffering,
        trigger: ()=>checkout(),
        buttonTitle: "Get Started"
    }
]);

</script>
<template>
    <div class="bg-app-green w-full relative h-160 lg:mb-80 md:mb-200 mb-170">
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
        <div class="sm:mx-10 mx-5 absolute top-40 sm:top-60 lg:mx-20 grid grid-row-2 lg:grid-cols-2 mt-4 items-center justify-center gap-8">
            <div 
                v-for="plan in plans"
                :key="plan.id"
                :class="[
                    `p-8 sm:p-12 w-full rounded-[34.52px] 
                    border-[2.87px] h-auto `,
                    plan.id === 1 ? 'bg-white ' : 'bg-app-yellow'
                ]"
                
            >
                <div class="w-full flex flex-col">
                    <p class="text-3xl sm:text-4xl font-lucky">
                        {{ plan.price }}
                    </p>
                    <div v-if="plan.id === 2"
                        class="flex items-center justify-between pt-5"
                    >
                        <span class="font-medium text-gray-700">
                            {{ billedYearly ? 'Billed Yearly' : 'Billed Monthly' }}
                        </span>

                        <button
                            type="button"
                            role="switch"
                            :aria-checked="billedYearly"
                            @click="billedYearly = !billedYearly"
                            class="relative h-7 w-12 rounded-full transition-colors"
                            :class="
                                billedYearly
                                ? 'bg-green-600'
                                : 'bg-gray-300'
                            "
                        >
                            <span
                                class="absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all"
                                :class="
                                billedYearly
                                    ? 'left-6'
                                    : 'left-1'
                                "
                            />
                        </button>
                    </div>
                    <div
                        v-if="billedYearly && plan.id === 2"
                        class="mt-5 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                    >
                        Save £15.89 with yearly billing
                    </div>
                    <p class="font-bold text-2xl sm:text-3xl mt-6 mb-2">
                        {{ plan.title }}
                    </p>
                    <p class="text-[14px] sm:text-[16px] text-grey mb-4">
                        {{ plan.description }}
                    </p>
                </div>
                <div class="flex flex-col gap-2"> 
                    <div
                        class="flex sm:gap-4 gap-2"
                        v-for="value in plan.offering"
                        :key="value"
                    >
                        <img
                            :src="SealCheck"
                            alt="seal check"
                            class="w-6 h-6"
                            
                        /> 
                        <p class="text-base sm:text-lg font-semibold">
                            {{ value }}
                        </p>   
                    </div> 
                </div>
                <AppButton class="mt-6 w-full"
                    @click="plan.trigger"
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