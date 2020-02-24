<template>
   <div class="hidden-sm-and-down hidden-xl-only"> 
     
      
       <v-app-bar 
            color="teal darken-4"
            dense
            dark>
            <v-spacer></v-spacer>
            <v-toolbar-title class="titlefont-weight-bold">MUDENG</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container fluid>
            
            <!-- JUDUL START -->
            <v-row justify="center" class="mb-0  mt-2" no-gutters>
              <v-col md="6" class="text-center">
                  <p class="title  text-center  grey--text  text--darken-3   font-weight-bold">Review Evaluasi Belajar</p>
                
              </v-col>
            </v-row>

            <v-row justify="center" no-gutters>
              <v-col md="5" class="text-center">
                  <p class="subtitle-1 text-center  grey--text  font-weight-regular"><span class="font-italic">Metacognitive Awareness Inventory Test </span> bertujuan untuk<br>mengetahui kemampuan metakognisi-mu.</p>
              </v-col>
            </v-row>
            <!-- JUDUL END -->

            <!-- WHOLE QUESTION BOX -->
        
            <v-row justify="center" class="mb-2" >
              <v-col md="10">    
                <v-card
                  class="mx-auto py-8 pl-4"
                  color="white"
                >
                  
                  <ReviewEval />

                </v-card>
              </v-col>
            </v-row>

             
            
        </v-container>

    
  </div>
</template>


<script >
import ReviewEval from '@/components/ReviewEval/ReviewEval.vue';

export default {
  name: 'PaginationReal2',
  data() {
    return {
    };
  },

  components: {
    ReviewEval,
  },
  
}

</script>
<style></style>
