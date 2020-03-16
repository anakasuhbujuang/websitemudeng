<template>
  <div >
    <v-row justify="center" dense no-gutters>
      <v-col md="1" class="text-center">
        <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">{{todo.id}}.
        </v-card-text>
      </v-col>

      <v-col md="10">
        <v-card dense flat
          color="grey lighten-4"
          class="d-flex justify-center align-center">
          
            <v-card-text class="subtitle-2 text-start  grey--text text--darken-3 font-weight-medium" >{{todo.text}}
            </v-card-text>
            
        </v-card>
      </v-col>
      <v-col md="1"></v-col>
    </v-row>

    <!-- Multiple Choice START-->
    <v-row  justify="center" dense no-gutters>
      <v-col md="12">
        
        <v-card class="d-flex justify-center align-center"
          dense flat >  
          
            
            <v-radio-group :rules="rulesjawabanTestMAI" class="grey--text text--darken-3 font-weight-medium" v-model="todo.selected"  row>
              <v-radio  color="teal darken-3" label="Tidak Pernah" :value="1" ></v-radio>
              <v-radio  color="teal darken-3" label="Jarang" :value="2" ></v-radio>
              <v-radio  color="teal darken-3" label="Kadang-Kadang" :value="3" ></v-radio>
              <v-radio  color="teal darken-3" label="Sering" :value="4" ></v-radio>
              <v-radio  color="teal darken-3" label="Selalu" :value="5" ></v-radio>
            </v-radio-group>
            
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
  props: {
    todo : Array,
    isValidTestMAI: Boolean
  },

  data() {
    return {
      rulesjawabanTestMAI: 
        [v => !!v ],
    };
  },

  methods: {
    // removeTodo() {
    //   this.$emit('todo:remove', this.todo.id);
    // }
  }
}
</script>
