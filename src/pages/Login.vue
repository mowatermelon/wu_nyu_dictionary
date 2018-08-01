<template>
  <transition name="fade">
    <div class="mdui-container mdui-m-t-4" :class="'mdui-theme-primary-'+tcolor">
      <p class="mdui-text-center mdui-typo-title mdui-text-color-red" :class="[!error?'hide':'']" v-text="errorInfo"></p>
      <p class="mdui-text-center mdui-typo-title mdui-text-color-red"  :class="[!success?'hide':'']" v-text="successInfo"></p>

      <div class="login-text mdui-text-color-theme">
        <div class="mdui-text-center" v-if="!gores">
          <i class="mdui-icon material-icons mdui-typo-display-4">account_circle</i>
        </div>
        <div class="mdui-text-center" v-if="gores">
          <i class="mdui-icon material-icons mdui-typo-display-4">group_add</i>
        </div>

        <div class="mdui-textfield" :class="checkForm">
          <label class="mdui-textfield-label">用户名</label>
          <input class="mdui-textfield-input" type="text"  id="userName" v-model="uname" required/>
          <div class="mdui-textfield-error">用户名不能为空</div>
        </div>

        <div class="mdui-textfield" :class="checkForm">
          <label class="mdui-textfield-label">密码</label>
          <input class="mdui-textfield-input" type="password"  id="userPwd" v-model="password" required/>
          <div class="mdui-textfield-error">密码不能为空</div>
        </div>

        <div class="mdui-textfield" v-if="gores" :class="checkForm">
          <label class="mdui-textfield-label">确认密码</label>
          <input class="mdui-textfield-input" type="password"  id="userrPwd" v-model="rpassword" required/>
          <div class="mdui-textfield-error">确认密码不能为空</div>
        </div>

        <div v-if="!gores">
          <button class="mdui-btn mdui-ripple mdui-col-xs-12 mdui-ripple-white btn-hollow mdui-m-b-3" @click="checkLogin()">登陆账户</button>
          <button class="mdui-btn mdui-ripple mdui-ripple-white mdui-float-right btn-hollow" @click="goReg()">用户注册</button>
        </div>
        <div v-if="gores">
          <button class="mdui-btn mdui-ripple mdui-col-xs-12 mdui-ripple-white btn-hollow mdui-m-b-3" @click="checkReg()">注册账户</button>
          <button class="mdui-btn mdui-ripple mdui-ripple-white mdui-float-right btn-hollow" @click="goLogin()">已有帐号去登陆</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      uname: '',
      password: '',
      rpassword: '',
      success: false,
      error: false,
      errorInfo: '',
      successInfo: '',
      gores: false,
      copyright: 'Copyright © 2018 cover by WaterMelon <br />鄂ICP备66666666号-5<br />出其东门，有女如云，虽则如云，匪我思存。'
    };
  },
  computed: {
    loginInfo () {
      return '你输入的用户名是' + this.uname + '你输入的密码是' + this.password;
    },
    checkForm () {
      return {
        'has-success': this.success,
        'has-error': this.error
      };
    },
    checkInput () {
      return {
      'glyphicon-ok': this.success,
      'glyphicon-remove': this.error
      };
    },
    tcolor () {
      return this.$store.state.themeType;
    }
  },
  methods: {
    checkLogin () {
      const key = '123';
      let _this = this;
      if (_this.password === key && _this.uname === key) {
        _this.error = false;
        _this.success = true;
        _this.successInfo = '登录成功正在跳转....';

        _this.$store.commit('setUName',_this.uname);
        _this.$store.commit('checkLogin',false);

       //保证登录进入也能有正确的路由信息显示
        _this.$router.push({path: '/v-dic'});
      } else {
        _this.error = true;
        _this.errorInfo = '用户名或者帐号输入错误请确认';
      }
    },
    checkReg () {
      let _this = this;
      _this.error = false;
      if (_this.uname!== '' && _this.password !== '' && _this.password === _this.rpassword) {
        _this.$store.commit('setUName',_this.uname);
        _this.$store.commit('checkLogin',false);
        //保证登录进入也能有正确的路由信息显示
        _this.$router.push({path: '/Home', query: {tabIndex: 1}});
        // _this.gores = false;
      } else {
        _this.error = true;
        _this.errorInfo = '请确认所有输入项都填写完成，或者两次密码输入是否匹配';
      }
    },
    goReg () {
       this.errorInfo = '';
       this.uname = '';
       this.password = '';
       this.error = false;
       this.gores = true;
    },
    goLogin () {
      this.uname = '';
      this.password = '';
      this.rpassword = '';
      this.error = false;
      this.gores = false;
    },
    goBack () {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
$normal_shadom:#ddd;//页面默认阴影颜色
$normal_active:#5bc0de;//页面默认主色调
$normal_color:#fff; //页面默认未激活色

.container{
    // position:relative;
    .loginBox{
      box-shadow: 0 0 21px 2px $normal_shadom;
      margin-top:10%;
      padding: 5%;
      .loginIcon{
        background: $normal_active;
        color:$normal_color;
        border-radius: 100%;
        padding: 25px;
        font-size: 40px;
        margin-bottom: 30px;
      }
      .form-group {
          margin-right: -30px;
          margin-left: 0;
      }
      label{
        color: $normal_active;
        background-color: $normal_color;
        width: auto;
        line-height: 20px;
      }
      .btn{
        outline: 0 none;
      }
      .submitBtn{
        border-color:$normal_active;
        color: $normal_active;
        background-color: $normal_color;
      }
      .submitBtn:hover,
      .submitBtn:focus,
      .submitBtn.focus {
        background-color: $normal_active;
        color: $normal_color;
      }
      .btn-link{
        text-decoration: none;
      }
      .btn-link:hover,
      .btn-link:focus,
      .btn-link.focus {
        font-weight: bolder;
      }
      .col-xs-10.has-feedback{
        padding-left: 0;
        padding-right: 0;
        margin-top: 1px;
        input{
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

      }
    }

}

@media (max-width:768px){
  .container{
      // position:relative;
      .loginBox{
        box-shadow: 0 0 21px 2px $normal_color;
      }
  }
}
</style>
