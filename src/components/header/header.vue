<template>
  <div id="mheader">
    <header class="navbar navbar-static-top bs-docs-nav" id="top">
      <div class="container">
        <div class="navbar-header">
          <button id="navbarBtn" class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span>白求恩潮阳医院</span>
        </div>
        <nav id="bs-navbar" class="collapse navbar-collapse" v-on:click="navbarClose">
          <ul class="nav navbar-nav">
            <li>
              <router-link :to="{name:'Recruits'}">就医指导</router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name:'Commondetail',query:{'name':'summary',id:'jj'}}">医院概况</router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name:'Recruits'}">人才招聘</router-link>
            </li>
            <li class="logo">
              <router-link :to="{name:'Home'}">  </router-link>
            </li>
            <li>
              <router-link :to="{name:'Commonlist', query: {name: 'news'}}">新闻中心</router-link>
            </li>
            <li class="dropdown">
              <router-link :to="{name:'Commondetail',query:{'name':'notice',id:'jj'}}">医院公告</router-link>
            </li>
            <li>
              <router-link :to="{name:'Commondetail',query:{'name':'contact'}}">联系我们</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>

export default {
  name: 'mheader',
  data () {
    return {
    }
  },
  methods: {
    navbarClose () {
      document.getElementById('navbarBtn').click()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mheader {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 2px 0px #ccc;
  padding: 1rem 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.navbar-nav {
  width: 100%;
}
.navbar-nav>li>a {
  color: #000;
  font-size: 1.2rem;
  line-height: 2rem;
  padding: .8rem 1rem;
}
.navbar {
  margin-bottom: 0;
}
.navbar-header {
  position: relative;
  overflow: hidden;
  margin: 0 !important;
}
.navbar-header > span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.navbar-toggle {
  float: left;
  margin-left: 15px;
}
.navbar-toggle .icon-bar {
  background-color: #000;
}
.navbar-collapse .logo {
  display: none;
}
.navbar-nav>li.logo {
    height: 3.6rem;
}
.navbar-nav>li.logo a{
    height: 100%;
    background: none;
}
@media (min-width: 768px){
  .navbar-nav>li {
    width: 14.2%;
    height: 100%;
  }
  .navbar-collapse .logo {
    display: block;
  }
  .navbar-collapse .logo a:hover {
    background-color: transparent;
  }
  .navbar-collapse{
    background-image: url(./../../assets/images/home/homelogo.png);
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
#mheader .navbar-nav {margin: 0 !important;}
#mheader .dropdown-menu {width: 100%;}

#mheader .dropdown-menu a{padding: .5rem;text-align: center;}
#mheader .container {width: 100% !important;padding: 0 !important;}
</style>
