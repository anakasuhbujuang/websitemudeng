<template>
 <div style="background-color:#FAFAFA;" 
  class="hidden-sm-and-down hidden-xl-only">
    <v-img  :src="SrcBgMasuk" contain position="top" max-width="1904px" max-height="1071px" >

      <v-row justify="center" class="pa-5 my-5">       
        <v-col md="5" class="mt-10" >
          
          <v-row  justify="start" class="pt-5 mt-12 ml-10 pl-12">
            <v-col md="10"  >
              <p class="display-3 text-start teal--text text--darken-4 font-weight-black" style="font-size:150%; line-height: 0.4;" >MUDENG
              <br><span class="subtitle-1 text-start teal--text text--darken-4 font-weight-medium">Mari belajar dan bermain bersama Mudeng.</span></p>
            </v-col>
          </v-row>

          <v-row justify="start" class="mt-2 ml-10 pl-12">
            <v-col md="9" >
              <v-form ref="form" v-model="isValidFormMasuk" lazy-validation>
                <v-text-field
                v-model="masuk.email"
                :rules="rulesemail"
                label="Email"
                hint="contoh@mail.ugm.ac.id"
                persistent-hint
                required
                outlined
                dense
                color="teal darken-4"
                class="caption">   
                </v-text-field>
                
                <v-text-field            
                v-model="masuk.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'Password'"
                :rules="[ rulespassword.required, rulespassword.min]"
                name="input-10-1"
                label="Kata Sandi"
                hint="Minimal 8 karakter"
                required
                counter
                outlined
                dense
                color="teal darken-4"
                @click:append="show1 = !show1" >
                </v-text-field>
                <p class="text-end"><a>
                <u  class=" caption teal--text text--darken-4 font-weight-bold" @click.stop="dialogLupaKataSandi = true">Lupa kata sandi</u></a></p>
              </v-form>

              <v-btn 
              :disabled="!isValidFormMasuk"
              color="teal darken-4 white--text"
              class=" mr-4 subtitle-2 font-weight-bold"
              block @click="Masuk()">Masuk
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
    
  <v-dialog v-model="dialogLupaKataSandi" max-width="500px">

    <v-card  class="py-4" style="overflow-x:hidden;">
      <v-row class="">
        <v-col>
          <p class="headline text-center teal--text text--darken-3 font-weight-bold" style="line-height:0,2;">Lupa Kata Sandi?<br> 
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
          block @Click="SendEmail()"> Kirim
          </v-btn>    
        </v-col>
      </v-row>
        
    </v-card>
  </v-dialog>
<!-- *******END LUPA KATA SANDI****** -->
                       
<!-- ******* Failed Masuk****** -->
                       
  <v-dialog v-model="masukFailed" max-width="400px">
    <v-card style="overflow-x:hidden;">
      <v-row>
        <v-col>
          <p class="pt-2 headline text-center grey--text text--darken-3 font-weight-bold" style="line-height:0,2;">Mohon Maaf<br> 
          <span class="grey--text subtitle-2 font-weight-regular">Nama pengguna belum terdaftar.</span><br>
                <!-- <a><u  class=" subtitle-2 teal--text text--darken-4 font-weight-bold" 
                @click.stop="masukFailed = false;dialogLupaKataSandi = true">Lupa kata sandi ? </u></a> -->
          </p>
        </v-col>
      </v-row>
      <v-row class="px-4 pb-4" no-gutters>
        <v-col class="pr-4">
          <v-btn 
          color="teal darken-4 white--text"
          class="subtitle-2 font-weight-bold "
          block @click="closeDialogFailedMasuk()"> MASUK
          </v-btn>
        </v-col>

        <v-col >
          <v-btn 
          color="teal darken-2 white--text"
          class=" subtitle-2 font-weight-bold "
          block @click="btnDaftarFailedMasuk()"> DAFTAR
        </v-btn>
            
            </v-col>
        </v-row>
        
        </v-card>
    </v-dialog>

    <!-- *******END Failed Masuk***** -->
 
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data: () => ({
    //dialog lupa kata sandi 
    dialogLupaKataSandi: false,
    isValidLupaKataSandi: true,

    //image
    SrcImgMasuk: require('@/assets/picwelcomepage.png'),
    SrcBgMasuk: require('@/assets/bg/bgmasuk.jpg'),

    //form masuk
    isValidFormMasuk: true, 
    masuk:{
      email:'',
      password:'',
    },

    //axios
    usersMudeng:[], //get data usersMasuk n sort cari akun terdaftar
    toUserNow:[], //action btn Masuk (put to data userNow)
    idUsersMudeng:null, //get id akun yg masuk dr data usersMudeng[i]
    
    //dialog akun/pass salah / belum terdaftar
    masukFailed:false,

    // //*******Password*****
    show1: false,
    // Password: '',
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
    validate () {
      this.$refs.form.validate()
    },
    
    async Masuk() { 
      if(this.masuk.nama == '' || this.masuk.password == '' ){
        return this.validate();
      } 
      try {
        await axios.post(`${process.env.VUE_APP_API_HOST}/signin`, this.masuk);
      } catch(error) {
        console.error(error)
        this.masukFailed = true
        return
      } 

    await this.checkPet()

    // for(var i=0; i<this.usersMudeng.length;i++){
    //    if(this.masuk.nama == this.usersMudeng[i].nama && this.masuk.password == this.usersMudeng[i].password ){

    //         this.idUsersMudeng = this.usersMudeng[i].id; //buat updated isi UserNow
    //         this.updateUserNow();
    //         document.location.href = '/Dashboard';
    //         console.log('sukses');
    //         return 0;
    //     }else if (this.masuk.nama == this.usersMudeng[i].nama && this.masuk.password !== this.usersMudeng[i].password ){
    //         this.dialogLupaKataSandi=true;
    //         console.log('sandi salah');
    //         return 0;
    //     }
    //  }
    },
    
    async checkPet() {
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)
      } catch(error) {
        return console.log(error)
      }

    // TODO: cek hasil test mai, kalo udah redirect langsung ke home, 
      const userPet = response.data
      if(!userPet) {
        return this.$router.push('/PilihPet')
      }
       return this.$router.push('/PraTestMai')
    }, 


    SendEmail(){
      console.log(this.EmailLupaKataSandi) ;
      this.dialogLupaKataSandi=false;
    },
   
    btnDaftarFailedMasuk(){
      this.$router.push('/Daftar');
    },

    closeDialogFailedMasuk(){
        this.masuk.nama='';
        this.masuk.password='';
        this.masukFailed=false;
    },     
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
