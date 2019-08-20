<template>
  <div style="font-size:0.16rem">
    <div id="viewWindow" style="overflow: scroll">
      <router-view ></router-view>
    </div>
    <div class="bottomNavBar" style="background: #eeefff;">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .bottomNavBar{
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    height: 0.4rem;
    min-width: 3.20rem;
    max-width: 9.50rem;
  }
</style>
<script>
export default {
  data () {
    return {
      selectedLabelDefault: 'Vip',
      tabs: [
        {
          label: '首页',
          icon: 'cubeic-home'
        },
        {
          label: '视频',
          icon: 'cubeic-hot'
        }, {
          label: '我的',
          icon: 'cubeic-person'
        },
        {
          label: '账号',
          icon: 'cubeic-setting'
        }
      ]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      switch (label) {
        // case '':
        //   this.$router.push({ path: './home' })
        //   break
        // case '首页':
        //   this.$router.push({ path: './home' })
        //   break
        case '视频':
          this.$router.push({ path: '/vedio' })
          break
        case '我的':
          this.$router.push({ path: '/mine' })
          break
        case '账号':
          this.$router.push({ path: '/setting' })
          break
        default:
          this.$router.push({ path: '/home' })
          break
      }
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  },
  mounted: function () {
    let viewHeight = document.documentElement.clientHeight
    let viewWindow = document.querySelector('#viewWindow')
    viewWindow.style.height = (viewHeight - 47)/100 + 'rem'
  }
}
</script>
