import TodoItemReviewTestAPK from '@/components/SLR/ReviewTestAPK/TodoItemReviewTestAPK.vue';

export default {
  name: 'ReviewTestAPK',

  components: {
    'todo-item':TodoItemReviewTestAPK,
  },

  props: {
    dialogReviewTestAPK: Boolean,
    
  }, 

  data() {
    return {


      todos: [
        
        {id: 1, text: "Saya mempertimbangkan", jawaban:"adalah adalah adalah", jawabantrue:"ya benar sekali jawabannya"},
        {id: 2, text: "Saya mempertimbangkan", jawaban:"adalah adalah adalah", jawabantrue:"ya benar sekali jawabannya"},
        {id: 3, text: "Saya mempertimbangkan", jawaban:"ya benar sekali jawabannya", jawabantrue:"ya benar sekali jawabannya"},
        {id: 4, text: "Saya mempertimbangkan", jawaban:"ya benar sekali jawabannya", jawabantrue:"ya benar sekali jawabannya"},
       
        
      ],
      nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 2,
      visibleTodos: []
    };
  },

  

  beforeMount: function() {
    this.updateVisibleTodos();
  },
  
  methods: {
   
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
      this.updateVisibleTodos();
    },

    SubmitJawaban() {
      this.todos.jawaban;
      console.log(this.todos);
    },
   
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
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    },

    showSubmitLink(){
      return this.currentPage == this.totalPages() ? true : false;
    },

    CloseReview(){
      this.$emit('CloseReview');
    },
    PilihMateri(){
      this.$emit('PilihMateri');
    },

  
  }
}
