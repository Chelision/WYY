<template>
  <div class="wraper" ref="viewWindow" style="overflow: scroll;font-size:0.16rem">
    <div class="item2"
         v-for="(item,index) in items"
         :key="index">
      <div class="content">
        <video controls
               style="width:100%"
               class="secondSong"
               :src="item.src">
        </video>
        <div class="nav">
          <div class="title">
            <h4>耿耿于怀（麦浚龙）</h4>
          </div>
          <div class="operate">
            <div class="itemnav">
              <i class="cubeic-edit"></i><span>{{item.num1}}</span>
            </div>
            <div class="itemnav">
              <i class="cubeic-like"></i><span>{{item.num2}}</span>
            </div>
            <div class="itemnav">
              <i class="cubeic-more"></i><span>{{item.num3}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="refreshShow" style="position: fixed;bottom: 0.50rem;width: 100%;display: flex;justify-content: center;align-items: center">
      <div >
        正在刷新,请稍等
      </div>
      <cube-loading ></cube-loading>

    </div>
  </div>
</template>
<style lang="less" scoped>
  .item1 {
    padding:0.15rem;
    margin-bottom:0.05rem;
    position:relative;
    .content{
      .firstSong{
        width: 100%;
      }
      .nav {
        padding:0.10rem 0.05rem;
        border-bottom:0.01rem solid #ccc;
        h4{
          display:inline-block;
        }
        i{
          display:inline-block;
          position:absolute;
          right:0.20rem;
        }
      }
    }
  }
  .item2 {
    padding: 0.15rem;
    margin-bottom: 0.05rem;
    position: relative;
    .content {
      .secondSong {
        width: 100%;
      }
      .nav {
        padding: 0.10rem 0.05rem;
        border-bottom: 0.01rem solid #ccc;
        .title {
          display: inline-block;
          height:0.57rem;
          line-height:0.57rem;
        }
        .operate{
          display: inline-block;
          position: absolute;
          right: 0.20rem;
          .itemnav{
            display:inline-block;
            margin:0.20rem;
            position:relative;
            i{
              font-size: 0.20rem;
              color:#ccc;
            }
            span{
              margin-left:0.05rem;
              position:absolute;
              font-size:0.06rem;
            }
          }
        }
      }
    }
  }

</style>
<script>
export default {
  data () {
    return {
      size: 50,
      isLoading: true,
      items: [],
      refreshShow: false
    }
  },
  mounted () {
    let that = this
    that.onFetch()
    const dom1 = this.$refs.viewWindow
    dom1.style.height = (document.documentElement.clientHeight - 168)/100 + 'rem'
    dom1.addEventListener('scroll', function () {
      //console.log(dom1.scrollTop, dom1.clientHeight, dom1.scrollHeight)
      if (dom1.scrollTop + dom1.clientHeight >= dom1.scrollHeight) {
        that.isLoading = true
        that.refreshShow = true
        setTimeout(function () {
          that.onFetch()
          that.isLoading = false
          that.refreshShow = false
        }, 2000)
      }
    })
  },
  methods: {
    // 一次加载20个
    onFetch () {
      if (this.isLoading === true) {
        for (let i = 0; i < 5; i++) {
          this.items.push({
            url: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
            num1: 160,
            num2: 309,
            num3: 400
          })
        }
        this.isLoading = false
      }
    }
    // getScroll () {
    //   const dom = document.querySelector('.wraper')
    //   if (dom.scrollTop + dom.clientHeight >= dom.scrollHeight) {
    //     this.onFetch()
    //   }
    // }
  }
}
</script>
