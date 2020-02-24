<template>
  <div >
    <!-- class="todoWrapper" <button class="removeTodo" v-on:click="removeTodo">remove</button>{{todo.text}} -->

                    <v-row justify="center" dense no-gutters>
                          <v-col md="1" class="text-center">
                                <v-card-text class="subtitle-2 text-center  grey--text text--darken-3 font-weight-bold ">{{todo.id}}.
                                </v-card-text>
                          </v-col>

                          <v-col md="10">
                              <v-card
                                dense
                                color="grey lighten-4"
                                class="d-flex justify-center align-center"
                                flat 
                              >
                                  <v-card-text class="caption text-start  grey--text text--darken-3 font-weight-medium" >{{todo.text}}
                                  </v-card-text>
                                  
                              </v-card>
                          </v-col>
                          <v-col md="1"></v-col>
                    </v-row>

                    <!-- Multiple Choice START-->
                        <v-row  justify="center" dense no-gutters>
                          <v-col md="12">
                            
                              <v-card
                                class="d-flex justify-center align-center"
                                dense
                                flat
                              >  
                               
                               <!-- <p>{{todo.selected}}</p> -->
                                  <v-radio-group  class=" grey--text text--darken-3 font-weight-medium" v-model="todo.selected" row>
                                        <v-radio  color="teal darker-3" label="Tidak Pernah" value="Tidak Pernah" ></v-radio>
                                        <v-radio  color="teal darker-3" label="Jarang" value="Jarang" ></v-radio>
                                        <v-radio  color="teal darker-3" label="Kadang-Kadang" value="Kadang-Kadang" ></v-radio>
                                        <v-radio  color="teal darker-3" label="Sering" value="Sering" ></v-radio>
                                        <v-radio  color="teal darker-3" label="Selalu" value="Selalu" ></v-radio>
                                  </v-radio-group>
                                
                               
                              </v-card>

                          </v-col>
                        </v-row>
                        <!-- Multiple Choice END-->

  </div>
</template>

<script src="@/components/pagination/todoItem.js"></script>
<style src="@/components/pagination/todoItem.css"></style>
