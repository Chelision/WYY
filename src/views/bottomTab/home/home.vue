<template>
  <div class="Wraper">
    <div class="searchArea">
      <i class="cubeic-microphone"></i>
      <!--<cube-input v-model="value" ></cube-input>-->
      <div class="searchWraper">
        <div class="searchBlock">
          <i class="iconfont icon-search1"></i>
          <input class="searchText" type="text" placeholder="上心-周博宇" @click="searchMusic">
        </div>
      </div>
      <i class="cubeic-hot"></i>
    </div>
    <div class="sliderWraper">
      <cube-slide ref="slide" :data="items" @change="changePage">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img :src="item.image">
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <div class="personal">
      <div class="recommend">
        <div class="itmesNav">
          <i class="iconfont icon-tubiao303"></i>
        </div>
        <p>每日推荐</p>
      </div>
      <div class="songs">
        <div class="itmesNav">
          <i class="iconfont icon-gedan"></i>
        </div>
        <p>歌单</p>
      </div>
      <div class="rankList">
        <div class="itmesNav">
          <i class="iconfont icon-paixingbang"></i>
        </div>
        <p>排行榜</p>
      </div>
      <div class="radioStation">
        <div class="itmesNav">
          <i class="iconfont icon-yinle1"></i>
        </div>
        <p>电台</p>
      </div>
      <div class="live">
        <div class="itmesNav">
          <i class="iconfont icon-zhibohuifang"></i>
        </div>
        <p>直播</p>
      </div>
    </div>
    <div class="suggestWraper">
      <div class="suggestTitle clear-fix">
        <div class="left">
          <h3>推荐歌单</h3>
        </div>
        <div class="right">
          <button class="songsFactory">歌单广场</button>
        </div>
      </div>
      <div class="suggestItems">
        <div class="item">
          <div class="itemCell" v-for="(items,index) in navs" :key="index">
            <img :src="items.src" alt="">
            <div class="bottomTitle">
            </div>
            <i class="iconfont icon-erji-"></i>
            <span>{{items.nb}}万</span>
            <i class="iconfont icon-zhibohuifang"></i>
          </div>
        </div>
        </div>
      </div>
    <div class="switchSongs">
      <div class="btnLists">
        <span class="switchNewSongs" @click="currentTabComponent = 'newSongs'">新歌</span>
        <span class="switchOldSongs" @click="currentTabComponent = 'oldSongs'">碟歌</span>
        <button class="moreSongs">更多</button>
      </div>
      <keep-alive>
        <component v-bind:is="currentTabComponent" class="currentCompents">
        </component>
      </keep-alive>
    </div>
    <div style="height: 0.1rem; background: #eee;"></div>
    <div class="wyySelect">
      <ul style="margin-bottom: 0.1rem">
        <li>云村精选</li>
        <li class="getNewItems">
          <i class="iconfont icon-ai21"></i>
          <span>获取新内容</span>
        </li>
      </ul>
      <div class="selectItems" v-for="(items,index) in wyySelect" :key="index" >
        <p>{{items.title}}</p>
        <div style="margin:0.10rem 0;border-radius:0.1rem;overflow: hidden">
          <img :src="items.url" alt="" style="width: 100%; height: 100%;">
        </div>
      </div>
      <div>
        <video style="width:100%;height:100%" src="https://vd2.bdstatic.com/mda-jf0m8ya65uak7ubk/sc/mda-jf0m8ya65uak7ubk.mp4?auth_key=1559464758-0-0-08a3b416aff5e77feb2848697f7a0397&bcevod_channel=searchbox_feed&pd=bjh&abtest=all" controls="controls">
          您的浏览器不支持 video 标签。
        </video>
      </div>
    </div>
    </div>
