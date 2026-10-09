<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import SeoManager from "@/components/SeoManager.vue";

</script>

<template>
  <NavBar />

  <main>
    <SeoManager />
    <RouterView/>
  </main>

  <FooterComp/>
</template>

<style scoped></style>
