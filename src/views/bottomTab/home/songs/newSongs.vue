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
      width: 33%;
      .name{
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
          name: '路过人间',
          people: '郁可唯',
          url: 'http://p3.music.126.net/Otu98pBAFmTF1oZtpclyCA==/109951164053279186.jpg?param=100y100'
        },
        {
          name: "I Don't Care",
          people: 'Ed Sheeran / Justin Bieber',
          url: 'http://p4.music.126.net/jBpXM2nlImE7GF7AgBkktQ==/109951164063410613.jpg?param=100y100'
        },
        {
          name: '残酷月光',
          people: '费启鸣',
          url: 'http://p3.music.126.net/NgIotppbv3RGGi9FpslMUQ==/109951164092096675.jpg?param=100y100'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
