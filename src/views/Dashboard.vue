<template>
      <div style="background-color:#FAFAFA;" 
      class="hidden-sm-and-down hidden-xl-only"> 
          <v-container fluid >
              <v-row no-gutters>
                <!-- ######## MENU ############## -->
                    <Sidebar />
                 <!-- ######## MENU ############## -->

                <!-- ########## LAMAN ############## -->
                <v-col md="12">
                      <v-row justify="center" >
                        <!-- CARD 1 -->
                        <v-col md="8">
                          <cardone/>
                        </v-col>

                        <!-- CARD 2 : SKOR MAI -->

                        <v-col md="4">
                           <cardtwo/>
                        </v-col>
                      </v-row>

                      <!-- CARD 3: Riwayat -->

                      <v-row justify="center" >
                        <v-col md="8">
                            <cardthree/>
                        </v-col>
                        
                        <!-- CARD 4 : Performa -->
                        <v-col md="4">
                            <cardfour/>
                        </v-col>
                      </v-row>
                </v-col>

                <!-- ########## LAMAN ############## -->
                
                </v-row>
              
          </v-container>
      </div>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue'
import cardone from '@/components/dashboard/cardone.vue'
import cardtwo from '@/components/dashboard/cardtwo.vue'
import cardthree from '@/components/dashboard/cardthree.vue'
import cardfour from '@/components/dashboard/cardfour.vue'

export default {

  name:'Dashboard',
    
    components:{
      Sidebar,
      cardone,
      cardtwo,
      cardthree,
      cardfour
    },

     data: () => ({

     

    }),
  }
</script>

<style >

</style>