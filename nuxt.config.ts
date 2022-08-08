import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                class: 'h-full bg-gray-100'
            },
            link: [
                { rel: 'preload', href: 'https://rsms.me/inter/inter.css', as: 'style' },
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
                { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
            ],
            bodyAttrs: {
                class: 'h-full'
            },
        }
    },

    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE,
        }
    },

    modules: [
        '@nuxtjs/tailwindcss'
    ],

    build: {
        transpile: ['@headlessui/vue']
    },
})
