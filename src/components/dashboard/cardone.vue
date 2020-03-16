<template>
  <div>
    <v-card height="380px" color="white" class="pa-2">
      
      <v-row justify="center" no-gutters="" class="mt-4">
        <v-col md="11">
          <p class="title red--text text--accent-1 font-weight-medium">Hai, {{Nama}} </p>
          <v-divider ></v-divider>
        </v-col>
      </v-row>
      
      <!-- ISIAN CARD 1 -->
      <v-row class=" px-2" no-gutters>

        <!-- COL 1.1 : GAMBAR CArD 1 -->
        <v-col md="5" class="mt-12 pt-3">
          <v-card-media class="pa-0 ma-0" >
              <v-img :src="SrcImg" position="bottom"></v-img>
          </v-card-media>
        </v-col>

        <!-- COL 1.2 : TEXT + BUTTON CARD 1 -->
        <v-col md="7" class="">

          <!-- TEXT CARDD -->
          <v-card-text class="py-0 mb-0 mt-8">
          
            <p class="title grey--text text--darken-4 font-weight-bold">Kemampuan Metakognisi : <span class="red--text  text--accent-1 font-italic font-weight-bold">{{LvMAI}}</span></p>
            <p styles="text-align:justify;" class="subtitle-2 text-start grey--text font-weight-regular" >{{ DescHasilMAI }}</p>
            <p styles="text-align:justify;" class="subtitle-2 text-start grey--text font-weight-regular" >{{ DescMAI }} <a href="#" class="subtitle-2 teal--text text--darken-4 font-weight-bold">baca selengkapnya.</a></p>
                 
          </v-card-text>

          <!-- BUTTON CARD 1-->
          <v-card-actions class="">
            <v-row no-gutters>
              <v-col md="5" class="ml-2 mr-4" >
                <v-btn block dense color="teal darken-4 white--text " 
                class="subtitle-2 font-weight-bold" router to="/ProsesBelajar">MULAI BELAJAR</v-btn>
              </v-col>

              <v-col md="5">
                <v-btn block dense color="teal darken-2 white--text" 
                class="subtitle-2 font-weight-bold" router to="/TestMAI">ULANGI TEST MAI</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>

      </v-col>
    </v-row>

  </v-card>
  </div>  
</template>

<script>

export default {

  name:'cardone',

     data: () => ({

      Nama:'Jihaan Nadhiya',
      SrcImg: require('@/assets/pet/asihprofil.jpg'),
       
      LvMAI:'High',
      DescMAI:'Metakognisi merupakan konsep tentang bagaimana cara belajar yang tepat dan upaya pengembangannya...',
      DescHasilMAI:'Menurut analisis Joni, kemampuan metakognisimu belum terlalu baik. Jangan khawatir, Joni akan membantumu memahaminya bersama Mudeng.',
      

    }),
  }
</script>
