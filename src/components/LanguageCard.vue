<script setup lang="ts">
import { ref } from "vue";
import { Volume2, ChevronLeft, ChevronRight } from "lucide-vue-next";

type Phrase = {
  language: string;
  phrase: string;
  translation: string;
  color: string;
};

const phrases = [
  {
    language: "Igbo",
    phrase: "Kedu!",
    translation: "Hello",
    color: "bg-app-yellow",
  },
  {
    language: "Yoruba",
    phrase: "Ndewo!",
    translation: "Greetings",
    color: "bg-app-green text-white",
  },
  {
    language: "Twi",
    phrase: "Daalu!",
    translation: "Thank you",
    color: "bg-red-300",
  },
  {
    language: "Pidgin",
    phrase: "Daalu!",
    translation: "Thank you",
    color: "bg-purple-300",
  },
] as Phrase[];

const activeIndex = ref(0);
const activeTab = ref("greeting_elders");

const handleSwitchTab = (item: string) => {
  activeTab.value = item
}

const next = () => {
  activeIndex.value =
    (activeIndex.value + 1) % phrases.length;
};

const previous = () => {
  activeIndex.value =
    (activeIndex.value - 1 + phrases.length) % phrases.length;
};

const getCardPosition = (index: number) => {
  const total = phrases.length;

  const position =
    (index - activeIndex.value + total) % total;

  if (position === 0) {
    return `
      z-30
      translate-x-0
      translate-y-0
      rotate-0
      scale-100
      opacity-100
    `;
  }

  if (position === 1) {
    return `
      z-20
      translate-x-6
      translate-y-2
      rotate-12
      scale-95
      opacity-90
    `;
  }

  if (position === 2) {
    return `
      z-10
      -translate-x-6
      translate-y-3
      -rotate-12
      scale-90
      opacity-90
    `;
  }

  return `
    z-0
    scale-90
    pointer-events-none
    opacity-0
  `;
};

const playAudio = (phrase: Phrase) => {
  // Play your audio here
  console.log(phrase)
};
</script>

<template>
  <div class="w-full">
    <div class="mb-8 flex justify-center gap-3">
      <button
        @click="handleSwitchTab('greeting_elders')"
        :class="[
          'rounded-full px-4 py-2 text-sm',
          activeTab === 'greeting_elders' 
            ? 'bg-app-green text-white' 
            : 'border border-gray-300'
        ]"
      >
        Greeting Elders
      </button>

      <button
        @click="handleSwitchTab('market')"
        :class="[
          'rounded-full px-4 py-2 text-sm',
          activeTab === 'market' 
            ? 'bg-app-green text-white' 
            : 'border border-gray-300'
        ]"
      >
        At the Market
      </button>

      <button
        @click="handleSwitchTab('friends')"
        :class="[
          'rounded-full px-4 py-2 text-sm',
          activeTab === 'friends' 
            ? 'bg-app-green text-white' 
            : 'border border-gray-300'
        ]"
      >
        With Friends
      </button>

      <button
        @click="handleSwitchTab('traveling')"
        :class="[
          'rounded-full px-4 py-2 text-sm',
          activeTab === 'traveling' 
            ? 'bg-app-green text-white' 
            : 'border border-gray-300'
        ]"
      >
        Traveling
      </button>
    </div>

    <div
      class="relative mx-auto flex h-80 max-w-4xl items-center justify-center"
    >
      <button
        type="button"
        class="
          absolute left-4 z-20
          flex h-12 w-12 items-center justify-center
          rounded-full border-4 border-black
          bg-app-yellow
        "
        @click="previous"
      >
        <ChevronLeft :size="20" />
      </button>
      
      <div class="relative h-57.5 w-[320px]">
        <div
          v-for="(phrase, index) in phrases"
          :key="phrase.phrase"
          :class="[
            `
              absolute inset-0
              flex h-57.5 w-[320px]
              flex-col items-center justify-center
              rounded-4xl
              px-8 text-center
              transition-all duration-500 ease-in-out
            `,
            phrase.color,
            getCardPosition(index),
          ]"
        >
          <div
            v-if="index !== activeIndex"
            class="
              absolute inset-0
              rounded-4xl
              bg-white/60
              backdrop-blur-md
            "
          />

          <div class="relative z-10">
            <span class="mb-5 text-[24px] font-light">
              {{ phrase.language }}
            </span>

            <h2 class="text-[55px] font-lucky font-black">
              {{ phrase.phrase }}
            </h2>

            <p class="mt-5 text-[16px]">
              Translation:
              <strong class="italic text-[24px]">
                “{{ phrase.translation }}”
              </strong>
            </p>

            <button
              v-if="index === activeIndex"
              type="button"
              :class="[`
                absolute -bottom-10 -right-16
                flex h-16 w-16 items-center justify-center
                rounded-full border-4 border-white
                bg-black text-white
                shadow-md`
                ]
              "
              @click="playAudio(phrase)"
            >
              <Volume2 :size="28" />
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="
          absolute right-4 z-20
          flex h-12 w-12 items-center justify-center
          rounded-full border-4 border-black
          bg-app-yellow
        "
        @click="next"
      >
        <ChevronRight :size="20" />
      </button>
    </div>
  </div>
</template>