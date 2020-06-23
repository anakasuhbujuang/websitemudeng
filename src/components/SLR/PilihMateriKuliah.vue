<template>
  <div>
    <v-card class="py-2 px-8" height="550px" >
      <v-row>
        <v-col md="12">

          <v-row >
            <v-col md="10">
              <v-list tree-line> 
                <v-list-item>

                  <v-list-item-avatar size="100">
                    <v-img :src="srcProfpicMateri"></v-img>
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
          
          <v-btn color="teal darken-2 white--text" 
          class="subtitle-2 font-weight-bold" @click="NewTabRPKPS()" block>RPKPS</v-btn>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col md="11">
          <!-- <div style="height:auto;width:auto;overflow-y:hidden;overflow-x:scroll;">
            <div style="width:150%;"> -->

              <!-- CARDS-MATERI START -->
              <v-row justify="start" class="pl-4">
                <!-- <v-col md="4"> 
                  
                </v-col>

                <v-col md="4">

                </v-col>

                <v-col md="4">

                </v-col> -->
                
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
                      <v-btn block v-if=" item.hasil " color="teal darken-4 white--text"
                      class="subtitle-2 font-weight-bold" @click="nextStepToPilihStrategi()">PILIH</v-btn>

                      <v-btn block v-else-if="item.id === 2" color="grey lighten-1 white--text"
                      class="subtitle-2 font-weight-bold" @click.stop="dialogQuestionSorting = true">PILIH</v-btn>

                      <v-btn block v-else-if="item.id === 3" color="grey lighten-1 white--text"
                      class="subtitle-2 font-weight-bold" @click.stop="dialogQuestionSearch = true">PILIH</v-btn>


                    </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <!-- CARDS-MATERI END -->
       
          </v-col>
        </v-row>

        <!-- DIALOG QUESTION SORTING START-->
        <v-dialog v-model="dialogQuestionSorting" persistent max-width="350px" > 
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
                  class="subtitle-2 font-weight-bold" @click="dialogTestAPK = true ; dialogQuestionSorting = false;"
                  >YA</v-btn>
              </v-col>
              <v-col>
                  <v-btn block color="teal darken-2 white--text" 
                  class="subtitle-2 font-weight-bold" @click="dialogQuestionSorting = false" >TIDAK</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>
      <!-- DIALOG QUESTION SORTING END-->

      <!-- DIALOG QUESTION SEARCH START-->
        <v-dialog v-model="dialogQuestionSearch" persistent max-width="350px" > 
          <v-card color="white" width="auto" height="auto"
          class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">

            <v-card-media justify-center >
                <v-img :src="SrcMateriLocked"></v-img>
            </v-card-media>

            <v-row justify="center" class="mt-5 " no-gutters>
              <v-col md="8">
                    <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">Sayang Sekali</p>
              </v-col>
            </v-row>  

            <v-row justify="center" no-gutters class="mb-3">
                <v-col md="11">
                    <p class="body-2 text-center grey--text  font-weight-regular">Kamu belum menyelesaikan materi 
                        <br>sebelumnya. Yuk pelajari materi lainnya <br> terlebih dahulu.</p>
                </v-col>
            </v-row>       
            <v-row no-gutters class="px-2">
             
              <v-col>
                  <v-btn block color="teal darken-4 white--text" 
                  class="subtitle-2 font-weight-bold" @click="dialogQuestionSearch = false" >PILIH MATERI</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>
      <!-- DIALOG END-->

      <!-- DIALOG TEST APK START -->
        <v-dialog v-model="dialogTestAPK" persistent max-width="1000px" > 
          <v-card color="white" width="auto" height="auto"
          class="py-4" style="overflow-x:hidden; overflow-y:hidden;">

            <v-row>
              <v-col class="text-center">
                <p class="title font-weight-bold font-italic grey--text text--darken-3">Activating Prior Knowledge</p>
                <p class="subtitle-2  font-weight-regular grey--text ">Jangan khawatir, test ini bertujuan untuk mengetahui kemampuanmu dalam<br>menguasai materi sebelumnya.</p>
              </v-col>
            </v-row>

            <TestAPK class="my-2" 
            :dialogHasilTestAPK="dialogHasilTestAPK" :dialogAPK="dialogAPK" 
            @SubmitAPK="dialogTestAPK = false; dialogHasilTestAPK = true;"/>
            
            
          </v-card>
        </v-dialog>
        <!-- DIALOG TEST APK END -->

        <!-- DIALOG HASIL APK START-->
        <v-dialog v-model="dialogHasilTestAPK" max-width="350px" > 
          <v-card color="white" width="auto" height="auto"
          class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">

            <div v-if="NilaiAPK < PassingGradeAPK">
              <v-card-media justify-center >
                <v-img  :src="SrcFighting"></v-img>
              </v-card-media>

                  <v-row justify="center" class="mt-5 " no-gutters>
                    <v-col md="8">
                          <p  class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">Sayang Sekali,<br>Kamu Belum Berhasil</p>
                    </v-col>
                  </v-row>  

                  <v-row justify="center" no-gutters class="mb-3">
                      <v-col md="11">
                          <p  class="body-2 text-center grey--text  font-weight-regular">Kamu perlu memahami kembali<br>materi-materi sebelumnya.<br>Terus Berjuang!</p>
                      </v-col>
                  </v-row>       
                  <v-row no-gutters class="px-2">
                    <v-col class="pr-1">

                        <v-btn  block color="teal darken-4 white--text" 
                        class="subtitle-2 font-weight-bold" @click="dialogHasilTestAPK = false;"
                        >Pilih Materi</v-btn>
                        
                    </v-col>
              </v-row>
            </div>

            <div v-else>

              <v-card-media justify-center >
                <v-img :src="SrcReward"></v-img>
              </v-card-media>

                  <v-row justify="center" class="mt-5 " no-gutters>
                    <v-col md="8">
                          <p  class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">Kamu Lulus Test APK!</p>
                    </v-col>
                  </v-row>  

                  <v-row justify="center" no-gutters class="mb-3">
                      <v-col md="11">
                          <p class="body-2 text-center grey--text  font-weight-regular">Ternyata kamu sudah cukup memahami materi sebelumnya.<br>Silahkan mempelajari materi selanjutnya.</p>
                      </v-col>
                  </v-row>       
                  <v-row no-gutters class="px-2">
                    <v-col class="pr-1">
                        
                        <v-btn block color="teal darken-4 white--text" 
                        class="subtitle-2 font-weight-bold " @click="nextStepToPilihStrategi(); dialogHasilTestAPK = false;"
                        >Lanjut Belajar</v-btn>

                    </v-col>
                    
                  </v-row>

            </div>
            
          </v-card>
        </v-dialog>
        <!-- DIALOG HASIL APK END-->

        <!-- DIALOG REVIEW TEST APK START-->
        <!-- <v-dialog v-model="dialogReviewTestAPK" persistent max-width="1000px" > 
          <v-card color="white" width="auto" height="auto"
          class="py-4" style="overflow-x:hidden; overflow-y:hidden;">

            <v-row>
              <v-col class="text-center">
                <p class="title font-weight-bold grey--text text--darken-3">Review Hasil<span class="font-italic" >Activating Prior Knowledge</span></p>
                <p class="subtitle-2  font-weight-regular grey--text ">Berikut review hasil jawaban anda dengan jawaban yang benar.</p>
              </v-col>
            </v-row>

            <ReviewTestAPK class="my-2" 
            :dialogHasilTestAPK="dialogHasilTestAPK" :dialogAPK="dialogAPK" 
            @CloseReview="nextStepToPilihStrategi(); dialogReviewTestAPK=false;"
            @PilihMateri="dialogReviewTestAPK=false;"/>
            
            
          </v-card>
        </v-dialog> -->
        <!-- DIALOG REVIEW TEST APK END-->


      </v-col>
    </v-row>
  </v-card>
           
  </div>
