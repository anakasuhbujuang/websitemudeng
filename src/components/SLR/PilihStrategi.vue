<template>
    <div>
        <v-row no-gutters justify="center">
            <v-col md="12">
                <!-- CARDS-PET STRATEGI -->
                <v-row justify="center">
                <v-col v-for="(item, i) in Strategi" :key="i" md="3">
                
                    <v-toolbar v-if="item.Rekomendasi" color="red accent-1" 
                    style="border-radius:5px 5px 0px 0px;" height="50px" dark>
                    <v-toolbar-title class="subtitle-1 font-weight-medium">Rekomendasi</v-toolbar-title>
                    </v-toolbar>
                    
                    <v-toolbar flat v-else color="grey lighten-5" height="50px" dark> </v-toolbar>

                    <v-card color="white" height="400px">

                    <v-card-media justify-center  class=" px-4">
                        <v-img :src="item.SrcImgStrategi"></v-img>
                    </v-card-media>
                    
                    <v-card-text class=" py-0 my-0">
                        <p class="subtitle-2 text-center grey--text text--darken-3 font-italic font-weight-bold" >
                        {{item.NameStrategi}}</p>
                        <p class="caption text-center grey--text  font-weight-regular">
                        {{item.DescStrategi}}</p>
                    </v-card-text> 

                    <v-card-actions class="pt-5">
                        <v-btn v-if="item.Jenis == 'Video'" 
                        color="teal darken-4 white--text" block
                        class="subtitle-2 font-weight-bold" 
                        @click="nextStepVideo()">PILIH
                        </v-btn>

                        <v-btn v-else-if="item.Jenis == 'Summary'"
                        color="teal darken-4 white--text" block
                        class="subtitle-2 font-weight-bold"
                        @click="nextStepSumm()">PILIH
                        </v-btn>

                        <v-btn v-else 
                        color="teal darken-4 white--text" block 
                        class="subtitle-2 font-weight-bold"
                        @click="nextStepMapp()">PILIH
                        </v-btn>

                    </v-card-actions>

                    </v-card>

                </v-col>
                </v-row>
                <!-- CARDS-PET END -->
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

    name:'PilihStrategi',
    
    props: {
        statevideo: Boolean,
        statesumm: Boolean,
        statemapp: Boolean,
        e1: Number
    },

    data () {

      return {
          Strategi: [
        {
          SrcImgStrategi: require('@/assets/pet/jonivideo.png'),
          NameStrategi: 'Control Video',
          DescStrategi:'Selanjutnya kamu akan belajar melalui media video yang telah kami sediakan.',
          Rekomendasi:'Check',
          Jenis: 'Video',
        },
        {
          SrcImgStrategi: require('@/assets/pet/jonisumm.png'),
          NameStrategi: 'Summarization',
          DescStrategi:'Selanjutnya kamu akan belajar dengan membuat ringkasan materi yang ada.',
          Rekomendasi:'',
          Jenis: 'Summary',
        },
        {
          SrcImgStrategi: require('@/assets/pet/jonimapp.png'),
          NameStrategi: 'Mind Mapping',
          DescStrategi:'Selanjutnya kamu akan belajar dengan membuat diagram berisi materi yang ada.',
          Rekomendasi:'',
          Jenis:'Mapping',
        },
        ],
      }
    },

        methods: {
            nextStepVideo() {
                this.$emit('nextStepVideo')
            },
            nextStepSumm() {
                this.$emit('nextStepSumm')
            },
            nextStepMapp() {
                this.$emit('nextStepMapp')
            }
        }


    
}
</script>