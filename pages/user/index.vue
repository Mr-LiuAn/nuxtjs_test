<template>
  <div>
    <AppHeader />
    <section class="container">
      
      <div>
        
        <h2 class="subtitle">{{title}}</h2>
        <h2 class="">【{{liu}}】</h2>

      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import { mapState } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
      title: 'My Page',
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
    AppHeader
  },
  mounted() {
    // this.$axios.get('/wp-content?page=2').then(res=>{
    //   console.log(res)
    // })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  head(){
        return {
            title: '个人中心',
            meta:[
                // hid: 'description' 写成这样就不会出现两个 meta
                {hid: 'description',name:'description',content:'this is news page'}
            ]
        }
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

