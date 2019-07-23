<template>
    <div v-on:click="openBook($event)">
        <h2>{{title}}</h2>
        <h4>{{time}}</h4>
        <div v-html="content">
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            title:'',
            time:'',
            content:[]
        }
    },
    created() {
        this.getRouterData()
    },
    methods: {
        getRouterData() {
            this.aid = this.$route.query.aid
            this.getTrue(this.aid)
        },
        getTrue(aid){
            let thisBox = this;
            this.Get("mode=getArticle,"+aid,function(data){
                thisBox.title=data[0].Title;
                thisBox.content=data[0].Content;
                thisBox.time=data[0].date;
            });
        }
    }
}
</script>
<style>
</style>
