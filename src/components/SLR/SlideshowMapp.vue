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
              <v-btn color="teal darken-4 white--text" block class="subtitle-2 font-weight-bold "
              @click="dialogMappQuiz = true">LANJUTKAN</v-btn>
            </v-col>
          </v-row>
          
          <v-row class="py-0 my-0 px-4">
            <v-col md="12">
              <v-divider ></v-divider>
            </v-col>
          </v-row>

          <v-row justify="center" class="pt-2">
            <v-col md="12" class="text-center">
              <iframe :src="srcPPT" styel="max-width: 100%; height: auto;"
              width="1000" height="500" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
              style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 
              
              <div style="margin-bottom:5px"> 
                <strong><a href="https://www.slideshare.net/BintangWijaya5" target="_blank">Sumber : BintangWijaya5</a></strong>
              </div>
            </v-col>
          </v-row>
          
        </v-card>
      </v-col>
    </v-row>

    <!-- DIALOG START-->
    <v-dialog v-model="dialogMappQuiz" width="1200px" > 
      <v-card color="white" width="auto" height="auto" style="overflow-x:hidden; overflow-y:hidden;">
        <v-img :src="srcBgQuiz">
          <v-row justify="center">
            <v-col md="10">
              <v-row class="mb-2">
                <v-col>
                  <p class="text-center display-1 font-weight-bold grey--text text--darken-3">Quiz</p>
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
                      <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >
                        Buatlah diagram berisi ringkasan materi yang telah kamu pelajari. Contoh 
                        <a :href="contohDiagram" target="_blank">
                        <u  class=" caption teal--text text--darken-4 font-weight-bold" >klik disini.</u></a>
                      </v-card-text>
                  </v-card>
                </v-col>
                <v-col md="1"></v-col>
              </v-row>

              <v-row justify="start" class="my-4">
                <v-col md="1"></v-col>
                <v-col md="3">
                  <v-btn color="teal darken-4" class="subtitle-2 font-weight-bold" 
                  href="https://app.diagrams.net/" target="_blank" block outlined>Buat Diagram</v-btn>
                </v-col>
              </v-row>

              <v-row justify="center" dense no-gutters>
                <v-col md="1" class="text-center">
                  <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">2.
                  </v-card-text>
                </v-col>

                <v-col md="10">
                  <v-card dense flat color="grey lighten-4" class="d-flex justify-center align-center">
                    <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >Export dan unduh diagram yang telah anda buat. Kemudian unggah dan kumpulkan.
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col md="1"></v-col>
              </v-row>
              
              <v-row justify="start" class="mt-4">
                <v-col md="1"></v-col>
                <v-col md="3">
                  <v-form v-model="isValidUnggah">
                  <v-file-input v-model="file" outlined dense
                  label="Unggah Diagram"
                  accept="image/*, .doc, .docx, .pdf"
                  color="teal darken-4"
                  :rules="rulesfileinput"
                  class="subtitle-2">
                  </v-file-input>
                  </v-form>
                </v-col>
              </v-row>

              <v-row justify="center" class="mt-5">
                <v-col md="3">
                  <v-btn :disabled="!isValidUnggah" block 
                  color="teal darken-4 white--text" class="subtitle-2 font-weight-bold"
                  @click="SubmitMappQuiz()">
                  Kumpulkan</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-dialog>
    <!-- DIALOG END-->
  </div>
</template>

<script >
import axios from 'axios';
window.axios = require('axios');

export default {

 name: 'slideshowsumm',
  components: {
  },

  props: {
    idMatkul: String,
    idMateri: String,
    tipeMateri: String,
  },

  data () {

    return {
    
    srcBgQuiz: require ('@/assets/bg/bgdaundialog.svg'),
    contohDiagram : "https://drive.google.com/file/d/1JtZViti0eq_PCk6zynTUeyo9LbJHolWb/view?usp=sharing",
    isValidUnggah: true,
    
    dialogMappQuiz: false,  
    TitleMateri:'Algoritma dan Struktur Data',
    srcPPT:"//www.slideshare.net/slideshow/embed_code/key/xPYpYwu5coz2We",

    file: null,
    rulesfileinput: [v => !!v || 'Pilih file.',],
    
    //axios
    materi:{},
    }
  },

  created: async function(){
    await this.getMateri();
  },

  methods: {


    //AXIOS
    async getMateri(){
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi/${this.idMateri}/konten/${this.tipeMateri}`)

        this.materi = response.data;
        console.log('sukses get materi map');
        console.log(response.data);
      } catch(error) {
          return console.log(error)
      }
    },

    async SubmitMappQuiz(){ 
      const body = new FormData() //mapping body this.file to post to quiz map
      body.append('idMateri', this.idMateri)
      body.append('idMatkul', this.idMatkul)
      body.append('submission', this.file)
    
      try {
        await axios.post(`${process.env.VUE_APP_API_HOST}/matkul/quiz/map`, body)
			} catch(error) {
				console.error(error)
				return
      }
      
      this.dialogMappQuiz = false;
      this.$emit('SubmitMappQuiz');
    },
  }  
  
}
</script>


<style >
  body {
  margin: 2rem;
  background: #eee;
}
</style>
