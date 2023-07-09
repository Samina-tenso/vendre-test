// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["~/styles/globals.scss"],

  ssr: false,
  app: {
    baseURL: "/vendre-test/",
  },
});
