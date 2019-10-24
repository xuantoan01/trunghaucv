<template>
<div>
  <layout-header></layout-header>
  <router-view/>
  <layout-footer></layout-footer>
</div>
</template>
<script>
import LayoutHeader from '@/components/Layout/Header.vue';
import LayoutFooter from '@/components/Layout/Footer.vue';
export default {
  name:'app',
  components:{
    LayoutHeader,
    LayoutFooter,
  }
}
</script>
<style lang="scss"> 
@import '@/assets/stylesheets/main.scss';
</style>
