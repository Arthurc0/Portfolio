<template>
    <NuxtLink class="py-[6px] px-3 bg-black rounded-xl text-white uppercase transition duration-200 hover:bg-black/90 hover:scale-105 will-change-transform" :to="{ path: '/', hash: to }">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    to: string;
}>();
</script>
