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
                            block @click="simpan()"
                            >SIMPAN
                            
                        </v-btn>
                        
                        
                        
                    </v-form>
            </v-col>
        </v-row>

         <!-- DIALOG SUKSES -->
         <v-dialog v-model="dialogUpdateKeamananSukses" persistent max-width="300px" >
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
                @click.stop="dialogUpdateKeamananSukses=false;">OK</v-btn>
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
   
  name: 'keamanan',
   components:{
  
    },

   data () {
      return {
        
        srcDialogSukses:"https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihreward200.png?alt=media&token=d4dcb34c-4257-4801-9f26-3fd6abbc4357",
        dialogUpdateKeamananSukses: false,

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

      methods:{
        simpan(){
            this.dialogUpdateKeamananSukses = true;
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