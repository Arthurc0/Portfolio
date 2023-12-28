<template>
    <header class="top-0 fixed w-full py-6 font-semibold px-11">
        <div class="flex items-center justify-between mx-auto max-w-[1352px]">
            <nav class="flex-1">
                <ul class="flex items-center gap-16 uppercase">
                    <li v-for="link in navLinks" :key="link.to" class="transition duration-200 hover:scale-105 will-change-transform border-b-2" :class="[isActiveLink(link.to) ? 'border-dashed border-black' : 'border-hidden']">
                        <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <NuxtLink class="flex-1" to="/">
                <NuxtImg src="/icons/logo-dark-bg.svg" width="40" loading="lazy" />
            </NuxtLink>
            <AppButton to="/contact">Contact</AppButton>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const navLinks = [
    { text: 'Accueil', to: '/' },
    { text: 'Expérience', to: '/experience' },
    { text: 'Projets', to: '/projets' }
];

const router = useRouter();

const isActiveLink = (linkTo: string) => {
    return router.currentRoute.value.path === linkTo;
};
</script>
