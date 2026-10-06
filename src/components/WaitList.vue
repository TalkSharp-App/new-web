<script setup lang="ts">
import { ref } from 'vue';
import { X } from 'lucide-vue-next';
import { db } from '@/config/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', email: string): void;
}>();

const email = ref('');
const errorMsg = ref('');
const isSubmitted = ref(false);
const isLoading = ref(false)

let errorTimeout: ReturnType<typeof setTimeout> | undefined;
const showError = (message: string) => {
  errorMsg.value = message;

  if (errorTimeout) {
    clearTimeout(errorTimeout);
  }

  errorTimeout = setTimeout(() => {
    errorMsg.value = "";
  }, 4000);
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const handleSubmit = async () => {
  console.log('did it get here')
  const normalizedEmail = email.value.trim().toLowerCase();

  errorMsg.value = "";

  if (!normalizedEmail) {
    showError("Please enter your email address.");
    return;
  }

  if(!emailRegex.test(normalizedEmail)) {
    showError("Please enter a valid email address.");
    return;
  }

  isLoading.value = true;

  try {
    const emailDocumentId = encodeURIComponent(normalizedEmail);
    const waitlistRef = doc(
      db,
      "waitlist-kids",
      emailDocumentId
    );

    await setDoc(waitlistRef, {
      email: normalizedEmail,
      createdAt: serverTimestamp(),
    });

    isSubmitted.value = true;
    email.value = '';
    // emit('close');
  } catch (error) {
    console.error("Waitlist subscription error:", error);
    showError( "Something went wrong. Please try again.");
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        @click.self="emit('close')"
      >
        <div class="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border-2 border-black">
          <button
            @click="emit('close')"
            class="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X :size="20" />
          </button>

          <!-- Success State -->
          <div v-if="isSubmitted" class="text-center py-6">
            <h3 class="font-lucky text-2xl sm:text-3xl text-app-green mb-2">You're on the list!</h3>
            <p class="text-gray-600 text-sm">We'll reach out as soon as early access opens up.</p>
          </div>

          <!-- Form State -->
          <div v-else>
            <h3 class="font-lucky text-2xl sm:text-3xl mb-2 text-black">
              Join the Waitlist
            </h3>
            <p class="text-gray-600 text-sm mb-6">
              Be the first to experience TalkSharp Kids. Enter your email below to get early access.
            </p>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
              <div>
                <label for="waitlist-email" class="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  id="waitlist-email"
                  v-model="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  class="w-full rounded-xl border border-gray-300 p-3.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <button
                type="submit"
                class="w-full rounded-xl bg-black py-3.5 text-white font-semibold hover:bg-gray-800 active:scale-[0.99] transition-all shadow-md"
              >
                Submit
              </button>
            </form>
            <div class="flex justify-center items-center">
              <span
                  class="text-center text-xs font-light text-red-700 mt-2"
              >{{ errorMsg }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
