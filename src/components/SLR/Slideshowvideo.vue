<template>
  <div > 
    <v-row no-gutters >
      <v-col md="12">
        <v-card class="pa-2">
          <v-row>
            <v-col md="7">
              <v-row justify="center" no-gutters="" class="pt-4">
                <v-col md="11">
                  <!-- <p class="title grey--text text--darken-3 font-weight-medium">{{this.activeVideo.title}} </p> -->
                  <p  v-if="activeVideo" class="title grey--text text--darken-3 font-weight-medium">{{activeVideo.judul}} </p>
                  <v-divider ></v-divider>
                </v-col>
              </v-row>

              <v-row class="pa-5">
                <v-col class="text-center" md="12">
                  <div v-if="activeVideo">
                    <iframe width="580px" height="320px" frameborder="0" allow="encrypted-media" allowfullscreen
                    :src="activeVideo.url" ></iframe>
                    <!-- :src="this.activeVideo.youtubeURL" ></iframe> -->
                  </div>
                </v-col>
              </v-row>
            </v-col>
           
            <v-col md="5">
              <v-row justify="center" no-gutters="" class="pt-4">
                <v-col md="11">
                  <p class="title red--text text--accent-1 font-weight-medium">Daftar Video Materi</p>
                  <v-divider ></v-divider>
                </v-col>
              </v-row>

              <v-row justify="center" class="pt-5 px-5">
                <v-col md="11">
                  <div style="height:360px;width:auto;overflow-y:scroll;overflow-x:hidden;">
                    <div style="height:150%;">
                      <div class="video-list">
                        <div v-for="(video,index) in materi" :key="video.id"  @click="chooseVideo(index)"  class="thumbnail">
                          <div class="thumbnail-img">
                          <img :src="video.thumbnail" />
                          </div>
                          <div class="thumbnail-info">
                          <h3>{{video.judul}}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>

              <v-row justify="end" class="pr-11">
                <v-col md="4">
                  <v-btn color="teal darken-4 white--text" block class="subtitle-2 font-weight-bold" 
                  @click="getQuiz()">Lanjutkan</v-btn>
                  <!-- @click.stop="dialogQuizControlVideo = true">Lanjutkan</v-btn> -->
                </v-col>
              </v-row>

              <!-- #############DIALOG START#############-->
              <v-dialog v-model="dialogQuizControlVideo" max-width="1000px" > 
                <v-card color="white" width="auto" height="auto" style="overflow-x:hidden; overflow-y:hidden;">
                  <v-img :src="srcBgQuiz">
                    <v-row justify="center" class="mt-8" dense>
                      <v-col>
                        <p class="text-center display-1 font-weight-bold grey--text text--darken-3">Quiz</p>
                        <p class="subtitle-2 text-center grey--text font-weight-regular">Pilihlah 10 kata kunci berikut ini yang berkaitan dengan <br>materi yang telah kamu pelajari.</p>
                      </v-col>
                    </v-row>

                    <v-row justify="space-around">
                      <v-col md="9">
                        <v-form v-model="isValidQuizControlVideo" lazy-validation>
                          <v-chip-group v-model="selected" column max="10" multiple active-class="teal darken-3 white--text" style="box-shadow:none;" >
                            <v-row>
                              <v-col align="center">
                                <v-chip v-for="tag in quiz" :key="tag">{{ tag }}
                                </v-chip>
                              </v-col>
                            </v-row>
                            <!-- <p>{{selected}}</p> -->
                          </v-chip-group>
                        </v-form>
                      </v-col>
                    </v-row>

                    <v-row justify="center"  class="mt-4">
                      <v-col md="2">
                        <v-btn :disabled="!isValidQuizControlVideo" 
                        @click="SubmitVideoQuiz()"
                        color="teal darken-4 white--text" class="subtitle-2 font-weight-bold" block>KUMPULKAN</v-btn>
                      </v-col>
                    </v-row>
                  </v-img>
                </v-card>
              </v-dialog>

            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
window.axios = require('axios');


