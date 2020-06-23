<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <br><br>

    <router-link to="/user/5">user/5</router-link>
    <router-link to="/user/6">user/6</router-link>
    <br><br>

    <router-link to="/user/5/profile">5号档位</router-link>
    <router-link to="/user/5/posts">5号岗位</router-link>

    <br><br>
    <button @click="go(-1)">goUp</button>
    <button @click="go(1)">goDown</button>
    <button @click="goUser(5)">goUser</button>
    <button @click="goUser2(6)">goUser</button>
    <router-view name="sidebar"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      // goList(){
      //   this.$router.push('/user/5/profile')
      // }
      // goList(){
      //   this.$router.push({
      //     // name: 'Home'
      //     path: '/user/5/posts'
      //   })
      // }
      goUser(id){
        this.$router.push({
          name: 'User',
          params: {
            id
          }
        })
      },
      go(step){
        this.$router.go(step)
      }
    },

    watch: {
      // $route(to,from){
      //   console.log(to)
      //   console.log(from)
      // }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
