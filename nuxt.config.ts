import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                class: 'h-full bg-gray-100'
            },
            link: [
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
            ],
            bodyAttrs: {
                class: 'h-full'
            },
        }
    },

    modules: [
        '@nuxtjs/tailwindcss'
    ],
})
