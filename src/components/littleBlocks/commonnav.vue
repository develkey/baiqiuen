<template>
  <div id="commonnav">
    <div class="blocktitle">栏目导航</div>
    <ul class="recommendList">
      <li v-for="(item, index) in datas" :key="'commonnav'+index">
        <router-link :to="{name:'Commonlist',query:{'name':nname,type:item.type}}" :class="'add-icon'" v-if="nname == 'news'">{{item.typeName}}</router-link>
        <router-link :to="{name:'Commondetail',query:{'name':nname,id:item.type}}" :class="'add-icon'" v-else>{{item.typeName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'commonnav',
  props: ['datas', 'nname'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#commonnav {font-size: 1.2rem;background-color: #fff;padding: 1rem;margin-bottom: 1rem;}
#commonnav .blocktitle {font-size: 1.2rem;font-weight: bold;text-align: left;color: #000;line-height: 200%;}
#commonnav .recommendList li {padding: 5px 0;border-bottom: 1px solid #c8c8c8;text-align: left;}
#commonnav .recommendList li a {display: block;padding: .2rem 1rem .2rem 0;color: #333;font-size: 1rem;text-decoration: none;}
</style>
