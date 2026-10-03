<script setup lang="ts">
import { computed, ref } from "vue";
import { Volume2, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { phraseCategories, type Phrase } from "@/constant/helper";

const activeIndex = ref(0);
const activeCategory = ref("greeting_elders");

const activePhrases = computed(() => {
  return (
    phraseCategories.find(
      (category) => category.id === activeCategory.value
    )?.phrases ?? []
  );
});

const next = () => {
  if (!activePhrases.value.length) return;

  activeIndex.value =
    (activeIndex.value + 1) % activePhrases.value.length;
};

const previous = () => {
  if (!activePhrases.value.length) return;

  activeIndex.value =
    (activeIndex.value - 1 + activePhrases.value.length) %
    activePhrases.value.length;
};

const getCardPosition = (index: number) => {
  const total = activePhrases.value.length;

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
        v-for="category in phraseCategories"
        :key="category.id"
        @click="activeCategory = category.id"
        :class="[
          'rounded-full border px-4 py-2',
          activeCategory === category.id
            ? 'bg-app-green text-white'
            : 'border border-gray-300'
        ]"
      >
        {{ category.label }}
      </button>
    </div>

    <div
      class="relative mx-auto flex min-h-80 max-w-4xl items-center justify-center"
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
      
      <div 
        :class="[
          'relative w-[320px]',
          activeCategory === 'traveling' ? 'h-67.5' : 'h-57.5'
        ]"
      >
        <div
          v-for="(phrase, index) in activePhrases"
          :key="phrase.id"
          :class="[
            `
              absolute inset-0
              flex w-[320px]
              flex-col items-center justify-center
              rounded-4xl
              px-8 text-center
              transition-all duration-500 ease-in-out
            `,
            activeCategory === 'traveling' ? 'h-70' : 'h-57.5',
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
            <span class="text-[24px] font-light">
              {{ phrase.language }}
            </span>

            <h2 class="text-[45px] font-lucky font-black leading-12 my-4">
              {{ phrase.phrase }}
            </h2>

            <p class="text-[16px]">
              Translation:
              <strong class="italic text-[18px]">
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