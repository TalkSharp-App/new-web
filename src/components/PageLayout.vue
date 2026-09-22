<script lang="ts" setup>
interface PageLayoutType {
    showHero?: boolean;
    heroHeight?: string; 
    heroWidth?: string; 
    heroBg?: string;
}

withDefaults(
  defineProps<PageLayoutType>(),{
    showHero: true,
    heroHeight: "h-screen", 
    heroWidth: "w-screen",
    heroBg: "bg-[#FFF6D6]"
});
</script>

<template>
    <main class="flex flex-col bg-[#FCFFFC]">
        <div 
            :class="['relative overflow-hidden', heroHeight, heroWidth]"
            v-if="showHero">
            <div :class="['absolute inset-0', heroBg]"></div>

            <div class="absolute inset-0 flex items-center justify-center">
                <slot name="hero" />
            </div>
        </div>

        <slot />
    </main>
    
</template>