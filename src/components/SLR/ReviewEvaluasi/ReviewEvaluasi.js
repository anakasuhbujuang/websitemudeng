import TodoItemReviewEvaluasi from '@/components/SLR/ReviewEvaluasi/TodoItemReviewEvaluasi.vue';
// import axios from 'axios';
// window.axios = require('axios');

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
      // nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 2,
      visibleTodos: [],

      //AXIOS
      //axios.soal.mai
      // todos: [], //id, question
      // selected:[
      //   {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
      //   {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
      //   {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
      //   {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
      // ],

    };
  },

  // created: async function() {
  //   await this.getSoal();
  //   this.updateVisibleTodos();
  // },
  
  methods: {

    //AXIOS
    // async getSoal (){
    //   try {
    //     var response = await axios.get(`${process.env.VUE_APP_API_HOST}/mai/soal`)
    //   } catch(error) {
    //     return console.log(error)
    //   }

    //   const questions = response.data
    //   const todos = []
    //   questions.map(item => {
    //     todos.push({
    //       id: item.id,
    //       question: item.question,
    //       selected: ''
    //     })
    //   })

    //   this.todos = todos
    // },
    //PERLU GET JAWABAN TRUE (?)
   
    //PAGINATION

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

    showSubmitLink(){
      return this.currentPage == this.totalPages() ? true : false;
    },

    CloseReview(){
      this.$router.push('/ProsesBelajar'); //biar ga reload semua
      this.$emit('CloseReview');
    },
    // PilihMateri(){
    //   this.$emit('PilihMateri');
    // }, 
  }
}