// let videos = [
//   {
//     id: 1,
//     title: "Algoritma dan Struktur Data : Tree I",
//     thumbnail:
//       "https://i.ytimg.com/vi/i4CglDZfCJU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA",
//     youtubeURL: "https://www.youtube.com/embed/i4CglDZfCJU",
//   },
//   {
//     id: 2,
//     title: "Algoritma dan Struktur Data : Tree II",
//     thumbnail:
//       "https://i.ytimg.com/vi/qH6yxkw0u78/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
//     youtubeURL: "https://www.youtube.com/embed/qH6yxkw0u78",
//   },
//   {
//     id: 3,
//     title: "Algoritma dan Struktur Data : Tree II",
//     thumbnail:
//       "https://i.ytimg.com/vi/oSWTXtMglKE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",
//     youtubeURL: "https://www.youtube.com/embed/oSWTXtMglKE",
//   },
//   // {
//   //   id: 4,
//   //   title: "Talking Tech with Neil deGrasse Tyson!",
//   //   thumbnail:
//   //     "https://i.ytimg.com/vi/pqQrL1K0Z5g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",
//   //   youtubeURL: "https://www.youtube.com/embed/pqQrL1K0Z5g",
//   // },
//   // {
//   //   id: 5,
//   //   title: "The Apple Ecosystem: Explained!",
//   //   thumbnail:
//   //     "https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",
//   //   youtubeURL: "https://www.youtube.com/embed/KB4_WIPE7vo",
//   // }
// ];


export default {
  name: 'controlvideo',

  components:{
    // AfterVideo,
  },

  props: {
    // StateEvaluasiBelajar: Boolean,
    // e1: Number
    idMatkul: String,
    idMateri: String,
    tipeMateri: String,
  },

  data () {

    return {
      srcBgQuiz: require ('@/assets/bg/bgdaundialog.svg'),
      dialogQuizControlVideo: false,
      isValidQuizControlVideo: true,
      // videos,
      // activeVideo: videos[0],
      

      selected: [],


      //AXIOS
      // materi,
      materi:[],
      activeVideoIndex: 0,
      quiz:{},      
    }
  },

  computed: {
    activeVideo() {
      if(this.materi.length == 0) {
        return null
      }

      return this.materi[this.activeVideoIndex]
    }
  },

  created: async function(){
    await this.getMateri();
  },
  methods:{
    chooseVideo(indexVideo){
      //SET VIDEO AS ACTIVE VIDEO
      this.activeVideoIndex = indexVideo;
      
      //INCREASE THE VIDEOS VIEWS BY 1
      // video.views += 1;
    },

    // SubmitVideoQuiz(){
    //   console.log(this.selected);
    //   this.dialogQuizControlVideo = false;
    //   this.$emit('SubmitVideoQuiz');
    // },

    //AXIOS
    async getMateri(){
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi/${this.idMateri}/konten/${this.tipeMateri}`)

        this.materi = response.data;
        console.log('sukses get materi video');
        console.log(response.data);
      } catch(error) {
          return console.log(error)
      }
    },

    async getQuiz(){
      
      this.dialogQuizControlVideo = true;

      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi/${this.idMateri}/quiz/${this.tipeMateri}`)

        this.quiz = response.data;
        console.log('sukses get quiz video');
        console.log(response.data);
      } catch(error) {
          return console.log(error)
      }
    },

    async SubmitVideoQuiz(){ //MAPPING todos.selected ke jawaban


      try {
        await axios.post(`${process.env.VUE_APP_API_HOST}/matkul/quiz/video`, 
        { idMatkul : this.idMatkul, idMateri : this.idMateri, jawaban: this.selected })
			} catch(error) {
				console.error(error)
				return
      }
      
      this.dialogQuizControlVideo = false;
      this.$emit('SubmitVideoQuiz');
    },
  }
}
</script>

<style scoped>
  .thumbnail{
    display:flex;   
  }

  .thumbnail img{
    width:168px;
}

.thumbnail-info{
    margin-left:20px;
}

.thumbnail h3{
    font-size:16px;
}

h3,
p{
    margin:0;
    padding:0;
}

.thumbnail-views{
    font-size:14px;
}

.video-player{
    display:flex;
    width:1200px;
    margin:auto;
}

.video-container{
    margin-right:40px;
}

.row{
    display:flex;
    justify-content:space-between;
}

button{
    background:#D0021B;
    color:white;
    border:none;
    padding:10px 20px;
}

  
</style>
