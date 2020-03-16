import TodoItemEvaluasi from '@/components/SLR/EvaluasiBelajar/TodoItemEvaluasi.vue';
import ReviewEvaluasi from '@/components/SLR/ReviewEvaluasi/ReviewEvaluasi.vue';
import TodoItemReviewEvaluasi from '@/components/SLR/ReviewEvaluasi/TodoItemReviewEvaluasi.vue';

import { mdiStar } from '@mdi/js';
import { mdiClipboardText } from '@mdi/js';

export default {
  name: 'Evaluasi',

  components: {
    'todo-item': TodoItemEvaluasi,
    ReviewEvaluasi,
    'todo-item-review' : TodoItemReviewEvaluasi
  },

  props: {
    
  },

  data() {
    return {

      isValidEvaluasi: true,
      todos: [
        
        {id: 1, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D', selected:'', jawabantrue:'C. Jawaban C'},
        {id: 2, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        {id: 3, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'',  jawabantrue:'C. Jawaban C' },
        {id: 4, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        {id: 5, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        {id: 6, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        {id: 7, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        {id: 8, text: "Saya mempertimbangkan", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        {id: 9, text: "Todo # 9" , A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'',  jawabantrue:'C. Jawaban C'},
        {id: 10, text: "Todo # 10", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        
      ],
      nextId: 11,
      
      page:1,
      currentPage: 1,
   
      pageSize: 2,
      visibleTodos: [],

      //dialogHasilEvaluasi
      IconPoints: mdiStar,
      IconScore: mdiClipboardText ,
      NilaiEvaluasi: 50,
      PointsEvaluasi: 250,
      PassingGradeEvaluasi: 70,
      SrcFighting: require('@/assets/pet/jonifighting200.png'),
      SrcReward: require('@/assets/pet/jonireward200.png'),
      dialogHasilEvaluasi: false,
      

     //dialog review
      dialogReviewEvaluasi: false,
      
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
      this.dialogHasilEvaluasi = true;
    }
     
  
  }
}
