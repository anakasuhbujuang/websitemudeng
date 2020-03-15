<template>
  <div class="todo-item">

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
              <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >{{todo.text}}
              </v-card-text>
              
          </v-card>
        </v-col>
        <v-col md="1"></v-col>
     </v-row>

     <!-- Isi START-->
      <v-row  justify="center" dense no-gutters>
       
        <v-col offset-md="1" md="11">
          <v-card
            class="justify-center align-center"
            dense
            flat>  

            <v-row justify="start">
              <v-col md="6">
                
                    <v-textarea v-model="todo.jawaban" color="teal darken-2" outlined label="Jawaban" 
                    :rules="rulesjawabanTestAPK"
                    style="border-radius:5px; border-color:grey;" no-resize rows="3"></v-textarea>
                

              </v-col>
            </v-row>

          </v-card>
          
        </v-col>
      </v-row>
      <!-- ISI END -->

  </div>
</template>

<script src="@/components/SLR/TestAPK/todoItemTestAPK.js"></script>
