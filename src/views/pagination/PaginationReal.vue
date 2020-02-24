<template>
   <div > <!--class="app" -->
     <div> <!--class="todo-wrapper" -->
      
       <v-app-bar 
            color="teal darken-4"
            dense
            dark>
            <v-spacer></v-spacer>
            <v-toolbar-title class="titlefont-weight-bold">MUDENG</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container fluid>
            
            <!-- JUDUL START -->
            <v-row justify="center" class="mb-0  mt-2" no-gutters>
              <v-col md="6" class="text-center">
                  <p class="title  text-center  grey--text  text--darken-3   font-weight-bold">MAI Test</p>
                
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
                <v-card
                  class="mx-auto py-8 pl-4"
                  color="white"
                >
                    <!-- QUESTION BOX START -->
                  <v-row 
                  
                    justify="center" 
                    dense
                  >
                    <v-col md="12">
                    
                        <!-- QUESTION TEXT START-->
                        <todo-item
                            v-for="todo in visibleTodos"
                            v-bind:visibleTodos="visibleTodos"
                            v-bind:currentPage="currentPage"
                            v-bind:todo="todo"
                            v-on:todo:remove="removeTodo"
                            :key="todo.id">
                        </todo-item>

                        <!-- <todo-item
                            v-for="todo in visibleTodos"
                            v-bind:visibleTodos="visibleTodos"
                            v-bind:currentPage="currentPage"
                            v-bind:todo="todo"
                            v-on:todo:remove="removeTodo"
                            :key="todo.id">
                        </todo-item> -->

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
                        ></v-pagination>

                        <!-- <pagination
                            v-bind:todos="todos"
                            v-on:page:update="updatePage"
                            v-bind:currentPage="currentPage"
                            v-bind:pageSize="pageSize">
                        </pagination> -->

                    </v-col>
                    <v-col md="2" class="text-end pr-9 pt-2">
                      <v-btn v-if="showSubmitLink()" dark dense color="teal darken-3" class="caption">SUBMIT</v-btn>
                    </v-col>

                  </v-row>

                </v-card>
              </v-col>
            </v-row>

             
            
        </v-container>

    </div>
  </div>
</template>


<script src="@/views/pagination/PaginationReal.js"></script>
<style src="@/views/pagination/PaginationReal.css"></style>
