<template>
    <div>
        <h2>{{msg}}</h2><br>
        <h3>{{count}}</h3>
        <p>
            <button @click="add(10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState,mapMutations, mapActions } from 'vuex'
export default {
    data:()=>{
        return{
            msg:'hello vuex'
        }
    },
    // 计算属性
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },
    // computed:mapState({
    //     count:state=>state.count
    // }),
    computed:{
        ...mapState(['count']),
        // count(){
        //     return this.$store.getters.count;
        // }
        // ...mapGetters(['count'])
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
};
</script>
<style scoped>
</style>