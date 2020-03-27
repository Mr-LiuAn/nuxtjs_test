<template>
  <div>
    <AppHeader/>
    <section class="container">
      
      <div>
        
        <h2 class="subtitle">{{title}}</h2>
        <h2 class="">【{{liu}}】</h2>
        <h2 class="subtitle">
          <img src="~/static/images/logo.png" alt="" style="width: 50px;">Nuxt.js project
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppLogo from '~/components/AppLogo.vue'
import { mapState } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      title: 'Home Page',
      info: []
    }
  },
  fetch ({ store }) {
    store.commit('article/SET_CURRENT_PAGE', 1)
    return store.dispatch('article/getData', {
      page: 1,
      per_page: 8,
      _embed: true
    })
  },
  computed: {
    ...mapState('article', ['liu'])
  },
  components: {
    AppLogo
    ,AppHeader
  },
  mounted() {
    // this.$axios.get('/wp-content?page=2').then(res=>{
    //   console.log(res)
    // })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

