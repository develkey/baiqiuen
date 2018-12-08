<template>
  <div id="recruit">
    <ul class="recommendList">
      <li v-for="(item, index) in recruitsDatas" :key="'recruit'+index">
        <router-link :to="{name:'Commondetail',query:{'name':'recruit',id:item.type}}" :class="'add-icon'">
          {{item.typeName}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import recruitsData from './../../assets/datas/newstypes.json'
export default {
  name: 'recruits',
  data () {
    return {
      recruitsDatas: recruitsData['recruit']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#recruit {font-size: 1.2rem;}
.recommendList li {padding: 5px 0;border-bottom: 1px solid #c8c8c8;text-align: left;}
.recommendList li a {display: block;padding: .5rem 1rem;color: #333;font-size: 1.2rem;text-decoration: none;}
</style>
