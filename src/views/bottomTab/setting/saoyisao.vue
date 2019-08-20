<template>
    <div class="wraper1">
        <header 
        style="display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0.2rem 0.1rem;
        background:#ccc;
        color:#fff">
            <div>
                 <i @click="back" style="margin-top:0.15rem;margin-left:0.15rem;font-size:0.2rem"><</i>
            </div>
            <div style="font-size:0.2rem">
                上传文件
            </div>
        </header>
        <video id="video" src="">

        </video>
        <canvas id="canvas" width="300px" height="300px" style="display:none"></canvas>
        <img id="imgTag" src="" alt="" v-show="buttonShow">
       <footer style="position:fixed;bottom:0;width:100%;text-align:center">
           <button style="margin:0 auto" @click="takePhoto">拍照</button>
           <button v-show="buttonShow" @click="upLoadImg">上传</button>
           <button v-show="buttonShow" @click="cancelUpLoad">取消</button>
       </footer>
    </div>
</template>
<style>
    .wraper1{
        position:fixed;
        
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:rgba(0, 0, 0, 0.6);

    }
    #video{
        position:fixed;
        top:50%;
        left:50%;
        margin-left:-150px;
        margin-top:-150px;
    }
    #imgTag{
        position:fixed;
        top:50%;
        left:50%;
        margin-left:-150px;
        margin-top:-150px;
    }
</style>

<script>
var mediaStreamTrack = null; // 视频对象(全局)
export default {
    data(){
        return {
            buttonShow:false
        }
    },
    methods:{
        back(){
            let that = this;
            that.$router.push({path:'/setting'})
            mediaStreamTrack.stop();
            console.log("guanbi")
        },
        //打开摄像头
        openMedias(){
            let constraints = {
                video: { width: 300, height: 300 },
                audio: true
            };
            //获得video摄像头
            let video = document.getElementById('video');     
            let promise = navigator.mediaDevices.getUserMedia(constraints);
            promise.then((mediaStream) => {
                mediaStreamTrack = typeof mediaStream.stop === 'function' ? mediaStream : mediaStream.getTracks()[1];
                video.srcObject = mediaStream;
                video.play();
            });
        },
        //进行拍照
        takePhoto() {
        //获得Canvas对象
            let that = this;
            that.buttonShow = true;
            let video = document.getElementById('video');
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, 300, 300);


            // toDataURL  ---  可传入'image/png'---默认, 'image/jpeg'
            let img = canvas.toDataURL();
            // 这里的img就是得到的图片
            //console.log('img-----', img);
            document.getElementById('imgTag').src=img;
            mediaStreamTrack.stop();
        },
        //上传照片
        upLoadImg(){
            let that = this;
            that.$router.push({path:'/setting'});
            that.buttonShow = false;
        },
        //取消上传
        cancelUpLoad(){
            let that = this;
            that.buttonShow = false;
            that.openMedias();
        }
    
        
    },
    mounted(){
        this.openMedias();        
    }
}
</script>

