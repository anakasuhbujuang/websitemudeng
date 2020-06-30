<template>
  <div style="background-color:#FAFAFA;" class="hidden-sm-and-down hidden-xl-only">
    <v-img :src="SrcBgPraTestMAI" contain >
        <v-app-bar color="teal darken-4" dense dark>
          <v-spacer></v-spacer>
          <v-toolbar-title class="title font-weight-bold">MUDENG</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>

        <v-container>
          <!-- CARDS-PET START -->
          <v-row justify="center" class=" pt-12">
            <v-col md="3">
              <v-card color="white">
                <v-card-media justify-center >
                  <v-img :src="petUser.assets.profil"></v-img>
                </v-card-media>

                <v-row justify="center" class="mt-4" no-gutters>
                  <v-col md="11">
                    <p class="subtitle-1  text-center grey--text  text--darken-3 font-italic font-weight-bold" v-text="title">
                    </p>
                  </v-col>
                </v-row>       
                <v-row justify="center" no-gutters >
                  <v-col md="10">
                    <p class="subtitle-2 text-center grey--text font-weight-regular" v-text="desc">
                    </p>
                  </v-col>
                </v-row>                
                
                <v-card-actions>
                  <v-btn block color="teal darken-4 white--text"
                  class="subtitle-2 font-weight-bold"
                  @click="Mulai()">MULAI
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
import axios from 'axios'

export default {
  data: () => ({
    
    SrcBgPraTestMAI: require('@/assets/bg/bgdaun.jpg'),

    //axios
    petUser:{},

    //card
    title: 'Metacognitive Awareness Inventory Test',
    desc:'Yuk, ikuti test ini untuk mengetahui kemampuan metakognisi-mu.',
  }),

  created: async function() {
    await this.getPetUser();
  },

    methods: {
      async getPetUser (){
        try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

          this.petUser = response.data;
        } catch(error) {
          return console.log(error)
        }
      },

      Mulai (){
        this.$router.push('/TestMai'); //biar ga reload semua
      }
    }
  }
</script>

<style >
</style>