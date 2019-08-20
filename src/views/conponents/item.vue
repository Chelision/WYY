<template>
    <div style="width:100%;overflow:hidden;font-size:0.16rem">
        <div class="container" v-for="(item,index) in childData" :key="index">
            <ul>
                <li class="first-li">
                    <i :class="item.icon1"></i>
                </li>
                <li class="second-li">
                    <span>{{item.description}}</span>
                    <i :class="item.icon2"></i>
                    <div style="width:100%;height:0.01rem; background:#ccc"></div>
                </li>
            </ul>
        </div>
        <!-- <slot :user="user">
            
        </slot> -->
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
            span{
                font-size: 0.14rem;
                color:black;
            }
            slot{
                position:absolute;
                right:0;
            }
            i{
                position:absolute;
                right:0;
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
        childData:{
            type:Array
        },
    },
    // mounted(){
    //     this.item = this.childData
    // }
}
</script>

