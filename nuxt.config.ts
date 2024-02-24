// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/styles/main.scss", "~/assets/styles/font.scss"],
  components: [
    { path: "~/components/MultiStageCurrency", prefix: "m" },
    { path: "~/components" },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // modules: ["@pinia/nuxt"],

  pinia: {
    // storesDirs: ["./store/**"],
  },

  runtimeConfig: {},

  vite: {},
});
