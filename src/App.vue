<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="./assets/img/tabBar/home-before.svg" alt="" slot="img1">
        <img src="./assets/img/tabBar/homeAfter.svg" alt="" slot="img2">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/type'>
        <img src="./assets/img/tabBar/typebefore.svg" alt="" slot="img1">
        <img src="./assets/img/tabBar/typeafter.svg" alt=""  slot="img2">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/car'>
        <img src="./assets/img/tabBar/carbefore.svg" alt="" slot="img1">
        <img src="./assets/img/tabBar/carafter.svg" alt=""  slot="img2">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/our'>
        <img src="./assets/img/tabBar/ourbefore.svg" alt="" slot="img1">
        <img src="./assets/img/tabBar/ourafter.svg" alt=""  slot="img2">
        <div slot="text">我们</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from './components/TabBar/tabBar.vue'
import tabBarItem from './components/TabBar/tabBarItem.vue'
export default {
  name: 'App',
  components:{
    tabBar,
    tabBarItem
  },
  data (){
    return {
      // isShow:true
    }
  },
  methods:{

  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
