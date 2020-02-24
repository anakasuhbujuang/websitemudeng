<template>
  <div class="hidden-sm-and-down hidden-xl-only">
                    
                    <!-- card 1 : navigasi tab -->
                    <v-row justify="center">
                  
                      <v-col md="12">

                        <v-card min-height="120px" class="pa-5 mb-4">
                          
                          <v-row justify="center" no-gutters>
                            <v-col md="10">
                              <p class="title text-center teal--text text--darken-4 font-weight-bold">Proses Belajar</p>
                            </v-col>
                          </v-row>
                         
                          <v-row justify="center" no-gutters>
                            <v-col md="10">
                                <v-stepper-header style=" box-shadow:none;" >
                                    <template v-for="item in steps">
                                      <v-stepper-step
                                       :key="`${item.n}-step`"
                                        :complete="e1 > item.n"
                                        :step="item.n"
                                        editable
                                        color="teal darken-4"
                                      >
                                        {{item.title}}
                                      </v-stepper-step>

                                      <v-divider
                                        v-if="item.n < 5"
                                        :key="item.n"
                                      ></v-divider>
                                    </template>
                                    
                                  </v-stepper-header>
                              </v-col>
                            </v-row>
                            
                        </v-card>
                      </v-col>
                    </v-row>

    </div>
</template>


<script>
  export default {
    name: 'modelstep',
    data () {

      return {
        
        //STEPPER
        e1: 1,
        // steps: 5,
        steps:[

          {
            n: 1,
            title:'Mata Kuliah',
          },
          {
            n: 2,
            title:'Materi Belajar',
          },
          {
            n: 3,
            title:'Strategi Belajar',
          },
          {
            n: 4,
            title:'SRL',
          },
          {
            n: 5,
            title:'Evaluasi Belajar',
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

