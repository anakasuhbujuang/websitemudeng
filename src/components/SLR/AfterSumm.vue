<template>
  <v-img src="@/assets/bg/bgdaundialog.svg">
    
    <Keyword v-show="statekeyword"/>
    <Deskripsi v-show="statedeskripsi"/>

    <v-row justify="center"  class="mt-4">
      <v-col md="3">
        <v-btn v-show="statekeyword" color="teal darken-3" @click="nextStepSummQuiz()"
        block dark>PILIH</v-btn>
        <v-btn v-show="statedeskripsi" color="teal darken-3" @click="nextSubmitSummQuiz()"
        block dark>KUMPULKAN</v-btn>
      </v-col>
    </v-row>

  </v-img>
</template>

<script>
import Keyword from "@/components/SLR/Keyword.vue";

  export default {

    name: 'Aftersumm',
    
    components: {
      Keyword
    },

    data () {

      return {
       statekeyword: true,
       statedeskripsi: false,
        }
    },

    methods: {
        nextStepSummQuiz(){
            this.statekeyword=false;
            this.statedeskripsi=true;
        },
        nextSubmitSummQuiz(){
            this.statekeyword=true;
            this.statedeskripsi=false;
        },
    }
  }
</script>

