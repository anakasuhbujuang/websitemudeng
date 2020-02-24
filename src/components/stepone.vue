<template>
  <div class="hidden-sm-and-down hidden-xl-only">
       
        <!-- STEP 1: PILIH MATKUL -->
    <v-card>
        <v-stepper-content
            step="1" 
        >
                                
                                <v-row justify="center" class="mb-4">
                                  
                                  <!-- GAMBAR PET -->
                                  <v-col md="6" class="pl-12 py-10" >
                                    
                                        <v-img :src="SrcImgPet"></v-img>
                            
                                  </v-col>
                                  
                                  <!-- LIST MATKUL -->
                                  <v-col md="6">
                                      <v-row justify="center" no-gutters class="pt-4">
                                        <v-col md="10">
                                            <p class="title red--text text--accent-1 font-weight-medium">Pilih Mata Kuliah</p>
                                            <v-divider ></v-divider>
                                        </v-col>
                                      </v-row>
                                      
                                      <v-row justify="center">
                                        <v-col md="9">
                                          
                                          <v-row>
                                            <v-col>
                                              <v-btn
                                              color="teal darken-4 white--text"
                                              block
                                              height="50px"
                                              @click="nextStep(1)"
                                              >
                                              ALGORITMA DAN STRUKTUR DATA
                                              </v-btn>
                                            </v-col>
                                          </v-row>
                                          <v-row>
                                            <v-col>
                                              <v-btn
                                              color="teal darken-4 white--text"
                                              block
                                              height="50px"
                                              @click="nextStep(1)"
                                              >
                                              ALGORITMA DAN STRUKTUR DATA
                                              </v-btn>
                                            </v-col>
                                          </v-row>

                                          <v-row justify="end">
                                            <v-col md="5">
                                              <v-btn
                                              color="teal darken-2 white--text"
                                              block
                                              
                                              @click="nextStep(1)"
                                              >
                                              TAMBAH KELAS
                                              </v-btn>
                                            </v-col>
                                          </v-row>

                                        </v-col>
                                      </v-row>

                                  </v-col>
                                </v-row>
                            
                                
          </v-stepper-content>
     </v-card>
                                                   
  </div>
</template>

<script>

  export default {
    data () {

      return {
        e1: 1,
        // STEP 1: pilih matkul
        SrcImgPet: require('@/assets/pet/jonipilihmatkul.svg'),

        

      }
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },
    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
  }
</script>

 