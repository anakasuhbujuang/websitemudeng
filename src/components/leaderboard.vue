<template>

    <div>
         
          <v-card class="pb-5">

            <v-toolbar
              color="red accent-1"
              dark
              > 
                <v-toolbar-title class="font-weight-medium">
                    Leaderboard  
                </v-toolbar-title>

            </v-toolbar>

              
                <v-img  src="@/assets/bg/bgdaundialog.svg">
                 <v-row justify="center">
                    <v-col md="3" class="text-center">
                        <p class="subtitle-1 text-center red--text text--accent-1  font-weight-bold">2nd</p>
                        <v-avatar size="70">
                                <v-img src="@/assets/pet/asih200.png"></v-img>
                        </v-avatar>
                        <v-row>
                          <v-col>
                            <p class="caption text-center grey--text font-weight-regular"><span class="body-1 text-center grey--text text--darken-4  font-weight-bold">Bintang</span><br>500 pts</p>
                          </v-col>
                        </v-row>
                       
                                    
                    </v-col>
                    <v-col md="4" class="text-center">
                        <p class="title text-center red--text text--accent-1  font-weight-bold">1st</p>
                        <v-avatar size="100">
                            <v-img src="@/assets/pet/asih200.png"></v-img>
                        </v-avatar>
                        <p class="caption text-center grey--text font-weight-regular"><br><span class="title text-center grey--text text--darken-4  font-weight-bold">Matahari</span><br>1000 pts</p>
                         
                    </v-col>
                    <v-col md="3" class="text-center">
                        <p class="subtitle-1 text-center red--text text--accent-1  font-weight-bold">3rd</p>
                        <v-avatar size="70">
                            <v-img src="@/assets/pet/asih200.png"></v-img>
                        </v-avatar>
                        <v-row>
                          <v-col>
                              <p class="caption text-center grey--text font-weight-regular"><span class="body-1 text-center grey--text text--darken-4  font-weight-bold">Bulan</span><br>100 pts</p>
                          </v-col>
                        </v-row>
                         
                    </v-col>
                    
                  </v-row>
                </v-img>
                

                

              <div style="height:300px;width:auto;overflow-y:scroll;overflow-x:hidden;">

                <div style="height:150%;">

                    <v-list v-for="item in ranking" :key="item.No">
                      

                      <v-list-item  >
                          <v-row justify="start" align="center" dense>
                            <v-col md="1" class="pt-2 body-1 font-weight-bold grey--text text--darken-3">
                              <p class="text-center" style="text-align:center;">{{item.No}}</p>
                            </v-col>
                            <v-col md="1" class="px-4 py-2 ">
                              <v-avatar size="45">
                                  <v-img :src="item.SrcImgProfPic"></v-img>
                              </v-avatar>
                            </v-col>
                            <v-col md="4" class="pl-12 pt-2 body-1 font-weight-medium grey--text text--darken-3" >
                              <p class="text-start">{{item.Nama}}</p>
                            </v-col>
                            
                            <v-col md="1" offset-md="2"  class="pb-4 ">
                              <v-icon color=" red accent-1" size="30px">{{IconPoints}}</v-icon>
                            </v-col>
                            <v-col md="3"  class=" pt-2 body-1 font-weight-medium red--text text--accent-1">
                              <p>{{ item.points}} pts</p>
                            </v-col>
                          </v-row>
                          
                          
                      </v-list-item>
                       <v-divider v-show="item.divider"></v-divider>

                    </v-list>

              </div>
            </div>

           </v-card>

    
    
    </div>
    
</template>

<script>
import { mdiStar } from '@mdi/js';
  export default {
    name:'leaderboard',
    data () {


      return {

        IconPoints: mdiStar,
        
        //STEPPER
        e1: 1,
      
      ranking: [

        {
          No:4,
          SrcImgProfPic:require('@/assets/pet/asih200.png'),
          Nama:'Jihaan',
          points:'350',
          divider: true,
        },
       
         {
          No:5,
          SrcImgProfPic:require('@/assets/pet/asih200.png'),
          Nama:'Jihaan',
          points:'350',
          divider: true,
        },
        
         {
          No:6,
          SrcImgProfPic:require('@/assets/pet/asih200.png'),
          Nama:'Jihaan',
          points:'350',
          divider: true,
        },
      
         {
          No:7,
          SrcImgProfPic:require('@/assets/pet/asih200.png'),
          Nama:'Jihaan',
          points:'350',
          divider: true,
        },
       
        {
          No:7,
          SrcImgProfPic:require('@/assets/pet/asih200.png'),
          Nama:'Jihaan',
          points:'350',
          divider: true,
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
          this.e1 = n + 1
        }
      },
    },
  }
</script>

<style>

.text-center{

text-align: center;

}

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
    */
  /* transform: scale(1.1); */
  /* z-index: -1;

} */

/* div.bglead{
  background-image: url('~@/assets/bglead.png');
  background-repeat: no-repeat;
} */
</style>