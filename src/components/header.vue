<template>
<div class="mdui-color-theme">
  <div class="mdui-toolbar">
    <div class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></div>
    <span class="mdui-typo-title">{{uName}}</span>
    <div class="mdui-toolbar-spacer"></div>
    <div><span v-for='(type,index) in themeType' :key='index' @click="changeTheme(type)" class="mdui-btn-icon border-all" :class="'theme-'+type">{{(index+1)*10}}</span></div>
    <div class="mdui-btn mdui-btn-icon" @click="loginOut"><i class="mdui-icon material-icons">undo</i></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Vheader',
  data () {
    return {
      changeType:'',
      themeType:['blue','indigo','grey','blue-grey']
    }
  },
  computed: {
    uName () {
      return this.$store.state.userName;

    }
  },
  methods: {
    changeTheme(type){
      console.log('checkTheme：'+type);
      let _this = this;
      _this.$store.commit('setTheme',type);
    },
    goDashboard(){
      console.log('goDashboard');
    },
    goSetting(){
      console.log('goSetting');
    },
    loginOut(){
      let _this = this;
      _this.$store.commit('checkLogin',true);
      // _this.$router.push({path: '/'});
      console.log('loginOut');
    }
  }
}
</script>
<style lang="scss" scoped>
$slogan_size:4rem;
$slogan_padding:1rem;

.navbar-header{
  .glyphicon.glyphicon-globe{
    font-size:$slogan_size;
  }
}
.mo-text{
  display: inline-block;
  margin: 0;
  vertical-align: top;
  cursor: pointer;
}
ul li{
  list-style: none;
}
</style>
