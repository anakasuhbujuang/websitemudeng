import TodoItemTestMAI from '@/components/TestMAI/TodoItemTestMAI.vue';

export default {
  name: 'TestMAI',
  data() {
    return {

      isValidTestMAI: true,
      todos: [
        
        {id: 1, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:''},
        {id: 2, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 3, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 4, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 5, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 6, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 7, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        {id: 8, text: "Saya mempertimbangkan berbagai pilihan sebelum saya menyelesaikan sebuah permasalahan.", selected:'' },
        
      ],
      nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 4,
      visibleTodos: [],

      //Dialog Hasil
      dialogHasilTestMAI: false,
      NilaiMAI: 70,
      PassingGradeMAILow: 30,
      PassingGradeMAIMedium: 50,
      SrcFighting: require('@/assets/pet/jonifighting200.png'),
      SrcReward: require('@/assets/pet/jonireward200.png'),



    };
  },

  components: {
    'todo-item':TodoItemTestMAI,
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
      console.log(this.todos);
      this.dialogHasilTestMAI = true;
    }
  
  }
}
