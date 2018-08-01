<template>
  <transition name="fade">
    <div id="main" :class="'mdui-theme-primary-'+tcolor">
      <v-header></v-header>
      <main>
        <tool-bar></tool-bar>
        <aside class="mdui-container-fluid">
          <router-view></router-view>
        </aside>
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
