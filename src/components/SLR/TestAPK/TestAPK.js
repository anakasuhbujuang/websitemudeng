//parent of TodoItemTestAPK, child of PilihMateriKuliah
import TodoItemTestAPK from '@/components/SLR/TestAPK/TodoItemTestAPK.vue';

// import axios from 'axios';
// window.axios = require('axios');

export default {
  name: 'TestAPK',

  components: {
    'todo-item':TodoItemTestAPK,
  },

  //child of PilihMateriKuliah
  props: { 
    // dialogHasilTestAPK: Boolean,
    // dialogAPK: Boolean
  }, 

  data() {
    return {

      isValidTestAPK: true,

      todos: [
        
        {id: 0, question: "Jelaskan pengertian struktur tree!", A:"A. Hehe", B:"B. Hehe", C:"C. Hehe", D:"D. Hehe", selected:''},
        {id: 1, question: "Sebutkan implementasi dari binary tree!", A:"A. Hehe", B:"B. Hehe", C:"C. Hehe", D:"D. Hehe",selected:''},
        {id: 2, question: "Apa saja hubungan antar elemen pada struktur tree ?", A:"A. Hehe", B:"B. Hehe", C:"C. Hehe", D:"D. Hehe", selected:''},
        {id: 3, question: "Selain binary tree, sebutkan implementasi lainnya!", A:"A. Hehe", B:"B. Hehe", C:"C. Hehe", D:"D. Hehe", selected:''},
    
      ],
      // nextId: 13,
      
      page:1,
      currentPage: 1,
   
      pageSize: 2,
      visibleTodos: []

      // axios 
      // todos: [], //id, question
      // selected:[
      //   {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
      // ],



    };
  },

  // created: async function() {
  //   await this.getSoal();
  //   this.updateVisibleTodos();
  // },
  

  beforeMount: function() {
    this.updateVisibleTodos();
  },
  
  methods: {
   
    // addTodo(text) {
    //   this.todos.push({id: this.nextId, text: text});
    //   this.nextId++;
    //   this.updateVisibleTodos();
    // },

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

    //child of PilihMateriKuliah
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

    // AXIOS
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

    // async SubmitAPK(){ //MAPPING todos.selected ke jawaban ---->kalo ini disini pasti perlu di emit ke Pilih Materi Kuliah 
    //   await const jawaban = []
    //   await this.todos.map(item => {
    //     if(item.selected != '') {
    //       jawaban.push(item.selected);
    //     }
    //   })

    //  await try {
    //     var response = await axios.post(`${process.env.VUE_APP_API_HOST}/mai/submit`, { jawaban })
    //     this.$emit('SubmitAPK');
		// 	} catch(error) {
		// 		console.error(error)
		// 		return
    //   }
    // this.$emit('SubmitAPK'); --> 
    // },
  
  }
}
