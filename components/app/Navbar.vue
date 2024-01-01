<template>
    <header class="w-full py-6 font-semibold px-11">
        <div class="flex items-center justify-between mx-auto max-w-[1350px]">
            <nav class="flex-1">
                <ul class="flex items-center gap-16 uppercase">
                    <li v-for="link in navLinks" :key="link.hash" class="transition duration-200 hover:scale-105 will-change-transform border-b-2 border-hidden border-black hover:border-dashed">
                        <NuxtLink :to="{ path: '/', hash: link?.hash ?? '' }">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="flex-1">
                <NuxtLink class="inline-block w-fit" to="/">
                    <NuxtImg src="/icons/logo-dark-bg.svg" width="40" loading="lazy" />
                </NuxtLink>
            </div>
            <AppButton to="#contact">Contact</AppButton>
        </div>
    </header>
</template>

<script setup lang="ts">
const navLinks = [
    { text: 'A propos', path: '/' },
    { text: 'Projets', hash: '#projets' }
];
</script>
