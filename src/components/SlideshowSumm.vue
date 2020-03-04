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
              @click.stop="dialog = true"
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
                <!-- #############DIALOG START#############-->
              <v-dialog v-model="dialog" max-width="1000px" > 
                <v-card color="white" width="auto" height="auto"
                style="overflow-x:hidden; overflow-y:hidden;">
                  <AfterSumm/>
                </v-card>
              </v-dialog>

  </div>
</template>

<script>

import AfterSumm from '@/components/SLR/AfterSumm.vue'  



export default {
    
    name: 'slideshowsumm',
    components: {
      AfterSumm
    },

    data () {

      return {
        
      dialog: false,  
      TitleMateri:'Algoritma dan Struktur Data',

     
      
      }
    },

   
}
  
</script>

<style scoped>
  /* .thumbnail{
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

   */
</style>
