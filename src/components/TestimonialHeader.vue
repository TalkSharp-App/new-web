<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  location?: string;
  avatarUrl?: string;
  bgColor?: string;
  textColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  location: '',
  avatarUrl: '',
  bgColor: 'bg-app-yellow',
  textColor: 'text-black',
});

// Extract first letter of name for the initial fallback badge
const initial = computed(() => {
  return props.name ? props.name.trim().charAt(0).toUpperCase() : '?';
});
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="shrink-0">
      <img
        v-if="avatarUrl"
        :src="avatarUrl"
        :alt="name"
        class="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/20"
      />

      <div
        v-else
        :class="[
          'w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-xs select-none',
          bgColor,
          textColor
        ]"
      >
        {{ initial }}
      </div>
    </div>

    <div class="flex flex-col text-left">
      <span class="font-bold text-sm sm:text-base leading-tight">
        {{ name }}
      </span>
      <span v-if="location" class="text-xs sm:text-sm text-[#6B7280]">
        {{ location }}
      </span>
    </div>
  </div>
</template>
