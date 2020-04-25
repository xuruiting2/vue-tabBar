<template>
  <div class="tabitem" @click="itemClick">
      <slot name="img1" v-if="!isShow"></slot>
      <slot name="img2" v-else></slot>
      <div :class="{active:isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'tabBarItem',
    props:{
        path:String
    },
    data(){
        return {
            // isShow:false,
            isActive:false
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    },
    computed:{
        isShow(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    }
}
</script>

<style>
.tabitem {
  height: 51px;
}
.tabitem img{
    vertical-align: center;
    width: 26px;
}
.active{
    color:red
}
</style>