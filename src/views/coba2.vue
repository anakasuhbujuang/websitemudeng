<template>
  <div  style="background-color:#FAFAFA;" >
    
    <v-row justify="center">
      <v-col md="12">
        
          <v-chip-group
            column multiple max="3"
            active-class="teal darken-3 white--text"  
            style="box-shadow:none;" 
            v-model="selected">

            <v-row>
              <v-col align="center">
                
                <v-chip v-for="tag in tags" :key="tag">
                {{ tag }}
                </v-chip>
              
              </v-col>
            </v-row>
              
          </v-chip-group>

          <v-card v-for="i in selected" :key="i">
          
          <p v-if="i === 0">{{ tags[0] }}</p>
          <p v-else-if="i === 1">{{ tags[1] }}</p>
          <p v-else-if="i === 2">{{ tags[2] }}</p>
          <p v-else-if="i === 3">{{ tags[3] }}</p>
          <p v-else-if="i === 4">{{ tags[4] }}</p>

          <v-textarea v-model="isisummary[i]" flat label="Deskripsi"></v-textarea>

          </v-card>

          <v-btn @click="summary()">submit wes pokoe</v-btn>
       

        
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4">
         <v-textarea 
            outlined auto-grow rows="2" style="border-radius:5px; box-color:white;" flat label="Deskripsi"></v-textarea>
      </v-col>
    </v-row>
   
    
  </div>
</template>

<script>
export default {
  
  

  data: () => ({
      tags: [
        'Work',
        'Home',
        'Vacation',
        'Food',
        'Drawers',
      ],

      isisummary: ['','','',],

      selected: '',
    }),

    methods: {

      summary(){
        console.log(this.isisummary)
      }

    }
    

}
</script>

<style>

</style>