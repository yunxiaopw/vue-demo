<template>
    <div>
        <h3>user id :{{id}}</h3>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name:"User",
        props:['id']
        // props :{
        //     id:{
        //         type:Number
        //     }
        // }
    };
</script>
<style scoped>
</style>