<template>
  <div>
    <v-row no-gutters justify="center">
      <v-col md="12">
        <!-- AXIOS -->
        <v-row justify="center">
         <!-- CARDS-PET VIDEO STRATEGI -->
          <v-col  md="3">
            <v-toolbar v-if="rekomendasi === 'video'" color="red accent-1" style="border-radius:5px 5px 0px 0px;" height="50px" dark>
              <v-toolbar-title class="subtitle-1 font-weight-medium">Rekomendasi</v-toolbar-title>
            </v-toolbar>
            <v-toolbar v-else flat  color="grey lighten-5" height="50px" dark> </v-toolbar>
            <v-card color="white" height="400px">
              <v-card-media justify-center  class=" px-4">
                <v-img :src="petUser.assets.video"></v-img>
              </v-card-media>
              <v-card-text class=" py-0 my-0">
                <p class="subtitle-2 text-center grey--text text--darken-3 font-italic font-weight-bold" >{{videoStrategi.nama}}</p>
                <p class="caption text-center grey--text  font-weight-regular">{{videoStrategi.deskripsi}}</p>
              </v-card-text> 
              <v-card-actions class="pt-5">
                <v-btn color="teal darken-4 white--text" block class="subtitle-2 font-weight-bold" 
                @click="nextStepVideo(videoStrategi.jenis)">PILIH
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        <!-- CARDS-PET VIDEO END -->
        <!-- CARDS-PET SUMM STRATEGI -->
          <v-col  md="3">
            <v-toolbar v-if="rekomendasi === 'sum'" color="red accent-1" style="border-radius:5px 5px 0px 0px;" height="50px" dark>
              <v-toolbar-title class="subtitle-1 font-weight-medium">Rekomendasi</v-toolbar-title>
            </v-toolbar>
            <v-toolbar v-else flat  color="grey lighten-5" height="50px" dark> </v-toolbar>
            <!-- <v-toolbar flat color="grey lighten-5" height="50px" dark> </v-toolbar> -->
            <v-card color="white" height="400px">
              <v-card-media justify-center  class=" px-4">
                <v-img :src="petUser.assets.sum"></v-img>
              </v-card-media>
              <v-card-text class=" py-0 my-0">
                <p class="subtitle-2 text-center grey--text text--darken-3 font-italic font-weight-bold" >{{summStrategi.nama}}</p>
                <p class="caption text-center grey--text  font-weight-regular">{{summStrategi.deskripsi}}</p>
              </v-card-text> 
              <v-card-actions class="pt-5">
                <v-btn color="teal darken-4 white--text" block
                class="subtitle-2 font-weight-bold" @click="nextStepSumm(summStrategi.jenis)">PILIH
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        <!-- CARDS-PET SUMM END -->
         <!-- CARDS-PET MAP STRATEGI -->
          <v-col  md="3">
            <v-toolbar v-if="rekomendasi === 'map'" color="red accent-1" style="border-radius:5px 5px 0px 0px;" height="50px" dark>
              <v-toolbar-title class="subtitle-1 font-weight-medium">Rekomendasi</v-toolbar-title>
            </v-toolbar>
            <v-toolbar v-else flat  color="grey lighten-5" height="50px" dark> </v-toolbar>
            <!-- <v-toolbar flat color="grey lighten-5" height="50px" dark> </v-toolbar> -->
            <v-card color="white" height="400px">
              <v-card-media justify-center  class=" px-4">
                <v-img :src="petUser.assets.map"></v-img>
              </v-card-media>
              <v-card-text class=" py-0 my-0">
                <p class="subtitle-2 text-center grey--text text--darken-3 font-italic font-weight-bold" >{{mapStrategi.nama}}</p>
                <p class="caption text-center grey--text  font-weight-regular">{{mapStrategi.deskripsi}}</p>
              </v-card-text> 
              <v-card-actions class="pt-5">
                <v-btn color="teal darken-4 white--text" block 
                class="subtitle-2 font-weight-bold" @click="nextStepMapp(mapStrategi.jenis)">PILIH
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
       
        </v-row>
         <!-- CARDS-PET MAP END -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
window.axios = require('axios');

export default {
  name:'PilihStrategi',
  
  props: {
    statevideo: Boolean,
    statesumm: Boolean,
    statemapp: Boolean,
    // e1: Number
  },

  data () {
    return {
      videoStrategi:
      {
        // srcImage: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihvideo.png?alt=media&token=055d4748-ac15-418c-95af-afe7811344cd",
        nama: 'Control Video',
        deskripsi:'Selanjutnya kamu akan belajar melalui media video yang telah kami sediakan.',
        rekomendasi:true,
        jenis: 'video',
        
      },
      summStrategi: {
        // srcImage: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihsumm.png?alt=media&token=7e88c424-6034-4925-acba-6d8b172afa53",
        nama: 'Summarization',
        deskripsi:'Selanjutnya kamu akan belajar dengan membuat ringkasan materi yang ada.',
        rekomendasi:false,
        jenis: 'sum',
      },
      mapStrategi: 
        {
        // srcImage: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihmapp.png?alt=media&token=68253a97-857f-4c55-bd68-d6d0e4b2c757",
        nama: 'Mind Mapping',
        deskripsi:'Selanjutnya kamu akan belajar dengan membuat diagram berisi materi yang ada.',
        rekomendasi:false,
        jenis:'map',
      },
        
      rekomendasi: 'video',
      
      
      //AXIOS
      petUser:{},
      
    }
  },

  created: function(){
    this.getPetUser();
  },

  
  methods: {
    nextStepVideo(tipeMateri) {
      this.$emit('nextStepVideo', tipeMateri)
    },
    nextStepSumm(tipeMateri) {
      this.$emit('nextStepSumm', tipeMateri)
    },
    nextStepMapp(tipeMateri) {
      this.$emit('nextStepMapp', tipeMateri)
    },

    // AXIOS
    async getPetUser(){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

          this.petUser = response.data;
      } catch(error) {
          return console.log(error)
      }
    },
    async getRekomendasiUser(){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/method/recomendation`)

          this.rekomendasi = response.data.method;
      } catch(error) {
          return console.log(error)
      }
    },
  }
}
</script>