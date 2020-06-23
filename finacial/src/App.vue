<template>
  <v-app>
    <Login />
    <v-content>    
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login
  },

  data: () => ({
    //
  }),
};
</script>
