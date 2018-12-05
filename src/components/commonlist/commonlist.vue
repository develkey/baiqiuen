<template>
  <div id="commonlist">
    <div class="container">
      <div class="titleBlock" v-if="titleDatas[listname]">
        <img src="./../../assets/images/recruit/clearbg.png" class="mobileshow mobilebg">
        <div class="blockName">{{titleDatas[listname]['cn']}}<br><span>{{titleDatas[listname]['en']}}</span></div>
      </div>
      <div class="searchBar pcshow">
        <label>
          <input class="serchInput" v-model="searchContent">
          <div class="icon-search" v-if="searchContent == ''">文章搜索</div>
        </label>
      </div>
      <div class="wrapper">
        <div class="row">
          <div class="col-xs-12 col-sm-9 col-sm-push-3 newsright">
            <div class="listContent">
              <ul class="listwrap">
                <li v-for="(item, index) in listdatas[listname]" :key="'commonlist'+index">
                  <router-link :to="{name:'Commondetail',query:{'name':'news',id:item.type}}">
                    <div class="itemDesc">
                      <div class="itemdate">{{item.date}}</div>
                      <div class="itemtitle">{{item.title}}</div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-sm-pull-9 newsleft">
            <commonnav :datas="typedatas[listname]" :nname="listname"></commonnav>
            <newsblock></newsblock>
            <contact></contact>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonnav from './../littleBlocks/commonnav'
import newsblock from './../littleBlocks/newsCenter'
import contact from './../littleBlocks/contact'
import typesData from './../../assets/datas/newstypes.json'
import newsData from './../../assets/datas/news.json'
export default {
  name: 'commonlist',
  data () {
    return {
      searchContent: '',
      titleDatas: {
        'news': {
          'cn': '新闻中心',
          'en': 'newsRoom'
        }
      },
      typedatas: typesData,
      listdatas: {
        'news': newsData
      },
      listname: ''
    }
  },
  components: {
    'commonnav': commonnav,
    'newsblock': newsblock,
    'contact': contact
  },
  created () {
    this.listname = this.$route.query.name
    this.listtype = this.$route.query.type
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#commonlist {
  background-image: url(./../../assets/images/recruit/bg.png);background-size: 100%;padding: 4rem 0;color: #000;
}
#commonlist .titleBlock {position: relative;}
#commonlist .searchBar {margin-bottom: 2rem;}
#commonlist label {display: block;position: relative;font-weight: normal;}
#commonlist .serchInput {display: block;width: 100%;padding: 0 2rem;height: 3rem;font-size: 1.2rem;border-radius: 1.5rem;text-align: center;}
#commonlist .icon-search {position: absolute;font-size: 1.2rem;top: 50%;left: 50%;transform: translate(-50%,-50%);}
#commonlist .serchInput:focus+.icon-search {display: none;}
#commonlist .mobilebg {display: block;width: 100%;}
#commonlist .blockName {font-size: 2rem;line-height: 100%;padding: 3rem;}
#commonlist .blockName span {font-size: 1.2rem;color: #444;}
#commonlist .newsright {background-color: #fff;margin-bottom: 1rem;padding-bottom: 4rem;padding-top: 1rem;}
#commonlist a{text-decoration: none;}
#commonlist .listContent {padding: 0 1rem;}
#commonlist .listContent li {position: relative;padding-top: .5rem;border-bottom: 1px solid #c8c8c8;}
#commonlist .listContent li .itemDesc {text-align: left;padding-bottom: .5rem;}
#commonlist .listContent li .itemDesc .itemdate {color: #666;font-size: 1.0rem;}
#commonlist .listContent li .itemDesc .itemtitle {color: #000;font-size: 1.1rem;}
@media screen and (max-width:767px) {
  #commonlist .container {padding: 0 !important;}
  #commonlist {padding: 0;}
  #commonlist .blockName {position: absolute;left:50%;top: 50%;transform: translate(-50%,-50%);}
  #commonlist .row {margin: 0 !important;}
  #commonlist *[class|=col] {padding-left: 0 !important;padding-right: 0 !important;}
  #commonlist .newsleft {padding: 0 1rem !important;}
  #commonlist .newsright {padding-bottom: 2rem !important;}
}
</style>
