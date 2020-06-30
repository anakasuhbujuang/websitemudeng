<template>
  <div > 
    <!-- QUESTION BOX START -->
    <v-row justify="center" dense>
      <v-col md="12">
      <!-- QUESTION TEXT START-->
        <todo-item
        v-for="todo in visibleTodos" 
        :key="todo.id"
        v-bind:visibleTodos="visibleTodos"
        v-bind:currentPage="currentPage"
        v-bind:todo="todo"
        :SelectedEvaluasi="selectedevaluasi">
        </todo-item>
      <!-- QUESTION TEXT END-->
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters class="mb-2">
      <v-col md="2" class="text-start pl-9 pt-2"></v-col>
      <v-col md="8" class="text-center">
        <v-pagination
        v-model="currentPage"
        :length="totalPages()"
        :total-visible="5"
        v-on:next="updatePage(currentPage)"
        v-on:previous="updatePage(currentPage)"
        v-on:input="updatePage(currentPage)"
        circle color="teal darken-3">
        </v-pagination>
      </v-col>
      <v-col md="2" class="text-end pr-9 pt-2">
        <v-btn @click="CloseReview()" block 
        color="teal darken-4 white--text" class="subtitle-2 font-weight-bold">Selesai</v-btn>
      </v-col>
    </v-row>
  </div>
</template>


<script src="@/components/SLR/ReviewEvaluasi/ReviewEvaluasi.js"></script>
