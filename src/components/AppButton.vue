<script setup lang="ts">
import { Primitive } from "reka-ui";
import { computed } from "vue";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  textColor?: string;
  variant?: "primary" | "secondary" | "tertiary" | "disabled";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  textColor: "text-white",
  variant: "primary"
});

// const btn = props.variant === "primary"
//               ? 'bg-app-green border-b-[#0d4c18]'
//               : props.variant === "secondary"
//                 ? 'bg-app-yellow border-b-[#DAA800]'
//                 : 'bg-white border-b-[#D3D3D3]'
const btn = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-app-green border-b-[#0d4c18]";

    case "secondary":
      return "bg-app-yellow border-b-[#DAA800]";

    case "tertiary":
      return "bg-white border-b-[#D3D3D3]";

    case "disabled":
      return "bg-slate-500 border-b-slate-900";  

    default:
      return "bg-app-green border-b-[#0d4c18]";
  }
});

</script>

<template>
  <Primitive
    as="button"
    :disabled="variant === 'disabled'"
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
