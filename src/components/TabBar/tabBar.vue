<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'tabBar'
}
</script>

<style>
#tabbar {
  display: flex;
  justify-content: space-around;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -3px 1px rgb(1, 1,1,.07);
  text-align: center;
}
</style>