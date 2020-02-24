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
                    <v-img src="@/assets/pet/asih200.png"></v-img>
                </v-avatar>
                <br>
                <br>
                <v-btn small color="teal darken-3 " dark>UNGGAH FOTO
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
                            class=" mr-4"
                            block
                            
                          
                            >SIMPAN
                            
                        </v-btn>
                        
                        
                        
                    </v-form>
            </v-col>
        </v-row>
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