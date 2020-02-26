<template >
  <v-app >
    <v-content >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      components: {
      },

    }
  }
};
</script>

<style>
 body{
   padding: 0 !important; 
   margin: 0 !important;}
</style>
