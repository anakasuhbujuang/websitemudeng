<template>
    <div>
        <v-row justify="center" no-gutters="" class="pt-5">
            <v-col md="11">
                <p class="title red--text text--accent-1 font-weight-medium">Keamanan</p>
                <v-divider ></v-divider>
            </v-col>
        </v-row>
       
        <v-row justify="center" class="py-8">
            <v-col md="8">
                <v-form >
                        
                        
                        <v-text-field            
                            v-model="Password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'Password'"
                           
                            name="input-10-1"
                            label="Kata Sandi Lama"
                            hint="Minimal 8 karakter"
                            outlined
                            color="teal darken-4"
                            required
                            counter
                            @click:append="show1 = !show1"
                            dense>
                        </v-text-field>
                        
                        <v-text-field            
                            v-model="KataSandiBaru"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show2 ? 'text' : 'KataSandiBaru'"
                            :rules="[ rulespasswordnew.required, rulespasswordnew.min]"
                            name="input-10-2"
                            label="Kata Sandi Baru"
                            hint="Minimal 8 karakter"
                            outlined
                            color="teal darken-4"
                            required
                            counter
                            @click:append="show1 = !show1"
                            dense>
                        </v-text-field>
                        
                        <v-text-field
                        v-model="Konfirmasi"
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rulespasswordnew.required, rulesconfirm.passmatch]"
                        :type="show3 ? 'text' : 'Konfirmasi'"
                        name="input-10-3"
                        label="Kata Sandi Baru"
                        hint="Minimal 8 karakter"
                        outlined
                        color="teal darken-4"
                        required
                        counter
                        @click:append="show1 = !show1"
                        dense></v-text-field>
                        
                       
                       <br>
                        <v-btn 
                            :enabled="!valid"
                            color="teal darken-4 white--text"
                            class=" mr-4 subtitle-2 font-weight-bold"
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
   
  name: 'keamanan',
   components:{
  
    },

   data () {
      return {

          // //*******Password Lama*****
        show1: false,
        Password: 'Password',
        
        // //*******Password Baru*****
        show2: false,
        KataSandiBaru: '',
        rulespasswordnew: {
        min: v => v.length >= 8 || 'Minimal 8 Karakter',
        },

        // //*******Password Konfirmasi*****
        show3: false,
        Konfirmasi: '',
        rulesconfirm: {
         passmatch: () =>  ('Kata sandi yang anda masukkan tidak sesuai'),
          },

        //Ikon
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