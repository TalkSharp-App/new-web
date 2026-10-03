<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue';
import PageLayout from '@/components/PageLayout.vue';
import { FunctionsError, httpsCallable } from "firebase/functions";
import { functions } from "@/config/firebase";
import { ref } from 'vue';

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

interface ContactEmailResponse {
  success: boolean;
  message: string;
}

const sendContactEmail = async (
    name: string,
    email: string,
    message: string
) => {

    const callable =  httpsCallable<
        ContactEmailRequest,
        ContactEmailResponse
    >(functions, "sendContactEmailPublic");

    try {
        const response = await callable({
            name, email, message
        })

        return response.data;
    } catch (error) {
        const firebaseError = error as FunctionsError;

        console.error("Request account deletion error:", {
            code: firebaseError.code,
            message: firebaseError.message,
            details: firebaseError.details,
        });

        throw new Error(
        firebaseError.message ||
        "Unable to request account deletion."
        );
    }
}

const form = ref({
  name: "",
  email: "",
  message: "",
});
const isLoading = ref<boolean>(false)
const emailError = ref<string>("");
const emailSuccess = ref<string>("");

const submitContactForm = async () => {
    isLoading.value = true;
    emailError.value = "";

    try {
        await sendContactEmail(
            form.value.name,
            form.value.email,
            form.value.message,
        );

        emailSuccess.value = "Message sent successfully.";

        form.value = {
            name: "",
            email: "",
            message: "",
        };

        setTimeout(() => {
            emailSuccess.value = "";
        }, 5000);

    } catch (error) {
        const message =
            error instanceof Error
            ? error.message
            : "Something went wrong.";

        console.error(message);

        emailError.value = message;

        setTimeout(() => {
            emailError.value = "";
        }, 5000);
    } finally {
        isLoading.value = false
    }
};

</script>

<template>
    <PageLayout :showHero="false">
        <div class="min-h-screen w-full bg-white ">
            <div
                class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:gap-16 lg:px-10 lg:py-20"
            >
                <div class="w-full flex-1">
                    <h1
                        class="font-lucky my-4 text-4xl text-[#102817] sm:text-5xl lg:text-[clamp(36px,5vw,58px)] lg:leading-[1.05]"
                    >
                        We're here to help
                        <br>
                        you speak with confidence.
                    </h1>

                    <p
                        class="max-w-xl text-base text-gray-700 sm:text-lg"
                    >
                        Have a question, feedback, or need support? Send us a
                        message and we’ll get back to you soon.
                    </p>

                    <div
                        class="mt-4.5 w-full max-w-xl rounded-[18px] border border-[rgba(24,163,38,0.12)] bg-[rgba(255,255,255,0.75)] p-6 shadow-[0_16px_40px_rgba(18,95,31,0.08)] sm:p-7.5"
                    >
                        <strong class="block">Email</strong>
                        <span>hello@talksharp.co</span>
                    </div>
                    <div
                        class="mt-2.75 w-full max-w-xl rounded-[18px] border border-[rgba(24,163,38,0.12)] bg-[rgba(255,255,255,0.75)] p-6 shadow-[0_16px_40px_rgba(18,95,31,0.08)] sm:p-7.5"
                    >
                        <strong class="block">Response Time</strong>
                        <span>Usually within 24–48 hours</span>
                    </div>
                </div>
                <form
                    class="w-full shrink-0 rounded-[28px] border border-[rgba(24,163,38,0.14)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_24px_80px_rgba(18,95,31,0.14)] backdrop-blur-[18px] sm:p-8 lg:mt-12 lg:w-130"
                >
                    <div class="mb-4.5">
                        <label class="block text-sm font-medium text-[#102817]">
                            Name <span class="text-red-600">*</span>
                        </label>

                        <input
                            class="mt-2 box-border w-full rounded-[14px] border border-[rgba(24,163,38,0.18)] bg-white px-4 py-3.5 text-[15px] text-[#102817] outline-none transition duration-250 ease-in-out"
                            type="text"
                            placeholder="Your Name"
                            required
                            v-model="form.name"
                        >
                    </div>
                    <div class="mb-4.5">
                        <label class="block text-sm font-medium text-[#102817]">
                            Email <span class="text-red-600">*</span>
                        </label>

                        <input
                            class="mt-2 box-border w-full rounded-[14px] border border-[rgba(24,163,38,0.18)] bg-white px-4 py-3.5 text-[15px] text-[#102817] outline-none transition duration-250 ease-in-out"
                            type="email"
                            placeholder="Your Email"
                            required
                            v-model="form.email"
                        >
                    </div>
                    <div class="mb-4.5">
                        <label class="block text-sm font-medium text-[#102817]">
                            Message <span class="text-red-600">*</span>
                        </label>

                        <textarea
                            class="mb-4 mt-2 box-border min-h-35 w-full resize-none rounded-[14px] border border-[rgba(24,163,38,0.18)] bg-white px-4 py-3.5 text-[15px] text-[#102817] outline-none transition duration-250 ease-in-out"
                            placeholder="How can we help you?"
                            v-model="form.message"
                        ></textarea>
                        
                        <AppButton
                            @click="submitContactForm"
                            class="w-full font-semibold"
                            type="submit"
                        >
                            {{ isLoading ? 'Sending...' : 'Send message' }}
                        </AppButton>
                        <p
                            v-if="emailError || emailSuccess"
                            :class="['text-sm mt-2', emailError && 'text-red-500', emailSuccess && 'text-app-green']"
                        >
                            {{ emailError || emailSuccess }}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </PageLayout>
</template>