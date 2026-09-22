<script setup lang="ts">
import { Primitive } from "reka-ui";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  buttonStyle?: string;
}

withDefaults(
  defineProps<ButtonProps>(),{
    type: "button",
});

</script>

<template>
  <Primitive
    as="button"
    :type="type"
    class="rounded-xl bg-primary px-6 py-3 font-medium 
    text-white transition-opacity hover:opacity-90 
    disabled:cursor-not-allowed disabled:opacity-50"
    :style="[{
        backgroundColor: '#178029',
        height: 61,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        borderTopWidth: '0px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderBottomWidth: '4px',
        borderColor: '#0d4c18',
    }, buttonStyle]"
  >
    <slot />
  </Primitive>
</template>