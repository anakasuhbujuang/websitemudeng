import TodoInput from '@/components/SLR/TestAPK/TodoInput.vue';
import TodoItem from '@/components/SLR/TestAPK/TodoItem.vue';

export default {
  name: 'PaginationReal2',
  data() {
    return {
      todos: [
        
        {id: 1, text: "Saya mempertimbangkan", jawaban:''},
        {id: 2, text: "Saya mempertimbangkan", jawaban:''},
        {id: 3, text: "Saya mempertimbangkan", jawaban:''},
        {id: 4, text: "Saya mempertimbangkan", jawaban:''},
        {id: 5, text: "Saya mempertimbangkan", jawaban:''},
        {id: 6, text: "Saya mempertimbangkan", jawaban:''},
        {id: 7, text: "Saya mempertimbangkan", jawaban:''},
        {id: 8, text: "Saya mempertimbangkan", jawaban:''},
        
      ],
      nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 2,
      visibleTodos: []
    };
  },

  components: {
    TodoInput,
    TodoItem,
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
   
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
      this.updateVisibleTodos();
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

    Submit(){
      console.log(this.todos.id,this.todos.text,this.todos.jawaban);
    }
  
  }
}