</template>
<style lang="less" scoped>
  //搜索区域样式
  .Wraper{
    padding: 0.1rem 0.2rem 0;
  }
  .searchArea{
    align-items: center;
    display: flex;
    justify-content: space-around;
    .cubeic-microphone{
      font-size: 0.25rem;
      color: #bbbbbb;
    }
    .cubeic-hot{
      font-size: 0.25rem;
      color: #bbbbbb;
    }
    .searchWraper{
      width:70%;
      height:0.35rem;
      line-height:0.35rem;
      text-align: center;
      background: #eeeeee;
      border:none;
      border-radius:0.15rem;
      .searchText{
        width:40%;
        background:#eeeeee;
        outline: none;
        padding:0 0.1rem;
      }
    }
    //轮播图样式
  }
  .sliderWraper{
    margin-top:0.2rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .personal{
    margin:0.2rem 0;
    display: flex;
    justify-content: space-around;
    .recommend, .songs, .rankList, .radioStation,.live{
      p{
        font-size: 0.12rem;
      }
      width: 0.6rem;
      text-align: center;
      .itmesNav{
        margin:0.08rem auto;
        width: 0.4rem;
        height: 0.4rem;
        border-radius:0.2rem;
        text-align: center;
        vertical-align: center;
        background: red;
        .iconfont{
          position:relative;
          top:20%;
          left: 5%;
          color: #fff;
          font-size: 0.23rem;
        }
      }
    }
  }
  .suggestWraper{
    padding-top: 0.2rem;
    .suggestTitle{
      display: flex;
      justify-content: space-around;
      height:0.3rem;
      line-height: 0.3rem;
      margin-bottom: 0.2rem;
      .left{
        width: 50%;
        text-align: left;
        h3{
          font-size: 0.16rem;
          font-weight: bold;
          color: #000;
        }
      }
      .right{
        width: 50%;
        text-align: right;
        button{
          padding: 0 0.03rem;
          border-radius:0.1rem;
          background: none;
          border:0.01rem solid #ccc;
          outline: none;
        }
      }
    }
    .suggestItems{
      .item{
        width: 100%; overflow: auto;
        .itemCell{
          height: 1.1rem;
          overflow: hidden;
          width: 30%;
          display: inline-block;
          padding-left: 3%;
          img{
            width:100%;
            height:100%;
          }
          .bottomTitle{
            position:relative;
            top:-0.3rem;
            background:rgba(200,200,200,.4);
            height:0.3rem;
          }
          .icon-erji-{
            color: #222;
            font-size: 0.22rem;
            position:relative;
            top:-0.58rem;left:0.03rem
          }
          span{
            position:relative;
            top:-0.58rem;right:-0.1rem;
            font-size: 0.12rem;
          }
          .icon-zhibohuifang{
            position:relative;
            top:-0.58rem;
            right:-0.3rem
          }
        }
      }
    }
  }
  .switchSongs{
    .btnLists{
      height: 0.3rem;
      line-height: 0.3rem;
      position: relative;
      margin: 0.2rem 0;
      span{
        height: 0.14rem;
        background: none;
        border:none;
        font-size: 0.14rem;
      }
      .switchNewSongs{
        padding-right:0.05rem
      }
      .switchOldSongs{
        padding-left:0.05rem;
        border-left:0.01rem solid #ccc;
      }
      .moreSongs{
        position: absolute;
        right: 0;
        width: 1rem;
        height: 0.26rem;
        line-height: 0.26rem;
        border-radius: 0.06rem;
        background: none;
        border: 0.01 solid #ccc;
      }
    }
  }
  .wyySelect{
    ul{
      padding: 0.10rem 0;
      position: relative;
      border-bottom: 0.01rem solid #ccc;
      li{
        display: inline-block;
      }
      .getNewItems{
        position: absolute;
        right: 0.10rem;
      }
    }
  }
</style>
<script>
import newSongs from './songs/newSongs.vue'
import oldSongs from './songs/oldSongs.vue'
export default {
  data () {
    return {
      currentTabComponent: 'newSongs',
      value: '',
      wyySelect: [
        {
          url: 'http://p1.music.126.net/H11vQOe8kUkDiRslfoPFEQ==/109951164115825366.jpg',
          title: '这些经典原生值得收藏'
        },
        {
          url: 'http://p1.music.126.net/kyFU2rpVofZ2kjDRbUV5kQ==/109951164115681780.jpg',
          title: 'Hi,你的专属#中文流行#视频合集'
        },
        {
          url: 'http://p1.music.126.net/ZAb9bMnlI0xYC3k_hPMd1Q==/109951164115612421.jpg',
          title: '孤单伤心事'
        },
        {
          url: 'http://p1.music.126.net/RthBuagA7WMU-xb9_xK5Qg==/109951164115726046.jpg',
          title: '初闻不知曲中意，听懂已是曲中人'
        }
      ],
      items: [
        {
          url: ('http://p1.music.126.net/NnxluFW8dmMcGOenhOMYaA==/109951164097752142.jpg'),
          image: 'http://p1.music.126.net/eitN_3cy-jjPT6uDG3xuMQ==/109951164102631609.jpg'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://p1.music.126.net/rfc0sLJXCaAm2uGeBDGlCg==/109951164102321263.jpg'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://p1.music.126.net/2T2hdG9Fe-Mn_VSWOM3tRw==/109951164102393075.jpg'
        }
      ], // 轮播图数据
      navs: [
        {
          iconPlay: 'icon-play f-fr',
          nb: 80,
          icon: 'icon-headset',
          title: 'Dubstep丨冲击脑颅的电子脉波⚡️',
          src: 'http://p1.music.126.net/VjnikXA_8BFv9ToFzC_z1Q==/109951164108140823.jpg?param=140y140'
        },
        {
          iconPlay: 'icon-play f-fr',
          nb: 2540,
          icon: 'icon-headset',
          title: '旋律控】超级好听的欧美良曲',
          src: 'http://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?param=140y140'
        },
        {
          iconPlay: 'icon-play f-fr',
          nb: 1670,
          icon: 'icon-headset',
          title: '我想你，但我不会打扰你',
          src: 'http://p2.music.126.net/orIj3g1FSJ8pQF3PG37wcg==/19018252626273411.jpg?param=140y140'
        },
        {
          iconPlay: 'icon-play f-fr',
          nb: 90,
          icon: 'icon-headset',
          title: '那些网易评论过十万的歌，不断更新。',
          src: 'http://p1.music.126.net/K_84LZWdizS0cN7Hwl0laQ==/109951163353347041.jpg?param=140y140'
        },
        {
          iconPlay: 'icon-play f-fr',
          nb: 90,
          icon: 'icon-headset',
          title: '还好我们相遇',
          src: 'http://p2.music.126.net/9eM4Dq5ZLlhTP-H7yhmABg==/109951164079909843.jpg?param=140y140'
        },
        {
          iconPlay: 'icon-play f-fr',
          nb: 180,
          icon: 'icon-headset',
          title: '曾经的抱怨感慨，如今的满腔留恋',
          src: 'http://p1.music.126.net/pqj3VHAXZrWCOvHMcKpM1Q==/109951164092760205.jpg?param=140y140'
        }
      ]
    }
  },
  methods: {
    searchMusic () {
      this.$router.push({ path: '/searchMusic' })
    },
    changePage () {
    }
  },
  components: {
    oldSongs: oldSongs,
    newSongs: newSongs
  },
  beforeCreate: function () {
    
  }
}
</script>
