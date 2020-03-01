<template>
  <v-card height="400px" color="white" class="pa-2">

    <!--JUDUL CARD-->
    <v-row justify="center" no-gutters class="mt-2">
      <v-col md="10">
          <p class="title red--text text--accent-1 font-weight-medium">Performa</p>
          <v-divider ></v-divider>
      </v-col>
    </v-row>

    <!-- ISIAN CARD -->
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
      <v-col md="10">
        <v-card color="white" class="py-4" >
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
        </v-card>
      </v-col>
    </v-row>
      
    <v-row dense justify="center" class="mb-3">
      <v-col md="11" class="text-center">
        <p class="overline grey--text font-weight-medium">Satuan (Jam)</p>
      </v-col>
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
