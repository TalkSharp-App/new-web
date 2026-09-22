<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Menu, X } from "lucide-vue-next";
import Logo from "@/assets/logo.svg";
import AppButton from './AppButton.vue';
import { Links } from '@/constant/helper.ts';

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value
}

</script>

<template>
    <header
        class="fixed top-6 left-0 right-0 z-50 flex justify-center md:flex-row flex-col items-center"
    >
        <div class="flex justify-between items-center w-full px-10">
            <img
                :src="Logo"
                alt="TalkSharp Logo"
            />

            <nav
                class="flex h-17.5 items-center justify-between rounded-4xl bg-white/70 shadow-xs px-6 backdrop-blur-sm"
            >

                <ul class="hidden items-center gap-10 md:flex justify-center w-full py-5.5 px-6">
                    <li
                        v-for="link in Links"
                        :key="link.to"
                    >
                        <RouterLink
                            :to="link.to"
                            v-slot="{ isActive, navigate, href }"
                            custom
                            class="cursor-pointer text-[18px] font-normal hover:text-app-green transition-colors text-[#080808]"
                        >
                            <a
                                :href="href"
                                @click="navigate"
                                :class="[
                                    'cursor-pointer text-[18px] font-normal transition-colors hover:text-primary',
                                    isActive ? 'text-app-green' : 'text-[#080808]'
                                ]"
                            >
                                {{ link.label }}
                            </a>
                        </RouterLink>
                    </li>
                </ul>

                <button
                    aria-label="Toggle menu"
                    class="text-foreground md:hidden"
                    @click="toggleMenu"
                >
                    <X
                        v-if="open"
                        class="h-6 w-6"
                    />
                    <Menu
                        v-else
                        class="h-6 w-6"
                    />
                </button>
            </nav>

            <AppButton>
                Quick Demo
            </AppButton>
        </div>

        <div
            class="overflow-hidden transition-[max-height] duration-300 md:hidden"
            :class="open ? 'mt-2 w-[95%] rounded-2xl backdrop-blur-xs bg-[#EBEBEB80] shadow-sm' : 'max-h-0'"
        >
            <ul class="flex flex-col gap-4 px-6 py-4">
                <li
                    v-for="link in Links"
                    :key="link.to"
                >
                    <RouterLink
                        :to="link.to"
                        class="cursor-pointer text-[22px] font-normal hover:text-muted-foreground transition-colors text-[#4E4E4E]"
                    >
                        {{ link.label }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>