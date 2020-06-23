<template>
  <div > 
    <v-row no-gutters >
      <v-col md="12">
        <v-card class="pa-5">

          <v-row justify="center" no-gutters class="pt-2 px-4">
            <v-col md="10" >
                <p class="title red--text text--accent-1 font-weight-medium">{{TitleMateri}} : 
                  <span class="title red--text text--accent-1 font-weight-regular">Tree</span></p>
            </v-col>
            <v-col md="2"  >
              <v-btn
              color="teal darken-4 white--text"
              block class="subtitle-2 font-weight-bold"
              @click.stop="dialogSummQuiz = true"
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
            
                <iframe src="//www.slideshare.net/slideshow/embed_code/key/lmSmaSN07udXNK" 
                width="668" height="714" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
                style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> 
                </iframe> 
                
                <div style="margin-bottom:5px"> 
                  <strong> <a href="//www.slideshare.net/BintangWijaya5/buku-struktur-data-pages111122" title="Buku struktur data pages-111-122" target="_blank">Buku struktur data pages-111-122</a> 
                  </strong> from <strong><a href="https://www.slideshare.net/BintangWijaya5" target="_blank">BintangWijaya5</a></strong> 
                </div>
            

              
            </v-col>
          </v-row>
          
        </v-card>
      </v-col>
    </v-row>

              <!-- DIALOG START-->
              <v-dialog v-model="dialogSummQuiz" width="1300px" > 
                <v-card color="white" width="auto" height="auto"
                style="overflow-x:hidden; overflow-y:hidden;">

                  <v-img src="@/assets/bg/bgdaundialog.svg">
    
                    <v-row justify="center"  class="mt-4">
                      <v-col >

                        <div v-show="statekeyword">
                          
                          <v-row class="mb-12">
                              <v-col>
                                <p class="text-center display-1 font-weight-bold grey--text text--darken-3">Quiz</p>
                                <p class="text-center subtitle-2 grey--text">Pilihlah 3 diantara 10 kata kunci di bawah ini. </p>
                              </v-col>
                            </v-row>
                          

                          <v-chip-group
                            column multiple max="3"
                            active-class="teal darken-2 white--text"  
                            style="box-shadow:none;" 
                            v-model="selected">

                            <v-row justify="center"> 
                              <v-col align="center" md="5">
                                
                                <v-chip v-for="tag in tags" :key="tag">
                                {{ tag}}
                                </v-chip>
                              
                              </v-col>
                            </v-row>
                              
                          </v-chip-group>

                          <v-row justify="center" class="mt-12 pt-4">
                            <v-col md="2">
                              <!-- <p>{{selected}}</p> -->
                                <v-btn  color="teal darken-4 white--text" 
                                class="subtitle-2 font-weight-bold"
                                @click.stop="nextStepSummQuiz()" block >PILIH</v-btn>
                                
                            </v-col>
                          </v-row>
                          
                        </div>

                        <div v-show="statedeskripsi">

                          <v-row >
                              <v-col>
                                <p class="text-center display-1 font-weight-bold grey--text text--darken-3">Quiz</p>
                                <p class="text-center subtitle-2 grey--text">Deskripsikan kata kunci yang telah kamu pilih.</p>
                              </v-col>
                            </v-row>

                          <v-form v-model="isValidDeskripsi">
                          <v-row v-for="(selected,i) in selected" :key="i" justify="center" class="mb-4" no-gutters>
                            <v-col md="6">
                              <p v-if="selected === 0" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[0] }} :</p>
                              <p v-else-if="selected === 1" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[1] }} :</p>
                              <p v-else-if="selected === 2" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[2] }} :</p>
                              <p v-else-if="selected === 3" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[3] }} :</p>
                              <p v-else-if="selected === 4" class="text-start subtitle-2 font-weight-bold grey--text dtext--darken-3">{{ tags[4] }} :</p>
                              <p v-else-if="selected === 5" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[5] }} :</p>
                              <p v-else-if="selected === 6" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[6] }} :</p>
                              <p v-else-if="selected === 7" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[7] }} :</p>
                              <p v-else-if="selected === 8" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[8] }} :</p>
                              <p v-else-if="selected === 9" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[9] }} :</p>

                              
                                <v-textarea v-model="isisummary[i]" :rules="rulesdeskripsi"
                                rows="1" no-resize outlined 
                                label="Deskripsi"
                                color="teal darken-2"
                                style="border-radius:5px; "></v-textarea>
                              

                            </v-col>
                          </v-row>
                          </v-form>
                          
                          
                          <v-row justify="center">
                            <v-col md="2">
                                <v-btn :disabled="!isValidDeskripsi" 
                                color="teal darken-4  white--text" 
                                class="subtitle-2 font-weight-bold"
                                @click="SubmitSummQuiz()" block>KUMPULKAN</v-btn>
                            </v-col>
                          </v-row>

                        </div>


                      </v-col>
                    </v-row>

                  </v-img>


                </v-card>
              </v-dialog>

  </div>
</template>

<script>

// import AfterSumm from '@/components/SLR/AfterSumm.vue'  



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
      dialogSummQuiz: false,  
      TitleMateri:'Algoritma dan Struktur Data',

      isValidDeskripsi: true,
      rulesdeskripsi: 
        [v => !!v || 'Wajib diisi',],

      tags: [
        'Root', 
        'Ancestoor', 
        'Predecessor',
        'Successor',
        'Descendant',
        'Node Child',
        'Leaf', 
        'Degree',
        'SubTree',
        'Binnary Tree'
      ],

      isisummary: ['','','',],

      selected: null,
      

       statekeyword: true,
       statedeskripsi: false,

     
      
      }
    },
    methods: {
        nextStepSummQuiz(){
            this.statekeyword=false;
            this.statedeskripsi=true;
        },
        
        nextSubmitSummQuiz(){
            this.statekeyword=true;
            this.statedeskripsi=false;
        },

        SubmitSummQuiz(){
        console.log(this.isisummary);
        this.dialogSummQuiz=false;
        this.$emit('SubmitSummQuiz');
        },
       
    }
   
}
  
</script>

