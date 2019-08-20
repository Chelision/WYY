<template>
  <div style="font-size:0.16rem">
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
      >
    </cube-form>

  </div>
</template>
<style>

</style>
<script>
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名：',
            props: {
              placeholder: '请在此处输入用户名'
            },
            rules: {
              required: true
            },
            trigger: 'blur',
            message: '用户名必填！'
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码：',
            props: {
              placeholder: '请在此处输入用户名'
            },
            rules: {
              required: true
            },
            trigger: 'blur',
            message: '请填写密码！'
          },
          {
            type: 'submit',
            label: '提交'
          }
        ]
      }
    }
  },
  methods: {
    submitHandler (e) {
      e.preventDefault()
      this.$store.commit('settoken', this.model)
      window.localStorage.setItem('token', this.model)
      if(this.$route.query.redirect)
      {
        this.$router.push({ path: this.$route.query.redirect })
      }
      else{
        this.$router.push({path:"/home"})
      }
      // 跳转的时候会验证是否存有缓存，如果没有缓存还是会跳转到登陆界面,所以需要将其存到vuex或者localstorage
    }
  }
}
</script>
