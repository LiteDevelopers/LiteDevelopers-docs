import { defineConfig } from "vitepress";
import codeTabs from "markdown-it-codetabs";

export default defineConfig({
    lang: 'en-US',
    title: 'LiteDevelopers',
    description: 'LiteDevelopers',

    lastUpdated: true,
    cleanUrls: true,

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {
        logo: 'https://i.ibb.co/dWTNW8q/bitmapa.png',
        nav: [
            { text: "LiteCommands", link: "/documentation/litecommands/getting-started" },
            { text: "LiteSkullAPI", link: "/documentation/liteskullapi/getting-started" }
        ],

        sidebar: {

            // Introduction
            '/documentation/introduction/': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    items: [
                        { text: 'Home', link: '/documentation/introduction/projects' },
                    ]
                }
            ],

            // LiteCommands
            '/documentation/litecommands/': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    items: [
                        { text: 'Get started', link: '/documentation/litecommands/getting-started' },
                        { text: 'Configure Builder', link: '/documentation/litecommands/configure-builder' },
                    ]
                },

                {
                    text: 'Features', collapsible: true,
                    items: [
                        { text: '@Route & @Execute', link: '/documentation/litecommands/features/route-and-execute' },
                        { text: '@RootRoute', link: '/documentation/litecommands/features/root-route' },
                        { text: '@Arg', link: '/documentation/litecommands/features/argument' },
                        { text: '@Arg - Basic Types', link: '/documentation/litecommands/features/argument-basic-types' },
                        { text: '@Arg - Time', link: '/documentation/litecommands/features/argument-time-types' },
                        { text: '@Arg - no-ISO Time', link: '/documentation/litecommands/features/argument-no-iso-chronology' },
                        { text: '@Arg - Custom', link: '/documentation/litecommands/features/argument-custom' },
                        { text: '@Joiner', link: '/documentation/litecommands/features/joiner' },
                        { text: '@Async & Asynchronously', link: '/documentation/litecommands/features/asynchronously' },
                    ]
                },

                {
                    text: 'Examples', collapsible: true,
                    items: [
                        { text: 'Examples - Info', link: '/documentation/litecommands/examples/info' },
                        { text: 'Bukkit - Teleport', link: '/documentation/litecommands/examples/teleport' },
                        { text: 'Bukkit - Kick', link: '/documentation/litecommands/examples/kick' },
                    ]
                }
            ],

            // LiteSkullAPI
            '/documentation/liteskullapi/': [
                {
                    text: 'Introduction',
                    collapsible: true,
                    items: [
                        { text: 'Get started', link: '/documentation/liteskullapi/getting-started' },
                    ]
                },
                {
                    text: 'LiteSkullAPI',
                    collapsible: true,
                    items: [
                        { text: 'Initialize', link: '/documentation/liteskullapi/initialize' },
                        { text: 'Basic', link: '/documentation/liteskullapi/basic-api' },
                        { text: 'CompletableFuture', link: '/documentation/liteskullapi/completable-future-api' },
                    ]
                }
            ],
        },

        editLink: {
            pattern: 'https://github.com/Rollczi/LiteDevelopers-docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Made by LiteDevelopers and Contributors with ❤️',
            copyright: 'Copyright © 2022-present LiteDevelopers'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Rollczi/' },
            { icon: 'discord', link: 'https://discord.gg/NyPWs7h7kz' },
        ],
    }
})
