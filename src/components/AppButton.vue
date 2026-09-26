<script setup lang="ts">
import { Primitive } from "reka-ui";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  textColor?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  textColor: "text-white",
});
</script>

<template>
  <Primitive
    as="button"
    :type="type"
    :class="[
      'flex items-center justify-center h-15.25 px-4 rounded-[20px] bg-app-green border-b-4 border-b-[#0d4c18] font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50',
      props.textColor
    ]"
  >
    <slot />
  </Primitive>
</template>
