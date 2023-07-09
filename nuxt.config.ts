// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve}from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  alias: {
    '@':resolve(__dirname, '/'), 
  }, 

  css: ['~/styles/globals.scss' ],
  routeRules:{
    '/': {redirect: '/profiles'}
  },
app: {
  baseURL: '/vendre-test/'
}

})
