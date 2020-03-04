<template>
    <div>
    <v-row justify="center" class="mt-8" dense>
      <v-col>
          <p class="subtitle-1 text-center grey--text font-weight-regular">Pilihlah kata kunci berikut ini yang berkaitan dengan 
            <br>materi yang telah kamu pelajari.</p>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col md="9"  >
        
          <v-chip-group
            column multiple
            active-class="teal darken-3 white--text"  
            style="box-shadow:none;" >

            <v-row>
              <v-col align="center">
                
                <v-chip v-for="tag in tags" :key="tag">
                {{ tag }}
                </v-chip>
              
              </v-col>
            </v-row>
              
          </v-chip-group>
       
      </v-col>
    </v-row>

    </div>
</template>

<script>
export default {
    name:'AfterVideo',

    data: () => ({
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
    }),
    }
</script>