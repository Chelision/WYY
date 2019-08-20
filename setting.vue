<template>
  <div class="wraper" @touchmove="upDown">
    <!-- 头部设计 -->
    <div class="header" style="padding:0.1rem;display:flex;justify-content:space-between">
        <i class="iconfont icon-saoyisao" style="font-size:0.25rem;font-weight:bold"></i>
        <i class="iconfont icon-zhengzaibofang" style="font-size:0.25rem"></i>
    </div>
    <!-- 个人信息设置 -->
    <div class="my-setting">
        <div class="nav-setting" style="padding:0.1rem">
          <div class="avator" 
          style="height:0.5rem;
          display:inline-block;
          width:0.5rem;
          line-height:0.5rem;
          border-radius:0.25rem;
          background:#ccc;
          color:#fff;
          font-size:0.14rem;">
            <div style="width:0.5rem;height:0.25rem;text-align:center;line-height:0.25rem">上传</div>
            <div style="width:0.5rem;height:0.25rem;text-align:center;line-height:0.25rem">头像</div>
          </div>
          <div class="Name" style="display:inline-block;padding-left:0.1rem;position:relative;width:80%">
            <div style="display:inline-block">
              <div class="nameContent" style="font-size:0.16rem;font-weight:bold">Chelision</div>
              <div style="padding:0.03rem 0;background:#eee; border-radius:0.1rem;border:none;text-align:center;margin-top:0.05rem;">Lv.6</div>
            </div>
            <div style="display:inline-block;position:absolute;right:0;border:0.01rem solid #eee;padding:0.05rem 0.1rem;border-radius: 0.1rem;">
              签到
              <i class="iconfont icon-webicon213"></i>
            </div>
          </div>
        </div>
        <div class="advertisement" style="padding:0.1rem">
          <ul style="display:flex;justify-content:space-between">
            <li style="text-align:center;border-right:0.01rem solid #ccc;padding:0 0.2rem">
              <span>0</span>
              <div style="font-size:0.14rem">动态</div>
            </li>
            <li style="text-align:center;border-right:0.01rem solid #ccc;padding:0 0.2rem">
              <span>2</span>
              <div style="font-size:0.14rem">关注</div>
            </li>
            <li style="text-align:center;border-right:0.01rem solid #ccc;padding:0 0.2rem">
              <span>0</span>
              <div style="font-size:0.14rem">粉丝</div>
            </li>
            <li style="text-align:center;padding:0 0.2rem">
              <i class="iconfont icon-qiandao" style="color:black"></i>
              <div style="font-size:0.14rem">编辑资料</div>
            </li>
          </ul>
        </div>
        <div class="nav-message" style="padding:0.1rem">
            <img style="width:100%;border-radius:0.2rem" src="//p1.music.126.net/9ATSC1dh08-JjWXL17z5ug==/109951164051161109.jpg?imageView&quality=100" alt="">
        </div>
        <div class="goodsNav" style="display:flex;justify-content:space-around">
          <div v-for="(item,index) in navData" :key="index" style="text-align:center">
            <i :class="item.icon" style="font-size:0.25rem;color:red"></i>
            <div style="padding-top:0.1rem;font-size:0.14rem">{{item.message}}</div>
            <div style="padding-top:0.05rem;font-size:0.12rem;color:#bbb">{{item.remake}}</div>
          </div>
        </div>
    </div>
    <itemNav :childData="itemData">
    </itemNav>
    <div style="height:0.1rem;background:#eee;margin:0.1rem 0"></div>
    <itemNav :childData="settingData">
    </itemNav>

    <div style="padding:0.1rem">
      <ul style="display:flex;justify-content:space-between;width:100%">
        <li style="width:10%;text-align:center">
          <i class="iconfont icon-dengpaoyejianmoshi" style="font-size:0.2rem;"></i>
        </li>
        <li style="padding:0.05rem;width:85%;display:flex;align-items:center">
          <span style="width:80%">夜间模式</span>
          <cube-switch >
          </cube-switch>
        </li>
      </ul>
    </div>
    <div style="height:0.01rem;background:#ccc;margin-left:15%"></div>
    <div style="height:0.1rem;background:#eee;margin:0.1rem 0"></div>
    <itemNav :childData="voucherData">
    </itemNav>
    <div style="height:0.1rem;background:#eee;margin:0.1rem 0"></div>
    <itemNav :childData="aboutData">
    </itemNav>
    <div style="height:0.1rem;background:#eee;margin:0.1rem 0"></div>
    <cube-button :light="true" style="color:red">退出登录</cube-button>
    <!-- <itemswitch :navData="itemData">
    </itemswitch> -->
  </div>
</template>
<style>
</style>
<script>
import itemswitch from '../../conponents/itemswitch'
import items from '../../conponents/item'
export default {
  data(){
    return {
      value: true,
      navData:[
        {
          icon:"iconfont icon-xiaoxi",
          message:"消息",
          remake:""
        },
        {
          icon:"iconfont icon-shangcheng",
          message:"商城",
          remake:"Beats 599元"
        },
        {
          icon:"iconfont icon-huaban",
          message:"演出",
          remake:"李宗盛巡演"
        },
        {
          icon:"iconfont icon-pifu",
          message:"个性换肤",
          remake:""
        }  
      ],
      itemData:[
        {
          icon1:"iconfont icon-icon--",
          description:"口袋铃声",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-icondd1",
          description:"我的订单",
          icon2:"iconfont icon-webicon213"
        }
      ],
      settingData:[
        {
          icon1:"iconfont icon-shezhi",
          description:"设置",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-dengpaoyejianmoshi",
          description:"夜间模式",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-ai254",
          description:"定时关闭",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-naozhong",
          description:"音乐闹钟",
          icon2:"iconfont icon-webicon213"
        }
      ],
      voucherData:[
        {
          icon1:"iconfont icon-zaixian",
          description:"在线听歌免流量",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-youhuiquan-m",
          description:"优惠券",
          icon2:"iconfont icon-webicon213"
        },
      ],
      aboutData:[
        {
          icon1:"iconfont icon-yinle1",
          description:"加入网易云音乐人",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-zhibohuifang",
          description:"我要直播",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-fenxiang",
          description:"分享网易云音乐",
          icon2:"iconfont icon-webicon213"
        },
        {
          icon1:"iconfont icon-iconset0142",
          description:"关于",
          icon2:"iconfont icon-webicon213"
        },
      ]
    }
  },
  methods:{
    change(){
      let that = this;
      that.value = false;
      alert("aaa")
    },
    upDown(){
      var touch = event.targetTouches;
      console.log(touch)
    }
    
  }
  ,
  components:{
        "itemNav":items,
        itemswitch,
      }
}
</script>

