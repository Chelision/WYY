<template>
  <div class="wraper" style="overflow: hidden;font-size:0.16rem">
    <!--头部样式-->
    <div class="title">
      <i class="iconfont icon-cloud"></i>
      <span class="content">我的音乐</span>
      <i class="iconfont icon-zhengzaibofang"></i>
    </div>
    <!--导航样式-->
    <div class="nav-wraper">
      <div class="mine-nav">
        <div v-for="(item,index) in navData" :key="index" style="margin:0 0.20rem">
          <div class="icon-wraper">
            <i :class="item.iconImg"></i>
          </div>
          <div class="description">
            {{item.description}}
          </div>
        </div>
      </div>
    </div>
    <!--个人信息设计-->
    <div class="personal">
      <div class="personal-item"
           v-for="(item,index) in personal"
           :key="index">
        <div class="icon-wraper">
          <i :class="item.icon" ></i>
        </div>
        <div class="content-wraper">
          <span>{{item.item}}</span>
          <span class="personal-item-num">{{item.num}}</span>
          <i :class="item.more" style=""></i>
        </div>
      </div>
    </div>
    <div style="height:0.10rem;background:#eee"></div>
    <!-- 歌单设计 -->
    <div class="songs-form">
      <!-- 歌单表头 -->
      <div class="songs-form-title">
        <i class="iconfont icon-xiangxia"></i>
        <i class="iconfont icon-tianjia"></i>
        <span class="span1">我创建的歌单</span>
        <span class=span2>(1)</span>
        <i class="iconfont icon-fenxiang2"></i>
      </div>
      <!-- 我喜欢的音乐 -->
      <div class="mine-music" @click="getMyMusic">
        <div class="icon-box">
          <i class="iconfont icon-shoucang2"></i>
        </div>
        <div class="music-content">
          <p>我喜欢的音乐</p>
          <p>68首</p>
        </div>
        <div class="like-mode">
          <i class="iconfont icon-shoucang"></i>
          <span>心动模式</span>
        </div>
      </div>
      <!-- 截图导入歌单 -->
      <div class="import-songs">
          <div>
            <div class="icon-wraper">
              <i class="iconfont icon-book"></i>
            </div>
            <div class="content">
              截图导入歌单
            </div>
          </div>
      </div>
    </div>
    <div style="height:0.10rem;background:#eee">
    </div>
    <!-- 推荐歌单 -->
    <div class="suggest-wraper" style="margin-top:0.10rem">
      <!-- 推荐头部设计 -->
      <div class="suggest-header" style="padding-bottom:0.05rem">
        <i class="iconfont icon-shoucang" style="background:red;
        color:white;
        border-radius:0.10rem;
        font-size:0.20rem"></i>
        <span style="font-weight:bold;font-size:0.18rem;margin-left:0.05rem;">推荐歌单</span>
      </div>
      <!-- 推荐内容设计 -->
      <div class="content">
          <div class="item" 
          v-for="(item,index) in suggestSongs" 
          :key="index" 
          style="display:inline-block;width:31%;margin:1%">
            <div style="height:1.04rem">
              <img :src="item.imgUrl" alt="" style="width:100%" title="aaaa">
            </div>
            <div style="padding-top:0.10rem;height:0.45rem;overflow:auto;font-size:0.14rem">
              <span>{{item.description}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .wraper{
    padding: 0 0.20rem;
  }
  //头部样式
  .title{
    padding: 0.20rem 0;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .icon-cloud{
      font-size:0.25rem;
    }
    .content{
      font-size: 0.18rem;
      font-weight: bold;
    }
    .icon-zhengzaibofang{
      font-size:0.20rem;
    }
  }
  //导航部分样式
  .nav-wraper{
    height: 0.70rem;
    overflow-y: hidden;
    border-bottom:0.01rem solid #ccc;
    .mine-nav{
      width: 100%;
      display: flex;
      white-space:nowrap;
      overflow:auto;
      height:0.80rem;
      text-align:center;
      .icon-wraper{
        margin:0 auto;
        height:0.40rem;
        line-height:0.40rem;
        text-align:center;
        width:0.40rem;
        border-radius:0.20rem;
        background:red;
        i{
          color:#fff;
          font-size:0.25rem
        }
      }
      .description{
        margin-top:0.10rem;
        font-size: 0.10rem;
      }
    }
  }
  //个人信息设计
  .personal{
    .personal-item{
      display:flex;
      height:0.40rem;
      line-height: 0.40rem;
      padding:0.05rem 0;
      .icon-wraper{
        width:10%;
        height:0.40rem;
        line-height:0.40rem;
        i{
          font-size:0.20rem;
          color:black
        }
      }
      .content-wraper{
        width:90%;
        height:0.40rem;
        line-height:0.40rem;
        border-bottom:0.01rem solid #eee;
        position:relative;
        i{
          position:absolute;
          right:0
        }
      }
      .content-wraper :first-child(span){
        height:0.30rem;
        line-height:0.30rem;
        padding-left:0.15rem
      }
      .content-wraper>span:nth-child(2){
        position:absolute;right:0.25rem
      }
    }
  }
  .personal>.personal-item:last-child>.content-wraper{
        border-bottom: none;
  }
  //歌单设计
  .songs-form{
    margin-top:0.10rem;
    // 歌单表头
    .songs-form-title{
      position:relative;
    }
    .songs-form-title i:first-child{
      font-weight:0.26rem;
      font-weight:bold;
    }
    .songs-form-title >i:nth-child(2){
      position:absolute;
      right:0.30rem;
    }
    .songs-form-title i:last-child{
      position:absolute;
      right:0
    }
    .songs-form-title>span:nth-child(3){
      font-weight: bold;
      margin-left:0.10rem;
    }
    //我喜欢的音乐
    .mine-music{
      display:flex;
      height:0.50rem;
      justify-content:flex-start;
      align-items:center;
      position:relative;
      margin-top:0.10rem;
      .icon-box{
        height:0.40rem;
        width:0.40rem;
        text-align:center;
        line-height:0.4rem;
        background:rgba(0,0,0,.6);
        border-radius:0.05rem;
        .icon-shoucang2{
          font-size:0.25rem;
          color:white;
        }
      }
      .music-content{
        padding-left:0.20rem;
      }
      .music-content p:nth-child(2){
        color:#ccc;
        font-size:0.13rem
      }
      .like-mode{
        position: absolute;
        right: 0;
        height: 0.30rem;
        border: 0.01rem solid #ccc;
        border-radius: 0.10rem;
        line-height: 0.30rem;
        padding: 0 0.10rem;
        .icon-shoucang{
          color:black;
          font-size:0.14rem            
        }
        span{
          margin-left:0.05rem;
          font-size:0.14rem
        }
      }
    }
    //导入歌单
    .import-songs{
      margin-top:0.10rem;
      .icon-wraper{
        height:0.40rem;
        width:0.40rem;
        border:0.01rem dashed #ccc;
        text-align:center;
        line-height:0.40rem;
        display:inline-block;
        .icon-book{
          font-size:0.25rem;
        }
      }
      .content{
        height:0.40rem;
        line-height:0.40rem;
        padding-left:0.20rem;
        display:inline-block;
      }
    }
  }
</style>

<script>
export default {
  data () {
    return {
      // 导航信息数据
      navData: [
        {
          description: '私人FM',
          iconImg: 'iconfont icon-pindao'
        },
        {
          description: '亲子频道',
          iconImg: 'iconfont icon-qinzi'
        },
        {
          description: 'Stai空间',
          iconImg: 'iconfont icon-lkingboyewanyueliang'
        },
        {
          description: '最新电音',
          iconImg: 'iconfont icon-youxupailie'
        },
        {
          description: '私藏推荐',
          iconImg: 'iconfont icon-shoucang2'
        },
        {
          description: '古典专区',
          iconImg: 'iconfont icon-guqin'
        },
        {
          description: '跑步FM',
          iconImg: 'iconfont icon-paobu'
        },
        {
          description: '驾车模式',
          iconImg: 'iconfont icon-zidongjiashi'
        }
      ],
      // 个人设计数据
      personal: [
        {
          icon: 'iconfont icon-yinyue',
          item: '本地音乐',
          num: 0,
          more: 'iconfont icon-webicon213'
        },
        {
          icon: 'iconfont icon-bofang1',
          item: '最近播放',
          num: 89,
          more: 'iconfont icon-webicon213'
        },
        {
          icon: 'iconfont icon-yinle2',
          item: '我的电台',
          num: 0,
          more: 'iconfont icon-webicon213'
        },
        {
          icon: 'iconfont icon-shoucang',
          item: '我的收藏',
          num: 309,
          more: 'iconfont icon-webicon213'
        }
      ],
      //推荐歌单数据
      suggestSongs:[
        {
          imgUrl:"http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100",
          num:0,
          description:"云音乐飙升榜",
        },
        {
          imgUrl:"http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100",
          num:0,
          description:"云音乐新歌榜",
        },
        {
          imgUrl:"http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100",
          num:0,
          description:"云音乐原创榜",
        },
        {
          imgUrl:"http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40",
          num:0,
          description:"云音乐热歌榜"
        },
        {
          imgUrl:"http://p1.music.126.net/TuGxihwbiPmoHoFGvIuu_w==/109951163781770038.jpg?param=40y40",
          num:0,
          description:"江小白YOLO云音乐说唱榜",
        },
        {
          imgUrl:"http://p1.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg?param=40y40",
          num:0,
          description:"云音乐古典音乐榜",
        },
        {
          imgUrl:"http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40",
          num:0,
          description:"云音乐电音榜",
        },
        {
          imgUrl:"http://p1.music.126.net/bZvjH5KTuvAT0YXlVa-RtQ==/109951163326845001.jpg?param=40y40",
          num:0,
          description:"抖音排行榜",
        },
        {
          imgUrl:"http://p1.music.126.net/XbjRDARP1xv5a-40ZDOy6A==/109951163785427934.jpg?param=40y40",
          num:0,
          description:"新声榜",
        },
        {
          imgUrl:"http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40",
          num:0,
          description:"云音乐ACG音乐榜"
        },
        {
          imgUrl:"http://p1.music.126.net/vs-cMh49e6qPEorHuhU07A==/18737877162497499.jpg?param=40y40",
          num:0,
          description:"云音乐韩语榜",
        },
        {
          imgUrl:"http://p1.music.126.net/CUqQp33MZf_m0BwH4u0V6A==/109951163078922993.jpg?param=40y40",
          num:0,
          description:"电竞音乐榜"
        }

      ]
    }
  },
  methods:{
    getMyMusic(){
      // let that = this;
      this.$router.push({
        path:'/songsForm'
      })
    }
  }
}
</script>
