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
                     <v-form ref="form" @submit.prevent="daftar" v-model="isValidDaftar" lazy-validation>
   
                        <v-text-field
                            v-model="daftar.nama"
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
                            v-model="daftar.nim"
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
                            v-model="daftar.email"
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
                            v-model="daftar.password"
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
                    </v-form>
                    
                    <v-btn 
                      :disabled="!isValidDaftar"
                      color="teal darken-4 white--text"
                      class="mr-4 subtitle-2 font-weight-bold"
                      block
                      @click="Daftar()"
                      
                      > DAFTAR </v-btn>
                    
                      <v-row>
                        <v-col>
                          <p  class="caption text-center grey--text ">Sudah punya akun? 
                      <a href="/" class="teal--text text--darken-4 font-weight-bold" >Masuk di sini.</a></p>
                        </v-col>
                      </v-row>
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

    <!-- ******* SUDAH TERDAFTAR****** -->
                       
    <v-dialog
        v-model="daftarFailed"
        max-width="400px">

        <v-card  class=""
        style="overflow-x:hidden;">
        <v-row class="">
            <v-col>
                <p class="pt-2 headline text-center grey--text text--darken-3 font-weight-bold" 
                style="line-height:0,2;">Mohon Maaf<br> 
                <span class="grey--text subtitle-2 font-weight-regular">Email atau NIM sudah terdardar.</span><br>
                <a><u  class=" subtitle-2 teal--text text--darken-4 font-weight-bold" 
                @click.stop="daftarFailed = false;dialogLupaKataSandi = true">Lupa kata sandi ? </u></a></p>
            </v-col>
        </v-row>
                    

        <v-row class="px-4 pb-4" no-gutters>
            <v-col class="pr-4">
            
                <v-btn 
                    color="teal darken-4 white--text"
                    class="subtitle-2 font-weight-bold "
                    block
                    router to="/"
                    > MASUK
                </v-btn>
            
            </v-col>
            <v-col >
            
                <v-btn 
                    color="teal darken-2 white--text"
                    class=" subtitle-2 font-weight-bold "
                    block
                    @click="closeDialogFailedDaftar()"
                    > DAFTAR
                </v-btn>
            
            </v-col>
        </v-row>
        
        </v-card>
    </v-dialog>

    <!-- *******END SUDAH TERDAFTAR***** -->
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
import axios from 'axios'

export default {
    data: () => ({
     
        SrcImgDaftar: require('@/assets/picwelcomepage.png'),
        SrcBgDafar: require('@/assets/bg/bgmasuk.jpg'),


        isValidDaftar: true, 

        daftar: {
            email:'',
            nama:'',
            nim:'',
            password:'',
            // id:0,
            // pet:'budi'
        },

        idRandomUser:null,
       
        usersMudeng:[],

        usersLength:null,

        userNow:0,

        daftarFailed:false,
        dialogLupaKataSandi:false,
       

        //*******Nama Pengguna*******
        // NamaPengguna:'',
        rulesnama: [v => !!v || 'Wajib diisi',
                    v => (v && v.length <= 20) || 'Maximal 20 karakter',
                    v => !!v || 'Wajib diisi',],

        //*******NIM*******
        // nim:'',
        rulesnim: [v => !!v || 'Wajib diisi',],
        //*******EMAIL*******
        // Email:'',
        rulesemail: [
          v => !!v || 'Wajib diisi',
          v => /.+@.+/.test(v) || 'E-mail tidak valid.' ],

        // //*******Password*****
        show1: false,
        // Password: '',
        rulespassword: {
        min: v => v.length >= 8 || 'Minimal 8 Karakter',
        },

         //*******EMAIL*******
        EmailLupaKataSandi:'',
    }),
 
    methods: {
        validate () {
            this.$refs.form.validate()
        },

        async postAkun(){
        
			// this.idRandomUser = this.usersLength -1;
			// this.daftar.id = this.usersLength;

			try {
				await axios.post(`${process.env.VUE_APP_API_HOST}/signup`, this.daftar)
			} catch(error) {
				console.error(error)
				return
			}
		},

		updateUserNow(){

			this.daftar.id = this.usersLength;

			axios.put('http://localhost:3000/userNow' + '/' + this.userNow + '/',
			{
				email: this.daftar.email,
				nama: this.daftar.nama,
				nim: this.daftar.nim,
				password: this.daftar.password,
				pet: this.daftar.pet,
				idUser: this.daftar.id,
				id: this.userNow
			})
			.then(res => {console.log(res)})
			.catch((err) => {console.log(err); })
        },

        async Daftar() { 

            if(this.daftar.nama == '' || this.daftar.password == '' || this.daftar.email=='' || this.daftar.nim=='' )
            {
                this.validate();
            } else{
                // for(var i=0; i<this.usersMudeng.length;i++){
                //      if(this.daftar.nim == this.usersMudeng[i].nim || this.daftar.email == this.usersMudeng[i].email ){
                //          this.daftarFailed = true;
                //          console.log('nim sama');
                //          return 0;
                //     }
                // }
                // this.daftar.id = this.usersLength - 1;

                try {
					await this.postAkun();
				} catch(error) {
					return console.error(error)
				}
                //this.updateUserNow();
                this.$router.push('/PilihPet'); //biar ga reload semua
            }
        },  

        SendEmail(){
            console.log(this.EmailLupaKataSandi) ;
            this.dialogLupaKataSandi=false;
        },
        closeDialogFailedDaftar(){
            this.daftar.nama='';
            this.daftar.nim='',
            this.daftar.email='';
            this.daftar.password='';
            this.daftarFailed=false;
        }
    }
}
</script>

<style>




</style>
