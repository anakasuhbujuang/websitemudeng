import TodoInput from '@/components/ReviewEval/TodoInput.vue';
import TodoItem from '@/components/ReviewEval/TodoItem.vue';

export default {
  name: 'PaginationReal2',
  data() {
    return {
      todos: [
        
        {id: 1, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D', selected:'A. Jawaban A', answer:'A. Jawaban A'},
        {id: 2, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'A. Jawaban A' , answer:'A. Jawaban A'},
        {id: 3, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'A. Jawaban A' , answer:'A. Jawaban A'},
        {id: 4, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'A. Jawaban A' , answer:'A. Jawaban A'},
        {id: 5, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'A. Jawaban A' , answer:'A. Jawaban A'},
        {id: 6, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'A. Jawaban A' , answer:'A. Jawaban A'},
        {id: 7, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'A. Jawaban A' , answer:'A. Jawaban A'},
        {id: 8, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'A. Jawaban A' , answer:'A. Jawaban A'},
        {id: 9, text: "Todo # 9" , A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D', answer:'B. Jawaban B'},
        {id: 10, text: "Todo # 10", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D', answer:'B. Jawaban B'},
        {id: 11, text: "Todo # 11", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D', answer:'B. Jawaban B' },
        {id: 12, text: "Todo # 12", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D', answer:'B. Jawaban B'},
        {id: 13, text: "Todo # 9", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D' , answer:'B. Jawaban B'},
        {id: 14, text: "Todo # 10", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D' , answer:'C. Jawaban C'},
        {id: 15, text: "Todo # 11", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D' , answer:'C. Jawaban C'},
        {id: 16, text: "Todo # 12", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D' , answer:'C. Jawaban C'},
        {id: 17, text: "Todo # 9", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'D. Jawaban D' , answer:'C. Jawaban C'},
        {id: 18, text: "Todo # 10", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'C. Jawaban C' , answer:'C. Jawaban C'},
        {id: 19, text: "Todo # 11", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'C. Jawaban C' , answer:'C. Jawaban C'},
        {id: 20, text: "Todo # 12", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'C. Jawaban C' , answer:'D. Jawaban D'},
        {id: 21, text: "Todo # 9" , A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'C. Jawaban C', answer:'D. Jawaban D'},
        {id: 22, text: "Todo # 10" , A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'C. Jawaban C', answer:'D. Jawaban D'},
        {id: 23, text: "Todo # 11" , A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'C. Jawaban C', answer:'D. Jawaban D'},
        {id: 24, text: "Todo # 12", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'C. Jawaban C', answer:'D. Jawaban D'}
      ],
      nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 4,
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
    }
  
  }
}
