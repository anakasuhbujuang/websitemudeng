<template>
  <div > 
    <!-- QUESTION BOX START -->
    <v-row justify="center" dense>  
      <v-col md="12">
        <!-- QUESTION TEXT START-->
        <v-form ref="form" v-model="isValidTestAPK" > 
          <todo-item 
          v-for="todo in visibleTodos" 
          :key="todo.id"
          v-bind:visibleTodos="visibleTodos"
          v-bind:currentPage="currentPage"
          v-bind:todo="todo"
          :isValidTestAPK="isValidTestAPK">
          </todo-item> 
        </v-form>
        <!-- QUESTION TEXT END-->
      </v-col>
    </v-row>

    <v-row justify="center" no-gutters class="mb-2">
      <v-col md="2"></v-col> <!--space tambahan aja-->
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
        :disabled="!isValidTestAPK">
        </v-pagination>
      </v-col>
      
      <v-col md="2" class="text-end pr-9 pt-2">
        <v-btn  :disabled="!isValidTestAPK" v-if="showSubmitLink()" @click="SubmitAPK()" block 
        color="teal darken-4 white--text" class="subtitle-2 font-weight-bold">Kumpulkan</v-btn>
      </v-col>
     </v-row>

    <v-snackbar top color="success" v-model="snackbar" :timeout="timeout">Berhasil dikumpulkan, mohon tunggu sebentar.</v-snackbar>

     <!-- DIALOG HASIL TEST APK -->
     <v-dialog v-model="dialogHasilTestAPK" max-width="350px" > 
        <v-card color="white" width="auto" height="auto"
        class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">

          <!-- AXIOS Does -->
          <v-card-media justify-center >
            <v-img  :src="petAssets"></v-img>
          </v-card-media> 
          
          <v-row justify="center" class="mt-5 " no-gutters>
              <v-col md="8">
                <p  v-if="apkResult != ''" class="subtitle-1 text-center grey--text  text--darken-3 font-weight-bold">{{deskripsiApkResult[apkResult].text}}</p>
              </v-col>
            </v-row>  

            <v-row justify="center" no-gutters class="mb-3">
              <v-col md="11">
                <p  v-if="apkResult != ''" class="body-2 text-center grey--text  font-weight-regular">{{deskripsiApkResult[apkResult].deskripsi}}</p>
              </v-col>
            </v-row>  

            <v-row no-gutters class="px-2">
              <v-col class="pr-1">
                <v-btn  v-if="apkResult != ''" block color="teal darken-4 white--text" 
                class="subtitle-2 font-weight-bold" @click="btnApkResult()">{{deskripsiApkResult[apkResult].button}}</v-btn>
              </v-col>
            </v-row> 
         </v-card>
     </v-dialog>
          
     
  </div>
</template>


<script src="@/components/SLR/TestAPK/TestAPK.js">
</script>
