<template>
  <div class="wraper" style="font-size:0.16rem">
    <div class="searchArea">
      <i class="cubeic-microphone"></i>
      <van-search placeholder="请输入搜索关键词" v-model="value" @click="searchVedio" />
      <i class="cubeic-hot"></i>
    </div>
    <div class="veidNav" style="overflow:auto">
      <div class="title">
        <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
      </div>
      <div class="content">
          <components :is="currentName">

          </components>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
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
</style>
<script>
import found from './nav/found'
import current from './nav/current'
import copy from './nav/copy'
import live from './nav/live'
import MV from './nav/MV'
import square from './nav/square'
import Stage from './nav/Stage'
import personStyle from './nav/personStyle'
import suggest from './nav/suggest'
import summer from './nav/summer'
export default {
  data () {
    return {
      value: '',
      options: {},
      current: '发现',
      currentName: 'found',
      labels: [
        '发现',
        '推荐',
        'LOOK直播',
        'By my side',
        '夏日园游会',
        'Stage',
        '现场',
        '翻唱',
        '广场',
        'MV'
      ]
    }
  },
  methods: {
    searchVedio () {
      this.$router.push({ path: '/searchVedio' })
    },
    changeHandler (cur) {
      switch (cur) {
        case '发现':
          this.currentName = 'found'
          break
        case '推荐':
          this.currentName = 'suggest'
          break
        case 'LOOK直播':
          this.currentName = 'live'
          break
        case 'By my side':
          this.currentName = 'personStyle'
          break
        case '夏日园游会':
          this.currentName = 'summer'
          break
        case 'Stage':
          this.currentName = 'Stage'
          break
        case '现场':
          this.currentName = 'current'
          break
        case '翻唱':
          this.currentName = 'copy'
          break
        case '广场':
          this.currentName = 'square'
          break
        case 'MV':
          this.currentName = 'MV'
          break
      }
      this.current = cur
    }
  },
  components: {
    found,
    current,
    copy,
    live,
    MV,
    square,
    Stage,
    personStyle,
    suggest,
    summer
  }
}
</script>
