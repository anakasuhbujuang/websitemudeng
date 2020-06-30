<template>
<!-- RIWAYAT -->
  <v-card height="400px" color="white" class="pa-2">
      
      <!-- JUDUL CARD RIWAYAT -->
      <v-row justify="center" no-gutters="" class="mt-4">
        <v-col md="11">
            <p class="title red--text text--accent-1 font-weight-medium">Riwayat</p>
            <v-divider ></v-divider>
        </v-col>
      </v-row>

      <!-- TABEL RIWAYAT -->

      <v-row justify="center" class="my-6" >
        <v-col md="11"> 

          <v-card color="grey"    >
            <v-simple-table fixed-header height="250px"  >
              <template v-slot:default>
                
                <thead>
                  <tr >
                    <th style="border-top-left-radius:5px; border-top-right-radius:5px; background-color:#FF8A80;"  class="caption  white--text font-weight-bold">Subjek Belajar</th>
                    <th style="background-color:#FF8A80; " class="caption  white--text  font-weight-bold">Tanggal</th>
                    <th style="background-color:#FF8A80;" class="caption  white--text  font-weight-bold">Skor</th>
                    <th style="background-color:#FF8A80;" class="caption  white--text  font-weight-bold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in riwayat" :key="item.subjek">
                    <td class="caption grey--text  font-weight-medium">{{ item.TitleMateri }}</td>
                    <td class="caption grey--text font-weight-medium">{{ item.tanggal }}</td>
                    <td class="caption grey--text  font-weight-medium">{{ item.skor }}</td>
                    <td class="caption grey--text  font-weight-medium">{{ item.points }}</td>
                  </tr>
                </tbody>

              </template>
            </v-simple-table>
          </v-card> 
        </v-col>
      </v-row>
  </v-card>
</template>

<script>

// import axios from 'axios';
// window.axios = require('axios');

export default {

  name:'cardthree',

     data: () => ({

    //axios
    // riwayat:[],

    // CARD 3 : riwayat
      riwayat: [
          {
          TitleMateri: 'Algoritma dan Stuktur Data: Tree',
          tanggal: '30 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: Search',
          tanggal: '25 Oktober 2019',
          skor: 80,
          points: 200,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: Sorting',
          tanggal: '20 Oktober 2019',
          skor: 75,
          points: 180,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: Sorting',
          tanggal: '12 Oktober 2019',
          skor: 82,
          points: 210,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: Tree',
          tanggal: '10 Oktober 2019',
          skor: 90,
          points: 250,
          },
           
      ],
     
    }),

    // created: function(){
    //   await this.getRiwayat();
    // },

    methods:{
      // async getRiwayat (){
      //   try {
      //     var response = await axios.get(`${process.env.VUE_APP_API_HOST}/mai/soal`)

      //     this.riwayat= response.data;
      //   } catch(error) {
      //   return console.log(error)
      //   }
      // },
    }

  }
</script>