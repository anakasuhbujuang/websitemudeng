<template>
  <div style="background-color:#FAFAFA;" class="hidden-sm-and-down hidden-xl-only"> 
    <v-app-bar color="teal darken-4" dense dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="title font-weight-bold">MUDENG</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container fluid>
      <!-- JUDUL START -->
      <v-row justify="center" class="mb-0  mt-2" no-gutters>
        <v-col md="6" class="text-center">
          <p class="headline text-center  grey--text  text--darken-3   font-weight-bold">MAI Test</p>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="5" class="text-center">
          <p class="subtitle-1 text-center  grey--text  font-weight-regular"><span class="font-italic">Metacognitive Awareness Inventory Test </span> bertujuan untuk<br>mengetahui kemampuan metakognisi-mu.</p>
        </v-col>
      </v-row>
      <!-- JUDUL END -->
      <!-- WHOLE QUESTION BOX -->
      <v-row justify="center" class="mb-2" >
        <v-col md="10">    
          <v-card class="mx-auto py-8 pl-4" color="white" >
            <!-- QUESTION BOX START -->
            <v-row ustify="center" dense>
              <v-col md="12">
                <!-- QUESTION START-->
                <v-form  v-model="isValidTestMAI" >
                  <todo-item
                  v-for="todo in visibleTodos"
                  v-bind:key="todo.id"
                  v-bind:todo="todo"
                  v-bind:isValidTestMAI="isValidTestMAI">
                  </todo-item>
                </v-form>
                <!-- QUESTION END-->
              </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
              <v-col md="2"></v-col>
              <v-col md="8" class="text-center">
                <v-pagination
                v-model="currentPage"
                :length="totalPages()"
                :total-visible="5"
                v-on:next="updatePage(currentPage)"
                v-on:previous="updatePage(currentPage)"
                v-on:input="updatePage(currentPage)"
                circle
                color="teal darken-3"
                :disabled="!isValidTestMAI" >
                </v-pagination>
              </v-col>
              <v-col md="2" class="text-end pr-9 pt-2">
                <v-btn  :disabled="!isValidTestMAI" v-if="showSubmitLink()" @click="Submit()" dense block
                color="teal darken-4 white--text" class="subtitle-2 font-weight-bold">SELESAI</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- DIALOG HASIL MAI START-->
    <v-dialog v-if="dialogHasilTestMAI" v-model="dialogHasilTestMAI" max-width="350px" > 
      <v-card color="white" width="auto" height="auto" class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">
        <v-card-media justify-center >
          <v-img  :src="petAsset"></v-img>
        </v-card-media>

        <v-row  class="mt-4" no-gutters>
          <v-col  class="text-center">
            <p class=" subtitle-1 grey--text text--darken-4 font-weight-bold">Kemampuan Metakognisi : 
            <span class=" text-start red--text  text--accent-1 font-italic font-weight-bold">{{deskripsiMaiResult[maiResult].text }}</span></p>
          </v-col>
        </v-row>       
        <v-row justify="center" no-gutters class="mt-2 mb-6">
          <v-col cols="10">
            <p class="subtitle-2 text-center grey--text font-weight-regular" >{{deskripsiMaiResult[maiResult].deskripsi }}</p>
          </v-col>
        </v-row>   
        <v-row no-gutters class="px-2">
          <v-col class="pr-1">
            <v-btn  block color="teal darken-4 white--text" class="subtitle-2 font-weight-bold" 
            @click="MulaiBelajar()">YUK MULAI
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- DIALOG HASIL MAI END-->
  </div>
</template>


<script src="@/views/TestMAI/TestMAI.js"></script>
