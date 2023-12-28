<template>
    <header class="z-navbar top-0 fixed w-full py-6 font-semibold px-11 bg-white/50 backdrop-blur" ref="headerElem">
        <div class="flex items-center justify-between mx-auto max-w-[1350px]">
            <nav class="flex-1">
                <ul class="flex items-center gap-16 uppercase">
                    <li v-for="link in navLinks" :key="link.to" class="transition duration-200 hover:scale-105 will-change-transform border-b-2" :class="[isActiveLink(link.to) ? 'border-dashed border-black' : 'border-hidden']">
                        <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="flex-1">
                <NuxtLink class="inline-block w-fit" to="/">
                    <NuxtImg src="/icons/logo-dark-bg.svg" width="40" loading="lazy" />
                </NuxtLink>
            </div>
            <AppButton to="/contact">Contact</AppButton>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { animate, scroll } from 'motion';

const navLinks = [
    { text: 'Accueil', to: '/' },
    { text: 'Expérience', to: '/experience' },
    { text: 'Projets', to: '/projets' }
];

const router = useRouter();

const isActiveLink = (linkTo: string) => {
    return router.currentRoute.value.path === linkTo;
};

const scrollPosition = ref(1);
const headerElem = ref<HTMLElement>();
const headerShowed = ref(true);

onMounted(() => {
    scroll(({ y }) => {
        if (y.current < scrollPosition.value && !headerShowed.value) {
            // show navbar
            animate(headerElem.value!, { transform: 'translateY(0)' });
            headerShowed.value = true;
        } else if (y.current > scrollPosition.value && headerShowed.value && y.current > 100) {
            // hide navbar
            animate(headerElem.value!, { transform: 'translateY(-100%)' });
            headerShowed.value = false;
        }
        scrollPosition.value = y.current;
    });
});
</script>
