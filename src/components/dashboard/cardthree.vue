<template>
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
                
                <thead  >
                  <tr >
                    <th style="border-top-left-radius:5px; background-color:#FF8A80;"  class="caption  white--text font-weight-bold">Subjek Belajar</th>
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

export default {

  name:'cardthree',

     data: () => ({

     // CARD 3 : riwayat
      riwayat: [
          {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },
           {
          TitleMateri: 'Algoritma dan Stuktur Data: PART 1',
          tanggal: '10 Oktober 2019',
          skor: 70,
          points: 150,
          },     
      ],
     

    }),
  }
</script>