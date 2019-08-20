<template>
  <div>
    <i class="cubeic-back" @click="backHome"></i>我是查询音乐界面
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
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
