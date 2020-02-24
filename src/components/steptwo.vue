<template>
<div class="hidden-sm-and-down hidden-xl-only">
    <v-row  no-gutters>
                      <v-col md="12">
                        <v-row >
                          <v-col md="8">
                              <v-card>
                                  <v-stepper-content step="2">
                                      <v-row>
                                          <v-col md="12">

                                            <v-row class="pa-2">
                                              <v-col md="10">
                                                <v-list tree-line> 

                                                    <v-list-item>
                                                      
                                                      <v-list-item-avatar size="100">
                                                        <v-img src="@/assets/pet/asih200.png"></v-img>
                                                      </v-list-item-avatar>

                                                      <v-list-item-content>
                                                        <v-row justify-center no-gutters>
                                                      
                                                            <v-col >
                                                                <v-list-item-title class="subtitle-2 grey--text text--darken-3 font-weight-bold">ALGORITMA DAN STRUKTUR DATA</v-list-item-title>
                                                            </v-col>
                                                      
                                                        </v-row>
                                                        <v-row justify-center no-gutters>
                                                            
                                                            <v-col >
                                                                <v-list-item-title class="subtitle-1 red--text text--accent-1 font-weight-medium">Dr. Indriana Hidayah, S.T., M.T.</v-list-item-title>
                                                            </v-col>

                                                        </v-row>
                                                        <v-row justify-center no-gutters>
                                                            
                                                            <v-col >
                                                                <v-list-item-title class="caption grey--text font-weight-regular">Semester Ganjil 2019/2010<br><span class="overline">TIF 141 / 3 sks</span></v-list-item-title>
                                                            </v-col>
                                                            
                                                        </v-row>

                                                      </v-list-item-content>
                                                      
                                                    </v-list-item>

                                                  </v-list>
                                                
                                              </v-col>
                                              
                                              <v-col md="2">
                                                <v-btn color="teal darken-2 white--text" block> RPKPS</v-btn>
                                              </v-col>
                                            
                                            </v-row>

                                            <v-row justify="center">
                                              <v-col md="12">
                                                MATERI
                                              </v-col>
                                            </v-row>
                                            
                                              
                                          </v-col>
                                        </v-row>
                                  </v-stepper-content>
                              </v-card>
                            </v-col>

                        </v-row>
                      </v-col>                       
        
        </v-row>
                    

</div>
</template>

<script>
  export default {
      name:'steptwo',
      data () {
          return {
              //STEP2: pilih materi
                    materi: [
                    {
                    SrcImgPet: require('@/assets/pet/asih200.png'),
                    NamePet: 'Asih',
                    DescPet:'Hai, aku adalah cendrawasih dari Papua. Seperti buluku yang berwarna-warni.',
                    },
                    {
                    SrcImgPet: require('@/assets/pet/joni200.png'),
                    NamePet: 'Joni',
                    DescPet:'Hai, aku adalah orang utan dari Kalimantan. Aku  senang berteman. ',
                    },
                    {
                    SrcImgPet: require('@/assets/pet/budi200.png'),
                    NamePet: 'Budi',
                    DescPet:'Hai, aku adalah komodo dari Nusa Tenggara Timur. Aku pelari cepat ',
                    },
                    {
                    SrcImgPet: require('@/assets/pet/budi200.png'),
                    NamePet: 'Budi',
                    DescPet:'Hai, aku adalah komodo dari Nusa Tenggara Timur. Aku pelari cepat',
                    },
                    {
                    SrcImgPet: require('@/assets/pet/budi200.png'),
                    NamePet: 'Budi',
                    DescPet:'Hai, aku adalah komodo dari Nusa Tenggara Timur. Aku pelari cepat',
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

