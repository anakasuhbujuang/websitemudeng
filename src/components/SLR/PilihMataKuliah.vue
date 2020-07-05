<template>
<!-- CHILD OF PROSES BELAJAR  -->
  <div>
    <v-row justify="center" no-gutters class="pa-0 ma-0">
      <v-col md="12"> 
        <!-- STEP 1: PILIH MATKUL -->
        <v-card>
          <v-row justify="center" class="mb-4">
            <!-- GAMBAR PET -->
            <v-col md="6" class="pl-12 py-10" >
              <v-img :src="petUser.assets.pilihmatkul"></v-img> <!--petUser.assets.pilihmatkul-->
            </v-col>
            
            <!-- LIST MATKUL -->
            <v-col md="6">

              <v-row justify="center" no-gutters class="pt-4">
                <v-col md="10">
                  <p class="title red--text text--accent-1 font-weight-medium">Mata Kuliah</p>
                  <v-divider ></v-divider>
                </v-col>
              </v-row>
                    
              <v-row justify="center">
                <v-col v-for="(item, index) in daftarMataKuliah" :key="index" md="9" class="pb-4">
                  <v-row>
                    <v-col>
                      <v-btn block color="teal darken-4 white--text" class="subtitle-2 font-weight-bold" height="50px" 
                      @click="nextStepToPilihMataKuliah(item.id)">
                      {{item.nama}}</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-row justify="end">
                <v-col md="5" class="mr-12 pr-12" >
                  <v-btn color="teal darken-2 white--text" block disabled
                  class="subtitle-2 font-weight-bold"
                  @click="nextStepToPilihMataKuliah()">JOIN CLASS</v-btn>
                </v-col>
              </v-row>

            </v-col>
          </v-row>
              
        </v-card> 
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
window.axios = require('axios');

export default {

  name:'PilihMataKuliah',
  
  props: {
    // StatePilihMataKuliah: Boolean,
    // e1: Number,
  },

  data () {
    return {
      // SrcImgPet:"https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihpilihmatkul.png?alt=media&token=bbb93507-6409-43cf-a54d-9a2768b32079",
    
      //AXIOS
      petUser:{},
      daftarMataKuliah:{},
    }
  },

  created: async function() {
    await this.getPetUser();
    await this.getDaftarMatKul();
  },

  methods: {
    //CHILD want to pass data or function to PARENT
  
    nextStepToPilihMataKuliah(idMatkul) {
      this.$emit('pilihMatkul', idMatkul);
    },

    // AXIOS
    async getPetUser (){
      try {
      var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

      this.petUser = response.data;
      } catch(error) {
          return console.log(error)
        }
    },

    async getDaftarMatKul (){
      try {
      var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/daftar`)

      this.daftarMataKuliah = response.data;
      // console.log(response.data)
      } catch(error) {
          return console.log(error)
        }
    },
          
  }

}
</script>