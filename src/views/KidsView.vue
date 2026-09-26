<script lang="ts" setup>
import PageLayout from '@/components/PageLayout.vue';
import KidsHero from './kids/KidsHero.vue';
import KidsSolution from './kids/KidsSolution.vue';

</script>
<template>
    <PageLayout>
        <template #hero>
          <KidsHero />
        </template>
        <KidsSolution />
    </PageLayout>
</template>
