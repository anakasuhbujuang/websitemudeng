import AppHeader from './node_modules/@/components/pagination/AppHeader.vue';
import TodoInput from './node_modules/@/components/pagination/TodoInput.vue';
import TodoItem from './node_modules/@/components/pagination/TodoItem.vue';
// import Pagination from '@/components/pagination/Pagination.vue';

export default {
  name: 'PaginationReal',
  data() {
    return {
      todos: [
        
        {id: 1, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:''},
        {id: 2, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 3, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 4, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 5, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 6, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 7, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 8, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 9, text: "Todo # 9" , selected:''},
        {id: 10, text: "Todo # 10", selected:'' },
        {id: 11, text: "Todo # 11", selected:'' },
        {id: 12, text: "Todo # 12", selected:'' },
        {id: 13, text: "Todo # 9", selected:'' },
        {id: 14, text: "Todo # 10", selected:'' },
        {id: 15, text: "Todo # 11", selected:'' },
        {id: 16, text: "Todo # 12", selected:'' },
        {id: 17, text: "Todo # 9", selected:'' },
        {id: 18, text: "Todo # 10", selected:'' },
        {id: 19, text: "Todo # 11", selected:'' },
        {id: 20, text: "Todo # 12", selected:'' },
        {id: 21, text: "Todo # 9" , selected:''},
        {id: 22, text: "Todo # 10" , selected:''},
        {id: 23, text: "Todo # 11" , selected:''},
        {id: 24, text: "Todo # 12", selected:''}
      ],
      nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 4,
      visibleTodos: []
    };
  },

  components: {
    AppHeader,
    TodoInput,
    TodoItem,
    // Pagination
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
      // this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize , (this.currentPage * this.pageSize) + this.pageSize);
      // if (this.currentPage === 1) {
      //   this.visibleTodos = this.todos.slice(this.currentPage-1,this.pageSize);
      // }
      // else {
      this.visibleTodos = this.todos.slice((this.currentPage - 1) * this.pageSize , ((this.currentPage - 1) * this.pageSize) + this.pageSize); 
      // }

     
    },

    //////Pagination/////
    // updatePage(pageNumber) {
    //   this.$emit('page:update', pageNumber);
    // },
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
