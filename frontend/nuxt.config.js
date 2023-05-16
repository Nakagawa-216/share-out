export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  
  axios: {
    baseURL: 'http://localhost:3000'
  },
  

  auth: {
    redirect: {
      login: '/login', //middleware:authを設定したURLにアクセスがあった場合の、リダイレクト先。
      logout: '/', //ログアウト後のリダイレクト先
      callback: false,
      home: '/' ///ログイン後のリダイレクト先。
     },
    strategies: {
      local: {
        tokenType: 'Bearer',
        endpoints: {
          //ログイン処理に関する設定
          login: { url: '/api/auth/sign_in', method: 'post',propertyName: 'access_token'}, 
          //ログアウト処理に関する設定
          logout: { url: '/api/auth/sign_out', method: 'delete' },
          //ログイン時にユーザー情報を保存するか。
          user: false 
         },
       }
     },
   }
}
