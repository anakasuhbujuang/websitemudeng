SUDAH DIPINDAH KE SLIDESHOWSUMM : mempertimbangkan boolena for StateEvaluasiBelajar
<!--
  <v-img src="@/assets/bg/bgdaundialog.svg">

    <v-row justify="center"  class="mt-4">
      <v-col >

        <div v-show="statekeyword">
           
           <v-row class="mb-12">
              <v-col>
                <p class="text-center display-1 font-weight-bold grey--text text--darken-3">Quiz</p>
                <p class="text-center subtitle-2 grey--text">Pilihlah 3 diantara 10 kata kunci di bawah ini. </p>
              </v-col>
            </v-row>
           
           <v-chip-group
            column multiple max="3"
            active-class="teal darken-3 white--text"  
            style="box-shadow:none;" 
            v-model="selected">

            <v-row justify="center"> 
              <v-col align="center" md="5">
                
                <v-chip v-for="tag in tags" :key="tag">
                {{ tag}}
                </v-chip>
              
              </v-col>
            </v-row>
              
          </v-chip-group>
          

          <v-row justify="center" class="mt-12 pt-4">
            <v-col md="2">
              <p>{{selected}}</p>
                <v-btn  color="teal darken-3" @click="nextStepSummQuiz()" block dark>PILIH</v-btn>
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

          <v-row v-for="(selected,i) in selected" :key="i" justify="center" class="mb-4" no-gutters>
            <v-col md="6">
              <p v-if="selected === 0" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[0] }} :</p>
              <p v-else-if="selected === 1" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[1] }} :</p>
              <p v-else-if="selected === 2" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[2] }} :</p>
              <p v-else-if="selected === 3" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[3] }} :</p>
              <p v-else-if="selected === 4" class="text-start subtitle-2 font-weight-bold grey--text dtext--darken-3">{{ tags[4] }} :</p>
              <p v-else-if="selected === 5" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[5] }} :</p>
              <p v-else-if="selected === 6" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[6] }} :</p>
              <p v-else-if="selected === 7" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[7] }} :</p>
              <p v-else-if="selected === 8" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[8] }} :</p>
              <p v-else-if="selected === 9" class="text-start subtitle-2 font-weight-bold grey--text text--darken-3">{{ tags[9] }} :</p>

                <v-textarea v-model="isisummary[i]" rows="1" no-resize outlined color="teal darken-2" style="border-radius:5px;padding-top:5px;"></v-textarea>
              
            </v-col>
          </v-row>
          
          <v-row justify="center">
            <v-col md="2">
                <v-btn  color="teal darken-3" @click="summary()" block dark>KUMPULKAN</v-btn>
            </v-col>
          </v-row>

        </div>


      </v-col>
    </v-row>

  </v-img>
</template>

<script>

  export default {

    name: 'Aftersumm',
    
    components: {
      // Keyword
    },

    data () {

      return {

      
      tags: [
        'Work', 
        'Home', 
        'Vacation', 
        'Food', 
        'Drawers', 
        'Data', 
        'Chain', 
        'Sorting', 
        'Luxury', 
        'Algoritma', 
      ],

      isisummary: ['','','',],

      selected: '',
      

       statekeyword: true,
       statedeskripsi: false,
        }
    },

    methods: {
        nextStepSummQuiz(){
            this.statekeyword=false;
            this.statedeskripsi=true;
        },
        nextSubmitSummQuiz(){
            this.statekeyword=true;
            this.statedeskripsi=false;
        },
        summary(){
        console.log(this.isisummary)
      }
    }
  }
</script>

