<template >
  <div style="background-color:#FAFAFA;" 
  class="hidden-sm-and-down hidden-xl-only">
    <v-img  :src="SrcBgMasuk" contain position="top" max-width="1904px" max-height="1071px" >

      <v-row justify="center" class="pa-5 my-5">
       
        <v-col md="5" class="mt-10" >

         

          <v-row  justify="start" class="pt-5 mt-12 ml-10 pl-12">
            <v-col md="10"  >
                <p class="display-3 text-start teal--text text--darken-4 font-weight-black" style="font-size:150%; line-height: 0.4;" >MUDENG<br><span class="subtitle-1 text-start teal--text text--darken-4 font-weight-medium">Mari belajar dan bermain bersama Mudeng.</span></p>
            </v-col>
          </v-row>

          <v-row justify="start" class="mt-2 ml-10 pl-12">
            <v-col md="9" >
                     <v-form ref="form" v-model="isValidFormMasuk" lazy-validation>
                        
                        <v-text-field
                            v-model="NamaPengguna"
                            :counter="20"
                            required
                            :rules="rulesnama"
                            outlined
                            label="Nama Pengguna"
                            color="teal darken-4"
                            dense
                            class="caption">
                            
                        </v-text-field>
                        
                        <v-text-field            
                            v-model="Password"
                            required
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'Password'"
                            :rules="[ rulespassword.required, rulespassword.min]"
                            name="input-10-1"
                            label="Kata Sandi"
                            hint="Minimal 8 karakter"
                            outlined
                            color="teal darken-4"
                            counter
                            @click:append="show1 = !show1"
                            dense>
                        </v-text-field>
                        <p class="text-end"><a><u  class=" caption teal--text text--darken-4 font-weight-bold" @click.stop="dialogLupaKataSandi = true">Lupa kata sandi</u></a></p>

                      </v-form>

                        <v-btn 
                            :disabled="!isValidFormMasuk"
                            color="teal darken-4 white--text"
                            class=" mr-4 subtitle-2 font-weight-bold"
                            block
                            @click="validate"
                           
                            > Masuk
                        </v-btn>
                          
                        <v-row>
                          <v-col>
                            <p  class="caption text-center grey--text ">Belum punya akun? 
                              <a href="/Daftar" class="teal--text text--darken-4 font-weight-bold" > Daftar di sini.</a></p>
                          </v-col>
                        </v-row>
                    
                      </v-col>
                    </v-row>           

                  </v-col>
                  
                  <v-col md="7" >

                      <v-row  justify="center" class="pr-8 pl-4">
                        <v-col md="10" >
                            <v-img :src="SrcImgMasuk"></v-img>
                        </v-col>
                      </v-row>
            
                  </v-col>
                
                </v-row>

              </v-img>
                        <!-- *******LUPA KATA SANDI****** -->
                       
                        <v-dialog
                          v-model="dialogLupaKataSandi"
                          max-width="500px">

                          <v-card  class="py-4"
                          style="overflow-x:hidden;">
                            <v-row class="">
                              <v-col>
                                <p class="headline text-center teal--text text--darken-3 font-weight-bold" 
                                style="line-height:0,2;">Lupa Kata Sandi?<br> 
                                <span class="grey--text subtitle-2 font-weight-regular">Masukkan email yang telah terdaftar.</span></p>
                              </v-col>
                            </v-row>
                    
                            <v-row justify="center">
                              <v-col md="10" >
                                <v-form v-model="isValidLupaKataSandi">
                                  
                                  <v-text-field
                                  v-model="EmailLupaKataSandi"
                                  outlined
                                  label="Email"
                                  required
                                  :rules="rulesemail"
                                  color="teal darken-4"
                                  hint="contoh@mail.ugm.ac.id"
                                  persistent-hint
                                  dense>
                                  </v-text-field>
                                </v-form>
                                  
                                  <br>
                                    <v-btn 
                                        :disabled="!isValidLupaKataSandi"
                                        color="teal darken-4 white--text"
                                        class=" mr-4 subtitle-2 font-weight-bold "
                                        block
                                        @Click="SendEmail()"
                                        > Kirim
                                    </v-btn>
                                
                              </v-col>
                            </v-row>
                            
                          </v-card>
                        </v-dialog>

                        <!-- *******END LUPA KATA SANDI****** -->
 
  </div>
</template>

<script>
export default {
    data: () => ({
          snackbar: false,
          dialogLupaKataSandi: false,
     
          SrcImgMasuk: require('@/assets/picwelcomepage.png'),
          SrcBgMasuk: require('@/assets/bg/bgmasuk.jpg'),

          isValidFormMasuk: true, 
          isValidLupaKataSandi: true,

        //*******Nama Pengguna*******
        NamaPengguna:'',
        rulesnama: [v => !!v || 'Wajib diisi',
                    v => (v && v.length <= 20) || 'Maximal 20 karakter',],

        // //*******Password*****
        show1: false,
        Password: '',
        rulespassword: {
              required: value => !!value || 'Wajib diisi.',
              min: v => v.length >= 8 || 'Minimal 8 Karakter',},

        //*******EMAIL*******
        EmailLupaKataSandi:'',
        rulesemail: [ 
            v => !!v || 'Wajib diisi.', 
            v => /.+@.+/.test(v) || 'E-mail tidak valid.' 
        ]
        
          
        

          
    }),
    
     methods: {

      Masuk() { 
        console.log(this.NamaPengguna, this.Password) 
      },    
      SendEmail(){
        console.log(this.EmailLupaKataSandi) 
      },
      validate () {
      if(this.$refs.form.validate()){
        console.log(this.NamaPengguna, this.Password)
        }
      },
          // validate () {
          //   if (this.$refs.form.validate()) {
          //     this.snackbar = true
          //   }
          // },
          // reset () {
          //   this.$refs.form.reset()
          // },
          // resetValidation () {
          //   this.$refs.form.resetValidation()
          // },
          
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
