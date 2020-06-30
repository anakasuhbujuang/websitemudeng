<template>
  <div style="background-color:#FAFAFA;" class="hidden-sm-and-down hidden-xl-only" >
    
    <v-container fluid>
      <v-row no-gutters>
        
        <Sidebar /> <!-- MENUUU -->
       
        <!-- LAMAAN  -->
        <v-col md="12">

          <!-- STEPPER -->
          <v-row justify="center">
            <v-col md="12">

              <v-stepper v-model="e1" style="background-color:#FAFAFA; box-shadow:none; "  >
                  
                <!-- CARD 1: STEPPER -->
                <v-row justify="center">
                  <v-col md="12">

                    <v-card min-height="120px" class="pa-5 mb-4">
                        
                      <v-row justify="center" no-gutters>
                        <v-col md="10">
                          <p class="title text-center teal--text text--darken-4 font-weight-bold">Proses Belajar</p>
                        </v-col>
                      </v-row>
                        
                      <v-row justify="center" no-gutters>
                        <v-col md="10">
                          <v-stepper-header style=" box-shadow:none;" >
                            <template v-for="item in steps">
                                                            
                              <v-stepper-step
                              :key="`${item.n}-step`"
                              :complete="e1 > item.n"
                              :step="item.n"
                              editable
                              color="teal darken-4"
                              >{{item.title}}</v-stepper-step> 
                              <!-- editable : mengedit btn step sebelumnya
                                   complete : nge lock btn step setelahnya
                                   btn step selanjutnya bakal bs aktif ketika klik btn StateX-->

                              <v-divider v-if="item.n < 5" :key="item.n"></v-divider>

                            </template>
                          </v-stepper-header>
                        </v-col>
                      </v-row>
                          
                    </v-card>

                  </v-col>
                </v-row>

                <!-- CARD2 : CONTENT -->

                <!-- STEP 1 : Pilih Mata Kuliah -->
                <v-stepper-content step="1" class="pa-0 ma-0">
                  <PilihMataKuliah 
                  :StatePilihMateriKuliah="StatePilihMateriKuliah"
                  :e1="e1"
                  @nextStepToPilihMataKuliah="e1=2; StatePilihMateriKuliah=true;"/> <!-- parsing value stateX, value e1, btn nextStepX -->
                </v-stepper-content>

                <!-- STEP 2 : Pilih Materi -->
                <v-stepper-content step="2" class="pa-0 ma-0">
                  <v-row  no-gutters class="pa-0 ma-0">
                    <v-col md="12">
                      
                      <v-row >
                        <v-col md="8" >
                          <PilihMateriKuliah v-show="StatePilihMateriKuliah"
                          :StatePilihStrategi="StatePilihStrategi"
                          :e1="e1"
                          @nextStepToPilihStrategi="e1=3; StatePilihStrategi=true; "/> <!-- parsing value stateX, value e1, btn nextStepX -->
                          <!-- <p>{{e1}} {{StatePilihMateriKuliah}}</p> -->
                        </v-col>

                        <v-col md="4">     
                          <leaderboard v-show="StatePilihMateriKuliah"/>
                        </v-col>
                      </v-row>
                    
                    </v-col>
                  </v-row>
                </v-stepper-content>
                    
                  
                <!-- STEP 3: Pilih Strategi -->
                <v-stepper-content step="3"> 
                  <PilihStrategi v-show="StatePilihStrategi" 
                  :statevideo="statevideo" 
                  :statesumm="statesumm"
                  :statemapp="statemapp"
                  :e1="e1"
                  @nextStepVideo="e1=4; statevideo=true; statesumm=false; statemapp=false;"
                  @nextStepSumm="e1=4; statevideo=false; statesumm=true; statemapp=false;"
                  @nextStepMapp="e1=4; statevideo=false; statesumm=false; statemapp=true;"
                  /> <!-- parsing value stateX, value e1, btn nextStepX -->

                  <!-- <p>{{e1}} {{StatePilihStrategi}}</p> --> 
                </v-stepper-content>

                <!-- STEP 4 : SRL -->

                <v-stepper-content step="4" class="pa-0">

                  <StrategiControlVideo v-show="statevideo"
                  :StateEvaluasiBelajar="StateEvaluasiBelajar" 
                  :e1="e1"
                  @SubmitVideoQuiz="StateEvaluasiBelajar =true; e1= 5;"></StrategiControlVideo>
                  
                  <StrategiSummary v-show="statesumm" 
                  :StateEvaluasiBelajar="StateEvaluasiBelajar" 
                  :e1="e1" 
                  @SubmitSummQuiz="StateEvaluasiBelajar =true; e1= 5;"></StrategiSummary>
                  
                  <StrategiMapping v-show="statemapp"
                  :StateEvaluasiBelajar="StateEvaluasiBelajar" 
                  :e1="e1" 
                  @SubmitMappQuiz="StateEvaluasiBelajar =true; e1= 5;"
                  ></StrategiMapping>
                  <!-- <p>{{e1}} {{statevideo}} {{statesumm}} {{statemapp}}</p> -->
                </v-stepper-content>

                <!-- STEP 5 : Evaluasi Belajar -->
                <v-row no-gutters >
                  <v-col md="12">
                    <v-card class="" color="white">
                      <v-stepper-content step="5">
                        <Evaluasi v-show="StateEvaluasiBelajar"/>
                        <!-- <p>{{e1}} {{StateEvaluasiBelajar}} </p> -->
                      </v-stepper-content>
                    </v-card>
                  </v-col>
                </v-row> 

              </v-stepper>
              </v-col>
            </v-row>
            <!-- END STEPPER -->

            </v-col>
      <!-- END LAMAN -->
          </v-row>
      </v-container>
  </div>
