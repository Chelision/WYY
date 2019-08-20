<template>
  <div style="font-size:0.16rem">
    <i class="cubeic-back" @click="backHome"></i>我是查询视频界面
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    backHome () {
      this.$router.push({ path: '/vedio' })
    }
  }
}
</script>
