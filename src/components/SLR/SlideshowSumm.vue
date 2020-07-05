<template>
  <div > 
    <v-row no-gutters >
      <v-col md="12">
        <v-card class="pa-5">

          <v-row justify="center" no-gutters class="pt-2 px-4">
            <v-col md="10" >
              <p class="title red--text text--accent-1 font-weight-medium">{{materi.judul}}</p>
            </v-col>
            <v-col md="2"  >
              <v-btn color="teal darken-4 white--text" block class="subtitle-2 font-weight-bold"
              @click="getQuiz()">LANJUTKAN</v-btn>
            </v-col>
          </v-row>
          
          <v-row class="py-0 my-0 px-4">
            <v-col md="12">
              <v-divider ></v-divider>
            </v-col>
          </v-row>

          <v-row justify="center" class="pt-2">
            <v-col md="12" class="text-center">
              <iframe :src="srcPDF" 
              width="668" height="714" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
              style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> 
              </iframe> 
              
              <div style="margin-bottom:5px"> 
                <strong><a href="https://www.slideshare.net/BintangWijaya5" target="_blank">Sumber : Slide Share BintangWijaya5</a></strong> 
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- DIALOG START-->
    <v-dialog v-model="dialogSummQuiz" width="1300px" > 
      <v-card color="white" width="auto" height="auto" style="overflow-x:hidden; overflow-y:hidden;">
        <v-img :src="srcBgQuiz">
          <v-row justify="center"  class="mt-4">
            <v-col >
              <div v-show="statekeyword">
                <v-row class="mb-12">
                  <v-col>
                    <p class="text-center display-1 font-weight-bold grey--text text--darken-3">Quiz</p>
                    <p class="text-center subtitle-2 grey--text">Pilihlah 3 diantara 10 kata kunci di bawah ini. </p>
                  </v-col>
                </v-row>
                <v-chip-group v-model="selected" column multiple max="3" active-class="teal darken-2 white--text" style="box-shadow:none;" >
                  <v-row justify="center"> 
                    <v-col align="center" md="5">
                      <v-chip v-for="tag in quiz" :key="tag">{{tag}}</v-chip>
                    </v-col>
                  </v-row>
                </v-chip-group>
                <v-row justify="center" class="mt-12 pt-4">
                  <v-col md="2">
                      <v-btn  color="teal darken-4 white--text" class="subtitle-2 font-weight-bold"
                      @click="nextStepSummQuiz()" block >PILIH</v-btn>
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
                  <v-row v-for="(item,i) in selected" :key="i" justify="center" class="mb-4" no-gutters>
                    <v-col md="6">
                      <p class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ quiz[item] }} :</p>
                      <v-textarea v-model="isisummary[i]" :rules="rulesdeskripsi"
                      rows="1" no-resize outlined label="Deskripsi" color="teal darken-2" style="border-radius:5px; "></v-textarea>
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
import axios from 'axios';
window.axios = require('axios');

export default {
    
  name: 'slideshowsumm',
  components: {
    // AfterSumm
  },

  props: {
    idMatkul: String,
    idMateri: String,
    tipeMateri: String,
  },

  data () {
    return {

    srcBgQuiz: require ('@/assets/bg/bgdaundialog.svg'),
    dialogSummQuiz: false,  
    TitleMateri:'Algoritma dan Struktur Data',
    srcPDF:"//www.slideshare.net/slideshow/embed_code/key/lmSmaSN07udXNK",

    isValidDeskripsi: true,
    rulesdeskripsi: 
      [v => !!v || 'Wajib diisi',],

    isisummary: {},

    selected: [],
    
    statekeyword: true,
    statedeskripsi: false,

    //axios
    materi:{},
    quiz:{},
    
    }
  },

  created: async function(){
    await this.getMateri();
  },

  methods: {
    nextStepSummQuiz(){
      this.statekeyword=false;
      console.log(this.selected);
      this.statedeskripsi=true;
    },
    
    nextSubmitSummQuiz(){
      this.statekeyword=true;
      this.statedeskripsi=false;
    },

     //AXIOS
    async getMateri(){
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi/${this.idMateri}/konten/${this.tipeMateri}`)

        this.materi = response.data;
        console.log('sukses get materi sum');
        console.log(response.data);
      } catch(error) {
          return console.log(error)
      }
    },

    async getQuiz(){
      
      this.dialogSummQuiz = true;

      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi/${this.idMateri}/quiz/${this.tipeMateri}`)

        this.quiz = response.data;
        console.log('sukses get quiz sum');
        console.log(response.data);
      } catch(error) {
          return console.log(error)
      }
    },

    async SubmitSummQuiz(){ //MAPPING todos.selected ke jawaban
      try {
        await axios.post(`${process.env.VUE_APP_API_HOST}/matkul/quiz/sum`, { 
          idMatkul : this.idMatkul, 
          idMateri : this.idMateri, 
          jawaban: Object.values(this.isisummary), 
          selected: this.selected 
        })
			} catch(error) {
				console.error(error)
				return
      }
    
      this.dialogSummQuiz=false;
      this.$emit('SubmitSummQuiz');
    },
      
  }
   
}
  
</script>

