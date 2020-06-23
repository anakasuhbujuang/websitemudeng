import TodoItemTestAPK from '@/components/SLR/TestAPK/TodoItemTestAPK.vue';

export default {
  name: 'TestAPK',

  components: {
    'todo-item':TodoItemTestAPK,
  },

  props: {
    dialogHasilTestAPK: Boolean,
    dialogAPK: Boolean
  }, 

  data() {
    return {

      isValidTestAPK: true,

      todos: [
        
        {id: 1, text: "Jelaskan pengertian struktur tree!", jawaban:null},
        {id: 2, text: "Sebutkan implementasi dari binary tree!", jawaban:null},
        {id: 3, text: "Apa saja hubungan antar elemen pada struktur tree ?", jawaban:null},
        {id: 4, text: "Selain binary tree, sebutkan implementasi lainnya!", jawaban:null},
        
        
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

    SubmitAPK(){
      console.log(this.todos);
      this.$emit('SubmitAPK');

    },
    validate () {
      if(this.$refs.form.validate()){
        this.$emit('SubmitAPK');
        console.log(this.todos);
        }
      },
  
  }
}
