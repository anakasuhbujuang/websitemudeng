import TodoItemReviewEvaluasi from '@/components/SLR/ReviewEvaluasi/TodoItemReviewEvaluasi.vue';

export default {
  name: 'ReviewEvaluasi',

  components: {
    'todo-item':TodoItemReviewEvaluasi,
  },

  props: {
    dialogReviewEvaluasi: Boolean,
    selectedevaluasi: Array
    
  }, 

  data() {
    return {

      todos: [
        
        {id: 1, truselected:'A. Jawaban A'},
        {id: 2, truselected:'B. Jawaban B' },
        {id: 3, truselected:'A. Jawaban A' },
        {id: 4, truselected:'B. Jawaban B' },
        {id: 5, truselected:'B. Jawaban B' },
        {id: 6, truselected:'A. Jawaban A' },
        {id: 7, truselected:'B. Jawaban B' },
        {id: 8, truselected:'A. Jawaban A' },
    
        
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
