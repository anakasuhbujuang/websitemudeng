<template >
            <v-card 
               width="1200px" height="auto" color="white" class="pt-2 pb-2 pr-6">

               <v-row justify="end">
                 <v-col md="1" class="text-end">
                      <v-btn icon>
                        <v-icon size="30px">{{IconClose}}</v-icon>
                      </v-btn>
                 </v-col>
               </v-row>
               
                <v-row >
                  <v-col md="5" class="pb-4">

                    <v-row justify="center">
                      <v-col md="10">
                         <v-img src="/assets/pet/asihbingung.png"></v-img>
                      </v-col>
                    </v-row>
                   
                    <v-row justify="center" class="mt-4">
                      <v-col md="10" class="text-center">
                        <p  class="title grey--text text--darken-3 font-weight-bold">Apakah Kamu Merasa Kesulitan ?</p>
                        <p class="subtitle-2 text-center grey--text font-weight-regular" >Joni punya beberapa alternatif untukmu.<br>Semoga membantu.</p>
                      </v-col>
                    </v-row>

                  </v-col>

                  <v-col md="7" class="mt-12">

                    <v-row class="mb-8">
                      <v-col md="11">
                        <v-card color="grey lighten-3 " class="pt-4 pl-6 pb-1" flat>
                          <p class="subtitle-1 grey--text text--darken-2 font-weight-regular">Kembali melihat materi sebelumnya yang sudah dipelajari <a href="" class="teal--text text--darken-4 font-weight-bold" >di sini.</a></p>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row class="mb-8">
                      <v-col  md="11" >
                        <v-card color="grey lighten-3 " class="pt-4 pl-6 pb-1" flat>
                          <p class="subtitle-1 grey--text text--darken-2 font-weight-regular">Mencari referensi lain  <a href="" class="teal--text text--darken-4 font-weight-bold" >di sini.</a></p>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col  md="11">
                        <v-card color="grey lighten-3 " class="pt-4 pl-6 pb-1" flat>
                          <p class="subtitle-1 grey--text text--darken-2 font-weight-regular">Mencoba alternatif strategi belajar yang lainnya <a href="" class="teal--text text--darken-4 font-weight-bold" >di sini.</a></p>
                        </v-card>
                      </v-col>
                    </v-row>

                  </v-col>
                </v-row>
            </v-card>
</template>

<script>

import { mdiCloseCircle } from '@mdi/js';
  export default {

    name:'Instruksi',

    data: () => ({
    
    IconClose : mdiCloseCircle,
   
     
    }),

  }
</script>

