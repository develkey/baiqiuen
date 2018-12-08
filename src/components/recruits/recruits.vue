<template>
  <div id="recruits">
    <div class="container">
      <div class="titleBlock">
        <img src="./../../assets/images/recruit/clearbg.png" class="mobileshow mobilebg">
        <div class="blockName">招纳贤才<br><span>期待您的加入</span></div>
      </div>
      <div class="listWrap">
        <div class="row listhead">
          <div class="col-sm-3 pcshow"></div>
          <div class="col-xs-12 col-sm-9">
            <div class="col-xs-6 total">15条结果</div>
            <div class="col-xs-6 sort">排序方式:<span>最新</span></div>
          </div>
        </div>
        <div class="row listbody">
          <div class="col-sm-3 pcshow noleft">
            <recruit></recruit>
          </div>
          <div class="col-xs-12 col-sm-9 noright">
            <ul class="recruitlist">
              <li v-for="(item, index) in recruitsDatas" :key="'recruits'+index" :class="item.section">
                <router-link :to="{name:'Commondetail',query:{'name':'recruit',id:item.type}}">
                  <div class="postDesc">
                    <div class="post">{{item.post}}</div>
                    <div class="location">{{item.location}}</div>
                    <div class="date">{{item.date}}</div>
                  </div>
                  <div class="applyBtn">提交简历</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import recruit from './../littleBlocks/recruit'
import recruitsData from './../../assets/datas/recruits.json'
export default {
  name: 'recruits',
  data () {
    return {
      recruitsDatas: recruitsData
    }
  },
  mounted () {
  },
  components: {
    'recruit': recruit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#recruits {
  background-image: url(./../../assets/images/recruit/bg.png);background-size: 100%;padding: 4rem 0;
}
#recruits a {text-decoration: none;}
#recruits .container {background-color: #fff;padding: 0 3rem;}
#recruits .titleBlock {position: relative;}
#recruits .mobilebg {display: block;width: 100%;}
#recruits .blockName {font-size: 2rem;line-height: 100%;padding: 3rem;}
#recruits .blockName span {font-size: 1.2rem;}
#recruits .listhead {border-bottom: 1px solid #c8c8c8;line-height: 300%;}
#recruits .listhead .total {text-align: left;font-size: 1.5rem;color: #444;}
#recruits .listhead .sort {text-align: right;font-size: 1.2rem;color: #888;}
#recruits .listhead .sort span {color: #444;}
#recruits .noleft {padding-left: 0 !important;}
#recruits .noright {padding-right: 0 !important;}
#recruits .listbody {padding: 1rem 0;}
#recruits .recruitlist li {position: relative;padding-top: 1rem;border-bottom: 1px solid #c8c8c8;}
#recruits .recruitlist li .postDesc {text-align: left;padding-bottom: 1rem;}
#recruits .recruitlist li .applyBtn {position: absolute;right: 1rem;top: 50%;transform: translateY(-50%);font-size: 1.4rem;color: #0066cc;cursor: pointer;padding: 1rem 0;}
#recruits .recruitlist li .postDesc .post {color: #0066cc;font-size: 1.4rem;}
#recruits .recruitlist li .postDesc .location {color: #666;font-size: 1.2rem;}
#recruits .recruitlist li .postDesc .date {color: #000;font-size: 1.3rem;}
@media screen and (max-width:767px) {
  #recruits {padding: 0;}
  #recruits .container {padding: 0 !important;}
  #recruits .blockName {position: absolute;left:50%;top: 50%;transform: translate(-50%,-50%);}
  #recruits .row {margin: 0 !important;}
  #recruits .listWrap {padding: 0 1.5rem;}
  #recruits *[class|=col] {padding-left: 0 !important;padding-right: 0 !important;}
}
</style>
