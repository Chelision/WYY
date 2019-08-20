<template>
    <div class="wraper2" style="color:#fff">
        <!-- 头部样式设计 -->
        <header class="title-hedaer">
            <div>
                <i class="iconfont icon-fanhui" @click="back">返回</i>
            </div>
            <div>
                歌单
            </div>
            <div>
                <i class="iconfont icon-fenxiang2"></i>
                <i class="iconfont icon-zhengzaibofang"></i>
            </div>
        </header>
        <section class="content">
            <header class="content-header">
              <van-search placeholder="请输入搜索关键词" />  
            </header>
            <div class="personal-information">
                <div style="position:relative;padding:0.15rem">
                    <div style="width:100%;padding-left:1.1rem;height:1rem;float:left">
                        <p style="margin-top:0.2rem">我喜欢的音乐</p>
                        <div style="margin-top:0.2rem">
                            <div>
                            </div>
                            <span>Chelision</span>
                            <i class="iconfont icon-webicon213"></i>
                        </div>
                    </div>
                    <div style="width:1rem;float:left;position:absolute;">
                        <img style="width:100%" src="https://p1.music.126.net/EWC8bPR8WW9KvhaftdmsXQ==/3397490930543093.jpg?param=200y200" alt="">
                        <i class="iconfont icon-bofang" style="position:absolute;right:0.05rem;top:0.05rem;font-size:0.12rem">56</i>
                    </div>
                </div>
            </div>
            <nav class="content-nav1 clearfix">
                <van-tabbar v-model="active">
                    <van-tabbar-item icon="chat-o">评论</van-tabbar-item>
                    <van-tabbar-item icon="share" dot>分享</van-tabbar-item>
                    <van-tabbar-item icon="upgrade" info="5">下载</van-tabbar-item>
                    <van-tabbar-item icon="certificate" info="20">多选</van-tabbar-item>
                </van-tabbar>
            </nav>
            <section class="content-section contentObj">
                <header class="section-title">
                    <span>含一首VIP专享歌曲</span>
                    <div>
                        <span>首开VIP仅5元</span>
                        <i class="iconfont icon-webicon213"></i>
                    </div>
                </header>
                <div class="content-section">
                    <div class="songs-title">
                        <i class="iconfont icon-bofang1" style="color:rgb(60,60,60)"></i>
                        <span style="margin-left:0.1rem;font-weight:bold">播放全部（共68首）</span>
                    </div>
                    <div class="songs-list" style="padding:0.1rem 0.15rem">
                        <div v-for="(items,index) in songsList" :key="index" style="display:flex;justify-content:space-between">
                            <div style="display:flex;align-items:center">
                                <span>{{index+1}}</span>
                                <div style="margin-left:0.1rem;padding:0.1rem 0">
                                    <span>{{items.name}}</span>
                                   <div style="font-size:0.14rem;margin-top:0.05rem">
                                        <span style="border:0.01rem solid red;padding:0 0.03rem;border-radius:0.03rem;color:red" v-show="items.dujia">独家</span>
                                        <span style="border:0.01rem solid red;padding:0 0.03rem;border-radius:0.03rem;color:red;margin-left:0.05rem" v-show="items.SQ">SQ</span>
                                        {{items.singer}}
                                   </div>
                                </div>
                            </div>
                            <div>
                                <i class="iconfont icon-bofang1">
                                </i>
                                <i class="iconfont icon-fenxiang2">
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    </div>
</template>
<style lang="less" scoped>
    .clearfix::after{
        display: block;
        content:"";
        clear: both;
    }
    .wraper2{
        position:fixed;
        bottom:0.5rem;
        left:0;
        top:0;
        right:0;
        background:rgb(78, 78, 78)
    }
    .title-hedaer{
        padding:0.1rem;
        color:#fff;
        display:flex;
        justify-content: space-between;
        .icon-fenxiang2{
            margin-right:0.1rem;
        }
    }
    .van-search{
        background:rgb(78, 78, 78) !important;
        .van-search__content{
            background:rgb(100, 100, 100);
            border-radius:15px;
        }
    }
    .van-tabbar{
        position:static;
        margin-top:0.2rem;
        background:rgb(78,78,78);
        color:#fff
    }
    .van-tabbar-item{
        color:#fff 
    }
    .content-section{
        border-radius: 0.20rem 0.20rem 0 0;
        background:#fff;
        overflow: auto;
        color:#000;
        padding-top:0.2rem;
        .section-title{
            padding:0.15rem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            border-bottom:1px solid #ccc
        }
    }
    .songs-title{
        padding:0.15rem
    }
