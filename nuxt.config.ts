import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    app: {
        head: {
            htmlAttrs: {
                class: 'h-full bg-gray-100'
            },
            link: [
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
})
