<template>
    <div>
        <appcoba :username="user.username" @changeUsername="user.username =true"></appcoba>

        <p v-show="username">jijijjijji</p>
        <p>{{nama}}</p>
    </div>
</template>

<script>
import componentcoba from '@/components/componentcoba.vue'
export default {

    name:'coba',
    
    components:{
      appcoba: componentcoba,
    },

    data () {

      return {
          user: {
            username: false,
            }
      }
    }
    
}
</script>