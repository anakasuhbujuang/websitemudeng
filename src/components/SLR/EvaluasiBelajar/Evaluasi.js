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
        
        {id: 1, text: "Node yang berada diatas node tertentu disebut", 
        A:'A. Lonecesstor', B:'B. Tree', C:'C. Ancesstor', D:'D. Predecessor', 
        selected:'', jawabantrue:'D. Predecessor'},
        {id: 2, text: "Predecessor satu level diatas suatu node disebut", 
        A:'A. Parent', B:'B. Child', C:'C. SubTree', D:'D. Up Node',
        selected:'', jawabantrue:'A. Parent' },
        {id: 3, text: "Successor  satu level dibawah suatu node disebut", 
        A:'A. Parent', B:'B. Child', C:'C. SubTree', D:'D. Down Node',
        selected:'',  jawabantrue:'B. Child' },
        {id: 4, text: "Apa itu Tree Height?", 
        A:'A. Banyaknya tingkatan / level dalam suatu Tree', B:'B.	Banyaknya node dalam suatu Tree', C:'C. Banyaknya relation dalam suatu Tree', D:'D. Banyaknya child dalam suatu Tree',
        selected:'', jawabantrue:'A. Banyaknya tingkatan / level dalam suatu Tree' },
        {id: 5, text: "Apa pengertian dari Leaf pada Tree?", 
        A:'A.	Node-node dalam Tree yang tak memiliki predecessor', 
        B:'B.	Node-node dalam Tree yang memiliki successor', 
        C:'C. Node-node dalam Tree yang tidak memiliki successor', 
        D:'D. Node-node dalam Tree yang memiliki SubTree',
        selected:'', jawabantrue:'C. Node-node dalam Tree yang tidak memiliki successor' },
        {id: 6, text: "Banyaknya child dalam suatu Node disebut?", 
        A:'A. Root', 
        B:'B. Parents', 
        C:'C. Size', 
        D:'D.	Degree',
        selected:'', jawabantrue:'D.	Degree' },
        {id: 7, text: "Apa itu Full Binnary Tree?", 
        A:'A. Binary Tree yang tiap nodenya (kecuali leaf) tidak memiliki 2 child dan tiap subTree harus tidak mempunyai panjang path yang sama', 
        B:'B.	Binary Tree yang tiap nodenya (kecuali leaf) memiliki 2 child dan tiap subTree harus mempunyai panjang path yang sama', 
        C:'C. Binary Tree dengan sub tree boleh memiliki panjang path yang berbeda. Node kecuali leaf memiliki 0 atau 2 child', 
        D:'D. Binary Tree dengan sub tree boleh memiliki panjang path yang berbeda',
        selected:'', jawabantrue:'B.	Binary Tree yang tiap nodenya (kecuali leaf) memiliki 2 child dan tiap subTree harus mempunyai panjang path yang sama' },
        {id: 8, text: "Apa itu Arithmetic expressions?", 
        A:'A. Kelompok binary Tree yang digunakan untuk mengekspresikan notasi aritmatika', 
        B:'B. Kelompok node yang digunakan pada notasi aritmatika', 
        C:'C. Notasi aritmatika yang menggambarkan sebuah hubungan parent-child', 
        D:'D. Notasi aritmatika yang menggambarkan sebuah hubungan antara tree satu dengan yang lain',
        selected:'', jawabantrue:'A. Kelompok binary Tree yang digunakan untuk mengekspresikan notasi aritmatika' },
        // {id: 9, text: "Todo # 9" , A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'',  jawabantrue:'C. Jawaban C'},
        // {id: 10, text: "Todo # 10", A:'A. Jawaban A', B:'B. Jawaban B', C:'C. Jawaban C', D:'D. Jawaban D',selected:'', jawabantrue:'C. Jawaban C' },
        
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
      SrcFighting: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihfighting200.png?alt=media&token=8d21bfbe-3f0c-4d03-9165-1d8639acaf70",
      SrcReward: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihreward200.png?alt=media&token=d4dcb34c-4257-4801-9f26-3fd6abbc4357",
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
     
  
  },

  

}
