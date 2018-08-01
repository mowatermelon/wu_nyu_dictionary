<template>
  <transition name="fade">
    <div id="main" :class="'mdui-theme-primary-'+tcolor">
      <v-header></v-header>
      <main>
        <aside class="mdui-container-fluid">
          <router-view></router-view>
        </aside>
        <tool-bar class="fixed-bottom mdui-bottom-nav-text-auto"></tool-bar>
    </main>
    </div>
  </transition>
</template>
<script>
import VHeader from '../../components/Header'
import toolBar from '../../components/toolBar'

export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  computed: {
    tcolor () {
      return this.$store.state.themeType;
    }
  },
  methods:{
  },
  components:{
      VHeader,
      toolBar
  }

}

</script>
<style lang="scss">
</style>
