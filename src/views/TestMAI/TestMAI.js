//PARENT OF TodoTestMAI

import TodoItemTestMAI from '@/components/TestMAI/TodoItemTestMAI.vue';

import axios from 'axios';
window.axios = require('axios');

export default {
  name: 'TestMAI',

  components: {
    'todo-item':TodoItemTestMAI,
  },

  data() {
    return {
      snackbar: false,
      timeout: 5000,
      isValidTestMAI: true,

      page:1,
      currentPage: 1,
   
      pageSize: 4,
      visibleTodos: [],

      //Dialog Hasil
      dialogHasilTestMAI: false,
      NilaiMAI: 70,
      PassingGradeMAILow: 30,
      PassingGradeMAIMedium: 50,
      SrcFighting: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihfighting200.png?alt=media&token=8d21bfbe-3f0c-4d03-9165-1d8639acaf70",
      SrcReward: "https://firebasestorage.googleapis.com/v0/b/e-mudeng.appspot.com/o/pet%2Fasih%2Fasihreward200.png?alt=media&token=d4dcb34c-4257-4801-9f26-3fd6abbc4357",

      //AXIOS
      //axios.soal.mai
      todos: [], //id, question
      selected:[
        {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
        {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
        {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
        {jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},{jawaban:''},
      ],

      deskripsiMaiResult: {
        low: {
          text: 'Low',
          deskripsi: `Kemampuan metakognisimu belum baik.\nYuk, berjuang bersama Mudeng.`
        },
        medium: {
          text: 'Medium',
          deskripsi: `Kemampuan metakognisimu cukup baik.\nYuk, tingkatkan bersama Mudeng.`
        },
        high: {
          text: 'High',
          deskripsi: 'Kemampuan metakognisimu sudah baik.\nYuk, pertahankan bersama Mudeng.'
        }
      },
      maiResult: '',

      petUser: {}

    };
  },

  computed: {
    petAsset: function() {
      if(this.maiResult === 'high') {
        return this.petUser.assets.reward
      }
      return this.petUser.assets.fighting
    }
  },

  created: async function() {
    await this.getPetUser();
    await this.getSoal();
    this.updateVisibleTodos();
  },
  
  methods: {

    //PAGINATION

    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
      this.$emit('page:update', pageNumber);
    },
    updateVisibleTodos() { 
      this.visibleTodos = this.todos.slice((this.currentPage - 1) * this.pageSize , ((this.currentPage - 1) * this.pageSize) + this.pageSize); 
      //this.visibleTodos = ((currentPage -1) * 4, ((current page - 1) * 4) + 4)
      // ex = current page = 2
      //visibleTodos = ((2-1)*4, ((2-1)*4)+4)
      //visibleTodos = (4, 8) => page sebelumnya, quest terakhir di array[4], quest terakhir di current page di Array[8]
    },

    totalPages() {
      return Math.ceil(this.todos.length / this.pageSize);
    },

    showSubmitLink(){
      return this.currentPage == this.totalPages() ? true : false;
    },


    //AXIOS GET POST
    async getSoal (){
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/mai/soal`)
      } catch(error) {
        return console.log(error)
      }

      const questions = response.data //MAPPING data soal dg (id,soal) ke todos(id,question, selected)
      const todos = []
      questions.map(item => {
        todos.push({
          id: item.id,
          question: item.question,
          selected: ''
        })
      })

      this.todos = todos
    },
    async getSnackbar(){
      this.snackbar = true;
    },
    async Submit(){ //MAPPING todos.selected ke jawaban
      await this.getSnackbar();
      const jawaban = []
      this.todos.map(item => {
        if(item.selected != '') {
          jawaban.push(item.selected)
        }
      })

      try {
        var response = await axios.post(`${process.env.VUE_APP_API_HOST}/mai/submit`, { jawaban })
			} catch(error) {
				console.error(error)
				return
      }
      
      this.maiResult = response.data.score
      this.dialogHasilTestMAI = true;
    },

    async getPetUser (){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

          this.petUser = response.data;
      } catch(error) {
          return console.log(error)
      }
    },

    MulaiBelajar(){ //Button
      this.dialogHasilTestMAI = false;
      this.$router.push('/Dashboard'); //biar ga reload semua
    },
  }
}
