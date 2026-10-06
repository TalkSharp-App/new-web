<script lang="ts" setup>
import CloudImg from '@/assets/cloud.png';
import { computed, ref } from "vue";

const billedYearly = ref(true);

const price = computed(() => {
  return billedYearly.value ? "£79.99" : "£7.99";
});

const billingPeriod = computed(() => {
  return billedYearly.value ? "/year" : "/month";
});

const checkout = () => {
    const plan = billedYearly.value ? "yearly" : "monthly";

    document.cookie = `
        plan=${plan}; 
        domain=.talksharp.co;
        path=/; Secure; 
        SameSite=Lax`;
    // window.location.href = `https://app.talksharp.co/checkout-start?plan=${plan}`;
    window.location.href = `http://localhost:3000/checkout-start?plan=${plan}`
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

</script>
<template>
    <div class="bg-app-green w-full h-84 relative">

        <img
            v-for="img in ImageLang"
            :key="img.id"
            :src="img.image"
            alt="language"
            aria-hidden="true"
            :class="[img.class, 'z-1']"
        />

        <div class="relative flex justify-center items-end z-10">
            <!-- card and header text goes here -->
        </div>
    </div>
    <div>
          <section class="w-full bg-white py-20 px-6">
            <div class="max-w-5xl mx-auto">
            <!-- Heading -->
            <h2
                class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
                Simple, Transparent Pricing
            </h2>

            <!-- Pricing Cards -->
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                <!-- FREE -->
                <div
                class="relative rounded-3xl border border-gray-200 bg-white p-8 flex flex-col"
                >
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Free
                </h3>

                <div class="mb-2">
                    <span class="text-4xl font-bold text-gray-900">
                    £0
                    </span>
                </div>

                <p class="text-gray-500 mb-8">
                    Perfect to get started
                </p>

                <ul class="space-y-4 text-gray-700 mb-10">
                    <li class="flex items-center gap-3">
                    <span class="text-green-600">✓</span>
                    Start basic conversations
                    </li>

                    <li class="flex items-center gap-3">
                    <span class="text-green-600">✓</span>
                    Beginner lessons & modules
                    </li>

                    <li class="flex items-center gap-3">
                    <span class="text-green-600">✓</span>
                    Limited practice
                    </li>
                    
                </ul>

                <button
                    class="mt-auto w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
                >
                    Start Learning
                </button>
                </div>

                <!-- PREMIUM -->
                <div
                class="relative rounded-3xl border-2 border-green-500 bg-white p-8 flex flex-col shadow-lg"
                >

                <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Premium
                </h3>

                <!-- Price -->
                <div class="mb-6">
                    <span class="text-4xl font-bold text-gray-900">
                    {{ price }}
                    </span>

                    <span class="text-gray-500">
                    {{ billingPeriod }}
                    </span>
                </div>

                <!-- Billing Toggle -->
                <div
                    class="flex items-center justify-between border-y border-gray-200 py-5 mb-6"
                >
                    <span class="font-medium text-gray-700">
                    Billed Yearly
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

                <p class="text-gray-500 mb-6">
                    Unlock the full experience
                </p>

                <!-- Discount -->
                <div
                    v-if="billedYearly"
                    class="mb-5 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                >
                    Save £15.89 with yearly billing
                </div>

                <!-- Features -->
                <ul class="space-y-4 text-gray-700 mb-10">
                    <li class="flex gap-3">
                    <span class="text-green-600">✓</span>
                    Real-life conversation scenarios
                    </li>

                    <li class="flex gap-3">
                    <span class="text-green-600">✓</span>
                    Full lesson access
                    </li>

                    <li class="flex gap-3">
                    <span class="text-green-600">✓</span>
                    Sauti AI for learning. Get real time feedback on your pronunciation.
                    </li>

                    <li class="flex gap-3">
                    <span class="text-green-600">✓</span>
                    Progress tracking & streaks
                    </li>

                    <li class="flex gap-3">
                    <span class="text-green-600">✓</span>
                    Up to 2 child profiles included
                    </li>
                </ul>

                <button
                    @click="checkout"
                    class="mt-auto w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
                >
                    Unlock Full Access
                </button>
                </div>

            </div>
            </div>
        </section>
    </div>
</template>