<template>
    <div class="w-[80px] px-2 flex flex-col items-center gap-1 rounded-2xl p-2 transition duration-200 border-2 border-transparent hover:border-white/50 hover:opacity-80">
        <NuxtImg :src="src" loading="lazy" />
        <span class="text-sm font-medium text-black/60">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src: string;
    title: string;
}>();
</script>
