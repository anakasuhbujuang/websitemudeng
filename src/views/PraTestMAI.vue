<template>
    <div class="hidden-sm-and-down hidden-xl-only">
      <v-img :src="SrcBgPraTestMAI" contain >

        <v-app-bar 
            color="teal darken-4"
            dense
            dark>
            <v-spacer></v-spacer>
            <v-toolbar-title class="title font-weight-bold">MUDENG</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container>

            <!-- CARDS-PET START -->
            <v-row justify="center" class=" pt-12">
              <v-col 
               v-for="(item, i) in items"
                :key="i"
               md="3"
               >
                <v-card 
                color="white"
                >
                  <v-card-media justify-center >
                      <v-img :src="item.src"></v-img>
                  </v-card-media>

                  <v-row justify="center" class="mt-4" no-gutters>
                    <v-col md="11">
                          <p class="subtitle-1  text-center grey--text  text--darken-3 font-italic font-weight-bold" v-text="item.title">
                          </p>
                    </v-col>
                  </v-row>       
                  <v-row justify="center" no-gutters >
                    <v-col md="10">
                          <p class="subtitle-2 text-center grey--text font-weight-regular" v-text="item.desc">
                          </p>
                    </v-col>
                  </v-row>                
                  
                  <v-card-actions>
                      <v-btn block
                      color="teal darken-4 white--text"
                      class="subtitle-1 "
                      router to="/TestMAI">MULAI
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
      
      SrcBgPraTestMAI: require('@/assets/bg/bgdaun.jpg'),

      items: [
        {
          src: require('@/assets/pet/asihprofil.jpg'),
          title: 'Metacognitive Awareness Inventory Test',
          desc:'Yuk, ikuti test ini untuk mengetahui kemampuan metakognisi-mu.',
        },
        
      ],
  methods: {
  }
      
    }),
  }
</script>

<style >
</style>