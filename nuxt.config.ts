// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/html-validator",
    "@nuxtjs/web-vitals",
    "@nuxtjs/google-fonts",
    "nuxt-schema-org",
    "@nuxt/image-edge",
    "@nuxtjs/fontaine",
    "nuxt-icon",
    "@unocss/nuxt",
  ],

  unocss: {
    attributify: false,
    uno: true,
    preflight: true,
    icons: false,
    shortcuts: {
      "flex-center": "flex items-center justify-center",
      "absolute-center": "absolute top-[50%] left-[50%] -translate-[50%]",
      "grid-center": "grid place-items-center",
    },

    rules: [],
    safelist: ["hover:bg-[rgba(var(--light),0.06)]"],
    theme: {
      screens: {
        xs: "384px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  googleFonts: {
    families: {
      Nunito: {
        wght: [200, 400, 700],
      },

      Righteous: {
        wght: [400],
      },
    },
    display: "fallback",
    prefetch: true,
    preload: true,
    preconnect: true,
  },

  css: ["@/assets/scss/main.scss"],

  app: {},

  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
});
