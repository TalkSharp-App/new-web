<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Menu, X } from "lucide-vue-next";
import Logo from "@/assets/logo-white.svg";
import AppButton from './AppButton.vue';
import { Links } from '@/constant/helper.ts';

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

const closeMenu = () => {
  open.value = false;
};
</script>

<template>
  <header class="w-full pt-6 pb-4 flex flex-col items-center px-4 sm:px-8 bg-app-green">
    <div class="flex items-center justify-between w-full max-w-7xl">
      <RouterLink to="/" class="shrink-0" @click="closeMenu">
        <img
          :src="Logo"
          alt="TalkSharp Logo"
          class="h-8 sm:h-10 md:h-12 w-auto object-contain"
        />
      </RouterLink>

      <nav class="flex items-center h-12 md:h-16 rounded-full bg-white shadow-xs px-4 md:px-6 backdrop-blur-md">
        <!-- Desktop Navigation Links -->
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

        <!-- Mobile Menu Toggle Button -->
        <button
          aria-label="Toggle menu"
          class="text-black p-1 md:hidden focus:outline-none cursor-pointer"
          @click="toggleMenu"
        >
          <X v-if="open" class="h-6 w-6" />
          <Menu v-else class="h-6 w-6" />
        </button>
      </nav>

      <!-- Desktop CTA Button -->
      <div class="hidden md:block shrink-0">
        <AppButton textColor="text-black" class="bg-app-yellow text-sm md:text-base px-5 py-2.5">
          Quick Demo
        </AppButton>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div
      class="w-full max-w-md overflow-hidden transition-all duration-300 ease-in-out md:hidden"
      :class="open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0 pointer-events-none'"
    >
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col gap-5">
        <ul class="flex flex-col gap-4">
          <li v-for="link in Links" :key="link.to">
            <RouterLink
              :to="link.to"
              custom
              v-slot="{ isActive, navigate, href }"
            >
              <a
                :href="href"
                @click="(e) => { navigate(e); closeMenu(); }"
                :class="[
                  'text-lg font-medium block py-1 transition-colors cursor-pointer',
                  isActive ? 'text-app-green font-semibold' : 'text-[#4E4E4E] hover:text-black'
                ]"
              >
                {{ link.label }}
              </a>
            </RouterLink>
          </li>
        </ul>

        <hr class="border-gray-100 my-1" />

        <AppButton
          textColor="text-black"
          class="bg-app-yellow w-full py-3 text-center justify-center font-semibold text-base"
          @click="closeMenu"
        >
          Quick Demo
        </AppButton>
      </div>
    </div>
  </header>
</template>
