<template>
  <!-- SKOR MAI-->
  <v-card height="380px" color="white" class="pa-2">
    
    <v-row justify="center" no-gutters class="mt-4">
      <v-col md="10">
        <p class="title red--text text--accent-1 font-weight-medium">Skor MAI</p>
        <v-divider ></v-divider>
      </v-col>
    </v-row>

    <!-- ISIAN CARD 2: SKOR MAi -->
            
    <v-row justify="center" class="my-8 mx-4">
      <v-col md="12"  >
        <v-simple-table fixed-header dense >
            <template v-slot:default>
              <tr>
                <td class="text-center">
                  <v-progress-circular
                    rotate="-90"
                    size="130"
                    :value="maiResult.knowledge"
                    width="14"
                    color="red accent-1"
                  >{{maiResult.knowledge}}</v-progress-circular>
                </td>

                <td class="text-center">
                  <v-progress-circular
                    rotate="-90"
                    size="130"
                    :value="maiResult.requlation"
                    width="14"
                    color="red accent-1"
                  >{{maiResult.requlation}}</v-progress-circular>
                </td>
              </tr>

              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td v-if="maiResult.knowledge == 50 || maiResult.knowledge < 50" class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Knowledge</span><br>Kurang</td>
                <td v-else-if="maiResult.knowledge > 50 && maiResult.knowledge <70" class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Knowledge</span><br>Baik</td>
                <td v-else-if="maiResult.knowledge > 70" class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Knowledge</span><br>Sangat Baik</td>
                
                <td v-if="maiResult.requlation == 50 || maiResult.regulation < 50" class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Regulation</span><br>Kurang</td>
                <td v-else-if="maiResult.requlation > 50 && maiResult.regulation <70" class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Regulation</span><br>Baik</td>
                <td v-else-if="maiResult.requlation > 70" class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Regulation</span><br>Sangat Baik</td>

              </tr>
            </template>
          </v-simple-table>
      
        </v-col> 
      </v-row>
        
  </v-card>
</template>

<script>
import axios from 'axios';
window.axios = require('axios');

export default {

  name:'cardtwo',

  data: () => ({

    // CARD 2 : Skor MAI
    SkorKnowledge: '50',
    LvSkorKnowledge: 'Kurang',
    SkorRegulation: '50',
    LvSkorRegulation: 'Kurang',

    //Axios
    maiResult:[],
  }),

  created: async function(){
      await this.getMaiResult();
  },

  methods:{
    async getMaiResult(){
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/mai/result`)
        this.maiResult= response.data;
        console.log(response.data)
        console.log('sukses get card 2')
      } catch(error) {
      return console.log(error)
      }
    },
  },

}

</script>