<template>
    <div id="head">
        <h3>{{mag}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mag:"捞仔图书馆"
        }
    }
}
</script>

<style>
#head{
    width:100%;
    height: 60px;
    background: #e5e5e5;
    opacity:0.5;
    box-shadow: #e5e5e5  1px 1px 1px;
    line-height: 60px;
    font-size: 24px;
    font-weight: bolder;
    color: #000
}
</style>
