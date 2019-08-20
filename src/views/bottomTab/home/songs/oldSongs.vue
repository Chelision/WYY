<template>
  <div class="wraper" style="font-size:0.16rem">
    <div class="itemSong">
      <div class="demo"  v-for="(item,index) in newSongs" :key="index">
        <img :src="item.url" alt="" style="width: 100%;height: 100%;">
        <h4 class="name">{{item.name}}</h4>
        <h4 class="people">{{item.people}}</h4>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .itemSong{
    .demo{
      display: inline-block;
      width: 30%;
      margin:0 1%;
      .name{
        font-size: 0.12rem;
      }
      .name{
        width:1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.12rem;
      }
      .people{
        width:1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.12rem;
      }
    }

  }
</style>
<script>
export default
{
  data () {
    return {
      newSongs: [
        {
          name: 'Lil Ghost 2.0',
          people: 'Lil Ghost小鬼',
          url: 'http://p4.music.126.net/uEZTdKWoHctIQ9O81WCxoA==/109951164087369428.jpg?param=100y100'
        },
        {
          name: 'Lovebird (Remix)',
          people: 'Far East Movement',
          url: 'http://p3.music.126.net/IfcW6N5vKzF8AyD40esCiw==/109951164079562852.jpg?param=100y100'
        },
        {
          name: 'That Girl (CORSAK Remix)',
          people: 'Olly Murs / 摩登兄弟 / CORSAK',
          url: 'http://p4.music.126.net/ibXSsyVeMggh99R31ZML1Q==/109951164105938094.jpg?param=100y100'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
