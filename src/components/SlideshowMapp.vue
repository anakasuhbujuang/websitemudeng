<template>
  <div > 
    <v-row no-gutters >
      <v-col md="12">
        <v-card class="pa-5">

          <v-row justify="center" no-gutters class="pt-2 px-4">
            <v-col md="10" >
                <p class="title red--text text--accent-1 font-weight-medium">{{TitleMateri}} : 
                  <span class="title red--text text--accent-1 font-weight-regular">Sorting PART 1</span></p>
            </v-col>
            <v-col md="2"  >
              <v-btn
              color="teal darken-4 white--text"
              block class="subtitle-1 "
              @click="dialogMappQuiz = true"
              >LANJUTKAN</v-btn>
            </v-col>
          </v-row>
          
          <v-row class="py-0 my-0 px-4">
            <v-col md="12">
              <v-divider ></v-divider>
            </v-col>
          </v-row>

          <v-row justify="center" class="pt-2">
            <v-col md="12" class="text-center">
              <iframe src="//www.slideshare.net/slideshow/embed_code/key/DOwXVFSP1RorAM" styel="max-width: 100%; height: auto;" 
                width="1000px" height="500px" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
                style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 

              <div style="margin-bottom:5px" class="text-center"> 
                <strong> <a  href="//www.slideshare.net/viruzsystem/algoritma-powerpoint" title="Algoritma powerpoint" target="_blank">Algoritma powerpoint</a> </strong> from 
                <strong><a href="https://www.slideshare.net/viruzsystem" target="_blank">Irwin andriyanto</a></strong> 
              </div>
            </v-col>
          </v-row>
          
        </v-card>
      </v-col>
    </v-row>

            <!-- DIALOG START-->
              <v-dialog v-model="dialogMappQuiz" width="1000px" > 
                <v-card color="white" width="auto" height="auto"
                style="overflow-x:hidden; overflow-y:hidden;">

                  <v-img src="@/assets/bg/bgdaundialog.svg">

                    <v-row justify="center">
                      <v-col md="10">

                        <v-row class="mb-2">
                            <v-col>
                              <p class="text-center display-1 font-weight-bold grey--text text--darken-3">Quiz</p>
                              <!-- <p class="text-center subtitle-2 grey--text">Buatlah diagram berisi materi yang telah kamu pelajari.</p> -->
                            </v-col>
                        </v-row>


                        <v-row justify="center" dense no-gutters>
                          
                          <v-col md="1" class="text-center">
                            <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">1.
                            </v-card-text>
                          </v-col>

                          <v-col md="10">
                            <v-card dense flat
                              color="grey lighten-4" class="d-flex justify-center align-center">
                                <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >Buatlah diagram berisi ringkasan materi yang telah kamu pelajari. Contoh 
                                  <a href="https://www.slideshare.net/viruzsystem" target="_blank"><u  class=" caption teal--text text--darken-4 font-weight-bold" >klik disini.</u></a>
                                </v-card-text>
                            </v-card>
                          </v-col>

                          <v-col md="1"></v-col>
                        </v-row>

                        <v-row justify="center" class="my-4">
                          <v-col md="3">
                            <v-btn color="teal darken-4 white--text" href="https://app.diagrams.net/" target="_blank" block >Buat Diagram</v-btn>
                          </v-col>
                        </v-row>

                        <v-row justify="center" dense no-gutters>
                          <v-col md="1" class="text-center">
                            <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">2.
                            </v-card-text>
                          </v-col>

                          <v-col md="10">
                            <v-card dense flat
                              color="grey lighten-4" class="d-flex justify-center align-center">
                                <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >Unduh diagram yang telah anda buat. Kemudian unggah dan kumpulkan.
                                </v-card-text>
                            </v-card>
                          </v-col>

                          <v-col md="1"></v-col>
                        </v-row>
                        
                         <v-row justify="center" class="mt-4">
                          <v-col md="3">
                            <v-btn :loading="loading"
                              :disabled="loading"
                              class="white--text"
                              @click="loader = 'loading'"
                              color="teal darken-4" block >Unggah<v-icon left white>mdi-cloud-upload</v-icon></v-btn>
                          </v-col>
                        </v-row>

                      </v-col>
                    </v-row>
    
                        
                        <!-- <v-row justify="center" class="mt-12 pt-4">
                          <v-col md="2">
                            
                              <v-btn  color="teal darken-4 white--text" @click.stop="nextStepMappQuiz()" block >PILIH</v-btn>
                          </v-col>
                        </v-row> -->
                          
                  </v-img>

                </v-card>
              </v-dialog>

  </div>
</template>

<script >

export default {

 name: 'slideshowsumm',
    components: {
      // AfterSumm
    },

    props: {
      StateEvaluasiBelajar: Boolean,
      e1: Number
    },
  
    data () {

      return {
      
      // stateevaluasi: false,
      dialogMappQuiz: false,  
      TitleMateri:'Algoritma dan Struktur Data',

      loader: null,
      loading: false,

      

     

  
     
      
      }
  },
  methods: {
    SubmitMappQuiz(){
        // console.log(this.isisummary);
        this.dialogMappQuiz=false;
        this.$emit('SubmitMappQuiz');
        },
    },
    
  
}


</script>


<style >
  body {
  margin: 2rem;
  background: #eee;
}
</style>
