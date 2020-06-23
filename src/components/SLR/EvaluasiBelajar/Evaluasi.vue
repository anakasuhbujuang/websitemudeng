<template>
   <div > 
    <!-- QUESTION BOX START -->
     <v-row justify="center" dense>
       <v-col md="12">
       
          <!-- QUESTION TEXT START-->
          <v-form  v-model="isValidEvaluasi" >
            <todo-item
            v-for="todo in visibleTodos"
            v-bind:visibleTodos="visibleTodos"
            v-bind:currentPage="currentPage"
            v-bind:todo="todo"
            :isValidEvaluasi="isValidEvaluasi"
            :key="todo.id">
            </todo-item>
          </v-form>
           <!-- QUESTION TEXT END-->

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
            :disabled="!isValidEvaluasi"
           ></v-pagination>

       </v-col>

       <v-col md="2" class="text-end pr-9 pt-2">
         <v-btn :disabled="!isValidEvaluasi" v-if="showSubmitLink()" @click="Submit()" dense block
         color="teal darken-4 white--text" class="subtitle-2 font-weight-bold">KUMPULKAN</v-btn>
       </v-col>

     </v-row>

     <!-- DIALOG HASIL EVALUASI-->
        <v-dialog v-model="dialogHasilEvaluasi" persistent max-width="350px" > 
          <v-card color="white" width="auto" height="auto"
          class="pb-2" style="overflow-x:hidden; overflow-y:hidden;">

            <div v-if="NilaiEvaluasi < PassingGradeEvaluasi">
              <v-card-media justify-center >
                  <v-img :src="SrcFighting"></v-img>
              </v-card-media>

              <v-row justify="center" class="mt-8 " no-gutters>
                
                <v-col md="1" class="text-center">
                  <v-icon small color="grey darken-3">{{IconScore}}</v-icon>
                </v-col>

                <v-col md="1" class="pl-1">
                  <p class="subtitle-1 grey--text text--darken-3 font-weight-bold">{{NilaiEvaluasi}}</p>
                </v-col>

                <v-col md="1" class="text-center">
                  <v-icon small color="grey darken-3">{{IconPoints}}</v-icon>
                </v-col>

                <v-col md="3" class="pl-1">
                  <p class="subtitle-1 grey--text text--darken-3 font-weight-bold">{{PointsEvaluasi}} pts</p>
                </v-col>
                
              </v-row>  

              <v-row justify="center" no-gutters class="mb-4">
                  <v-col md="11">
                      <p class="body-2 text-center grey--text  font-weight-regular">Kamu sudah belajar dengan hebat.<br>Namun, perlu ditingkatkan lagi.<br>Terus berjuang!</p>
                  </v-col>
              </v-row>
            </div>

            <div v-else>
              <v-card-media justify-center >
                  <v-img :src="SrcReward"></v-img>
              </v-card-media>

              <v-row justify="center" class="mt-8 " no-gutters>
                
                <v-col md="1" class="text-center">
                  <v-icon size="28px" color="grey darken-3">{{IconScore}}</v-icon>
                </v-col>

                <v-col md="2" class="pl-1">
                  <p class="title grey--text text--darken-3 font-weight-bold">{{NilaiEvaluasi}}</p>
                </v-col>

                <v-col md="1" class="text-center">
                  <v-icon size="28px" color="grey darken-3">{{IconPoints}}</v-icon>
                </v-col>

                <v-col md="2" class="pl-1">
                  <p class="title grey--text text--darken-3 font-weight-bold">{{PointsEvaluasi}} pts</p>
                </v-col>
                
              </v-row>  

              <v-row justify="center" no-gutters class="mb-4">
                  <v-col md="11">
                      <p class="body-2 text-center grey--text  font-weight-regular">Kamu sudah belajar dengan hebat.<br>Pemahamanmu sudah cukup baik.<br>Pertahankan ya!</p>
                  </v-col>
              </v-row>
            </div>  

            <v-row no-gutters class="px-2">
              <v-col class="pr-1">
                <v-btn  block color="teal darken-4 white--text" 
                class="subtitle-2 font-weight-bold" @click="dialogHasilEvaluasi= false;" router to="/Dashboard"
                >Selesai</v-btn>
              </v-col>

              <v-col>
                  <v-btn block color="teal darken-2 white--text" 
                  class="subtitle-2 font-weight-bold" @click="dialogHasilEvaluasi = false; dialogReviewEvaluasi = true;" >Lihat Review</v-btn>
              </v-col>
            </v-row>

          </v-card>
        </v-dialog>
        <!-- DIALOG EVALUASI END-->

        <!-- DIALOG REVIEW EVALUASI START-->
        <v-dialog persistent v-model="dialogReviewEvaluasi" max-width="1000px" > 
          <v-card color="white" width="auto" height="auto"
          class="py-4" style="overflow-x:hidden; overflow-y:hidden;">

            <v-row>
              <v-col class="text-center">
                <p class="title font-weight-bold font-italic grey--text text--darken-3">Review</p>
                <p class="subtitle-2  font-weight-regular grey--text ">Berikur hasil review dari evaluasi belajar yang telah kamu kerjakan.</p>
              </v-col>
            </v-row>

           <v-row justify="center" dense>
             <v-col md="12">

              <todo-item-review
                v-for="todo in visibleTodos" 
                :key="todo.id"
                v-bind:visibleTodos="visibleTodos"
                v-bind:currentPage="currentPage"
                v-bind:todo="todo"
                :selectedevaluasi="todos.selected"
                >
              </todo-item-review>
              
             </v-col>
           </v-row>

           <v-row justify="center" no-gutters class="mb-2">
            <v-col md="2" class="text-start pl-9 pt-2">
            </v-col>

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

              ></v-pagination>

            </v-col>
          
            <v-col md="2" class="text-end pr-9 pt-2">
              <v-btn @click="dialogReviewEvaluasi=false;" router to="/Dashboard" 
              block color="teal darken-4 white--text" class="subtitle-2 font-weight-bold">Selesai</v-btn>
            </v-col>
            
          </v-row>
            
            
        </v-card>
      </v-dialog>
      <!-- DIALOG REVIEW EVALUASI END-->

  </div>
</template>


<script src="@/components/SLR/EvaluasiBelajar/Evaluasi.js"></script>
