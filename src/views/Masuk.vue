<template style="padding:0; margin:0;">
    <v-img  :src="SrcBgMasuk" contain position="top" max-width="2560px" max-height="1440px" >

      <v-row justify="center" class="pa-5 my-5">
       
        <v-col cols="5" class="mt-10">

          <v-row class="ma-8">
            <v-col></v-col>
          </v-row>

          <v-row  justify="start" class="pt-12 mt-12 ml-10 pl-12">
            <v-col cols="10" >
                <p class="display-3 text-start teal--text text--darken-4 font-weight-black" style="font-size:150%; line-height: 0.4;" >MUDENG<br><span class="subtitle-1 text-start teal--text text--darken-4 font-weight-medium">Mari belajar dan bermain bersama Mudeng.</span></p>
            </v-col>
          </v-row>

          <v-row justify="start" class="mt-5 ml-10 pl-12">
            <v-col cols="9">
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
                            class="caption">
                            
                        </v-text-field>
                        <br>
                        <v-text-field            
                            v-model="Password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'Password'"
                            :rules="[ rulespassword.required, rulespassword.min]"
                            name="input-10-1"
                            label="Kata Sandi"
                            hint="Minimal 8 karakter"
                            outlined
                            color="teal darken-4"
                            required
                            counter
                            @click:append="show1 = !show1"
                            dense>
                        </v-text-field>
                         
                         <!-- *******LUPA KATA SANDI****** -->
                        <p class="text-end"><a><u  class=" caption teal--text text--darken-4 font-weight-bold" @click.stop="dialog = true">Lupa kata sandi</u></a></p>
                       
                        <v-dialog
                          v-model="dialog"
                          max-width="500px" 
                          
                        >
                          <v-card  class="py-4"
                          style="overflow-x:hidden;">
                            <v-row class="">
                              <v-col>
                                <p class="headline text-center teal--text text--darken-3 font-weight-bold" style="line-height:0,2;">Lupa Kata Sandi?<br> <span class="grey--text subtitle-2 font-weight-regular">Masukkan email yang telah terdaftar.</span></p>
                              </v-col>
                            </v-row>
                    
                            <v-row justify="center">
                              <v-col cols="10">
                                  <v-text-field
                                  v-model="Email"
                                  outlined
                                  label="Email"
                                  required
                                  color="teal darken-4"
                                  hint="contoh@mail.ugm.ac.id"
                                  persistent-hint
                                  dense>
                                  </v-text-field>
                                  <br>
                                    <v-btn 
                                        color="teal darken-4 white--text"
                                        class=" mr-4"
                                        block
                                        > SUBMIT
                                    </v-btn>
                                
                              </v-col>
                            </v-row>
                            
                          </v-card>
                        </v-dialog>

                        <!-- *******END LUPA KATA SANDI****** -->

                        <v-btn 
                            :enabled="!valid"
                            color="teal darken-4 white--text"
                            class=" mr-4"
                            block
                            @click="validate"
                            router to="/Dashboard" > Masuk
                        </v-btn>
                        
                        <v-row>
                          <v-col>
                            <p  class="caption text-center grey--text ">Belum punya akun? 
                        <a href="/Daftar" class="teal--text text--darken-4 font-weight-bold" > Daftar di sini.</a></p>
                          </v-col>
                        </v-row>
                        
                    </v-form>
            </v-col>
          </v-row>           

        </v-col>
        
        <v-col cols="7">

            <v-row  justify="center" class="pr-8  pt-8 pl-4">
              <v-col cols="10">
                  <v-img :src="SrcImgMasuk"></v-img>
              </v-col>
            </v-row>
  
        </v-col>
      
      </v-row>

    </v-img>

 
  
</template>

<script>
export default {
    data: () => ({

          dialog: false,
     
          SrcImgMasuk: require('@/assets/Masuk.svg'),
          SrcBgMasuk: require('@/assets/bg/bgmasuk4kre.jpg'),

          valid: true, 

        //*******Nama Pengguna*******
        NamaPengguna:'',
        rulesnama: [v => !!v || 'Wajib diisi',
                    v => (v && v.length <= 20) || 'Maximal 20 karakter',],

        // //*******Password*****
        show1: false,
        Password: '',
        rulespassword: {
        required: value => !!value || 'Wajib diisi.',
        min: v => v.length >= 8 || 'Minimal 8 Karakter',

        //*******EMAIL*******
        Email:'',
        
          
        },

          
    }),
     methods: {
          validate () {
            if (this.$refs.form.validate()) {
              this.snackbar = true
            }
          },
          reset () {
            this.$refs.form.reset()
          },
          resetValidation () {
            this.$refs.form.resetValidation()
          },
            submit() { 
         console.log(this.NamaPengguna, this.Password) },    
        },

     
  }
</script>

<style>
.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
</style>
