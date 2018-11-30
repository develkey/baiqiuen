<template>
  <div id="related">
    <div class="blocktitle">相关新闻</div>
    <ul class="recommendList">
      <li v-for="(item, index) in newsDatas" :key="'news'+index" v-if="item.recommend"><a href="javascript:;">{{item.title}}</a></li>
    </ul>
  </div>
</template>
<script>
import newsData from './../../assets/datas/news.json'
export default {
  name: 'related',
  data () {
    return {
      newsDatas: newsData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#related {font-size: 1.2rem;background-color: #fff;padding: .5rem;margin-bottom: .5rem;}
#related .blocktitle {font-size: 1.2rem;font-weight: bold;text-align: left;color: #000;line-height: 200%;}
#related .recommendList li {padding: 5px 0;border-bottom: 1px solid #c8c8c8;}
#related .recommendList li a {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: block;text-decoration: none;color: #333;font-size: 1rem;padding: .2rem 1rem .2rem 0;text-align: left;}
</style>
