<template>
  <div id="newsnav">
    <div class="blocktitle">栏目导航</div>
    <ul class="recommendList">
      <li v-for="(item, index) in newstypesDatas" :key="'newsnav'+index"><a href="javascript:;" class="add-icon">{{item.typeName}}</a></li>
    </ul>
  </div>
</template>
<script>
import newstypesData from './../../assets/datas/newstypes.json'
export default {
  name: 'newsnav',
  data () {
    return {
      newstypesDatas: newstypesData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#newsnav {font-size: 1.2rem;background-color: #fff;padding: 1rem;margin-bottom: 1rem;}
#newsnav .blocktitle {font-size: 1.2rem;font-weight: bold;text-align: left;color: #000;line-height: 200%;}
#newsnav .recommendList li {padding: 5px 0;border-bottom: 1px solid #c8c8c8;text-align: left;}
#newsnav .recommendList li a {display: block;padding: .2rem 1rem .2rem 0;color: #333;font-size: 1rem;text-decoration: none;}
</style>
