import config from './config/index'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: config.title,
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: config.description },
      { hid: 'keywords', name: 'keywords', content: config.keywords.join(", ") },
      { hid: 'author', name: 'author', content: config.author },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  
  /**
   * 自定义内容
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '~/plugins/axios',
    {src: '~/plugins/element-ui', ssr: true}
  ],
  modules: [
    '@nuxtjs/axios'
    //,'@nuxtjs/proxy'
  ],
  axios: {
    proxy: config.proxy
    // proxy: true // 表示开启代理（本地用）
    // proxy: false // 表示关闭代理（打包用）
  },
  // 设置代理
  proxy: {
    '/api': {
      target: 'https://api.myjson.com',
      pathRewrite: {
        '^/api' : '/',  // 把 /api 替换成 /
        changeOrigin: true  // 表示是否跨域
      }
    },
    '/wp-content': {
      target: 'https://api.myjson.com',
      // target: 'http://localhost:8888'
    }
  },
  env: {
    baseUrl: config.baseUrl
    // baseUrl: '/api' // 设置统一的基础url，线上环境关闭代理使用它（本地用）
    // baseUrl: 'https://api.myjson.com' // 设置统一的基础url，线上环境关闭代理使用它（打包用）
  },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** Run ESLint on save
  //   */
  //   extend (config, { isDev, isClient }) {
  //     if (isDev && isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
    vendors: ['@nuxtjs/axios','element-ui']
  }
}

