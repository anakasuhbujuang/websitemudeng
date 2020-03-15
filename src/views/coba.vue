<template>
    <div>

        <!-- DIALOG REVIEW TEST APK START-->
        <v-dialog v-model="dialogReviewTestAPK" persistent max-width="1000px" > 
          <v-card color="white" width="auto" height="auto"
          class="py-4" style="overflow-x:hidden; overflow-y:hidden;">
            <v-img :src="SrcImgStrategi">
            <v-row>
              <v-col class="text-center">
                <p class="title font-weight-bold font-italic grey--text text--darken-3">Activating Prior Knowledge</p>
                <p class="subtitle-2  font-weight-regular grey--text ">Jangan khawatir, test ini bertujuan untuk mengetahui kemampuanmu dalam<br>menguasai materi sebelumnya.</p>
              </v-col>
            </v-row>

            <ReviewTestAPK class="my-2" 
            :dialogHasilTestAPK="dialogHasilTestAPK" :dialogAPK="dialogAPK" 
            @CloseReview="nextStepToPilihStrategi(); dialogReviewTestAPK=false;"
            @PilihMateri="dialogReviewTestAPK=false;"/>
            
            <v-row>
            <v-col md="2">
              <v-btn @click="NewTab()">NEW TAB</v-btn>
            </v-col>
          </v-row>
          </v-img>
          </v-card>
          
          
          
        </v-dialog>
        <!-- DIALOG REVIEW TEST APK END-->
    </div>
</template>

<script>
import ReviewTestAPK from '@/components/SLR/ReviewTestAPK/ReviewTestAPK.vue';

export default {

    name:'coba',
    
    components:{
      ReviewTestAPK
    },

    data () {

      return {
         SrcImgStrategi: require('@/assets/pet/jonivideo.png'),
        dialogReviewTestAPK: true,

      }
    },

    methods: {
      NewTab(){
        window.open("https://drive.google.com/file/d/1hFpmHHrVNV_X-3PK9UMbTqFoTMPzckMV/view", '_blank');
      }
    }
    
}
</script>