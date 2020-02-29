<template>
  <div style="background-color:#FAFAFA;" 
  class="hidden-sm-and-down hidden-xl-only">
      <v-img :src="SrcBgHasilTestMAI" contain >
        <v-app-bar 
            color="teal darken-4"
            dense
            dark>
            <v-spacer></v-spacer>
            <v-toolbar-title class="headline font-weight-bold">MUDENG</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container >

            <!-- CARDS-PET START -->
            <v-row justify="center" class="mt-12 pt-12">
              <v-col 
               v-for="(item, i) in items"
                :key="i"
               md="4"
               >
                <v-card 
                color="white"
                >
                  <v-card-media justify-center >
                      <v-img :src="item.src"></v-img>
                  </v-card-media>

                  <v-row  class="mt-4" no-gutters>
                    <v-col  class="text-center">
                          <p class=" subtitle-1 grey--text text--darken-4 font-weight-bold">Kemampuan Metakognisi : <span class=" text-start red--text  text--accent-1 font-italic font-weight-bold">{{item.LvMAI}}</span></p>
                                   
                    </v-col>
                  </v-row>       
                  <v-row justify="center" no-gutters class="mb-2">
                    <v-col cols="10">
                          <p class="subtitle-2 text-center grey--text font-weight-regular" >{{ item.DescHasilMAI }}
                          </p>
                    </v-col>
                  </v-row>                
                  
                  <v-card-actions>
                      <v-btn block
                      color="teal darken-4 white--text"
                      class="subtitle-1"
                      >MULAI
                      </v-btn>
                  </v-card-actions>
                        
                </v-card>

              </v-col>
            </v-row>
            <!-- CARDS-PET END-->
           
        </v-container>
      </v-img>
    </div>
</template>

<script>
export default {
    data: () => ({
      
      SrcBgHasilTestMAI: require('@/assets/bg/bgdaun.jpg'),

      items: [
        {
          src: require('@/assets/pet/asihreward200.png'),
          title: 'Kemampuan Metakognisi : ',
          LvMAI: 'High',
          DescHasilMAI:'Menurut analisis Joni, kemampuan metakognisimu sudah baik. Walaupun begitu, Joni tetap akan mendampingimu mempertahankannya bersama Mudeng.',
        },
        
      ],
  methods: {
  }
      
    }),
  }
</script>

<style >
</style>