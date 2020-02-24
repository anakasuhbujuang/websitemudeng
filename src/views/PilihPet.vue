<template>
    <div class="hidden-sm-and-down hidden-xl-only">

      <v-img :src="SrcBgPilihPet" contain >

        <v-app-bar 
            color="teal darken-4"
            dense
            dark>
            <v-spacer></v-spacer>
            <v-toolbar-title class="headline font-weight-bold">MUDENG</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container >

            <!-- JUDUL START -->
            <v-row justify="center" class="mb-0 mt-6" no-gutters>
              <v-col md="6">
                  <p class="title text-center  grey--text  text--darken-3   font-weight-bold">Pilih Kawanmu</p>
                
              </v-col>
            </v-row>

            <v-row justify="center" no-gutters>
              <v-col md="5">
                  <p class="subtitle-1 text-center  grey--text font-weight-regular">Salah satu dari mereka akan menemanimu bermain<br>dan belajar bersama Mudeng.</p>
              </v-col>
            </v-row>
            <!-- JUDUL END -->

            <!-- CARDS-PET START -->
            <v-row justify="center" class="mt-6">
              <v-col 
               v-for="(item, i) in items"
                :key="i"
               md="3"
               >
                <v-card 
                color="white"
                min-height="200px"
                max-height="400px"
                >
                  <v-card-media justify-center >
                      <v-img :src="item.SrcImgPet"></v-img>
                  </v-card-media>

                  <v-row justify="center" class="mt-4" no-gutters>
                    <v-col md="8">
                          <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold" v-text="item.NamePet">
                          </p>
                    </v-col>
                  </v-row>       
                  <v-row justify="center" no-gutters class="mb-2">
                    <v-col md="10">
                          <p class="subtitle-2 text-center grey--text  font-weight-regular">{{item.DescPet}}<br>Maukah kau berteman<br>denganku ?
                          </p>
                    </v-col>
                  </v-row>                
                  
                  <v-card-actions>
                      <v-btn block
                      color="teal darken-4 white--text" 
                      class="subtitle-1"
                      router to="/PraTestMAI">PILIH
                      </v-btn>
                  </v-card-actions>
                        
                </v-card>

              </v-col>
            </v-row>
            <!-- CARDS-PET END -->
           
        </v-container>

        


      </v-img>
    </div>

</template>

<script>
export default {
    data: () => ({
      

      SrcBgPilihPet: require('@/assets/bg/bgdaun.svg'),

      items: [
        {
          SrcImgPet: require('@/assets/pet/asih200.png'),
          NamePet: 'Asih',
          DescPet:'Hai, aku adalah cendrawasih dari Papua. Aku  senang bernyanyi.',
        },
        {
          SrcImgPet: require('@/assets/pet/joni200.png'),
          NamePet: 'Joni',
          DescPet:'Hai, aku adalah orang utan dari Kalimantan. Aku  senang menari.',
        },
        {
          SrcImgPet: require('@/assets/pet/budi200.png'),
          NamePet: 'Budi',
          DescPet:'Hai, aku adalah komodo dari Pulau Komodo. Aku senang berlari.',
        },

        
      ],
  methods: {
  }
      
    }),
  }
</script>

<style >
div.bgdaun{

  background-image: url('~@/assets/bgdaun147.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  /* width: 1440; */
  /* height: 900; */
    
  top: 0;
  left: 0;
    
  background-size: cover;
   
  /* transform: scale(1.1); */
  z-index: -1;

}
</style>