<template>
  <div>
    <v-navigation-drawer expand-on-hover
    permanent dark app
    color="teal darken-4">

      <template v-slot:prepend >
        <div class="mt-10">
          <v-list two-line> 

            <v-list-item>
              
              <v-list-item-avatar size="30">
                <v-img :src="srcProfpicUser"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-row justify-center no-gutters>
                
                    <v-col >
                      <v-list-item-title class="subtitle-2 font-weight-medium">{{Nama}}</v-list-item-title>
                    </v-col>
                
                </v-row>
                <v-row align="top" justify="start" no-gutters>
                    
                    <v-col md="2" class="mr-2" >
                      <v-list-item-title class="caption font-weight-regular">Lv.{{Level}}</v-list-item-title>
                    </v-col>
                    <v-col md="8" class="pt-2 pb-3">
                      <v-progress-linear
                      v-model="ValueLevel"
                      color="teal lighten-2"
                      rounded
                      height="6px"
                      ></v-progress-linear>  
                    </v-col>

                </v-row>

              </v-list-item-content>
              
            </v-list-item>


          </v-list>
        </div>
      </template>
            
      <v-divider></v-divider>

      <v-list nav dense>
      
        <div class="my-4">
          <v-list-item router to="/Dashboard" link>
          <v-list-item-icon>
              <v-icon  color="white" dark  >{{ IconDashboard }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="subtitle-1">Dashboard</v-list-item-title>
          </v-list-item>
        </div>

        <div class="mb-4">
          <v-list-item router to="/ProsesBelajar" link>
            <v-list-item-icon>
              <v-icon  color="white" dark  >{{ IconBelajar }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="subtitle-1">Belajar</v-list-item-title>
          </v-list-item>
        </div>

        <div class="mb-4">
          <v-list-item router to="/Informasi" link>
            <v-list-item-icon>
              <v-icon  color="white" dark  >{{ IconInfo }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="subtitle-1">Informasi</v-list-item-title>
          </v-list-item>
        </div>

        <div class="mb-4">    
          <v-list-item router to="/Pengaturan" link>
            <v-list-item-icon>
              <v-icon  color="white" dark  >{{ IconPengaturan }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="subtitle-1">Pengaturan</v-list-item-title>
          </v-list-item>
        </div>

        <div class="mb-4">
          <v-list-item link  @click.stop="dialogLogout = true">
            <v-list-item-icon>
              <v-icon  color="white" dark  >{{ IconKeluar }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="subtitle-1">Keluar</v-list-item-title>
          </v-list-item>
        </div>

      </v-list>
    </v-navigation-drawer>

    <!-- DIALOG LOGOUT  -->
        <v-dialog v-model="dialogLogout" persistent max-width="300px" >
          <v-card 
          color="white"
          width="300px"
          height="350px"
          class=""
          style="overflow-x:hidden;">

            <v-card-media justify-center >
                <v-img :src="SrcKeluar"></v-img>
            </v-card-media>

            <v-row justify="center" class="mt-8 mb-4" no-gutters>
              <v-col md="8">
                    <p class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">Apakah kamu yakin<br>ingin keluar ?</p>
              </v-col>
            </v-row>       
            
            <v-row no-gutters class="px-2">
              <v-col class="pr-1">
                <v-btn block color="teal darken-4 white--text" 
                class="subtitle-2 font-weight-bold"
                router to="/"
                >YA
                </v-btn>
              </v-col>
              <v-col>
                <v-btn block color="teal darken-2 white--text" 
                class="subtitle-2 font-weight-bold"
                router to="/Dashboard" >TIDAK
                </v-btn>

              </v-col>
            </v-row>
                
          </v-card>
        </v-dialog>
        <!-- DIALOG LOGOUT -->

  </div>             
</template>


<script>
import { mdiViewDashboard } from '@mdi/js';
import { mdiBook } from '@mdi/js';
import { mdiInformation } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';

export default {
    name:'Sidebar',
    
     data: () => ({

      SrcKeluar: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihprofil.jpg?alt=media&token=bd2a2a01-8f0b-4b91-9e4d-c0f0fae0ffd5",
      

      dialogLogout: false,

      Nama:'Jihaan Nadhiya',
      srcProfpicUser: require('@/assets/profpic/user1.svg'),
      Level:'5',
      ValueLevel:'40',

      IconDashboard: mdiViewDashboard,
      IconBelajar: mdiBook,
      IconInfo: mdiInformation,
      IconPengaturan: mdiCogs,
      IconKeluar: mdiLogout,
       
      

    }),
  }
</script>    
               