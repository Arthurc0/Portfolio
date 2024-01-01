<template>
    <div>
        <main>
            <section class="sticky top-[94px] w-full h-dvh flex items-center justify-center px-16 gap-20">
                <div class="flex flex-col gap-10 w-6/12">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-primary font-bold">Arthur CHAFF</h1>
                    <div class="space-y-1 text-black/90 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                        <p>Un passionné de développement <span class="bg-black px-1 rounded-md text-white transition duration-200 hover:bg-black/70">front-end</span>.</p>
                        <p>Créer des <span class="bg-black px-1 rounded-md text-white transition duration-200 hover:bg-black/70">interfaces</span> à la fois intuitives et modernes</p>
                        <p>est une véritable <span class="bg-black px-1 rounded-md text-white transition duration-200 hover:bg-black/70">vocation</span>.</p>
                    </div>
                    <NuxtLink :to="{ path: '/', hash: '#competences' }" class="cursor-pointer border-2 border-black w-fit p-2 rounded-full mx-auto mt-12 transition duration-200 hover:bg-black hover:text-white">
                        <ArrowDownIcon class="w-9 h-9 opacity-80" />
                    </NuxtLink>
                </div>
                <div class="p-3 border-2 border-dashed border-black">
                    <NuxtImg src="/images/arthur_1.webp" width="550" />
                </div>
            </section>
            <section id="competences" class="z-competences sticky bg-black p-16 h-[250vh] relative">
                <div class="sticky top-[50vh] flex flex-col gap-4 items-center">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-primary font-bold">Compétences</h2>
                    <h3 class="text-md md:text-lg lg:text-xl xl:text-2xl text-white/80 font-primary">Frameworks et outils</h3>
                </div>
                <div class="sticky grid grid-cols-7 justify-items-center gap-y-20 left-[50vw] top-[50vh] translate-y-[-50%]">
                    <LazyAppToolCard class="bg-figma" title="Figma" src="/icons/brands/figma.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-node" title="Node.js" src="/icons/brands/node.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-jira" title="Jira" src="/icons/brands/jira.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-sass" title="SASS" src="/icons/brands/sass.svg" />

                    <div></div>
                    <LazyAppToolCard class="bg-nuxt" title="Nuxt" src="/icons/brands/nuxt.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-vscode" title="VSCode" src="/icons/brands/vscode.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-react" title="React" src="/icons/brands/react.svg" />
                    <div></div>

                    <LazyAppToolCard class="bg-git" title="Git" src="/icons/brands/git.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-linear" title="Linear" src="/icons/brands/linear.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-tailwind" title="Tailwind" src="/icons/brands/tailwind.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-typescript" title="Typescript" src="/icons/brands/typescript.svg" />

                    <div></div>
                    <LazyAppToolCard class="bg-vue" title="Vue.js" src="/icons/brands/vue.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-javascript" title="Javascript" src="/icons/brands/javascript.svg" />
                    <div></div>
                    <LazyAppToolCard class="bg-docker" title="Docker" src="/icons/brands/docker.svg" />
                    <div></div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ArrowDownIcon } from '@heroicons/vue/24/solid';
</script>
