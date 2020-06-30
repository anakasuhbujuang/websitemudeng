<template>
  <div >
    <v-row justify="center" dense no-gutters>
      <v-col md="1" class="text-center">
        <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">{{todo.id + 1}}.</v-card-text>
      </v-col>
      <v-col md="10">
        <v-card dense flat color="grey lighten-4" class="d-flex justify-center align-center">
          <v-card-text class="subtitle-2 text-start  grey--text text--darken-3 font-weight-medium">{{todo.question}}</v-card-text>
        </v-card>
      </v-col>
      <v-col md="1"></v-col>
    </v-row>

    <!-- Multiple Choice START-->
    <v-row  justify="center" dense no-gutters>
      <v-col md="12">
        <v-card class="d-flex justify-center align-center" dense flat >  
          <v-radio-group :rules="rulesjawabanTestMAI" class="grey--text text--darken-3 font-weight-medium" v-model="todo.selected"  row>
            <v-radio  color="teal darken-3" label="Tidak Pernah" :value="'tidak-pernah'" ></v-radio>
            <v-radio  color="teal darken-3" label="Jarang" :value="'jarang'" ></v-radio>
            <v-radio  color="teal darken-3" label="Kadang-Kadang" :value="'kadang-kadang'" ></v-radio>
            <v-radio  color="teal darken-3" label="Sering" :value="'sering'" ></v-radio>
            <v-radio  color="teal darken-3" label="Selalu" :value="'selalu'" ></v-radio>
          </v-radio-group>
          <!-- {{todo.selected}} -->
        </v-card>
      </v-col>
    </v-row>
    <!-- Multiple Choice END-->
  </div>
</template>

<script >
//CHILD of TESTMAI

export default {
  name: 'todo-item',
  components: {
  },
  props: {
    todo : Array,
    isValidTestMAI: Boolean,
    // selected: Array //try
  },

  data() {
    return {
      rulesjawabanTestMAI: 
        [v => !!v ],
    };
  },

  methods: {
    
  },
  created: function() {
    console.log(this.todo)
  }
}
</script>
