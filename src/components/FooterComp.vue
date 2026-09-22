<script lang="ts" setup>
import Logo from "@/assets/logo.svg";
import { Company, Legal, Links, Socials, Support } from "@/constant/helper";
import { RouterLink } from "vue-router";

</script>

<template>
    <div class="flex bg-[#FCFFFC] p-8 flex-col">
        <div class="grid grid-cols-5 gap-6 ">
            <div class="flex flex-col gap-4">
                <img
                    :src="Logo"
                    alt="TalkSharp Logo"
                    class="w-32.75 h-17.25"
                />
                <span class="text-[15px] text-[#6B7280]">
                    Teaching African languages and culture to the world.
                </span>
                <div class="flex items-center gap-3.75">
                    <a
                        v-for="social in Socials"
                        :key="social.link"
                        :href="social.link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            :src="social.icon"
                            :alt="social.alt"
                        />
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <span class="text-[14px] font-bold tracking-wider">
                    LEARN
                </span>
                <RouterLink
                    v-for="link in Links.filter(l => l.label !== 'Company')"
                    :key="link.to"
                    :to="link.to"
                    v-slot="{ navigate, href }"
                    custom
                    class="cursor-pointer text-[15px] font-normal transition-colors text-[#6B7280]"
                >
                    <a
                        :href="href"
                        @click="navigate"
                        :class="[
                            'cursor-pointer text-[15px] font-normal transition-colors hover:text-primary text-[#6B7280]'
                        ]"
                    >
                        {{ link.label }}
                    </a>
                </RouterLink>
            </div>

            <div class="flex flex-col gap-4">
                <span class="text-[14px] font-bold tracking-wider">
                    COMPANY
                </span>
                <RouterLink
                    v-for="link in Company"
                    :key="link.to"
                    :to="link.to"
                    v-slot="{ navigate, href }"
                    custom
                    class="cursor-pointer text-[15px] font-normal transition-colors text-[#6B7280]"
                >
                    <a
                        :href="href"
                        @click="navigate"
                        :class="[
                            'cursor-pointer text-[15px] font-normal transition-colors hover:text-primary text-[#6B7280]'
                        ]"
                    >
                        {{ link.label }}
                    </a>
                </RouterLink>
            </div>

            <div class="flex flex-col gap-4">
                <span class="text-[14px] font-bold tracking-wider">
                    SUPPORT
                </span>
                <RouterLink
                    v-for="link in Support"
                    :key="link.to"
                    :to="link.to"
                    v-slot="{ navigate, href }"
                    custom
                    class="cursor-pointer text-[15px] font-normal transition-colors text-[#6B7280]"
                >
                    <a
                        :href="href"
                        @click="navigate"
                        :class="[
                            'cursor-pointer text-[15px] font-normal transition-colors hover:text-primary text-[#6B7280]'
                        ]"
                    >
                        {{ link.label }}
                    </a>
                </RouterLink>
            </div>

            <div class="flex flex-col gap-4">
                <span class="text-[14px] font-bold tracking-wider">
                    LEGAL
                </span>
                <RouterLink
                    v-for="link in Legal"
                    :key="link.to"
                    :to="link.to"
                    v-slot="{ navigate, href }"
                    custom
                    class="cursor-pointer text-[15px] font-normal transition-colors text-[#6B7280]"
                >
                    <a
                        :href="href"
                        @click="navigate"
                        :class="[
                            'cursor-pointer text-[15px] font-normal transition-colors hover:text-primary text-[#6B7280]'
                        ]"
                    >
                        {{ link.label }}
                    </a>
                </RouterLink>
            </div>
        </div>

        <div class="w-full h-px bg-[#E0E0E0] mt-10 mb-6"/>
        <div class="flex justify-center items-center">
            <span class="text-[12px] text-[#9CA3AF]">
                ©️ 2026 TalkSharp. All rights reserved.
            </span>
        </div>
    </div>
</template>