<template>
    <div>
        <v-row justify="center" no-gutters="" class="pt-5">
            <v-col md="11">
                <p class="title red--text text--accent-1 font-weight-medium">Profil</p>
                <v-divider ></v-divider>
            </v-col>
        </v-row>
        <v-row justify="center" class="pt-5">
            <v-col md="11" class="text-center">
                <v-avatar size="150">
                    <v-img :src="srcProfpicUser"></v-img>
                </v-avatar>
                <br>
                <br>
                <v-btn small color="teal darken-3 white--text" class="subtitle-2 font-weight-bold" dark>UNGGAH FOTO
                    <v-icon  color="white" right>{{IconUnggahFoto}}</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center" class="pt-3 pb-8">
            <v-col md="8">
                <v-form >
                        
                        <v-text-field
                            v-model="NamaPengguna"
                            :counter="20"
                            :rules="rulesnama"
                            outlined
                            label="Nama Pengguna"
                            required
                            color="teal darken-4"
                            dense
                            class="caption"
                            clearable>
                            
                        </v-text-field>
                        <br>
                        <v-text-field
                            v-model="NIM"
                            
                            outlined
                            label="No. Induk Mahasiswa"
                            required
                            color="teal darken-4"
                            hint="12/123456/TK/12345"
                            persistent-hint
                            dense
                            clearable>
                            
                        </v-text-field>
                        
                        <br>
                        <v-text-field
                            v-model="Email"
                           
                            outlined
                            label="Email"
                            required
                            color="teal darken-4"
                            hint="contoh@mail.ugm.ac.id"
                            persistent-hint
                            dense
                            clearable>
                            
                        </v-text-field>
                       <br>
                        <v-btn 
                            :enabled="!valid"
                            color="teal darken-4 white--text"
                            class=" mr-4 subtitle-2 font-weight-bold"
                            block
                            @click="simpan()"
                            >SIMPAN
                        </v-btn>
                        
                        
                        
                    </v-form>
            </v-col>
        </v-row>

        <!-- DIALOG SUKSES -->
         <v-dialog v-model="dialogUpdateProfilSukses" persistent max-width="300px" >
          <v-card 
          color="white"
          width="300px"
          height="350px"
          class=""
          style="overflow-x:hidden;">

            <v-card-media justify-center >
                <v-img :src="srcDialogSukses"></v-img>
            </v-card-media>

            <v-row justify="center" class="mt-4 " no-gutters>
              <v-col md="8">
                    <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">Sukses</p>
              </v-col>
            </v-row>   

            <v-row justify="center" no-gutters class="mb-4">
              <v-col md="11">
                <p class="body-2 text-center grey--text  font-weight-regular">Perubahan berhasil diperbarui.</p>
              </v-col>
            </v-row>     

            <v-row no-gutters class="">
              <v-col class="px-2 pb-2 pa-1">
                <v-btn block color="teal darken-4 white--text" 
                class="subtitle-2 font-weight-bold"
                @click.stop="dialogUpdateProfilSukses=false;">OK</v-btn>
              </v-col>

            </v-row>
                
          </v-card>
        </v-dialog>
        <!-- DIALOG SUSKES -->
    </div>
</template>

<script>
import { mdiCamera } from '@mdi/js';
 

export default {
   
  name: 'editprofil',
   components:{
  
    },

   data () {
      return {

        srcProfpicUser: require('@/assets/profpic/user1.svg'),
        
        srcDialogSukses: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihreward200.png?alt=media&token=d4dcb34c-4257-4801-9f26-3fd6abbc4357",
        dialogUpdateProfilSukses: false,


          //*******Nama Pengguna*******
        NamaPengguna:'Jihaan Nadhiya',
        rulesnama: [
                    v => ( v.length <= 20) || 'Maximal 20 karakter',],

        //*******NIM*******
        NIM:'16/395400/TK/44692',
        //rulesnim: [v => !!v || 'Wajib diisi',],
        //*******EMAIL*******
        Email:'jihaan@mail.ugm.ac.id',
        //rulesemail: [v => !!v || 'Wajib diisi',],

          
        IconUnggahFoto : mdiCamera,

        
        
      }
    },
    methods:{
        simpan(){
            this.dialogUpdateProfilSukses = true;
        }
    }
    // methods: {
    //       validate () {
    //         if (this.$refs.form.validate()) {
    //           this.snackbar = true
    //         }
    //       },
    //       reset () {
    //         this.$refs.form.reset()
    //       },
    //       resetValidation () {
    //         this.$refs.form.resetValidation()
    //       },
    //         submit() { 
    //      console.log(this.NamaPengguna, this.Password) },    
    //     },
}
</script>