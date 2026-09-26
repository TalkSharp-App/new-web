<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

import AppleLogo from "@/assets/AppleLogo.svg";
import GooglePlayLogo from "@/assets/GooglePlayLogo.svg";

interface AppStoreButtonsProps {
  variant?: "green" | "white";
  appStoreUrl?: string;
  googlePlayUrl?: string;
}

const props = withDefaults(defineProps<AppStoreButtonsProps>(), {
  variant: "green",
  appStoreUrl: "https://apps.apple.com",
  googlePlayUrl: "https://play.google.com/store",
});

const variantClasses = computed(() => {
  if (props.variant === "white") {
    return "bg-white border-b-[#E5E5E5] text-app-green border border-app-green/20";
  }
  return "bg-app-green border-b-[#0d4c18] text-white";
});
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
    <Primitive
      as="a"
      :href="appStoreUrl"
      target="_blank"
      rel="noopener noreferrer"
      :class="[
        'flex items-center justify-center gap-3 h-15.25 px-6 rounded-[20px] border-b-4 font-medium transition-opacity hover:opacity-95 active:scale-95 cursor-pointer',
        variantClasses
      ]"
      aria-label="Download on the App Store"
    >
      <img
        :src="AppleLogo"
        alt="Apple logo"
        class="w-6 h-6 shrink-0 object-contain"
      />

      <div class="flex flex-col text-left leading-tight">
        <span class="text-[10px] tracking-wider font-semibold opacity-90">
          Download on the
        </span>
        <span class="text-base font-bold font-sans">
          App Store
        </span>
      </div>
    </Primitive>

    <Primitive
      as="a"
      :href="googlePlayUrl"
      target="_blank"
      rel="noopener noreferrer"
      :class="[
        'flex items-center justify-center gap-3 h-15.25 px-6 rounded-[20px] border-b-4 font-medium transition-opacity hover:opacity-95 active:scale-95 cursor-pointer',
        variantClasses
      ]"
      aria-label="Get it on Google Play"
    >
      <img
        :src="GooglePlayLogo"
        alt="Google Play logo"
        class="w-6 h-6 shrink-0 object-contain"
      />

      <div class="flex flex-col text-left leading-tight">
        <span class="text-[10px] uppercase tracking-wider font-semibold opacity-90">
          GET IT ON
        </span>
        <span class="text-base font-bold font-sans">
          Google Play
        </span>
      </div>
    </Primitive>
  </div>
</template>
