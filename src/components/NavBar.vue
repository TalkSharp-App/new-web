<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Menu, X } from "lucide-vue-next";
import Logo from "@/assets/logo-white.svg";
import AppButton from './AppButton.vue';
import { Links } from '@/constant/helper';
import { watch } from 'vue';
import { onUnmounted } from 'vue';

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

const closeMenu = () => {
  open.value = false;
};

const goToDemo = () => {
  window.location.href = "https://app.talksharp.co/guest";
};

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <header class="w-full pt-6 pb-4 flex flex-col items-center px-4 sm:px-8 bg-app-green">
    <div class="flex items-center justify-between w-full max-w-7xl">
      <RouterLink to="/" class="shrink-0" @click="closeMenu">
        <img
          :src="Logo"
          alt="TalkSharp Logo"
          class="h-12 w-auto object-contain"
        />
      </RouterLink>

      <nav class="flex items-center ml-12 h-12 md:h-16 rounded-full bg-white/10 md:bg-white border border-white px-2 md:px-6 backdrop-blur-xs">
        <ul class="hidden md:flex items-center gap-6 lg:gap-8">
          <li v-for="link in Links" :key="link.to">
            <RouterLink
              :to="link.to"
              custom
              v-slot="{ isActive, navigate, href }"
            >
              <a
                :href="href"
                @click="navigate"
                :class="[
                  'text-base lg:text-lg font-medium transition-colors hover:text-app-green',
                  isActive ? 'text-app-green font-semibold' : 'text-[#080808]'
                ]"
              >
                {{ link.label }}
              </a>
            </RouterLink>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          class="text-black p-1 md:hidden focus:outline-none cursor-pointer"
          @click="toggleMenu"
        >
          <X v-if="open" class="h-6 w-6" color="white"/>
          <Menu v-else class="h-6 w-6" color="white"/>
        </button>
      </nav>

      <div class="hidden md:block shrink-0">
        <AppButton
          textColor="text-black"
          class="w-auto text-sm md:text-base px-5 py-2.5 cursor-pointer font-semibold"
          variant="secondary"
          @click="goToDemo"
        >
          Quick Demo
        </AppButton>
      </div>
    </div>

    <!-- <div
      class="w-full max-w-md overflow-hidden transition-all duration-300 ease-in-out md:hidden"
      :class="open ? 'bg-app-green h-screen opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0 pointer-events-none'"
    > -->
    <div
      class="pt-12 px-5 fixed inset-x-0 top-20 z-50 w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden"
      :class="
        open
          ? 'bg-app-green h-[calc(100dvh-80px)] opacity-100'
          : 'h-0 opacity-0 pointer-events-none'
      "
    >
      <ul class="flex flex-col gap-4 mb-12">
        <li v-for="link in Links" :key="link.to" class="pb-2">
          <RouterLink
            :to="link.to"
            custom
            v-slot="{ isActive, navigate, href }"
          >
            <a
              :href="href"
              @click="(e) => { navigate(e); closeMenu(); }"
              :class="[
                'text-lg font-bold block py-1 transition-colors cursor-pointer',
                isActive ? 'text-app-yellow' : 'text-white'
              ]"
            >
              {{ link.label }}
            </a>
          </RouterLink>
        </li>
      </ul>

      <AppButton
        class="font-semibold w-full"
        textColor="text-black"
        @click="goToDemo"
        variant="secondary"
      >
        Quick Demo
      </AppButton>
    </div>
  </header>
</template>
