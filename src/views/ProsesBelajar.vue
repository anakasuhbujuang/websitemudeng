<template>
  <div style="background-color:#FAFAFA;" 
  class="hidden-sm-and-down hidden-xl-only" >
    
    <v-container fluid>
        <v-row no-gutters>
          <!-- ######## MENU ############## -->
          <Sidebar />
          <!-- ######## MENU ############## -->
          
          <!-- LAMAAN  -->
          <v-col md="12">
            
            <!-- STEPPER -->
            <v-row justify="center">
              <v-col md="12">

                  <v-stepper v-model="e1" style="background-color:#FAFAFA; box-shadow:none; " >
                    
                    <!-- card 1 : navigasi tab -->
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
                                    <template v-for="item in langkah">
                                      <v-stepper-step
                                       :key="`${item.n}-step`"
                                        :complete="e1 > item.n"
                                        :step="item.n"
                                        editable
                                        color="teal darken-4"
                                      >
                                        {{item.title}}
                                      </v-stepper-step>

                                      <v-divider
                                        v-if="item.n < 5"
                                        :key="item.n"
                                      ></v-divider>
                                    </template>
                                    
                                  </v-stepper-header>
                              </v-col>
                            </v-row>
                            
                        </v-card>

                      </v-col>

                    </v-row>

                  <!-- CARD2 : CONTENT -->
                  <v-stepper-content step="1" class="pa-0 ma-0">
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
                                        height="50px" @click="nextStep(1)">
                                        ALGORITMA DAN STRUKTUR DATA</v-btn>
                                      </v-col>
                                    </v-row>

                                    <v-row justify="end">
                                      <v-col md="5">
                                        <v-btn color="teal darken-2 white--text" block
                                        @click="nextStep(n)">TAMBAH KELAS</v-btn>
                                      </v-col>
                                    </v-row>

                                  </v-col>
                                </v-row>

                              </v-col>
                            </v-row>
                               
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-stepper-content>

                    <!-- STEP 2 : Pilih Materi -->
                    <v-stepper-content step="2" class="pa-0 ma-0">
                    <v-row  no-gutters class="pa-0 ma-0">
                      <v-col md="12">
                        
                        <v-row >
                          <v-col md="8" >
                            <v-card class="py-2 px-8" height="550px" >

                              <v-row>
                                <v-col md="12">

                                  <v-row >
                                    <v-col md="10">
                                      <v-list tree-line> 
                                        <v-list-item>
                                          
                                          <v-list-item-avatar size="100">
                                            <v-img src="@/assets/pet/asihprofil.jpg"></v-img>
                                          </v-list-item-avatar>
                                          
                                          <v-list-item-content>
                                            <v-row justify-center no-gutters>
                                              <v-col >
                                                <v-list-item-title class="subtitle-2 grey--text text--darken-3 font-weight-bold">ALGORITMA DAN STRUKTUR DATA</v-list-item-title>
                                              </v-col>
                                            </v-row>
                                            <v-row justify-center no-gutters>
                                              <v-col >
                                                <v-list-item-title class="subtitle-1 red--text text--accent-1 font-weight-medium">Dr. Indriana Hidayah, S.T., M.T.</v-list-item-title>
                                              </v-col>
                                            </v-row>
                                            <v-row justify-center no-gutters>
                                              <v-col >
                                                <v-list-item-title class="caption grey--text font-weight-regular">Semester Ganjil 2019/2010<br><span class="overline">TIF 141 / 3 sks</span></v-list-item-title>
                                              </v-col>
                                            </v-row>
                                          </v-list-item-content>
                                                      
                                        </v-list-item>
                                      </v-list>
                                    </v-col>
                                  <v-col md="2" >
                                  
                                  <v-btn color="teal darken-2 white--text" block>RPKPS</v-btn>
                                </v-col>
                              </v-row>

                              <v-row justify="center">
                                <v-col md="11">
                                  <!-- <div style="height:auto;width:auto;overflow-y:hidden;overflow-x:scroll;">
                                    <div style="width:150%;"> -->

                                      <!-- CARDS-MATERI START -->
                                      <v-row justify="start" class="pl-4">
                                        <v-col v-for="(item, i) in materi" :key="i" md="4">
                                          
                                          <v-card color="white" height="315px">
                                            
                                            <v-card-media justify-center >
                                              <v-img v-if="item.hasil" :src="item.SrcImgMateri"></v-img>
                                              <v-img v-else :src="item.SrcImgBMWMateri"></v-img>
                                            </v-card-media>

                                            <v-card-text class="py-0 my-0">
                                           
                                                <p v-if="item.hasil"  class="subtitle-2 text-center grey--text  text--darken-3 font-weight-bold" v-text="item.NameMateri"></p>
                                                <p v-else class="subtitle-2 text-center grey--text text--lighten-1  font-weight-bold " v-text="item.NameMateri"></p>
                                             
                                                <p v-if="item.hasil" class="caption text-center grey--text  font-weight-regular" v-text="item.DescMateri"></p>
                                                <p v-else class="caption text-center grey--text text--lighten-1 font-weight-regular" v-text="item.DescMateri"></p>
                                              
                                            </v-card-text>

                                            <v-card-actions class="pt-2 my-0">
                                              <v-btn block v-if="item.hasil" color="teal darken-4 white--text"
                                              class="subtitle-2" @click="nextStep(2)">PILIH</v-btn>
                                                
                                              <v-btn block v-else color="grey lighten-1 white--text"
                                              class="subtitle-2" @click.stop="dialog = true">PILIH</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                      </v-col>
                                    </v-row>
                                  <!-- CARDS-MATERI END -->
                                <!-- </div>
                              </div>  -->
                            </v-col>
                          </v-row>

                          <!-- #############DIALOG START#############-->
                          <v-dialog v-model="dialog" max-width="350px" > 
                            <v-card color="white" width="auto" height="auto"
                            class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">
                              <v-card-media justify-center >
                                  <v-img :src="SrcMateriLocked"></v-img>
                              </v-card-media>

                              <v-row justify="center" class="mt-5 " no-gutters>
                                <v-col md="8">
                                      <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">Apakah kamu yakin ?</p>
                                </v-col>
                              </v-row>  

                              <v-row justify="center" no-gutters class="mb-3">
                                  <v-col md="11">
                                      <p class="body-2 text-center grey--text  font-weight-regular">Kamu belum menyelesaikan materi sebelumnya.
                                          <br>Mari ambil Test APK sebelum memulai <br>pembelajaran.</p>
                                  </v-col>
                              </v-row>       
                              <v-row no-gutters class="px-2">
                                <v-col class="pr-1">
                                    <v-btn block color="teal darken-4 white--text" 
                                    class="subtitle-1" router to="/TestAPK"
                                    >YA</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn block color="teal darken-2 white--text" 
                                    class="subtitle-1" @click="dialog = false" >TIDAK</v-btn>
                                </v-col>
                              </v-row>
                            </v-card>
                          </v-dialog>
                        <!-- #############DIALOG EN#############-->
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>

                  <v-col md="4">     
                    <leaderboard />
                  </v-col>
                </v-row>
                        
              </v-col>
            </v-row>
          </v-stepper-content>
                      
                    
          <!-- STEP 3: Pilih Strategi -->
          <v-stepper-content step="3">
            <v-row no-gutters justify="center">
              <v-col md="12">
                <!-- CARDS-PET STRATEGI -->
                  <v-row justify="center">
                    <v-col v-for="(item, i) in Strategi" :key="i" md="3">
                      
                      <v-toolbar v-if="item.Rekomendasi" color="red accent-1" 
                      style="border-radius:5px 5px 0px 0px;" height="50px" dark>
                        <v-toolbar-title class="subtitle-1 font-weight-medium">Rekomendasi</v-toolbar-title>
                      </v-toolbar>
                      <v-toolbar flat v-else color="grey lighten-5" height="50px" dark> </v-toolbar>
                        
                      <v-card color="white" height="400px">
                        <v-card-media justify-center  class=" px-4">
                          <v-img :src="item.SrcImgStrategi"></v-img>
                        </v-card-media>
                        <v-card-text class=" py-0 my-0">
                          <p class="subtitle-2 text-center grey--text text--darken-3 font-italic font-weight-bold" >
                            {{item.NameStrategi}}</p>
                          <p class="caption text-center grey--text  font-weight-regular">
                            {{item.DescStrategi}}</p>
                        </v-card-text> 

                        <v-card-actions class="pt-5">
                          <v-btn v-if="item.Jenis == 'Video'" 
                          color="teal darken-4" dark block 
                          @click="nextStepVideo(3)">PILIH
                          </v-btn>

                          <v-btn v-else-if="item.Jenis == 'Summary'"
                          color="teal darken-4" dark block
                          @click="nextStepSumm(3)">PILIH
                          </v-btn>

                          <v-btn v-else 
                          color="teal darken-4" dark block 
                          @click="nextStepMapp(3)">PILIH
                          </v-btn>

                        </v-card-actions>

                      </v-card>

                    </v-col>
                  </v-row>
                  <!-- CARDS-PET END -->

                </v-col>
              </v-row>
            </v-stepper-content>

            <!-- STEP 4 : SRL -->

            <v-stepper-content step="4" class="pa-0">
              <controlvideo v-show="statevideo"/>
              <SlideshowSumm v-show="statesumm"/>
              <SlideshowMapp v-show="statemapp"/>
            </v-stepper-content>

            <!-- STEP 5 : Evaluasi Belajar -->
              <v-row no-gutters >
                <v-col md="12">
                  <v-card class="" color="white">
                    <v-stepper-content step="5">
                      <Evaluasi/>
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
  
  import leaderboard from '@/components/leaderboard.vue'
  import controlvideo from '@/components/controlvideo.vue'
  import SlideshowSumm from '@/components/SlideshowSumm.vue'
  import SlideshowMapp from '@/components/SlideshowMapp.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Evaluasi from '@/components/EvaluasiBelajar/Evaluasi.vue'
  

  export default {
  
    name:'coba',
    
    components:{
      leaderboard,
      controlvideo,
      SlideshowSumm,
      SlideshowMapp,
      Sidebar,
      Evaluasi
      
    },

    data () {

      return {

        //DIALOG
        SrcMateriLocked: require('@/assets/pet/asih200.png'),
        
        //STEPPER
        e1: 1,
        // steps: 5,
        langkah:[

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
        SrcImgPet: require('@/assets/pet/jonipilihmatkul.svg'),

        //STEP2: pilih materi
         dialog: false,
         materi: [
        {
          SrcImgMateri: require('@/assets/materi/tree.png'),
          SrcImgBMWMateri: require('@/assets/materi/treebmw.png'),
          hasil:'pass',
          NameMateri: 'Tree',
          DescMateri:'Struktur data yang terdiri dari akar (root), dan subpohon-subpohon dalam susunan berhirarki.',
        },
        {
          SrcImgMateri: require('@/assets/materi/sorting.png'),
          SrcImgBMWMateri: require('@/assets/materi/sortingbmw.png'),
          hasil: '',
          NameMateri: 'Sorting',
          DescMateri:'Metode yang digunakan sebagai proses mengatur sekumpulan objek menurut susunan tertentu.',
        },
        {
          SrcImgMateri: require('@/assets/materi/search.png'),
          SrcImgBMWMateri: require('@/assets/materi/searchbmw.png'),
          hasil:'',
          NameMateri: 'Search',
          DescMateri:'Metode yang digunakan sebagai proses pencarian dari sekumpulan objek menurut aturan tertentu..',
        }
  
        
      ],

        //STEP 3: pilih strategi
         Strategi: [
        {
          SrcImgStrategi: require('@/assets/pet/jonivideo.png'),
          NameStrategi: 'Control Video',
          DescStrategi:'Melalui strategi belajar ini kamu akan belajar melalui media video yang akan kami sediakan.',
          Rekomendasi:'Check',
          Jenis: 'Video',
        },
        {
          SrcImgStrategi: require('@/assets/pet/jonisumm.png'),
          NameStrategi: 'Summarization',
          DescStrategi:'Melalui strategi belajar ini kamu akan belajar dan membuat ringkasan materi yang telah kamu pelajari.',
          Rekomendasi:'',
          Jenis: 'Summary',
        },
        {
          SrcImgStrategi: require('@/assets/pet/jonimapp.png'),
          NameStrategi: 'Mind Mapping',
          DescStrategi:'Melalui startegi belajar ini kamu akan belajar dan membuat bagan pemetaan materi yang telah kamu pelajari.',
          Rekomendasi:'',
          Jenis:'Mapping',
        },
        ],

         //STEP 4:SLR
          statevideo: false,
          statesumm: false,
          statemapp: false, 
         //STEP 5:Eval
            Eval: [
            {
              nomor: '1.',
              question: 'Saya bertanya kepada diri sendiri, ”Apakah saya sudah mencapai tujuan saya?”, ketika sedang berupaya mencapai tujuan secara intensif.',
            },
            {
              nomor: '2.',
              question: 'Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.',
            },
            {
              nomor: '3.',
              question: 'Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.',
            },
            {
              nomor: '4.',
              question: 'Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.',
            },

            
          ],

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
            this.e1 = n + 1;
          }
        },

        nextStepVideo (n){
            this.e1 = n + 1;
            this.statevideo=true;
            this.statesumm=false;
            this.statemapp=false;
        },

         nextStepSumm (n){
            this.e1 = n + 1;
            this.statevideo=false;
            this.statesumm=true;
            this.statemapp=false;
          },
        

         nextStepMapp (n){
            this.e1 = n + 1;
            this.statevideo=false;
            this.statesumm=false;
            this.statemapp=true;
          
        },

    },
  }
</script>

<style>
/* div.bgdaun{

  background-image: url('~@/assets/bgdaun147.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  /* width: 1440; */
  /* height: 900; */
    
  /* top: 0;
  left: 0;
    
  background-size: cover;
   
  /* transform: scale(1.1); */
  /* z-index: -1; 

} */ 
</style>