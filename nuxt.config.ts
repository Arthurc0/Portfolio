export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    typescript: {
        strict: true,
        typeCheck: true
    },
    app: {
        pageTransition: {
            mode: 'out-in',
            name: 'page'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image'
    ]
});
