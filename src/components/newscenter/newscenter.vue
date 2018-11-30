<template>
  <div id="newscenter">
    <div class="container">
      <div class="titleBlock">
        <img src="./../../assets/images/recruit/clearbg.png" class="mobileshow mobilebg">
        <div class="blockName">新闻中心<br><span>newsRoom</span></div>
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
            <div class="newsContent">
              <div class="newsDate">2018年11月22日</div>
              <div class="newsTitle">汕头市潮阳区委常委李绪明调研白求恩潮阳医养项目</div>
              <div class="newsDetail">
                <p>2018年10月17日上午，汕头市潮阳区委常委李绪明带队赴慈元堂旗下白求恩潮阳医养项目调研，区政府办公室、区卫计局、区国土局、区住建局、区公安局、区供电局、棉北街道等相关部门的领导陪同调研。</p>
                <img src="./../../assets/images/news/news002.jpg">
                <p>李绪明常委一行视察了白求恩潮阳医院（一期）的施工现场，随后在临建园区会议室召开调研会议，听取慈元堂吴菂副总裁对白求恩潮阳医养项目总体规划的汇报，包括白求恩潮阳医院的规划建设内容及工程建设进度。会上，吴菂副总裁向区领导反映了项目开展进程中亟待解决的问题，希望区领导能够加强协调和支持力度，共同推进项目及周边配套设施的顺利建设。</p>
                <p>会后，吴菂副总裁接受潮阳电视台采访，向媒体介绍白求恩潮阳医养项目的建设情况：白求恩医院作为整个医养项目的核心，项目建设节节推进，目前工程桩建设已全部完成，门诊楼和医技楼有望明年春节前封底。</p>
              </div>
            </div>
            <div class="nearbynews row">
              <div class="col-xs-12 col-sm-6">
                <a href="javascript:;">上一个<br><span>白求恩潮阳医养项目门诊楼和医技楼有望明年春节前封顶</span></a>
              </div>
              <div class="col-xs-12 col-sm-6">
                <a href="javascript:;">下一个<br><span>【南方网】白求恩潮阳医院捐赠300箱药品支援潮阳灾区</span></a>
              </div>
            </div>
            <div class="pcshow">
              <related></related>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-sm-pull-9 newsleft">
            <newsnav></newsnav>
            <newsblock></newsblock>
            <contact></contact>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import newsnav from './../littleBlocks/newsnav'
import newsblock from './../littleBlocks/newsCenter'
import contact from './../littleBlocks/contact'
import related from './../littleBlocks/related'
export default {
  name: 'newscenter',
  data () {
    return {
      searchContent: ''
    }
  },
  components: {
    'newsnav': newsnav,
    'newsblock': newsblock,
    'contact': contact,
    'related': related
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#newscenter {
  background-image: url(./../../assets/images/recruit/bg.png);background-size: 100%;padding: 4rem 0;color: #000;
}
#newscenter .titleBlock {position: relative;}
#newscenter .searchBar {margin-bottom: 2rem;}
#newscenter label {display: block;position: relative;font-weight: normal;}
#newscenter .serchInput {display: block;width: 100%;padding: 0 2rem;height: 3rem;font-size: 1.2rem;border-radius: 1.5rem;text-align: center;}
#newscenter .icon-search {position: absolute;font-size: 1.2rem;top: 50%;left: 50%;transform: translate(-50%,-50%);}
#newscenter .serchInput:focus+.icon-search {display: none;}
#newscenter .mobilebg {display: block;width: 100%;}
#newscenter .blockName {font-size: 2rem;line-height: 100%;padding: 3rem;}
#newscenter .blockName span {font-size: 1.2rem;color: #444;}
#newscenter .newsright {background-color: #fff;margin-bottom: 1rem;}
#newscenter a{text-decoration: none;}
#newscenter .newsContent {padding: 2rem 1rem 2rem;}
#newscenter .newsContent .newsDate {font-size: 1.1rem;}
#newscenter .newsContent .newsTitle {font-size: 1.5rem;font-weight: bold;margin-bottom: 1rem;}
#newscenter .newsContent .newsDetail p {text-indent: 2rem;font-size: 1rem;text-align: left;padding: 1rem 0;}
#newscenter .newsContent .newsDetail img {width: 100%;display: block;padding: 1rem 0;}
#newscenter .nearbynews {padding: 0 2rem;}
#newscenter .nearbynews div {padding: 1rem 0;}
#newscenter .nearbynews a {color: #000;}
#newscenter .nearbynews a span {color: #0066cc;display: block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
@media screen and (max-width:767px) {
  #newscenter .container {padding: 0 !important;}
  #newscenter {padding: 0;}
  #newscenter .blockName {position: absolute;left:50%;top: 50%;transform: translate(-50%,-50%);}
  #newscenter .row {margin: 0 !important;}
  #newscenter *[class|=col] {padding-left: 0 !important;padding-right: 0 !important;}
  #newscenter .newsleft {padding: 0 1rem !important;}
  #newscenter .newsright {padding-bottom: 2rem !important;}
  #newscenter .nearbynews div:first-child {border-bottom: 1px solid #c8c8c8;}
}
</style>