</template>

<script>
import TestAPK from '@/components/SLR/TestAPK/TestAPK.vue';
// import ReviewTestAPK from '@/components/SLR/ReviewTestAPK/ReviewTestAPK.vue';

export default {

    name:'PilihMateriKuliah',

    components: {
      TestAPK,
      // ReviewTestAPK,
    },
    
    props: {
        StatePilihStrategi: Boolean,
        e1: Number,
    },

    data () {

      return {

        // srcProfpicMateri: require('@/assets/profpic/materi.svg'),
        srcProfpicMateri: 'https://svgshare.com/i/MF8.svg',

        //DIALOG
        SrcMateriLocked: require('@/assets/pet/asih200.png'),
        dialogQuestionSorting: false,
        dialogQuestionSearch: false,
        dialogTestAPK: false,
        dialogHasilTestAPK: false,
        dialogReviewTestAPK: false,

        //dialogHasilTestAPK
        NilaiAPK: 50,
        PassingGradeAPK: 70,
        SrcFighting: require('@/assets/pet/jonifighting200.png'),
        SrcReward: require('@/assets/pet/jonireward200.png'),

        //Materi
         materi: [
        {
          id :1,
          SrcImgMateri: require('@/assets/materi/tree.png'),
          SrcImgBMWMateri: require('@/assets/materi/treebmw.png'),
          hasil:'pass',
          NameMateri: 'Tree',
          DescMateri:'Struktur data yang terdiri dari akar (root), dan subpohon-subpohon dalam susunan berhirarki.',
        },
        {
          id: 2,
          SrcImgMateri: require('@/assets/materi/sorting.png'),
          SrcImgBMWMateri: require('@/assets/materi/sortingbmw.png'),
          hasil: '',
          NameMateri: 'Sorting',
          DescMateri:'Metode yang digunakan sebagai proses mengatur sekumpulan objek menurut susunan tertentu.',
        },
        {
          id: 3,
          SrcImgMateri: require('@/assets/materi/search.png'),
          SrcImgBMWMateri: require('@/assets/materi/searchbmw.png'),
          hasil:'',
          NameMateri: 'Search',
          DescMateri:'Metode yang digunakan sebagai proses pencarian dari sekumpulan objek menurut aturan tertentu..',
        }
  
        
      ],
      }
    },

    methods: {
        nextStepToPilihStrategi() {
            this.$emit('nextStepToPilihStrategi')
        },
        NewTabRPKPS(){
        window.open("https://drive.google.com/file/d/1EcypDb9ixrB4H6qVKne2-Gryd1gm9RXL/view?usp=sharing", '_blank');
      }
            
    }


    
}
</script>