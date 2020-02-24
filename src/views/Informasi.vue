<template>
<div>
    <v-container fluid>
    <v-row no-gutters>
        
        <!-- ######## MENU ############## -->
        <Sidebar />
        <!-- ######## MENU ############## -->

        <v-col md="12">
            <v-row justify="center">

            
        <v-col md="6" class="pt-6">
            <v-card class="pb-9">

                <v-row justify="center" no-gutters="" class="pt-6">
                    <v-col md="11">
                        <p class="title red--text text--accent-1 font-weight-medium">Informasi</p>
                        <v-divider ></v-divider>
                    </v-col>
                </v-row>
                <v-row justify="start" no-gutters="" class="pt-4">
                    <v-col md="11" class="px-4">
                       <div style="height:680px;width:auto;overflow-y:scroll;overflow-x:hidden;" >
                            <div style="height:150%;">
                                <v-row justify="center" v-for="item in Informasi" :key="item.Quest">
                                    <v-col md="11">
                                        <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">{{item.Quest}}</p>
                                        <v-card color="grey lighten-3" flat class="pa-4">
                                            <p class="subtitle-2 grey--text text--darken-1 font-weight-regular">{{item.Answer}}</p>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>   
                    </v-col>
                </v-row>
                 

            </v-card>
        </v-col>
        <v-col md="6">
            <v-row >
                <v-col>
                    <v-card class="pb-6">
                        <v-row justify="center" no-gutters class="pt-6">
                            <v-col md="11">
                                <p class="title text-center red--text text--accent-1 font-weight-medium">Tentang</p>
                                <!-- <v-divider ></v-divider> -->
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col md="8" class=" pt-4" >
                                <v-img :src="SrcImgPet"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col >
                    <v-card class="pa-4">
                        <v-row no-gutters>
                        <v-col md="5" class="pl-5 pr-2 pt-5">
                            <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">Tim <span class="font-italic">Capstone Project</span></p>
                            <p class="subtitle-2 grey--text text--darken-1 font-weight-regular">Bintang Wijaya <br>Albert Juan Rama<br>Jihaan Nadhiya Almaas</p>
                            <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">Dosen Pembimbing</p>
                            <p class="subtitle-2 grey--text text--darken-1 font-weight-regular">Indriana Hidayah, Dr., S.T., M.T.<br>Sri Suning Kusumawardani, Dr., S.T., M.T.</p>
                        </v-col>

                        <v-col md="4" class="px-2 pt-5">
                            <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">Ilustrator</p>
                            <p class="subtitle-2 grey--text text--darken-1 font-weight-regular">Dian Ari Putri S.</p>
                            <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">Lokasi</p>
                            <p class="subtitle-2 grey--text text--darken-2 font-weight-medium">Universitas Gadjah Mada<br>
                            <span class="subtitle-2 grey--text text--darken-1 font-weight-medium">Fakultas Teknik</span><br>
                            <span class="subtitle-2 grey--text text--darken-1 font-weight-regular">Departemen Teknologi Informasi dan Teknik Elektro</span></p>
                            <!-- <p class="subtitle-2 grey--text text--darken-1 font-weight-regular">Departemen Teknologi Informasi dan Teknik Elektro</p> -->
                        </v-col>

                        <v-col md="3" class="pl-2 pr-5 pt-5">
                            <p class="subtitle-1 grey--text text--darken-2 font-weight-medium">Kontak</p>
                            <p class="subtitle-2 grey--text text--darken-1 font-italic font-weight-regular">Mudeng@gmail.com</p>
                        </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
</v-container>
</div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Informasi',
   components:{
      Sidebar
    },
   data () {
      return {
        
        SrcImgPet: require('@/assets/pet/jonipilihmatkul.svg'),

        Informasi:[

          {
           Quest:'Apa itu Mudeng?',
           Answer:'Mudeng merupakan media pembelajaran elektronik (e-learning) berbasis Metacognitive Training System (MTS) dimana kami akan membantumu mengetahui strategi belajar yang tepat dengan cara belajarmu.',
          },
           {
           Quest:'Apa itu MTS ?',
           Answer:'Metacognitive Training System (MTS) merupakan sistem yang dikembangkan untuk memberikan rekomendasi strategi belajar yang sesuai untukmu. Kami memfasilitasi dengan tiga jenis alternatif strategi belajar. Diantaranya yaitu Summarization, Control Video, dan Mind Mapping.',
          },
           {
           Quest:'Apa itu Metacognitive?',
           Answer:'Metacognitive atau metakognisi merupakan suatu konsep tentang pemahaman cara belajar seseorang yang sesuai dengan dirinya sendiri.',
          },
           {
           Quest:'Apa itu test MAI?',
           Answer:'MAI merupakan kepanjangan dari metacognitive awareness inventory. Test ini bertujuan untuk membantumu mengetahui tingkat metakognisi serta strategi belajar yang tepat untukmu.',
          },
          {
           Quest:'Bagaimana jika saya merasa tidak cocok dengan hasil rekomendasi hasil belajar ?',
           Answer:'Tidak masalah, kamu bisa memilih strategi belajar yang kamu inginkan pada langkah "Strategi Belajar" pada Proses belajar. Apabila kamu ingin memastikan rekomendasi yang lebih tepat silahkan klik tombol "Ulangi Test MAI" melalui Dashboard.',
          },
           {
           Quest:'Bagaimana jika saya merasa tidak cocok dengan hasil rekomendasi hasil belajar ?',
           Answer:'Tidak masalah, kamu bisa memilih strategi belajar yang kamu inginkan pada langkah "Strategi Belajar" pada Proses belajar. Apabila kamu ingin memastikan rekomendasi yang lebih tepat silahkan klik tombol "Ulangi Test MAI" melalui Dashboard.',
          },
           {
           Quest:'Bagaimana jika saya merasa tidak cocok dengan hasil rekomendasi hasil belajar ?',
           Answer:'Tidak masalah, kamu bisa memilih strategi belajar yang kamu inginkan pada langkah "Strategi Belajar" pada Proses belajar. Apabila kamu ingin memastikan rekomendasi yang lebih tepat silahkan klik tombol "Ulangi Test MAI" melalui Dashboard.',
          },
           {
           Quest:'Bagaimana jika saya merasa tidak cocok dengan hasil rekomendasi hasil belajar ?',
           Answer:'Tidak masalah, kamu bisa memilih strategi belajar yang kamu inginkan pada langkah "Strategi Belajar" pada Proses belajar. Apabila kamu ingin memastikan rekomendasi yang lebih tepat silahkan klik tombol "Ulangi Test MAI" melalui Dashboard.',
          },
           {
           Quest:'Bagaimana jika saya merasa tidak cocok dengan hasil rekomendasi hasil belajar ?',
           Answer:'Tidak masalah, kamu bisa memilih strategi belajar yang kamu inginkan pada langkah "Strategi Belajar" pada Proses belajar. Apabila kamu ingin memastikan rekomendasi yang lebih tepat silahkan klik tombol "Ulangi Test MAI" melalui Dashboard.',
          },

        ],
      }
    },
}
</script>

<style>

</style>