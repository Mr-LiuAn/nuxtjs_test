<template>
  <div class="">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><nuxt-link to="/">首页</nuxt-link></el-menu-item>
        <el-menu-item index="2"><nuxt-link to="/user">个人中心</nuxt-link></el-menu-item>
        <el-menu-item index="3" disabled>消息</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  }
  ,mounted() {
    let pageName = this.$route.name;
    console.log('this page name='+pageName);
    if(pageName == 'index') {
      this.activeIndex = '1';
    } else if(pageName == 'user'){
      this.activeIndex = '2';
    }
  }
  ,methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

