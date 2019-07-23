<template>
    <div id="content">
        <div id="directory">
            <div class="directory_box"  v-on:click="openBook($event)">
                <ul>
                    <li v-for="item in items" :data-index=item.TreeID  :key="item.TreeID">
                        <img  src="../img/book_002.png"/>
                        <a>{{ item.Name }}</a>
                    </li>
                </ul>
                <img class="cover" src="../img/book_001.png"/>
            </div>
             <img src="../img/image_021.png"/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            items:[]
        }
    },
    created: function () {
        this.init();
    },
    methods:{
        init(){
            let thisBox = this;
            this.Get("mode=gettreemyall",function(data){
                thisBox.items=data;
            });
        },
        openBook(e){
            let dom = e.target,Tid;
            if(dom.className === 'cover'&&dom.localName === 'img'){
                Tid = this.items[this.items.length-1].TreeID 
            }else if (dom.localName === 'font'||dom.localName === 'img'||dom.localName === 'a'){
                while(!dom.getAttribute("data-index")){
                    if(dom.parentNode ){
                        dom = dom.parentNode;
                    }else return;
                }
                Tid = dom.getAttribute("data-index")
            }else{
                return 0;
            }
             this.$router.push({
                    name:'second',
                    query: {
                        tid:Tid
                    }
            })
        }
    }
}
</script>

<style>
#content{
    width: 100%;
    height: calc(100% - 60px)
}
#directory{
    position:absolute;
    top:20%;
    left:50%;
    transform: translate(-50%,0);
}
.directory_box{
    display: -webkit-box;
    padding:0 50px;
    position: relative;
    top: 40px;
}
.directory_box ul li{
    width:50px;
    float: left;
    position: relative;
}
.directory_box ul li a{
    opacity: 0.8;
    letter-spacing: 25px;
    font-size: 20px;
    font-weight: bold;
    transform: rotateZ(-0.3deg);
    position: absolute;
    color: #ccb133;
    writing-mode: tb-rl;
    top: 70px;
    left: 8px;
}
.directory_box .cover{
    width: 50px;
    height: 295px;
    margin-left: -5px;
}
</style>
