<template>
  <div style="background-color:#FAFAFA;" 
  class="hidden-sm-and-down hidden-xl-only">

      <v-img :src="SrcBgPilihPet" contain position="top" max-width="1904px" max-height="1071px" >

        <v-app-bar 
            color="teal darken-4"
            dense
            dark>
            <v-spacer></v-spacer>
            <v-toolbar-title class="title font-weight-bold">MUDENG</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container >

            <!-- JUDUL START -->
            <v-row justify="center" class="mb-0 mt-6" no-gutters>
              <v-col md="6">
                  <p class="headline text-center  grey--text  text--darken-3   font-weight-bold">Pilih Kawanmu</p>
                
              </v-col>
            </v-row>

            <v-row justify="center" no-gutters>
              <v-col md="5">
                  <p class="subtitle-1 text-center  grey--text font-weight-regular">Salah satu dari mereka akan menemanimu bermain<br>dan belajar bersama Mudeng.</p>
              </v-col>
            </v-row>
            <!-- JUDUL END -->

            <!-- CARDS-PET START -->
            <v-row justify="center" class="mt-6">
    <!-- ASIH  -->
              <v-col md="3">
                <v-card 
                color="white"
                min-height="200px"
                max-height="400px"
                >
                  <v-card-media justify-center >
                      <v-img :src="daftarpet.asih.assets.profil"></v-img>
                  </v-card-media>

                  <v-row justify="center" class="mt-4" no-gutters>
                    <v-col md="8">
                          <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold" v-text="daftarpet.asih.nama"></p>
                    </v-col>
                  </v-row>       
                  <v-row justify="center" no-gutters >
                    <v-col md="9">
                          <p class="subtitle-2 text-center grey--text  font-weight-regular">{{daftarpet.asih.deskripsi}}</p>
                    </v-col>
                  </v-row>                
                  
                  <v-card-actions>
                      <v-btn block
                      color="teal darken-4 white--text" 
                      class="subtitle-2 font-weight-bold"
                      @click="pilihAsih()">PILIH
                      </v-btn>
                  </v-card-actions>
                        
                </v-card>

              </v-col>
        <!-- Joni -->
              <v-col md="3">
                <v-card 
                color="white"
                min-height="200px"
                max-height="400px"
                width="auto"
                >
                  
                    <v-card-media justify-center >
                      <v-img :src="daftarpet.joni.assets.profil"></v-img>
                    </v-card-media>

                  <v-row justify="center" class="mt-4" no-gutters>
                    <v-col md="8">
                          <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold" v-text="daftarpet.joni.nama"></p>
                    </v-col>
                  </v-row>       
                  <v-row justify="center" no-gutters >
                    <v-col md="9">
                          <p class="subtitle-2 text-center grey--text  font-weight-regular">{{daftarpet.joni.deskripsi}}</p>
                    </v-col>
                  </v-row>                
                  
                  <v-card-actions>
                      <v-btn block
                      color="teal darken-4 white--text" 
                      class="subtitle-2 font-weight-bold"
                      @click="pilihJoni()">PILIH
                      </v-btn>
                  </v-card-actions>
                        
                </v-card>

              </v-col>
        <!-- BUDI  -->
              <v-col md="3">
                <v-card 
                color="white"
                min-height="200px"
                max-height="400px"
                >
                  <v-card-media justify-center >
                      <v-img :src="daftarpet.budi.assets.profil"></v-img>
                  </v-card-media>

                  <v-row justify="center" class="mt-4" no-gutters>
                    <v-col md="8">
                          <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold" v-text="daftarpet.budi.nama"></p>
                    </v-col>
                  </v-row>       
                  <v-row justify="center" no-gutters >
                    <v-col md="9">
                          <p class="subtitle-2 text-center grey--text  font-weight-regular">{{daftarpet.budi.deskripsi}}</p>
                    </v-col>
                  </v-row>                
                  
                  <v-card-actions>
                      <v-btn block
                      color="teal darken-4 white--text" 
                      class="subtitle-2 font-weight-bold"
                      @click="pilihBudi()">PILIH
                      </v-btn>
                  </v-card-actions>
                        
                </v-card>

              </v-col>
            </v-row>
            <!-- CARDS-PET END -->
           
        </v-container>

        <v-card>{{namaUN}} {{nimUN}}{{emailUN}}== {{userNow}}</v-card>


      </v-img>
      
    </div>

