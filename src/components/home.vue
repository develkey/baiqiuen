<template>
  <div class="home">
      <div class="banner pcshow">
        <div class="container">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <a href="javascript:;">
                <img class="bannerimg" src="./../assets/images/home/banner1.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{name:'Commondetail',query:{'name':'summary',id:'jj'}}">
                <div class="context bc2">
                  <div class="blocktitle">
                    <div>白求恩潮阳医院<br><span>专业医疗服务体验</span></div>
                  </div>
                  <div class="blockbutton">了解更多</div>
                </div>
                <img class="bannerimg" src="./../assets/images/home/banner2.jpg">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{name:'Recruit'}">
                <div class="context bc3">
                  <div class="blocktitle">
                    <div>人才招聘<br><span>Recruitment</span></div>
                  </div>
                  <div class="blockbutton">招聘计划</div>
                </div>
                <img class="bannerimg" src="./../assets/images/home/banner3.jpg">
              </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"><div class="dot left"></div><div class="dot center"></div><div class="dot right"></div></div>
          </swiper>
        </div>
      </div>
      <div class="banner mobileshow">
        <div class="container">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <a href="javascript:;">
                <img class="bannerimg" src="./../assets/images/home/mbanner1.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:;">
                <div class="context bc2">
                  <div class="blocktitle">
                    <div>白求恩潮阳医院<br><span>专业医疗服务体验</span></div>
                  </div>
                  <div class="blockbutton">了解更多</div>
                </div>
                <img class="bannerimg" src="./../assets/images/home/mbanner2.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:;">
                <div class="context bc3">
                  <div class="blocktitle">
                    <div>人才招聘<br><span>Recruitment</span></div>
                  </div>
                  <div class="blockbutton">招聘计划</div>
                </div>
                <img class="bannerimg" src="./../assets/images/home/mbanner3.jpg">
              </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"><div class="dot left"></div><div class="dot center"></div><div class="dot right"></div></div>
          </swiper>
        </div>
      </div>
      <div class="quicklink">
        <div class="container">
          <div class="col-xs-6 col-md-3"><a href=""><img src="./../assets/images/home/icon1.png"></a></div>
          <div class="col-xs-6 col-md-3"><a href=""><img src="./../assets/images/home/icon2.png"></a></div>
          <div class="col-xs-6 col-md-3"><a href=""><img src="./../assets/images/home/icon3.png"></a></div>
          <div class="col-xs-6 col-md-3"><a href=""><img src="./../assets/images/home/icon4.png"></a></div>
        </div>
      </div>
      <div class="homenews">
        <div class="container">
          <img class="bannerimg" src="./../assets/images/home/newsbg.jpg">
          <div class="context">
            <div class="row">
              <div class="blocktitle">
                <div>新闻中心<br><span>NewsRoom</span></div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="new">
                  <div>
                    <div class="date">2014年11月27日</div>
                  </div>
                  <div class="title">白求恩潮阳医养项目门诊楼和医技楼有望明年春节前封顶</div>
                </div>
                <div class="new">
                  <div>
                    <div class="date">2014年11月26日</div>
                  </div>
                  <div class="title">汕头市潮阳区委常委李绪明调研白求恩潮阳医养项目</div>
                </div>
                <div class="new">
                  <div>
                    <div class="date">2014年8月30日</div>
                  </div>
                  <div class="title">【南方网】白求恩潮阳医院捐赠300箱药品支援潮阳灾区</div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6 second">
                <div class="new">
                  <div>
                    <div class="date">2014年7月8日</div>
                  </div>
                  <div class="title">【中国发展网】广州中医药大学与慈元堂开启医教研战略合作模式</div>
                </div>
                <div class="new">
                  <div>
                    <div class="date">2014年4月13日</div>
                  </div>
                  <div class="title">汕头市委书记方利旭调研白求恩潮阳医院</div>
                </div>
                <div class="new">
                  <div>
                    <div class="date">2014年3月18日</div>
                  </div>
                  <div class="title">林依民副市长一行调研慈元堂白求恩潮阳医院项目</div>
                </div>
              </div>
              <div class="blockbutton">更多新闻</div>
            </div>
          </div>
        </div>
      </div>

      <div class="enterpriselink">
        <div class="container">
          <router-link :to="{name:'Commondetail',query:{'name':'enterprises',id:'gl'}}">
            <div class="context">
              <div class="blocktitle">
                <div>关联企业<br><span>Associated Enterprises</span></div>
              </div>
              <div class="blockbutton">了解更多</div>
            </div>
          </router-link>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        speed: 2000,
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 30
        },
        autoplay: {
          delay: 2000
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {font-weight: normal;}
ul {list-style-type: none;padding: 0;}
li {display: inline-block;margin: 0 10px;}
a {color: #42b983;text-decoration: none;}
.bannerimg {display: block;width: 100%;}
.swiper-scrollbar {width: 100px !important;left: 50% !important;margin-left: -50px;background-color: transparent;}
.swiper-scrollbar .dot{width: 30px;height: 5px;position: absolute;background-image: url(./../assets/images/home/scrollbarbg.png);background-color: transparent;background-size: 30px 5px;border-radius: 10px;}
.swiper-scrollbar .dot.left {left: 0;}
.swiper-scrollbar .dot.center {left: 35px;}
.swiper-scrollbar .dot.right {right: 0;}
.quicklink {padding: .5rem 0;}
.quicklink .container {display: flex;flex-wrap: wrap;padding: .5rem !important;}
.quicklink .container [class|=col] {padding: .5rem !important;}
.quicklink img {width: 100%;}
.quicklink .container:before {display: none;}
.homenews .context {position: relative;z-index: 2;color: #fff;padding: 0 3rem;}
.banner .context {position: absolute;top: 0;left: 50%;transform: translateX(-50%);padding: 2rem 0;}
.banner .context.bc3 .blocktitle{color: #000;}
.banner .context.bc3 .blockbutton {color: #000;border-color: #000;}
.blocktitle {padding: 2rem 0;font-size: 2rem;color: #fff;}
.blocktitle span {font-size: 1.5rem;}
.blockbutton {margin-bottom: 2rem;padding: 0 1.5rem;border: 1px solid #fff;height: 3rem;line-height: 3rem;border-radius: 2rem;display: inline-block;font-size: 1.5rem;color: #fff;cursor: pointer;}
.homenews .new {font-size: 1.2rem;text-align: left;color: #ccc;padding: 1rem 0;border-bottom: 1px solid #c8c8c8;}
.homenews .new:last-child {border-bottom: 0;}
.homenews .new .title {font-size: 1.5rem;color: #fff;}
.enterpriselink .container {overflow: hidden;position: relative;text-align: center;background-image: url(./../assets/images/home/ae.jpg );background-size: 100%;background-position: center; }
.homenews .container {overflow: hidden;position: relative;text-align: center;/*background-image: url(./../assets/images/home/newsbg.jpg );background-size: 100%;background-position: center; */}
.homenews img {position: absolute;min-height: 100%;min-width:100%;left: 50%;top: 50%;transform:translate(-50%,-50%);display: inline-block;}
.home .container {width: 100% !important;padding: 0 !important;}
@media screen and (max-width:767px) {
  .second {display: none;}
}
@media screen and (min-width:768px) {
.quicklink .container {padding: 2rem !important;}
.quicklink .container [class|=col] {padding: 2rem !important;}
}
</style>
