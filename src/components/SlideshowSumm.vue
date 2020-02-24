<template>
<div > 

            <v-row no-gutters >
                    <v-col md="12">
                        <v-card class="pa-5">
                          
                          <v-row>
                            <v-col md="7">
                              
                                  <v-row justify="center" no-gutters="" class="pt-4">
                                    <v-col md="11">
                                        <p class="title grey--text text--darken-3 font-weight-medium">{{TitleMateri}} : 
                                          <span class="title grey--text text--darken-1 font-weight-regular">Sorting PART 1</span></p>
                                        <v-divider ></v-divider>
                                    </v-col>
                                  </v-row>

                                  <v-row justify="center" class="pa-5">
                                      <v-col md="11">
                                           <!-- <div class="video-container"> -->
                                            <div>
                                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/DOwXVFSP1RorAM" styel="max-width: 100%; height: auto;" width="720" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 
                                            <div style="margin-bottom:5px" class="text-center"> 
                                                <strong> <a  href="//www.slideshare.net/viruzsystem/algoritma-powerpoint" title="Algoritma powerpoint" target="_blank">Algoritma powerpoint</a> </strong> from 
                                                <strong><a href="https://www.slideshare.net/viruzsystem" target="_blank">Irwin andriyanto</a></strong> 
                                                </div>
                                            </div>
                                      </v-col>
                                  </v-row>
                              
                            </v-col>

                            <v-col md="5">
                              
                                  <v-row justify="center" no-gutters="" class="pt-4">
                                    <v-col md="11">
                                        <p class="title red--text text--accent-1 font-weight-medium">Ruang Summary</p>
                                        <v-divider ></v-divider>
                                    </v-col>
                                  </v-row>

                                  <v-row class="pl-8 pt-5">
                                      <v-col md="4" class="pr-2">
                                          <v-btn-toggle
                                            v-model="formatting"
                                            multiple
                                            >
                                            <v-btn color="white">
                                                <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                    
                                            <v-btn color="white">
                                                <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>
                                    
                                            <v-btn color="white">
                                                <v-icon>mdi-format-underline</v-icon>
                                            </v-btn>
                                    
                                            <v-btn color="white">
                                                <v-row
                                                align="center"
                                                class="flex-column"
                                                justify="center"
                                                >
                                                <v-icon class="cols 12">mdi-format-color-text</v-icon>
                                    
                                                <v-sheet
                                                    tile
                                                    style="margin-top: -4px;"
                                                    height="4"
                                                    width="26"
                                                    color="purple"
                                                ></v-sheet>
                                                </v-row>
                                            </v-btn>
                                            </v-btn-toggle>

                                      </v-col>

                                      <v-col>
                                    
                                            <v-btn-toggle >
                                            <v-btn  @click="isCenter()" v-model="isCenter"  color="white">
                                                <v-icon>mdi-format-align-center</v-icon>
                                            </v-btn>
                                    
                                            <v-btn @click="isLeft()" v-model="isLeft" color="white">
                                                <v-icon>mdi-format-align-left</v-icon>
                                            </v-btn>
                                    
                                            <v-btn  @click="isRight()" v-model="isRight" color="white">
                                                <v-icon>mdi-format-align-right</v-icon>
                                            </v-btn>
                                            </v-btn-toggle>
                                      </v-col>
                                  </v-row>

                                  <v-row justify="center" class="px-2">
                                      <v-col md="11">
                                               <v-textarea
                                                    no-resize
                                                    rows="15"
                                                    :value="Summary"
                                                    outlined
                                                    flat
                                                    v-bind:class="[{'text-center': isCenter,'text-start': isLeft, 'text-end': isRight }]"
                                                ></v-textarea>
                                      </v-col>
                                  </v-row>

                                   <v-row justify="center" no-gutters >
                                            <v-col md="11">
                                                <v-row class="px-2">
                                                    <v-col md="4">
                                                        <v-btn
                                                        color="teal darken-2 white--text"
                                                        block
                                                        class="subtitle-1"
                                                        @click="nextStep(4)"
                                                        >
                                                        UNDUH
                                                        </v-btn>
                                                    </v-col>
                                                    <v-col offset-md="4" md="4">
                                                        <v-btn
                                                        color="teal darken-4 white--text"
                                                        block
                                                        class="subtitle-1"
                                                        @click="nextStep(4)"
                                                        >
                                                        SELESAI
                                                        </v-btn>
                                                    </v-col>

                                                </v-row>                                        
                                            </v-col>
                                   </v-row>



                              
                            </v-col>

                          </v-row>

                        </v-card>
                    </v-col>
                </v-row>

</div>
</template>

<script>

  export default {
      name: 'slideshow',
    data () {

      return {

        allignment: {},
        
        isLeft: false,
        isRight: false,
        isCenter: false,

        isBold: false,
        isItalic: false,
        isUnderline: false,
        
        TitleMateri:'Algoritma dan Struktur Data',
        Summary: '',


      
      }
    },
    methods : {
         alignLeft() {
            this.isLeft == true;
            this.isCenter == false;
            this.isRight == false;
        },
        alignRight() {
            this.isLeft == false;
            this.isCenter == false;
            this.isRight == true;
        },
        alignCenter() {
            this.isLeft == false;
            this.isCenter == true;
            this.isRight == false;
        },
    },
    
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
