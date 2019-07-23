<template>
    <div>
        <h2>{{title}}目录</h2>
        <ul>
            <li v-for="ibook in ibooks"  :key="ibook.ArticleID"  v-on:click="openBook(ibook)">
                <a>{{ ibook.Title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    data() {
        return {
            ibooks:[''],
            title:""
        }
    },
    created() {
        this.getRouterData()
    },
    methods: {
        getRouterData() {
            this.tid = this.$route.query.tid
            //this.title = this.$route.query.title
            this.getTrue(this.tid)
        },
        getTrue(tid){
            let thisBox = this;
            this.Get("mode=getAreicleTree,"+tid,function(data){
                thisBox.ibooks=data.length==0 ?[{Title:"暂无内容"}]:data;
            });
        },
        openBook(aid){
            if(!aid.ArticleID) {
                alert("暂无内容");
                return;
            } 
            this.$router.push({
                name:'article',
                query: {
                    aid: aid.ArticleID
                }
            })
        }
    }
}
</script>

<style>
</style>
