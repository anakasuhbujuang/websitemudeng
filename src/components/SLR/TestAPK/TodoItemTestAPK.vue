<template>
  <div class="todo-item">

    <v-row justify="center" dense no-gutters class="my-2">
      <v-col md="1" class="text-center">
        <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">{{todo.id+ 1}}.</v-card-text>
      </v-col>

      <v-col md="10">
        <v-card dense flat color="grey lighten-4" class="d-flex justify-center align-center">
          <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >{{todo.soal}}</v-card-text>   
        </v-card>
      </v-col>
      <v-col md="1"></v-col>
    </v-row>

    

    <!-- Multiple Choice START-->
    <v-row  justify="center" dense no-gutters>
      
      <v-col offset-md="1" md="11">
        <v-card class="justify-center align-center" dense flat >  
          <v-row justify="start">
            <v-col md="6">
              <v-radio-group :rules="rulesjawabanevaluasi" class="  grey--text text--darken-3 font-weight-medium" v-model="todo.selected"  column>
                <v-radio v-for="(item,index) in todo.pilihan.split(',')" :key="index" color="teal darken-3" :label="`${getAlphabetFromIndex(index)}. ${item}`" :value="getAlphabetFromIndex(index)" ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-card>
        
        
      </v-col>
    </v-row>
    <!-- Multiple Choice END-->
    

  </div>
</template>

<script >
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
   
    getAlphabetFromIndex(index) {
      return String.fromCharCode(index + 65)
    },

  }
}

</script>
