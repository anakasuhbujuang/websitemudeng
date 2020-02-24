<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <!-- <stepper /> -->
    </v-content>
  </v-app>
</template>

<script>
//import stepper from '@/components/stepper.vue'
export default {
  name: 'App',

  data () {
    return {
      components: {
       // stepper
      },

    }
  }
};
</script>
