<template>
  <div class="todo-item">
    <!-- class="todoWrapper" <button class="removeTodo" v-on:click="removeTodo">remove</button>{{todo.text}} -->

     <v-row justify="center" dense no-gutters>
        <v-col md="1" class="text-center">
          <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">{{todo.id}}.
          </v-card-text>
        </v-col>

        <v-col md="10">
          <v-card
            dense
            color="grey lighten-4"
            class="d-flex justify-center align-center"
            flat 
          >
              <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >{{todo.text}}
              </v-card-text>
              
          </v-card>
        </v-col>
        <v-col md="1"></v-col>
     </v-row>

     <!-- Multiple Choice START-->
      <v-row  justify="center" dense no-gutters>
       
        <v-col offset-md="1" md="11">
          <v-card
            class="justify-center align-center"
            dense
            flat
          >  

            <v-row justify="start">
              <v-col md="2">
                  <v-radio-group  class=" grey--text text--darken-3 font-weight-medium" v-model="todo.selected"  column>
                    <v-radio  color="teal darken-3" :label="todo.A" :value="todo.A" ></v-radio>
                    <v-radio  color="teal darken-3" :label="todo.B" :value="todo.B" ></v-radio>
                 </v-radio-group>
              </v-col>
              <v-col md="2">
                 <v-radio-group  class=" grey--text text--darken-3 font-weight-medium" v-model="todo.selected" column>
                    <v-radio  color="teal darken-3" :label="todo.C" :value="todo.C" ></v-radio>
                    <v-radio  color="teal darken-3" :label="todo.D" :value="todo.D" ></v-radio>
                 </v-radio-group>
              </v-col>
            </v-row>
          </v-card>
          
         
        </v-col>
      </v-row>
         <!-- Multiple Choice END-->

  </div>
</template>

<script src="@/components/SLR/EvaluasiBelajar/todoItem.js"></script>
<style src="@/components/SLR/EvaluasiBelajar/todoItem.css"></style>
