<!--左侧面板信息-->
<template>
  <div class="mdui-tab mdui-color-theme" mdui-tab>
    <router-link class="mdui-ripple mdui-ripple-white" v-for="(tab, tindex) in Tabs" :key='tindex' :to="{path:tab.link}">
      <i class="mdui-icon material-icons">{{tab.icon}}</i>
      <label>{{tab.title}}</label>
    </router-link >
  </div>
</template>
<script>

import Dictionary from '../pages/Dictionary'
import Voice from '../pages/Voice'
import Rule from '../pages/Rule'
import Address from '../pages/Address'
import {getAjax} from '../service/moAjax'

export default {
    name: 'toolBar',
    data() {
      return {
        isActive: 0,// 默认的tab数
        Tabs: []
        }
    },
    methods: {
      collapseTab: function(ind) {
        this.isActive = ind;
      },
      goRouter: function(tabIndex,listIndex) {
        this.isActiveList = tabIndex+'--'+listIndex;
      }
    },
    components:{
      Dictionary,
      Voice,
      Rule,
      Address
    },
  created:function(){
    let that = this;
    getAjax('../../static/mock/ToolBar.json')
      .then((response) => {
        console.log("请求到的面板数据是");
        console.log(response.data);
        that.Tabs = response.data || [];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  }
</script>
<style>

</style>
