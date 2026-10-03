<script setup lang="ts">
import {
  Trash2,
  Smartphone,
  Mail,
  ShieldCheck,
  CheckCircle2,
} from "lucide-vue-next";

const supportEmail = "hello@talksharp.co";

const deletionSteps = [
  "Sign in to your TalkSharp account.",
  "Navigate to profile",
  "Click the gear icon top right of the profile screen.",
  "Scroll to the bottom",
  "Select Delete Account.",
  "You will be asked to provide your email",
  "A verification code will be sent to your registered email address.",
  "Enter the verification code to confirm permanent account deletion.",
];

const deletedData = [
  "Your TalkSharp user account",
  "Your user profile",
  "Learning progress",
  "Lesson and module progress",
  "Assessment records",
  "Associated child accounts",
  "Child learning progress and related data",
];

const requestDeletion = () => {
    const subject = encodeURIComponent(
        "TalkSharp Account Deletion Request"
    );

    const body = encodeURIComponent(`Hello TalkSharp Support,

    I would like to request the permanent deletion of my TalkSharp account and associated data.

    Email associated with my TalkSharp account:

    Thank you.`);

    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
};
</script>

<template>
  <main class="min-h-screen bg-gray-50">
    <section class="border-b border-gray-100 bg-white">
      <div class="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <div
          class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-50"
        >
          <Trash2 class="h-6 w-6 text-red-600" />
        </div>

        <h1
          class="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
        >
          Delete Your TalkSharp Account
        </h1>

        <p
          class="mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg"
        >
          TalkSharp users can permanently delete their account and associated
          personal data at any time.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-5 py-10 md:py-14">
      <div class="space-y-6">

        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
        >
          <div class="mb-6 flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50"
            >
              <Smartphone class="h-5 w-5 text-green-700" />
            </div>

            <div>
              <h2 class="text-xl font-semibold text-gray-900">
                Delete your account from the TalkSharp app
              </h2>

              <p class="mt-1 text-sm leading-6 text-gray-500">
                If you still have access to your account, you can permanently
                delete it directly from the app.
              </p>
            </div>
          </div>

          <ol class="space-y-4">
            <li
              v-for="(step, index) in deletionSteps"
              :key="step"
              class="flex gap-3"
            >
              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-semibold text-green-700"
              >
                {{ index + 1 }}
              </span>

              <p class="pt-0.5 text-gray-700">
                {{ step }}
              </p>
            </li>
          </ol>
        </div>

        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
        >
          <div class="mb-5 flex items-center gap-3">
            <ShieldCheck class="h-6 w-6 text-green-700" />

            <h2 class="text-xl font-semibold text-gray-900">
              What will be deleted
            </h2>
          </div>

          <p class="mb-5 leading-7 text-gray-600">
            When your account deletion is confirmed, TalkSharp permanently
            deletes your account and associated personal data, including:
          </p>

          <ul class="grid gap-3 sm:grid-cols-2">
            <li
              v-for="item in deletedData"
              :key="item"
              class="flex items-start gap-2.5 text-sm text-gray-700"
            >
              <CheckCircle2
                class="mt-0.5 h-5 w-5 shrink-0 text-green-600"
              />

              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
        >
          <div class="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50"
            >
              <Mail class="h-5 w-5 text-green-700" />
            </div>

            <div class="flex-1">
              <h2 class="text-xl font-semibold text-gray-900">
                Can't access the TalkSharp app?
              </h2>

              <p class="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                You can request deletion of your TalkSharp account by
                contacting our support team. Please contact us using the email
                address associated with your TalkSharp account where possible.
              </p>
            </div>

            <button
              type="button"
              class="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
              @click="requestDeletion"
            >
              <Mail class="h-4 w-4" />
              Request Account Deletion
            </button>
          </div>
        </div>

        <div class="px-1">
          <p class="text-sm leading-6 text-gray-500">
            We may retain information only where required for legitimate legal,
            regulatory, security, fraud prevention, or financial record-keeping
            purposes. Any such information is retained only for the applicable
            required period and is not retained for marketing purposes.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>