<template>
  <div style="background-color:#FAFAFA;" class="hidden-sm-and-down hidden-xl-only">

    <v-img :src="SrcBgPilihPet" contain position="top" max-width="1904px" max-height="1071px" >

      <v-app-bar color="teal darken-4" dense dark>
        <v-spacer></v-spacer>
        <v-toolbar-title class="title font-weight-bold">MUDENG</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-container >

        <!-- JUDUL START -->
        <v-row justify="center" class="mb-0 mt-6" no-gutters>
          <v-col md="6">
            <p class="headline text-center  grey--text  text--darken-3   font-weight-bold">Pilih Kawanmu</p>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col md="5">
            <p class="subtitle-1 text-center  grey--text font-weight-regular">Salah satu dari mereka akan menemanimu bermain<br>dan belajar bersama Mudeng.</p>
          </v-col>
        </v-row>
        <!-- JUDUL END -->

        <!-- CARDS-PET START -->
        <v-row justify="center" class="mt-6">
          <v-col v-for="(item, index) in daftarPet" :key="index" md="3">
            <v-card color="white" min-height="200px" max-height="400px">
              
              <v-card-media justify-center >
                <v-img :src="item.assets.profil"></v-img>
              </v-card-media>

              <v-row justify="center" class="mt-4" no-gutters>
                <v-col md="8">
                  <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold" v-text="item.nama"></p>
                </v-col>
              </v-row>       
              <v-row justify="center" no-gutters >
                <v-col md="9">
                  <p class="subtitle-2 text-center grey--text  font-weight-regular">{{item.deskripsi}}</p>
                </v-col>
              </v-row>                
              
              <v-card-actions>
                <v-btn block
                color="teal darken-4 white--text" 
                class="subtitle-2 font-weight-bold"
                @click="pilihPet(item.id)">PILIH
                </v-btn>
              </v-card-actions>
                    
            </v-card>
          </v-col>
        </v-row>
        <!-- CARDS-PET END -->
      </v-container>
    </v-img>
      
  </div>
</template>

<script>

import axios from 'axios'
window.axios = require('axios');

export default {
  data: () => ({
      SrcBgPilihPet: require('@/assets/bg/bgdaun.jpg'),
      daftarPet:[], //array[3]: 0,1,2 -> id, nama, deskripsi, assests{}, 
  }),

  mounted:async function() {
    const response  = await axios.get(`${process.env.VUE_APP_API_HOST}/pet`)
    
    console.log(response.data)
    this.daftarPet = response.data;
    console.log('sukses get daftar pet');
                
  },

  methods: {
    async pilihPet(id){
      await axios.post(`${process.env.VUE_APP_API_HOST}/profile/pet`, { id: id }) //id:asih/budi/joni
      this.$router.push('/PraTestMAI')
    },
      
  }
}
</script>

<style >

</style>