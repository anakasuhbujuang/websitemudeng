<template>

  <div style="background-color:#FAFAFA;" 
  class="hidden-sm-and-down hidden-xl-only">

    <v-img :src="SrcBgDafar" contain position="top" max-width="1904px" max-height="1071px" >

      <v-row justify="center" class="pa-5 my-5">
        
        <v-col md="5" class="mt-10">

          
          
          <v-row  justify="start" class="pt-5 mt-12 ml-10 pl-12">
            <v-col md="10" >
                <p class="display-3 text-start teal--text text--darken-4 font-weight-black" style="font-size:150%; line-height: 0.4;" >MUDENG<br><span class="subtitle-1 text-start teal--text text--darken-4 font-weight-medium">Mari belajar dan bermain bersama Mudeng.</span></p>
            </v-col>
          </v-row>

          <v-row justify="start" class="mt-2 ml-10 pl-12">
            <v-col md="9">
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
                            class="caption mb-2">
                            
                        </v-text-field>
                        
                        <v-text-field
                            v-model="NIM"
                            :rules="rulesnim"
                            outlined
                            label="No. Induk Mahasiswa"
                            required
                            color="teal darken-4"
                            hint="12/123456/TK/12345"
                            persistent-hint
                            dense
                            class="mb-2">
                            
                        </v-text-field>
                        
                        <v-text-field
                            v-model="Email"
                            :rules="rulesemail"
                            outlined
                            label="Email"
                            required
                            color="teal darken-4"
                            hint="contoh@mail.ugm.ac.id"
                            persistent-hint
                            dense
                            class="mb-2">
                            
                        </v-text-field>
                        
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
                            dense
                            class="mb-2">
                        </v-text-field>

                        <v-btn 
                            :enabled="!valid"
                            color="teal darken-4 white--text"
                            class="mr-4"
                            block
                            @click="validate"
                            router to="/PilihPet"
                            > DAFTAR
                            
                        </v-btn>
                        
                        <v-row>
                          <v-col>
                            <p  class="caption text-center grey--text ">Sudah punya akun? 
                        <a href="/" class="teal--text text--darken-4 font-weight-bold" >Masuk di sini.</a></p>
                          </v-col>
                        </v-row>
                        
                    </v-form>
            </v-col>
          </v-row>           

        </v-col>

        <v-col md="7">

            <v-row  justify="center" class="pr-8 pl-4">
              <v-col md="10" >
                  <v-img :src="SrcImgDaftar"></v-img>
              </v-col>
            </v-row>
  
        </v-col>
      
      </v-row>


    </v-img>


  </div>

</template>

<script>
export default {
    data: () => ({
     
          SrcImgDaftar: require('@/assets/picwelcomepage.png'),
          SrcBgDafar: require('@/assets/bg/bgmasuk.jpg'),


          valid: true, 

        //*******Nama Pengguna*******
        NamaPengguna:'',
        rulesnama: [v => !!v || 'Wajib diisi',
                    v => (v && v.length <= 20) || 'Maximal 20 karakter',],

        //*******NIM*******
        NIM:'',
        rulesnim: [v => !!v || 'Wajib diisi',],
        //*******EMAIL*******
        Email:'',
        rulesemail: [v => !!v || 'Wajib diisi',],

        // //*******Password*****
        show1: false,
        Password: 'Password',
        rulespassword: {
        min: v => v.length >= 8 || 'Minimal 8 Karakter',
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
            console.log(this.NamaPengguna, this.NIM, this.Email, this.Password) },    
          },

     
  }
</script>

<style>




</style>
