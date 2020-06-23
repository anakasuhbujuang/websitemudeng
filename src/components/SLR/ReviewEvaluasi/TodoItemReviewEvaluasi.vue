<template>
  <div class="todo-item-review">

     <v-row justify="center" dense no-gutters class="my-2">

        <v-col md="1" class="text-center">
          <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">{{todo.id}}.
          </v-card-text>
        </v-col>

        <v-col md="10">
          <v-card
            dense
            color="grey lighten-4"
            class="d-flex justify-center align-center"
            flat >
              <v-card-text class="subtitle-2 text-start  grey--text text--darken-3 font-weight-medium" >{{todo.text}}
              </v-card-text>
              
          </v-card>
        </v-col>
        <v-col md="1"></v-col>
     </v-row>

     <!-- Isi START-->
      <v-row  justify="center" dense no-gutters>
       
        <v-col justify="space-between" md="10">
          <v-card
            class="justify-center align-center"
            dense
            flat>  

            <v-row justify="start">
              <v-col md="8">               
                
                <div v-if="todo.selected == todo.jawabantrue">
                  <v-row>
                    <v-col md="6">

                      <p class="body-2 text-start  grey--text text--darken-3 font-weight-medium">Jawaban anda: </p>
                      <v-row no-gutters class="mt-0">
                        <v-col md="1" class="mt-0">
                          <v-icon small color="success" >{{IconSelected}}</v-icon>
                        </v-col>
                        <v-col md="7" class="mt-0 pt-1">
                          <p class="text-start font-weight-medium caption green--text">{{todo.selected}}</p>
                        </v-col>
                      </v-row>
                    
                    </v-col>
                  </v-row>
                </div>

                <div v-else>
                  <v-row>
                    <v-col md="6">

                      <p class="body-2 text-start  grey--text text--darken-3 font-weight-medium">Jawaban anda: </p>
                      <v-row no-gutters class="mt-0">
                        <v-col md="1" class="mt-0">
                          <v-icon small color="error" >{{IconSelected}}</v-icon>
                        </v-col>
                        <v-col md="11" class="mt-0 pt-1">
                          <p class=" text-start font-weight-medium caption red--text">{{todo.selected}}</p>
                        </v-col>
                      </v-row>

                    </v-col>

                    <v-col md="6">
                      
                      <p class="body-2 text-start  grey--text text--darken-3 font-weight-medium">Jawaban yang benar: </p>
                      <v-row no-gutters class="mt-0">
                        <v-col md="1" class="mt-0">
                          <v-icon small color="success" >{{IconSelected}}</v-icon>
                        </v-col>
                        <v-col md="11" class="mt-0 pt-1">
                          <p class="text-start font-weight-medium caption green--text">{{todo.jawabantrue}}</p>
                        </v-col>
                      </v-row>

                    </v-col>
                  </v-row>
                 
                </div>
              </v-col>

            </v-row>
            
          </v-card>
          
        </v-col>
      </v-row>
      <!-- ISI END -->

  </div>
</template>

<script>
              
import { mdiCircleSlice8 } from '@mdi/js';

export default {
  name: 'todo-item',
  components: {
  },

  // props: ['todo'],
  props: { 
    todo:Array, 
    selectedevaluasi: Array
  },

  data() {
    return {
     IconSelected : mdiCircleSlice8,
    };
  },
  
  methods: {
   
    // isValidTestAPK(){
    //   this.$emit('isValidTestAPK');

    // }

  }
}
</script>
