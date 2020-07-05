<template>
<!-- INTRO dan BTN MULAI BELAJAR-->
<!-- CARD ONE ERROR getSkorMAI bagian text dan deskripsi -->
  <div>
    <v-card height="380px" color="white" class="pa-2">
      
      <v-row justify="center" no-gutters="" class="mt-4">
        <v-col md="11">
          <p class="title red--text text--accent-1 font-weight-medium">Hai, {{sessionUser.nama}} </p>
          <v-divider ></v-divider>
        </v-col>
      </v-row>
      
      <!-- ISIAN CARD 1 -->
      <v-row class=" px-2" no-gutters>

        <!-- COL 1.1 : GAMBAR CArD 1 -->
        <v-col md="5" class="mt-12 pt-3">
          <v-card-media class="pa-0 ma-0" >
              <v-img :src="petUser.assets.profil" position="bottom"></v-img>
          </v-card-media>
        </v-col>

        <!-- COL 1.2 : TEXT + BUTTON CARD 1 -->
        <v-col md="7" class="">

          <!-- TEXT CARDD -->
          <v-card-text class="py-0 mb-0 mt-8">
            <p class="title grey--text text--darken-4 font-weight-bold">Kemampuan Metakognisi : <span class="red--text  text--accent-1 font-italic font-weight-bold">{{ deskripsiMaiResult[maiResult].text }}</span></p>
            <!-- <p class="title grey--text text--darken-4 font-weight-bold">Kemampuan Metakognisi : <span class="red--text  text--accent-1 font-italic font-weight-bold">{{LvMAI  }}</span></p> -->
            <p styles="text-align:justify;" class="subtitle-2 text-start grey--text font-weight-regular" >{{ deskripsiMaiResult[maiResult].deskripsi  }}</p>
            <!-- <p styles="text-align:justify;" class="subtitle-2 text-start grey--text font-weight-regular" >{{DescHasilMAI}}</p> -->
            <p styles="text-align:justify;" class="subtitle-2 text-start grey--text font-weight-regular" >{{ DescMAI }} <a href="#" class="subtitle-2 teal--text text--darken-4 font-weight-bold">baca selengkapnya.</a></p>
                 
          </v-card-text>

          <!-- BUTTON CARD 1-->
          <v-card-actions class="">
            <v-row no-gutters>
              <v-col md="5" class="ml-2 mr-4" >
                <v-btn block dense color="teal darken-4 white--text " 
                class="subtitle-2 font-weight-bold" @click="mulaiBelajar()">MULAI BELAJAR</v-btn>
              </v-col>

              <v-col md="5">
                <v-btn block dense color="teal darken-2 white--text" 
                class="subtitle-2 font-weight-bold" @click="ulangiTestMai()">ULANGI TEST MAI</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>

      </v-col>
    </v-row>

  </v-card>
  </div>  
</template>

<script>
import axios from 'axios';
window.axios = require('axios');

export default {

  name:'cardone',

     data: () => ({

      Nama:'Jihaan Nadhiya', //PERLU GET SESSION SIGNIN/SIGN UP ?

      // SrcImg: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihprofil.jpg?alt=media&token=bd2a2a01-8f0b-4b91-9e4d-c0f0fae0ffd5",
       
      LvMAI:'High',
      DescMAI:'Metakognisi merupakan konsep tentang bagaimana cara belajar yang tepat dan upaya pengembangannya...',
      DescHasilMAI:'Menurut analisis Joni, kemampuan metakognisimu belum terlalu baik. Jangan khawatir, Joni akan membantumu memahaminya bersama Mudeng.',
      
      deskripsiMaiResult: {
        low: {
          text: 'Low',
          deskripsi: `Kemampuan metakognisimu perlu ditingkatkan. Yuk, tingkatkan dan berjuang bersama Mudeng.`
        },
        medium: {
          text: 'Medium',
          deskripsi: `Kemampuan metakognisimu sudah cukup baik. Jangan menyerak. Yuk, tingkatkan bersama Mudeng.`
        },
        high: {
          text: 'High',
          deskripsi: 'Kemampuan metakognisimu sudah baik. Jangan lengah. Yuk, pertahankan bersama Mudeng.'
        }
      },
      maiResult: '',

      petUser: {},
      sessionUser:{},

    }),

    

    created: async function () {
      await this.getSessionUser();
      await this.getPetUser();
      await this.getSkorMai();
      
    },

    methods: {

      async getPetUser(){
        try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

          this.petUser = response.data;
        } catch(error) {
          return console.log(error)
        }
      },
      async getSessionUser() {
        try {
            var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/common-profile`)
            this.sessionUser = response.data;
        } catch(error) {
            return console.log(error)
        }
      },

      async getSkorMai(){
        try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/mai/result`)

          this.maiResult = response.data.score;
          console.log(response.data);
          console.log('get sukses mai result card 1');

        } catch(error) {
          return console.log(error)
        }
      },
      mulaiBelajar(){ //Button
      this.$router.push('/ProsesBelajar'); //biar ga reload semua
      },
      ulangiTestMai(){ //Button
      this.$router.push('/TestMai'); //biar ga reload semua
      },
    }
  }
</script>
