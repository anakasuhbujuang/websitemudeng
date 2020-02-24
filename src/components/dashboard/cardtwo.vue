<template>
    
     <v-card min-height="320px" max-height="420px" color="white" class="pa-2">
                            
                            <v-row justify="center" no-gutters class="mt-4">
                              <v-col md="10">
                                  <p class="title red--text text--accent-1 font-weight-medium">Skor MAI</p>
                                  <v-divider ></v-divider>
                              </v-col>
                            </v-row>

                            <!-- ISIAN CARD 2: SKOR MAi -->

                            
                            <v-row justify="center" class="my-8">
                              <v-col md="12"  >
                                <v-simple-table fixed-header dense >
                                    <template v-slot:default>
                                        
                                        
                                          <tr>
                                            <td class="text-center">
                                              <v-progress-circular
                                                  rotate="-90"
                                                  size="130"
                                                  :value="SkorKnowledge"
                                                  width="14"
                                                  color="red accent-1"
                                                  
                                                >{{SkorKnowledge}}</v-progress-circular>
                                            </td>

                                            <td class="text-center">
                                              <v-progress-circular
                                                  rotate="-90"
                                                  size="130"
                                                  :value="SkorKnowledge"
                                                  width="14"
                                                  color="red accent-1"
                                                  
                                                >{{SkorKnowledge}}</v-progress-circular>
                                            </td>
                                          </tr>

                                          <tr>
                                            <td></td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Knowledge</span><br>{{LvSkorKnowledge}}</td>
                                            <td class="subtitle-2 text-center grey--text font-weight-regular"><span class="subtitle-1 text-center red--text text--accent-1 font-italic font-weight-bold">Regulation</span><br>{{LvSkorRegulation}}</td>
                                          
                                          </tr>
                                       
                                    </template>
                                </v-simple-table>
                      
                              </v-col> 
                            </v-row>
                        
                          </v-card>
</template>

<script>

export default {

  name:'cardtwo',

     data: () => ({

      // CARD 2 : Skor MAI
      SkorKnowledge: '50',
      LvSkorKnowledge: 'Kurang',
      SkorRegulation: '50',
      LvSkorRegulation: 'Kurang',
     

    }),
  }
</script>