</template>

<script>
  
  import leaderboard from '@/components/SLR/leaderboard.vue'
  import Slideshowvideo from '@/components/SLR/Slideshowvideo.vue'
  import SlideshowSumm from '@/components/SLR/SlideshowSumm.vue'
  import SlideshowMapp from '@/components/SLR/SlideshowMapp.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Evaluasi from '@/components/SLR/EvaluasiBelajar/Evaluasi.vue'
  import PilihStrategi from '@/components/SLR/PilihStrategi.vue'
  import PilihMateriKuliah from '@/components/SLR/PilihMateriKuliah.vue'
  import PilihMataKuliah from '@/components/SLR/PilihMataKuliah.vue'

  // import axios from 'axios';
  // window.axios = require('axios');

  export default {
  
    name:'ProsesBelajar',
    
    components:{
      leaderboard,
      StrategiControlVideo: Slideshowvideo,
      StrategiSummary: SlideshowSumm,
      StrategiMapping: SlideshowMapp,
      Sidebar,
      Evaluasi,
      PilihStrategi,
      PilihMataKuliah,
      PilihMateriKuliah
    },

    data () {

      return {

        //STEPPER
        e1: 1,
        // steps: 5,
        steps:[
          {
            n: 1,
            title:'Mata Kuliah',
          },
          {
            n: 2,
            title:'Materi Belajar',
          },
          {
            n: 3,
            title:'Strategi Belajar',
          },
          {
            n: 4,
            title:'SRL',
          },
          {
            n: 5,
            title:'Evaluasi Belajar',
          },
          

        ],

        // STEP 1: pilih matkul
        // SrcImgPet: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihpilihmatkul.png?alt=media&token=bbb93507-6409-43cf-a54d-9a2768b32079",

        //STEP2: pilih materi
        StatePilihMateriKuliah : false,

        //STEP 3: pilih strategi
        StatePilihStrategi : false,
        
         //STEP 4:SLR
        statevideo: false,
        statesumm: false,
        statemapp: false, 

        //STEP 5:Eval
        StateEvaluasiBelajar: false,
            

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

      MakeDiagram(){
      // this.$emit('MakeDiagram');
      window.open("https://app.diagrams.net/", '_blank');
      },
    
        // nextStep (n) {
        //   if (n === this.steps) {
        //     this.e1 = 1
        //   } else {
        //     this.e1 = n + 1;
        //   }
        // },

        // nextStepVideo (n){
        //     this.e1 = n + 1;
        //     this.statevideo=true;
        //     this.statesumm=false;
        //     this.statemapp=false;
        // },

        //  nextStepSumm (n){
        //     this.e1 = n + 1;
        //     this.statevideo=false;
        //     this.statesumm=true;
        //     this.statemapp=false;
        //   },
        

        //  nextStepMapp (n){
        //     this.e1 = n + 1;
        //     this.statevideo=false;
        //     this.statesumm=false;
        //     this.statemapp=true;
          
        // },

    },
  }
</script>

<style>

</style>