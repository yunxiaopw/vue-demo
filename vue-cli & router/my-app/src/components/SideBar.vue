<template>
    <ul class="link">
        <li v-for="(item,index) in link" v-bind:key="index"><a href="#">{{item}}</a></li>
    </ul>
</template>

<script>
    export default {
        name:"SideBar",
        data() {
            return {
                link: ['首页','咨询','图文','关于']
            }
        },
    }
</script>

<style scoped>
    .link {
        color: brown
    }
</style>