</style>

<script>
import { Search } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import Vue from 'vue'
Vue.use(Search);
export default {
    data(){
        return{
            active:0,
            songsList:[
                {
                    name:"侧脸",
                    singer:"于果-侧脸",
                    dujia:true,
                    SQ:true

                },
                {
                    name:"你的酒馆对我打了烊",
                    singer:"陈雪凝-你的酒馆对我打了烊",
                    dujia:true,
                    SQ:true
                },
                {
                    name:"心如止水",
                    singer:"Ice Paper-成语接龙",
                    dujia:true,
                    SQ:false
                },
                {
                    name:"一生中最爱",
                    singer:"谭咏麟-一生中最爱",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"给自己的歌",
                    singer:"李宗盛-南下专线",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"Until You",
                    singer:"Shayne Ward-Breathless",
                    dujia:false,
                    SQ:true
                },
                {
                    name:"一百万个可能",
                    singer:"Christine Welch-一百万个可能"
                },
                {
                    name:"感谢你曾经来过",
                    singer:"咪小咪-感谢你曾经来过",
                    dujia:false,
                    SQ:true
                },
                {
                    name:"献世",
                    singer:"陈小春-夜生活",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"替身",
                    singer:"柯有伦",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"痛醒",
                    singer:"许庭坚",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"罪人",
                    singer:"李克勤",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"烂泥",
                    singer:"许志安",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"广东十年爱情故事",
                    singer:"广东雨神-广东十年爱情故事",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"年少有为",
                    singer:"李荣浩-耳朵",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"回忆总想哭",
                    singer:"南宫嘉骏/姜玉阳-回忆总想哭",
                    dujia:false,
                    SQ:true
                },
                {
                    name:"沙漠骆驼",
                    singer:"展展与罗罗-沙漠骆驼",
                    SQ:true,
                    dujia:false,
                },
                {
                    name:"去年夏天",
                    singer:"王大毛-去年夏天",
                    SQ:true,
                    dujia:false,
                },
                {
                    name:"爱的故事（上）",
                    singer:"孙耀威-So Far So...close",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"取消资格",
                    singer:"陈小春-抱一抱",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"你瞒我瞒",
                    singer:"陈柏宇-Can't Be Half",
                    dujia:false,
                    SQ:true
                },
                {
                    name:"二十世纪少年（Upplugged）",
                    singer:"Ping Pung-Love & Hate",
                    SQ:true,
                    dujia:false,
                },
                {
                    name:"好好恋爱",
                    singer:"方力申/邓丽欣-Love 05情歌集",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"可惜我是水瓶座",
                    singer:"杨千嬅-Simple Me",
                    dujia:false,
                    SQ:true
                },
                {
                    name:"爱得太迟",
                    singer:"古巨基-Human 我生",
                    SQ:true,
                    dujia:false,
                },
                {
                    name:"耿耿于怀",
                    singer:"麦浚龙-Nothing Lasts Forever",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"大哥",
                    singer:"卫兰-叱咤新一代",
                    dujia:true,
                    SQ:false
                },
                {
                    name:"喜帖街",
                    singer:"谢安琪-Binary",
                    dujia:false,
                    SQ:false
                },
                {
                    name:"Look What You Make Me Do",
                    singer:"Taylor Swift-reputation",
                    dujia:false,
                    SQ:true
                },
                {
                    name:"容易受伤的女人",
                    singer:"王菲-阿菲正传",
                    dujia:false,
                    SQ:false
                }
            ]
        }
    },
    methods:{
        back(){
            this.$router.push({
                path:"/mine"
            })
        }
    },
    mounted(){
        let sectionHeight = document.querySelector(".contentObj");
        sectionHeight.style.height = (document.documentElement.clientHeight -54 -30 -135 -37)/100 +"rem"
    }
    
}
</script>
