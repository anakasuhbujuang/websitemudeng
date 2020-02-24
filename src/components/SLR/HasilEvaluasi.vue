<template >
            <v-card 
               width="400px" height="auto" color="white" class="pa-2">
                  <v-card-media justify-center >
                      <v-img v-if="Hasil" src="@/assets/pet/asihreward200.png"></v-img>
                      <v-img v-else src="@/assets/pet/asihfighting200.png"></v-img>
                  </v-card-media>
                
                  <v-row  justify="center" class="mt-8" no-gutters>
                    <v-col md="1"  class="text-center">
                          <v-icon size="28px" color="grey darken-3">{{IconScore}}</v-icon>
                    </v-col>
                    <v-col md="2" class="pl-1">
                          <p  class="title grey--text text--darken-3 font-weight-bold">{{Score}}</p>
                    </v-col>
                    <v-col md="1" class=" text-center">
                          <v-icon size="28px" color="grey darken-3" class="grey--text text--darken-3 font-weight-bold">{{IconPoints}}</v-icon>
                    </v-col>
                     <v-col md="2" class="pl-1">
                          <p   class="title grey--text text--darken-3 font-weight-bold">{{Points}} pts</p>
                    </v-col>
                  </v-row>  

                  <v-row justify="center" no-gutters class="mb-4">
                    <v-col cols="10">
                          <p v-if="Hasil" class="subtitle-2 text-center grey--text font-weight-regular" >{{ DescPass}}</p>
                          <p v-else class="subtitle-2 text-center grey--text font-weight-regular" >{{ DescFailed }}</p>
                    </v-col>
                  </v-row>                
                  
                  <v-row no-gutters class="mb-1">
                      <v-col class="pr-2">
                         <v-btn block color="teal darken-4 white--text" class="subtitle-1" router to="/">BELAJAR
                          </v-btn>
                      </v-col>
                      <v-col>
                          <v-btn block color="teal darken-2 white--text" class="subtitle-1" router to="/Dashboard" >LIHAT REVIEW
                          </v-btn>
                      </v-col>
                  </v-row>
                </v-card>
</template>

<script>
import { mdiStar } from '@mdi/js';
// import { mdiStarCircle } from '@mdi/js';
// import { mdiShieldStar } from '@mdi/js';
import { mdiClipboardText } from '@mdi/js';

  export default {

    name:'HasilEvaluasi',

    data: () => ({
    
     IconPoints: mdiStar,
     IconScore: mdiClipboardText ,
    
   
    Hasil:'pass',
    Points: '30',
    Score:'500',
    DescPass:'Kamu sudah belajar dengan hebat.Pemahamanmu sudah cukup baik.Pertahankan ya!',
    DescFailed:'Kamu sudah belajar dengan hebat.Pemahamanmu perlu ditingkatkan lagi.Pertahankan ya!',
     
    }),

  }
</script>

