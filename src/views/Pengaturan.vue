<template>
  <div style="background-color:#FAFAFA;" class="hidden-sm-and-down hidden-xl-only">
    <v-container fluid>
      <v-row >
        <v-col>
          <!-- ######## MENU ############## -->
          <Sidebar />
          <!-- ######## MENU ############## -->
        </v-col>
        <v-col md="12">
          <v-row justify="center">
            <v-col md="7">
              <v-card class="pb-6" height="700px">
                <v-row justify="center" no-gutters class="pt-6">
                  <v-col md="8">
                    <p class="title text-center red--text text--accent-1 font-weight-medium">Pengaturan</p>
                  </v-col>
                </v-row>
                <v-row justify="center" class="py-4">
                  <v-col md="8" class="text-center">
                    <v-btn-toggle mandatory borderless >
                      <v-btn color="teal darken-3 " dark  class="px-5 white--text subtitle-2 font-weight-bold"  @click="OnDisplayOneClick">
                        <v-icon  color="white" left dark>{{IconProfil}}</v-icon>Profil</v-btn>
                      <v-btn color="teal darken-3 " dark class="px-5 white--text subtitle-2 font-weight-bold" @click="OnDisplayTwoClick">
                        <v-icon  color="white" left dark>{{ IconLock }}</v-icon>Keamanan</v-btn>
                      <v-btn  color="teal darken-3 " dark class="px-5 white--text subtitle-2 font-weight-bold" @click="OnDisplayThreeClick">
                        <v-icon  color="white" left>{{IconAudio}}</v-icon>Audio</v-btn>
                    </v-btn-toggle> 
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="8" class=" pt-4" >
                    <v-img :src="petUser.assets.setting"></v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="5">
              <v-card height="700px">
                <editprofil v-show="stateprofil"/> 
                <keamanan v-show="statekeamanan"/> 
                <audiomusic v-show="stateaudio"/>  
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiAccount } from '@mdi/js';
import { mdiLock } from '@mdi/js';
import { mdiVolumeHigh } from '@mdi/js';
import editprofil from '@/components/pengaturan/editprofil.vue';
import keamanan from '@/components/pengaturan/keamanan.vue';
import audiomusic from '@/components/pengaturan/audiomusic.vue';
import Sidebar from '@/components/Sidebar.vue';

import axios from 'axios';
window.axios = require('axios');

export default {
   
  name: 'Pengaturan',
  components:{
    editprofil,
    audiomusic,
    Sidebar,
    keamanan
  },

  data () {
    return {
      stateprofil:true,
      statekeamanan:false,
      stateaudio:false,
      SrcImgPet: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihpilihmatkul.png?alt=media&token=bbb93507-6409-43cf-a54d-9a2768b32079",
      IconProfil: mdiAccount,
      IconLock: mdiLock,
      IconAudio: mdiVolumeHigh,

      //axios
      petUser:{},
      
    }
  },
  created: async function() {
    await this.getPetUser();
  },

  methods: {
    OnDisplayOneClick: function(){
      this.stateprofil=true;
      this.statekeamanan=false;
      this.stateaudio=false; 
    },
      OnDisplayTwoClick: function(){
      this.stateprofil=false;
      this.statekeamanan=true;
      this.stateaudio=false; 
    },
      OnDisplayThreeClick: function(){
      this.stateprofil=false;
      this.statekeamanan=false;
      this.stateaudio=true; 
    },
    async getPetUser (){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

          this.petUser = response.data;
      } catch(error) {
          return console.log(error)
      }
    },
  }
}
</script>

<style>

</style>