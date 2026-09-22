<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

</script>

<template>
  <NavBar />

  <main>
    <RouterView/>
  </main>

  <FooterComp/>
</template>

<style scoped></style>
