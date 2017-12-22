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
		      	      	 <el-menu-item :index="citem.dirName"><a :href="item.dirLink">{{citem.name}}</a></el-menu-item>
		      	 	  </template>
		      	 	</el-submenu>
		      	 </template>
		      	 <template v-else>
		      	   <el-menu-item :index="item.dirName"><a :href="item.dirLink">{{item.name}}</a></el-menu-item>
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
			    <el-dropdown-item><a :href="pageJson.userText.accountText.dirLink">{{pageJson.userText.accountText.name}}</a></el-dropdown-item>
			    <el-dropdown-item divided><a href="signin.html">{{pageJson.userText.signoutText.name}}</a></el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
  		</div>	    
  	</div> 
  </div>
</template>

<script>
export default {
  name: 'mheader',
  props: ['activeIndex'],
  data () {
    return {}
  },
  computed: {
    pageJson: function () {
      return this.getPageJson()
    },
    headList: function () {
      return this.getPageJson().mheader
    },
    homeText: function () {
      return this.getPageJson().homepage
    }
  },
  created () {}
}
</script>

<style>

</style>
