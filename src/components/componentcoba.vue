<template>
    <div>
        <v-btn @click='changeUsername()'>Change Username</v-btn>
   {{username}}
    </div>
</template>

<script>
export default {

    name:'componentcoba',
    
    props: {
   username: Boolean
    },

 methods: {
   changeUsername() {
     this.$emit('changeUsername')
   }
 }

    // methods: {
    //   submit(){
    //     this.nama="fkjdh";
    //   }
    // },
    
}
</script>