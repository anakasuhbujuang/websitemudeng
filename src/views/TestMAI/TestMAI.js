import TodoItemTestMAI from '@/components/TestMAI/TodoItemTestMAI.vue';
import axios from 'axios';

window.axios = require('axios');

export default {
  name: 'TestMAI',
  data() {
    return {

      isValidTestMAI: true,
      todos: [
        
        {id: 1, text: "Saya bertanya kepada diri sendiri, ”Apakah saya sudah mencapai tujuan saya?”, ketika sedang berupaya mencapai tujuan secara intensif.", selected:''},
        {id: 2, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 3, text: "Saya coba menggunakan cara-cara yang pernah saya pakai sebelumnya.", selected:'' },
        {id: 4, text: "Saya terus menerus mengatur diri selama belajar agar memiliki waktu yang cukup.", selected:'' },
        {id: 5, text: "Saya memahami kekuatan dan kelemahan kecerdasan saya.", selected:'' },
        {id: 6, text: "Saya berpikir tentang apa yang sebenarnya perlu saya pelajari sebelum mengerjakan tugas.", selected:'' },
        {id: 7, text: "Saya menyadari bagaimana baiknya saya menyelesaikan suatu tes.", selected:'' },
        {id: 8, text: "Saya menyusun tujuan-tujuan khusus sebelum saya mengerjakan tugas.", selected:'' },
        
      ],
      // nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 4,
      visibleTodos: [],

      //Dialog Hasil
      dialogHasilTestMAI: false,
      NilaiMAI: 70,
      PassingGradeMAILow: 30,
      PassingGradeMAIMedium: 50,
      SrcFighting: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihfighting200.png?alt=media&token=8d21bfbe-3f0c-4d03-9165-1d8639acaf70",
      SrcReward: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihreward200.png?alt=media&token=d4dcb34c-4257-4801-9f26-3fd6abbc4357",



    };
  },

  components: {
    'todo-item':TodoItemTestMAI,
  },

  mounted: function() {
    axios.get('http://localhost:3000/todos')
      .then(response => this.todos = response.data)
      .finally(() => console.log('yeayaa bisa'));
   
},

  beforeMount: function() {
    this.updateVisibleTodos();
  },
  
  methods: {
   
    // addTodo(text) {
    //   this.todos.push({id: this.nextId, text: text});
    //   this.nextId++;
    //   this.updateVisibleTodos();
    // },
   
    // removeTodo(id) {
    //   let todos = this.todos;
    //   this.todos = todos.filter((todo) => todo.id != id);
    //   this.updateVisibleTodos();
    // },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
      this.$emit('page:update', pageNumber);
    },
    updateVisibleTodos() {
     
      this.visibleTodos = this.todos.slice((this.currentPage - 1) * this.pageSize , ((this.currentPage - 1) * this.pageSize) + this.pageSize); 

    },

    
    totalPages() {
      return Math.ceil(this.todos.length / this.pageSize);
    },

    // showPreviousLink() {
    //   return this.currentPage == 0 ? false : true;
    // },
    // showNextLink() {
    //   return this.currentPage == (this.totalPages() - 1) ? false : true;
    // },
    showSubmitLink(){
      return this.currentPage == this.totalPages() ? true : false;
    },

    Submit(){
      // return axios.put('http://localhost:3000/todos/' , {
      //      id: this.todos.id,
      //      text: this.todos.text,
      //      selected: this.todos.selected,
      //   }).then(response => {
      //       console.log(response);
      // this.dialogHasilTestMAI = true;
      //   }).catch((err) => {
      //       console.log(err);
      //   }).finally(() => console.log('yeayaaput'));
      console.log(this.todos);
      this.dialogHasilTestMAI = true;
    }
  
  }
}
