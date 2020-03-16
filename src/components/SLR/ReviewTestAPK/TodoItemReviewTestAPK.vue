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
              <v-col md="6">
                <v-textarea v-if="todo.jawaban == todo.jawabantrue" 
                readonly outlined no-resize rows="3"
                v-model="todo.jawaban" label="Jawaban anda" 
                style="border-radius:5px;" class="caption" color="success" background-color="light-green lighten-5" ></v-textarea>
                
                <v-textarea v-else
                readonly outlined no-resize rows="3"
                v-model="todo.jawaban" label="Jawaban anda" 
                style="border-radius:5px;" class="caption" color="error" background-color="red lighten-4" ></v-textarea>
              </v-col>

              <v-col md="6">
                <v-textarea readonly outlined no-resize rows="3" disabled
                 v-model="todo.jawabantrue" label="Jawaban yang benar" 
                style="border-radius:5px;" class="caption" ></v-textarea>
              </v-col>
            </v-row>

          </v-card>
          
        </v-col>
      </v-row>
      <!-- ISI END -->

  </div>
</template>

<script>
export default {
  name: 'todo-item',
  components: {
  },

  // props: ['todo'],
  props: { todo:Array,
    isValidTestAPK: Boolean
  },

  data() {
    return {
      rulesjawabanTestAPK: 
        [v => !!v || 'Wajib diisi',],
    };
  },
  
  methods: {
   
    // isValidTestAPK(){
    //   this.$emit('isValidTestAPK');

    // }

  }
}
</script>
