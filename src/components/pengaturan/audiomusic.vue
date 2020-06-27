<template>
    <div>
        <v-row justify="center" no-gutters="" class="pt-5">
            <v-col md="11">
                <p class="title red--text text--accent-1 font-weight-medium">Audio</p>
                <v-divider ></v-divider>
            </v-col>
        </v-row>
       
        <v-row justify="center" class="my-4">
            <v-col md="11">
                <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">Sistem</p>
                <v-card color="grey lighten-3" flat  class="px-6 pt-2" height="50px" >
                    
                     <v-slider 
                        :prepend-icon="IconAudioLow"
                        :append-icon="IconAudio" 
                        v-model="SliderSistem"
                        color="teal lighten-2"
                        thumb-color="teal darken-3"
                        track-color="white"
                        thumb-label
                        ></v-slider>
                    
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center" class="mb-4" >
            <v-col md="11">
                <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">Latar Belakang Musik</p>
                <v-card color="grey lighten-3" flat class="px-6 pt-2" height="50px" >
                    
                     <v-slider 
                        :prepend-icon="IconMusicOff"
                        :append-icon="IconMusic" 
                        v-model="SliderMusik"
                        color="teal lighten-2"
                        thumb-color="teal darken-3"
                        track-color="white"
                        thumb-label
                        ></v-slider>
                    
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col md="11">
                 <v-btn 
                    color="teal darken-4 white--text"
                    class=" mr-4 subtitle-2 font-weight-bold"
                    block @click="simpan()"
                    >SIMPAN
                    </v-btn>
            </v-col>
        </v-row>
        <!-- DIALOG SUKSES -->
         <v-dialog v-model="dialogUpdateAudioSukses" persistent max-width="300px" >
          <v-card 
          color="white"
          width="300px"
          height="350px"
          class=""
          style="overflow-x:hidden;">

            <v-card-media justify-center >
                <v-img :src="srcDialogSukses"></v-img>
            </v-card-media>

            <v-row justify="center" class="mt-4 " no-gutters>
              <v-col md="8">
                    <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">Sukses</p>
              </v-col>
            </v-row>   

            <v-row justify="center" no-gutters class="mb-4">
              <v-col md="11">
                <p class="body-2 text-center grey--text  font-weight-regular">Perubahan berhasil diperbarui.</p>
              </v-col>
            </v-row>     

            <v-row no-gutters class="">
              <v-col class="px-2 pb-2 pa-1">
                <v-btn block color="teal darken-4 white--text" 
                class="subtitle-2 font-weight-bold"
                @click.stop="dialogUpdateAudioSukses=false;">OK</v-btn>
              </v-col>
            </v-row>
                
          </v-card>
        </v-dialog>
        <!-- DIALOG SUSKES -->                
    </div>
</template>

<script>
import { mdiCamera } from '@mdi/js';
import { mdiLock } from '@mdi/js';
import { mdiVolumeHigh } from '@mdi/js';
import { mdiVolumeVariantOff } from '@mdi/js';
import { mdiMusic } from '@mdi/js';
import { mdiMusicOff } from '@mdi/js';

export default {
   
  name: 'audiomusic',
   components:{
  
    },


   data () {
      return {

        srcDialogSukses: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihreward200.png?alt=media&token=d4dcb34c-4257-4801-9f26-3fd6abbc4357", 
        dialogUpdateAudiioukses: false,

         SliderSistem:'20',
         SliderMusik:'40',
        //Ikon
        IconUnggahFoto : mdiCamera,
        IconLock: mdiLock,
        IconAudio: mdiVolumeHigh,
        IconAudioLow: mdiVolumeVariantOff,
        IconMusic: mdiMusic,
        IconMusicOff: mdiMusicOff
        
        
      }
    },

      methods:{
        simpan(){
            this.dialogUpdateAudioSukses = true;
        }
    }

}
</script>