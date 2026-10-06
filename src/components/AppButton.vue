<script setup lang="ts">
import { Primitive } from "reka-ui";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  textColor?: string;
  variant?: "primary" | "secondary";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  textColor: "text-white",
  variant: "primary"
});

const btn = props.variant === "primary"
              ? 'bg-app-green border-b-[#0d4c18]'
              : 'bg-app-yellow border-b-[#DAA800]'
</script>

<template>
  <Primitive
    as="button"
    :type="type"
    :class="[btn,
      `flex items-center justify-center h-15.25 px-4 w-70 rounded-[20px] cursor-pointer
       border-b-4 font-medium 
       transition-opacity hover:opacity-90
       disabled:cursor-not-allowed disabled:opacity-50`,
      props.textColor
    ]"
  >
    <slot />
  </Primitive>
</template>