</template>

<script>

import axios from 'axios'


export default {
    data: () => ({
      
        SrcBgPilihPet: require('@/assets/bg/bgdaun.jpg'),
    
        daftarpet:[],
        daftarpetTerpilih:[],
        idPetTerpilih:0,

        userNow:[],
        namaUN:'',
        nimUN:'',
        emailUN:'',
        passwordUN:'',
        idUserUN:'',
        petUN:'',
        idUN:'',

        idUserNow:0,

    }),

    mounted:function() {
        axios.get('http://localhost:3000/daftar-pet')
        .then(response => {
          this.daftarpet = response.data;
          console.log('sukses get daftar pet'); 
        //   this.usersLength= Object.keys(this.usersMudeng).length;
        })       
        // axios.get('http://localhost:3000/userNow')
        // .then(response => {
        //   this.userNow = response.data;
        //   console.log('sukses get user now'); })           
    },

    methods: {

        updatePetUserNow(){
            axios.get('http://localhost:3000/userNow')
                .then(response => {
                this.userNow = response.data;
                console.log('sukses get user now'); })

            const namaUserNow = Object.values(this.userNow.nama)
            this.namaUN = namaUserNow
            const nimUserNow = Object.values(this.userNow.nim)
            this.nimUN = nimUserNow
            const emailUserNow = Object.values(this.userNow.email)
            this.emailUN = emailUserNow
            const passwordUserNow = Object.values(this.userNow.password)
            this.passwordUN = passwordUserNow
            const idUserUserNow = Object.values(this.userNow.idUser)
            this.idUserUN = idUserUserNow
            const petUserNow = Object.values(this.userNow.pet)
            this.petUN = petUserNow
            const idUserNow = Object.values(this.userNow.id)
            this.idUN = idUserNow

            // axios.put('http://localhost:3000/userNow' + '/' + this.idUserNow + '/',
            // {
            //     email: this.userNow.email,
            //     nama: this.userNow.nama,
            //     nim: this.userNow.nim,
            //     password: this.userNow.password,
            //     idUser: this.userNow.idUser,
            //     pet: this.daftarpetTerpilih.id
            // })
            // .then(res => {console.log(res)})
            // .catch((err) => {console.log(err); })
        },
        pilihAsih(){
       
            this.daftarpetTerpilih= this.daftarpet.asih;

            axios.put('http://localhost:3000/petTerpilih' + '/' + this.idPetTerpilih + '/',
            {
                assets: this.daftarpetTerpilih.assets,
                deskripsi: this.daftarpetTerpilih.deskripsi,
                nama: this.daftarpetTerpilih.nama,
                idPet: this.daftarpetTerpilih.id,
                id: this.idPetTerpilih
            })
            .then(res => {console.log(res)})
            .catch((err) => {console.log(err); })

            this.updatePetUserNow();
        
        },
        pilihJoni(){
          
            this.daftarpetTerpilih= this.daftarpet.joni;

            axios.put('http://localhost:3000/petTerpilih' + '/' + this.idPetTerpilih + '/',
            {
                assets: this.daftarpetTerpilih.assets,
                deskripsi: this.daftarpetTerpilih.deskripsi,
                nama: this.daftarpetTerpilih.nama,
                idPet: this.daftarpetTerpilih.id,
                id: this.idPetTerpilih
            })
            .then(res => {console.log(res)})
            .catch((err) => {console.log(err); })

            this.updatePetUserNow();

        },
        pilihBudi(){
            this.daftarpetTerpilih= this.daftarpet.budi;

            axios.put('http://localhost:3000/petTerpilih' + '/' + this.idPetTerpilih + '/',
            {
                assets: this.daftarpetTerpilih.assets,
                deskripsi: this.daftarpetTerpilih.deskripsi,
                nama: this.daftarpetTerpilih.nama,
                idPet: this.daftarpetTerpilih.id,
                id: this.idPetTerpilih
            })
            .then(res => {console.log(res)})
            .catch((err) => {console.log(err); })

            // this.updatePetUserNow();

        }
    }
  }
</script>

<style >

</style>