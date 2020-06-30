<template>
  <div>
    <v-card class="pb-5" height="550px">
      <v-toolbar color="red accent-1" dark > 
        <v-toolbar-title class="title font-weight-medium">Leaderboard</v-toolbar-title>
      </v-toolbar>
      
      <v-img  :src="srcBgDaun">
        <v-row justify="center">
          
          <v-col md="3" class="text-center">
            <p class="subtitle-1 text-center red--text text--accent-1  font-weight-bold">2nd</p>
            <v-avatar size="70">
              <!-- <v-img :src="rank[1].profpic"></v-img> -->
              <v-img :src="ranking[1].profpic"></v-img>
            </v-avatar>
            <v-row>
              <v-col>
                <!-- <p class="caption text-center grey--text text--darken-2 font-weight-regular">
                <span class="subtitle-2 text-center grey--text text--darken-4  font-weight-bold">{{rank[1].nama}}</span><br>{{rank[1].ponits}} pts</p> -->
                <p class="caption text-center grey--text text--darken-2 font-weight-regular">
                <span class="subtitle-2 text-center grey--text text--darken-4  font-weight-bold">{{ranking[1].nama}}</span><br>{{ranking[1].points}} pts</p>
              </v-col>
            </v-row>
          </v-col>
        
          <v-col md="4" class="text-center">
            <p class="title text-center red--text text--accent-1  font-weight-bold">1st</p>
            <v-avatar size="100">
              <!-- <v-img :src="rank[0].profpic"></v-img> -->
              <v-img :src="ranking[0].profpic"></v-img>
            </v-avatar>
              <!-- <p class="caption text-center grey--text text--darken-2 font-weight-regular">
              <span class="subtitle-1 text-center grey--text text--darken-4  font-weight-bold">{{rank[0].nama}}</span><br>{{rank[0].points}} pts</p> -->
              <p class="caption text-center grey--text text--darken-2 font-weight-regular">
              <span class="subtitle-1 text-center grey--text text--darken-4  font-weight-bold">{{ranking[0].nama}}</span><br>{{ranking[0].points}} pts</p>
            <br>
          </v-col>
            
          <v-col md="3" class="text-center">
            <p class="subtitle-1 text-center red--text text--accent-1  font-weight-bold">3rd</p>
            <v-avatar size="70">
              <!-- <v-img :src="rank[2].profpic"></v-img> -->
              <v-img :src="ranking[2].profpic"></v-img>
            </v-avatar>
            <v-row>
              <v-col>
                <!-- <p class="caption text-center grey--text text--darken-2 font-weight-regular">
                <span class="subtitle-2 text-center grey--text text--darken-4  font-weight-bold">{{rank[2].nama}}</span><br>{{rank[2].points}} pts</p> -->
                <p class="caption text-center grey--text text--darken-2 font-weight-regular">
                <span class="subtitle-2 text-center grey--text text--darken-4  font-weight-bold">{{ranking[2].nama}}</span><br>{{ranking[2].points}} pts</p>
              </v-col>
            </v-row>
          </v-col>
        
        </v-row>
      </v-img>

      <div style="height:200px;width:auto;overflow-y:scroll;overflow-x:hidden;">
        <div style="height:150%;">
          <!-- <v-list v-for="item in leaderboard"> -->
          <v-list v-for="item in ranking" :key="item.id">
              <v-list-item >
              <v-row justify="start" align="center" dense no-gutters>
                
                <v-col md="1" class="pt-2 body-2 text-center font-weight-bold grey--text text--darken-3">
                  <p>{{item.id+ 1}}</p>
                </v-col>
                
                <v-col md="1" class="pb-2 px-2">
                  <v-avatar size="30">
                    <v-img :src="item.profpic"></v-img>
                  </v-avatar>
                </v-col>
                
                <v-col md="4" class="ml-6 pt-2 body-2 font-weight-medium grey--text text--darken-3" >
                  <p>{{item.nama}}</p>
                </v-col>
                
                <v-col md="1" offset-md="1"  class="pb-3 pl-4">
                  <v-icon color=" red accent-1" size="20px">{{IconPoints}}</v-icon>
                </v-col>
                
                <v-col md="3"  class="pt-2 pl-5 body-2 font-weight-medium red--text text--accent-1">
                  <p>{{ item.points}} pts</p>
                </v-col>
              
              </v-row>
            </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </div>
    </div>

  </v-card>
  </div>
</template>

<script>
import { mdiStar } from '@mdi/js';

// import axios from 'axios';
// window.axios = require('axios');

  export default {
    name:'leaderboard',
    data () {


      return {

        IconPoints: mdiStar,

        srcBgDaun: require('@/assets/bg/bgdaun.jpg'),
        
        //STEPPER
        e1: 1,
        // srcRank1:require('@/assets/profpic/user2.svg'),
        // srcRank2:require('@/assets/profpic/user3.svg'),
        // srcRank3:require('@/assets/profpic/user4.svg'),
      
      ranking: [
        {
          id:0,
          profpic:require('@/assets/profpic/user2.svg'),
          nama:'Matahari',
          points:'1000',
        },
        {
          id:1,
          profpic:require('@/assets/profpic/user3.svg'),
          nama:'Bintang',
          points:'500',
        },
        {
          id:2,
          profpic:require('@/assets/profpic/user4.svg'),
          nama:'Bulan',
          points:'400',
        },
        {
          id:3,
          profpic:require('@/assets/profpic/user1.svg'),
          nama:'Jihaan Nadhiya',
          points:'350',
        },
       
         {
          id:4,
          profpic:require('@/assets/profpic/user5.svg'),
          nama:'Dian Ari P',
          points:'300',
        },
        
         {
          id:5,
          profpic:require('@/assets/profpic/user6.svg'),
          nama:'Fajar Mahardika',
          points:'280',
        },
      
         {
          id:6,
          profpic:require('@/assets/profpic/user7.svg'),
          nama:'Supardi Jayaningrat',
          points:'250',
        },
       
        {
          id:7,
          profpic:require('@/assets/profpic/user8.svg'),
          nama:'Indira Gandi',
          points:'200',
        },
      ],

      rankinglow:[],

      // AXIOS
      // rank: {},
      }
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },

    // created: async function() {
    //   await this.getRank();
    // },

    // computed: {
    //   leaderboard: function () {
    //     return this.rank.filter(function (ranks) {
    //       if(this.rank.id > 2){
    //         return this.rank;
    //       }
    //     })
    //   }
    // },

    // computed: {
    //   leaderboard: function(ranking) {
    //         return ranking.filter(item => {
    //             if (item.id > 2) return item;
    //           });     
    //     },
    // },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },

      //AXIOS
    //   async getRank (){
    //   try {
    //       var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

    //       this.rank = response.data;
    //    } catch(error) {
    //       return console.log(error)
    //    }
    // },
    },
  }
</script>

<style>

.text-center{

text-align: center;

}

/* div.bgdaun{

  background-image: url('~./bgdaun147.svg');
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
  background-image: url('~@/bglead.png');
  background-repeat: no-repeat;
} */
</style>