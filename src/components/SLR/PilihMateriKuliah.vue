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
                        <v-list-item-title class="subtitle-2 grey--text text--darken-3 font-weight-bold">{{selectedMatkul.nama}}</v-list-item-title>
                      </v-col>
                    </v-row>
                    <v-row justify-center no-gutters>
                      <v-col >
                        <v-list-item-title class="subtitle-1 red--text text--accent-1 font-weight-medium">{{selectedMatkul.dosen}}</v-list-item-title>
                      </v-col>
                    </v-row>
                    <v-row justify-center no-gutters>
                      <v-col >
                        <v-list-item-title class="caption grey--text font-weight-regular">{{selectedMatkul.semester}}<br><span class="overline">{{selectedMatkul.kode}} / {{selectedMatkul.sks}} sks</span></v-list-item-title>
                      </v-col>
                    </v-row>
                  </v-list-item-content>

                </v-list-item>
              </v-list>
            </v-col>
            <v-col md="2">
              <v-btn color="teal darken-2 white--text" class="subtitle-2 font-weight-bold" @click="NewTabRPKPS()" block>RPKPS</v-btn>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col md="11">
              <!-- CARDS-MATERI START -->
              <v-row justify="start" class="pl-4">
                <v-col v-for="(item, i) in daftarMateri" :key="i" md="4">
                  <v-card color="white" height="315px">
                    
                    <!-- axios v-card-media berdasarkan value materi -->
                    <v-card-media justify-center >
                      <v-img v-if="item.isEligable === 1" :src="item.icon.enabled"></v-img>
                      <v-img v-else :src="item.icon.disabled"></v-img>
                    </v-card-media>

                    <v-card-text class="py-0 my-0">
                      <!-- Axios does -->
                      <p v-if="item.isEligable === 1"  class="subtitle-2 text-center grey--text  text--darken-3 font-weight-bold" v-text="item.judul"></p>
                      <p v-else class="subtitle-2 text-center grey--text text--lighten-1  font-weight-bold " v-text="item.judul"></p>

                      <p v-if="item.isEligable === 2 || item.isEligable === 3" class="caption text-center grey--text  font-weight-regular" v-text="item.deskripsi"></p>
                      <p v-else class="caption text-center grey--text text--lighten-1 font-weight-regular" v-text="item.deskripsi"></p>
                    </v-card-text>

                    <v-card-actions class="pt-2 my-0">
                      <!-- Axios does -->
                      <v-btn block v-if=" item.isEligable === 1 " color="teal darken-4 white--text"
                      class="subtitle-2 font-weight-bold" @click="nextStepToPilihStrategi(item.id)">PILIH</v-btn>

                      <v-btn block v-else-if="item.isEligable === 2" color="grey lighten-1 white--text"
                      class="subtitle-2 font-weight-bold" @click="btnDialogKategori2(item.id)">PILIH</v-btn>

                      <v-btn block v-else-if="item.isEligable === 3" color="grey lighten-1 white--text"
                      class="subtitle-2 font-weight-bold" @click.stop="dialogKategori3 = true">PILIH</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <!-- CARDS-MATERI END -->
            </v-col>
          </v-row>

        </v-col>  
      </v-row>
    </v-card>          

      <!-- DIALOG QUESTION MATERI KATEGORI 2 : SORTING START-->
      <v-dialog v-model="dialogKategori2" persistent max-width="350px" > 
        <v-card color="white" width="auto" height="auto"
        class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">

          <v-card-media justify-center >
              <v-img :src="petUser.assets.bingung"></v-img>
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
                class="subtitle-2 font-weight-bold" @click="btnYaDialogKategori2()"
                >YA</v-btn>
            </v-col>
            <v-col>
                <v-btn block color="teal darken-2 white--text" 
                class="subtitle-2 font-weight-bold" @click="dialogKategori2 = false" >TIDAK</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    <!-- DIALOG QUESTION MATERI KATEGORI 2 : SORTING END-->

    <!-- DIALOG QUESTION MATERI KATEGORI 3 : SEARCH START-->
      <v-dialog v-model="dialogKategori3" persistent max-width="350px" > 
        <v-card color="white" width="auto" height="auto"
        class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">

          <v-card-media justify-center >
            <v-img :src="petUser.assets.bingung"></v-img>
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
              class="subtitle-2 font-weight-bold" @click="dialogKategori3 = false" >PILIH MATERI</v-btn>
            </v-col>
          </v-row>
          
        </v-card>
      </v-dialog>
    <!-- DIALOG QUESTION MATERI KATEGORI 3 : SEARCH END-->

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
          :idMateri="idMateriDipilih"
          :idMatkul="idMatkul"
          :nextApkPilihStrategi="nextStepToPilihStrategi"
          @SubmitAPK="dialogTestAPK=false;"/>
          
        </v-card>
      </v-dialog>
      <!-- DIALOG TEST APK END -->
           
  </div>
</template>

<script>
import TestAPK from '@/components/SLR/TestAPK/TestAPK.vue';
import axios from 'axios';
window.axios = require('axios');

export default {
  name:'PilihMateriKuliah',

  components: {
    TestAPK,
  },
  
  props: {
      // StatePilihStrategi: Boolean,
      // e1: Number,
      idMatkul: String,
  },

  data () {

    return {

      // srcProfpicMateri: require('@/assets/profpic/materi.svg'),
      srcProfpicMateri: 'https://svgshare.com/i/MF8.svg',

      //DIALOG
      dialogQuestionSorting: false,
      dialogQuestionSearch: false,
      dialogTestAPK: false,
      dialogHasilTestAPK: false,
      dialogKategori2: false,
      dialogKategori3: false,

      //axios
      daftarMateri:[],
      selectedMatkul:{},
    
      petUser:{},
      idMateriDipilih:'',
    }

  },

  created: async function() {
    await this.getMateri();
    await this.getPetUser();
    await this.getSelectedMatkul();

    console.log(this.selectedMatkul)
  },

  methods: {
    nextStepToPilihStrategi(idMateri) {
      this.$emit('nextStepToPilihStrategi', idMateri)
    },
    NewTabRPKPS(){
      window.open(this.selectedMatkul.rkps, '_blank');
    },

    btnDialogKategori2(idMateri){
      this.idMateriDipilih=idMateri; 
      console.log(this.idMateriDipilih);
      this.dialogKategori2 = true; 
    },

    //AXIOS 
    async getMateri(){
      const response  = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi`)
      console.log(response.data)
      this.daftarMateri = response.data;
      console.log('sukses get daftar materi');
    },

    async getSelectedMatkul(){
      const response  = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}`)
      console.log(response.data)
      this.selectedMatkul = response.data;
      console.log('sukses get daftar matkul');
    },

    async btnYaDialogKategori2(){
      this.dialogTestAPK = true ; 
      this.dialogKategori2 = false;   
    },

     async getPetUser (){
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

        this.petUser = response.data;
      } catch(error) {
        return console.log(error)
      }
    },

    SubmitAPK(){
      this.dialogTestAPK = false; 
      this.dialogHasilTestAPK = true;
    },
          
  }
    
}
</script>