<template>
   <div > 
    <!-- QUESTION BOX START -->
     <v-row justify="center" dense>
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
           ></v-pagination>

       </v-col>

       <v-col md="2" class="text-end pr-9 pt-2">
         <v-btn v-if="showSubmitLink()" dark dense color="teal darken-3" class="caption">SUBMIT</v-btn>
       </v-col>

     </v-row>
  </div>
</template>


<script src="@/components/SLR/EvaluasiBelajar/Evaluasi.js"></script>
<style src="@/components/SLR/EvaluasiBelajar/Evaluasi.css"></style>
