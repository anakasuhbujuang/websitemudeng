<template>
    <v-card min-height="320px" max-height="420px" color="white" class="pa-2">
                            
                            <v-row justify="center" no-gutters="" class="mt-4">
                              <v-col md="11">
                                  <p class="title red--text text--accent-1 font-weight-medium">Hai, {{Nama}} </p>
                                  <v-divider ></v-divider>
                              </v-col>
                            </v-row>
                            
                            
                            <!-- ISIAN CARD 1 -->
                            <v-row class="pt-4 px-2" no-gutters>

                              <!-- COL 1.1 : GAMBAR CArD 1 -->
                              <v-col md="5" class="text-center">
                                <v-card flat color="white" class="pb-8">
                                  <v-card-media >
                                      <v-img :src="SrcImg" max-width="400px" height="auto"></v-img>
                                  </v-card-media>
                                </v-card> 
                              </v-col>

                              <!-- COL 1.2 : TEXT + BUTTON CARD 1 -->
                              <v-col md="7" class="mt-4">

                                <!-- TEXT CARD 1 -->
                                  <v-row no-gutters>
                                    <v-col md="11" class="mb-3">
                                        <v-card color="white" flat >
                                          <p class="title grey--text text--darken-4 font-weight-bold">Kemampuan Metakognisi : <span class="red--text  text--accent-1 font-italic font-weight-bold">{{LvMAI}}</span></p>
                                          
                                              <p styles="text-align:justify;" class="subtitle-2 text-start grey--text font-weight-regular" >{{ DescMAI }} <a href="#" class="subtitle-2 teal--text text--darken-4 font-weight-bold">Baca selengkapnya..</a></p>
                                              <p styles="text-align:justify;" class="subtitle-2 text-start grey--text font-weight-regular" >{{ DescHasilMAI }}</p>
                                        </v-card>  
                                    </v-col>
                                  </v-row>       

                                <!-- BUTTON CARD 1          -->
                                  <v-row no-gutters>
                                    <v-col md="5" class="mr-4">
                                        
                                            <v-btn 
                                            block
                                            dense
                                            color="teal darken-4 white--text"
                                            class="body-2"
                                            >MULAI BELAJAR
                                            </v-btn>
                                        
                                    </v-col>
                                    <v-col md="5">
                                       
                                            <v-btn 
                                            block
                                            dense
                                            color="teal darken-2 white--text"
                                            class="body-2"
                                            >ULANGI TEST MAI
                                            </v-btn>
                                        
                                    </v-col>
                                  </v-row>
                              </v-col>
                            </v-row>

                          </v-card>
    
</template>

<script>

export default {

  name:'cardone',

     data: () => ({

      Nama:'Jihaan Nadhiya',
      SrcImg: require('@/assets/pet/asih200.png'),
       
      LvMAI:'High',
      DescMAI:'Metakognisi merupakan konsep dimana kamu paham bagaimana cara belajar yang tepat dan upaya  mengembangkannya dalam menghadapi berbagai model pembelajaran.',
      DescHasilMAI:'Menurut analisis Joni, kemampuan metakognisimu belum terlalu baik. Jangan khawatir, Joni akan membantumu memahaminya bersama Mudeng.',
      
     

    }),
  }
</script>
