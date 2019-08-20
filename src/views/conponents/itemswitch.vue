<template>
    <div style="width:100%;overflow:auto;font-size:0.16rem">
        <div class="container" v-for="(item,index) in navData" :key="index">
            <ul>
                <li class="first-li">
                    <i :class="item.icon1"></i>
                </li>
                <li class="second-li">
                    <span class="span1">{{item.description}}</span>
                    <span class="span2">
                        <slot></slot>
                    </span>
                    <div style="width:100%;height:0.01rem; background:#ccc"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
    .container{
        width:100%;
        padding: 0.10rem;
        ul{
            width:100%;
            display: flex;
            height:0.30rem;
            line-height:0.30rem;
        }
        .first-li{
            width:10%;
            i{
                font-size:0.20rem;
                color:black;
            }
        }
        .second-li{
            width:85%;
            position:relative;
            padding-bottom: 0.05rem;
            height:0.30rem;
            line-height:0.30rem;
            .span1{
                font-size: 0.14rem;
                color:black;
            }
            // .span2{
            //     position:absolute;
            //     right:20px;
            // }
            .cube-switch-input{
                position:absolute;
                right:0.10rem;
            }
        }
    }
</style>
<script>
export default {
   data(){
       return{
        user:{
            name:"Chelision"
        }
       }
   } ,
    props:{
        navData:{
            type:Array
        },
    },
    // mounted(){
    //     this.item = this.childData
    // }
}
</script>

