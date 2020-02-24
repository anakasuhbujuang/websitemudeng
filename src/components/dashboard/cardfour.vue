<template>
    
          <v-card min-height="320px" max-height="420px" color="white" class="pa-2">
                            
                            <v-row justify="center" no-gutters class="mt-2">
                              <v-col md="10">
                                  <p class="title red--text text--accent-1 font-weight-medium">Performa</p>
                                  <v-divider ></v-divider>
                              </v-col>
                            </v-row>

                            <v-row justify="center" class="pt-3">
                              <v-col md="11">
                                
                                  <p class="body-1 grey--text text--darken-4 font-weight-bold text-center">{{TotalJam}} Jam <br> 
                                    <span class="caption grey--text font-weight-medium">Aktivitas Belajar Selama<br>
                                      <span class="font-italic">
                                        {{TglAwal}} {{BulanAwal}} &mdash; {{TglAkhir}} {{BulanAkhir}} {{Tahun}}
                                      </span>
                                    </span>
                                  </p>
                              </v-col>
                            </v-row>
                                  
                                    <v-row justify="center" no-gutters>
                                      <v-col md="12" >
                                              <v-sparkline
                                                :value="value"
                                                color="rgba(255, 138, 128)"
                                                height="100"
                                                padding="24"
                                                stroke-linecap="round"
                                                smooth
                                                show-labels
                                              >
                                              </v-sparkline>
                                      </v-col>
                                    </v-row>
                              
                                  <v-row dense justify="center" class="mb-3">
                                    <v-col md="11" class="caption text-center grey--text font-weight-medium" style="word-spacing: 25px;">Senin Selasa Rabu Kamis Jumat Sabtu Minggu</v-col>
                                  
                                  </v-row>
                            
          </v-card>               

          
</template>


<script>

// const gradients = [
//     ['#42b3f4'],
    
//   ]

export default {

  

  name:'cardfour',

     data: () => ({

      // gradient: gradients[1],
      // gradientDirection: 'top',
      //CARD 4 : Performa
          TotalJam: 56,
          TglAwal: 25,
          BulanAwal: 'Nov',
          TglAkhir: 1,
          BulanAkhir: 'Des',
          Tahun: 2020,

           value: [
              12,
              4,
              7,
              10,
              2,
              9,
              10,
              
            ],
            hari: [
              ['Senin'],
              ['Senin'],
              ['Senin'],
              ['Senin'],
              ['Senin'],
              ['Senin'],
              ['Senin'],
              
            ],
     

    }),
  }
</script>
