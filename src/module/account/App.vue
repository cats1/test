<template>
  <div id="app">
    <m-header></m-header>
    <div class="pagebodywrap">
      <el-row class="clearboth">
        <el-col :span="4" class="sectionwrap">
          <dl class="left-menu-list">
            <dt>{{account.leftMenuTitle}}</dt>
            <template v-for="(item,index) in leftMenu">
              <router-link :to="item.dirLink">
                <dd :class="{'active': $route.name === item.dirname}">
                  <span class="bluelines"></span>
                  <a href="javascript:void(0)">{{item.name}}</a>
                </dd>
              </router-link>              
            </template>
          </dl>
        </el-col>
        <el-col :span="19" :offset="1" class="sectionwrap">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from '../../components/Mheader'
import mFooter from '../../components/footer'
export default {
  data () {
    return {
      value1: ''
    }
  },
  computed: {
    account: function () {
      return this.getPageJson().account
    },
    leftMenu: function () {
      return this.getPageJson().account.leftMenu
    }
  },
  components: { mHeader, mFooter },
  created () {},
  mounted () {
    console.log(this.$router)
  }
}
</script>

<style>

</style>
