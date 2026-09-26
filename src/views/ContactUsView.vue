<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue';
import PageLayout from '@/components/PageLayout.vue';
</script>

<template>
    <PageLayout class="mt-30">
        <template #hero>
            <div class="min-h-screen w-full bg-white ">
                <div
                    class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:gap-16 lg:px-10 lg:py-20"
                >
                    <div
                        class="w-full flex-1"
                    >
                        <span
                            class="mb-5 inline-block rounded-full bg-[rgba(24,163,38,0.1)] px-[14px] py-2 text-[13px] font-bold uppercase tracking-[0.04em] text-[#14852a]"
                        >
                            Contact Us
                        </span>

                        <h1
                            class="my-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#102817] sm:text-5xl lg:text-[clamp(36px,5vw,58px)] lg:leading-[1.05]"
                        >
                            We're here to help
                            <br>
                            you speak with confidence.
                        </h1>

                        <p
                            class="max-w-xl text-base leading-7 text-gray-700 sm:text-lg"
                        >
                            Have a question, feedback, or need support? Send us a
                            message and we’ll get back to you soon.
                        </p>

                        <div
                            class="mt-[18px] w-full max-w-xl rounded-[18px] border border-[rgba(24,163,38,0.12)] bg-[rgba(255,255,255,0.75)] p-6 shadow-[0_16px_40px_rgba(18,95,31,0.08)] sm:p-[30px]"
                        >
                            <strong class="block">Email</strong>
                            <span>hello@talksharp.co</span>
                        </div>
                        <div
                            class="mt-[11px] w-full max-w-xl rounded-[18px] border border-[rgba(24,163,38,0.12)] bg-[rgba(255,255,255,0.75)] p-6 shadow-[0_16px_40px_rgba(18,95,31,0.08)] sm:p-[30px]"
                        >
                            <strong class="block">Response Time</strong>
                            <span>Usually within 24–48 hours</span>
                        </div>
                    </div>
                    <form
                        class="w-full shrink-0 rounded-[28px] border border-[rgba(24,163,38,0.14)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_24px_80px_rgba(18,95,31,0.14)] backdrop-blur-[18px] sm:p-8 lg:mt-12 lg:w-[520px]"
                    >
                        <div class="mb-[18px]">
                            <label class="block text-sm font-medium text-[#102817]">
                                Name
                            </label>

                            <input
                                class="mt-2 box-border w-full rounded-[14px] border border-[rgba(24,163,38,0.18)] bg-white px-4 py-[14px] text-[15px] text-[#102817] outline-none transition duration-[250ms] ease-in-out"
                                type="text"
                                placeholder="Your Name"
                                required
                            >
                        </div>
                        <div class="mb-[18px]">
                            <label class="block text-sm font-medium text-[#102817]">
                                Email
                            </label>

                            <input
                                class="mt-2 box-border w-full rounded-[14px] border border-[rgba(24,163,38,0.18)] bg-white px-4 py-[14px] text-[15px] text-[#102817] outline-none transition duration-[250ms] ease-in-out"
                                type="email"
                                placeholder="Your Email"
                                required
                            >
                        </div>
                        <div class="mb-[18px]">
                            <label class="block text-sm font-medium text-[#102817]">
                                Message
                            </label>

                            <textarea
                                class="mt-2 box-border min-h-[140px] w-full resize-none rounded-[14px] border border-[rgba(24,163,38,0.18)] bg-white px-4 py-[14px] text-[15px] text-[#102817] outline-none transition duration-[250ms] ease-in-out"
                                placeholder="How can we help you?"
                            ></textarea>

                            <AppButton
                                class="mt-4 w-full rounded-2xl border-0 bg-gradient-to-br from-[#18a326] to-[#0f7f1e] px-5 py-[15px] text-base font-extrabold text-white shadow-[0_14px_34px_rgba(24,163,38,0.28)] transition duration-[250ms] ease-in-out"
                                type="submit"
                            >
                                Send message
                            </AppButton>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </PageLayout>
</template>