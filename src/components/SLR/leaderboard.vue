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
              <v-img :src="srcProfpic"></v-img>
            </v-avatar>
            <v-row>
              <v-col>
                <p class="caption text-center grey--text text--darken-2 font-weight-regular">
                <span class="subtitle-2 text-center grey--text text--darken-4  font-weight-bold">{{rank[1].nama}}</span><br>{{rank[1].total}} pts</p>
              </v-col>
            </v-row>
          </v-col>
        
          <v-col md="4" class="text-center">
            <p class="title text-center red--text text--accent-1  font-weight-bold">1st</p>
            <v-avatar size="100">
              <v-img :src="srcProfpic"></v-img>
            </v-avatar>
              <p class="caption text-center grey--text text--darken-2 font-weight-regular">
              <span class="subtitle-1 text-center grey--text text--darken-4  font-weight-bold">{{rank[0].nama}}</span><br>{{rank[0].total}} pts</p>
            <br>
          </v-col>
            
          <v-col md="3" class="text-center">
            <p class="subtitle-1 text-center red--text text--accent-1  font-weight-bold">3rd</p>
            <v-avatar size="70">
              <v-img :src="srcProfpic"></v-img>
            </v-avatar>
            <v-row>
              <v-col>
                <p class="caption text-center grey--text text--darken-2 font-weight-regular">
                <span class="subtitle-2 text-center grey--text text--darken-4  font-weight-bold">{{rank[2].nama}}</span><br>{{rank[2].total}} pts</p>
              </v-col>
            </v-row>
          </v-col>
        
        </v-row>
      </v-img>

      <div style="height:200px;width:auto;overflow-y:scroll;overflow-x:hidden;">
        <div style="height:150%;">
          <v-list v-for="(item,index) in getRankKe4" :key="index">
              <v-list-item >
              <v-row justify="start" align="center" dense no-gutters>
                
                <v-col md="1" class="pt-2 body-2 text-center font-weight-bold grey--text text--darken-3">
                  <p>{{item.id+ 1}}</p>
                </v-col>
                
                <v-col md="1" class="pb-2 px-2">
                  <v-avatar size="30">
                    <v-img :src="srcProfpic"></v-img>
                  </v-avatar>
                </v-col>
                
                <v-col md="4" class="ml-6 pt-2 body-2 font-weight-medium grey--text text--darken-3" >
                  <p>{{item.nama}}</p>
                </v-col>
                
                <v-col md="1" offset-md="1"  class="pb-3 pl-4">
                  <v-icon color=" red accent-1" size="20px">{{IconPoints}}</v-icon>
                </v-col>
                
                <v-col md="3"  class="pt-2 pl-5 body-2 font-weight-medium red--text text--accent-1">
                  <p>{{item.total}} pts</p>
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

import axios from 'axios';
window.axios = require('axios');

  export default {

    props:{
      idMatkul: String,
    },
    name:'leaderboard',
    data () {

      return {

        IconPoints: mdiStar,

        srcBgDaun: require('@/assets/bg/bgdaun.jpg'),
        
        //STEPPER
        e1: 1,
        srcProfpic:require('@/assets/profpic/user.svg'),
      
        // AXIOS
        rank: [],
      }
    },

    computed: {
      getRankKe4(){
        if(this.rank.length <= 3){
          return [];
        }
        
        return this.rank.slice(3)
      },
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },

    created: async function() {
      await this.getRank();
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },

      //AXIOS
      async getRank (){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/leaderboard`)

          // this.rank = response.data;
          console.log(response.data)
          console.log('sukses get data leaderboard')
          
          const leaderboard = response.data
          const rank = leaderboard.map((item, index) => {
        return {
          id: index,
          nama: item.nama,
          total: item.total,
        }
      })

      this.rank = rank
       } catch(error) {
          return console.log(error)
       }
    },
    },
  }
</script>

<style>

.text-center{
text-align: center;
}
</style>