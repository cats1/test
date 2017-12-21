<template>
  <div id="mheader" class="mheader">
  	<div class="headerwrap">
  		<div class="menuleft">
  			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		      <template v-for="(item,index) in headList" >
		      	 <template v-if="item.children.length>0" >
		      	 	<el-submenu :index="item.dirName" >
		      	      <template slot="title">{{item.name}}</template>
		      	      <template v-for="(citem, cindex) in item.children" v-if="item.children.length>0" >
		      	      	 <el-menu-item :index="citem.dirName">{{citem.name}}</el-menu-item>
		      	 	  </template>
		      	 	</el-submenu>
		      	 </template>
		      	 <template v-else>
		      	   <el-menu-item :index="item.dirName">{{item.name}}</el-menu-item>
		      	 </template>
		      </template>
		    </el-menu>
  		</div>
  		<div class="menuright">
  			<a href="#" class="gohomepage">{{homeText.text}}</a>
  			<el-dropdown>
			  <span class="el-dropdown-link">
			    <span class="useravater">p</span><span class="username">lana</span><i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>{{userText.accountText}}</el-dropdown-item>
			    <el-dropdown-item divided><a href="signin.html">{{userText.signoutText}}</a></el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
  		</div>	    
  	</div> 
  </div>
</template>

<script>
import pageJson from '../../static/zh-cn.json'
export default {
  name: 'mheader',
  data () {
    return {
      activeIndex: 'index',
      headList: [],
      homeText: {},
      userText: {}
    }
  },
  mounted () {
    this.headList = pageJson.mheader
    this.homeText = pageJson.homepage
    this.userText = pageJson.userText
    console.log(this.headList)
  }
}
</script>

<style>

</style>
