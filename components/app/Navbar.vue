<template>
    <header class="z-navbar sticky top-0 w-full py-6 h-[94px] font-semibold px-11">
        <div class="flex items-center justify-between mx-auto max-w-[1350px]">
            <nav class="flex-1">
                <ul class="flex items-center gap-16 uppercase">
                    <li class="text-black rounded-md px-1 transition duration-200 hover:scale-105 will-change-transform hover:text-white hover:bg-black">
                        <NuxtLink :to="{ path: '/', hash: '#projets' }">Projets</NuxtLink>
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
