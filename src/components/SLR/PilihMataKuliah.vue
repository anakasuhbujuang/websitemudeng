<template>
    <div>
      <v-row justify="center" no-gutters class="pa-0 ma-0">
        <v-col md="12"> 
          <!-- STEP 1: PILIH MATKUL -->
            <v-card>
              <v-row justify="center" class="mb-4">
                
                <!-- GAMBAR PET -->
                <v-col md="6" class="pl-12 py-10" >
                  <v-img :src="SrcImgPet"></v-img>
                </v-col>
                
                <!-- LIST MATKUL -->
                <v-col md="6">
                  <v-row justify="center" no-gutters class="pt-4">
                    <v-col md="10">
                      <p class="title red--text text--accent-1 font-weight-medium">Mata Kuliah</p>
                      <v-divider ></v-divider>
                    </v-col>
                  </v-row>
                        
                  <v-row justify="center">
                    <v-col md="9">
                      
                      <v-row>
                        <v-col>
                          <v-btn block color="teal darken-4 white--text"
                          height="50px" @click="nextStepToPilihMataKuliah()">
                          ALGORITMA DAN STRUKTUR DATA</v-btn>
                        </v-col>
                      </v-row>

                      <v-row justify="end">
                        <v-col md="5">
                          <v-btn color="teal darken-2 white--text" block
                          @click="nextStepToPilihMataKuliah()">TAMBAH KELAS</v-btn>
                        </v-col>
                      </v-row>

                    </v-col>
                  </v-row>

                </v-col>
              </v-row>
                 
            </v-card> 
          </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

    name:'PilihMataKuliah',
    
    props: {
        StatePilihMataKuliah: Boolean,
        e1: Number,
    },

    data () {

      return {
          SrcImgPet:require('@/assets/pet/asihprofil.jpg'),
      }
    },

    methods: {
        nextStepToPilihMataKuliah() {
            this.$emit('nextStepToPilihMataKuliah')
        },
            
    }


    
}
</script>