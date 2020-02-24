<template>
  <!-- <div v-if="totalPages() > 0" class="pagination-wrapper">
    <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"> ~ </span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span v-if="showNextLink()" class="pagination-btn" v-on:cl ick="updatePage(currentPage + 1)"> > </span>
  </div> -->
  <div v-if="totalPages() > 0">
     
    <v-btn v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)" fab dark x-small color="teal darken-3"> 
      <v-icon  color="white" x-small dark>{{ IconLock }}</v-icon> </v-btn>

    <v-btn fab dark x-small color="teal darken-3" v-on:click="updatePage(currentPage)">{{ currentPage + 1}}</v-btn>
    <v-btn fab dark x-small color="teal darken-3" v-on:click="updatePage(currentPage + 1)">{{ currentPage + 2 }}</v-btn> 
    <v-btn fab dark x-small color="teal darken-3" v-on:click="updatePage(currentPage + 2)">{{ currentPage + 3 }}</v-btn>   
    <!-- of {{ totalPages() }} -->
    <v-btn v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)" fab dark x-small color="teal darken-3"> 
      <v-icon  color="white" x-small dark>{{ IconLock }}</v-icon> </v-btn>
  </div>

</template>

<script src="@/components/pagination/pagination.js"></script>
<style src="@/components/pagination/pagination.css"></style>
