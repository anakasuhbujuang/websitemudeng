import TodoItemEvaluasi from '@/components/SLR/EvaluasiBelajar/TodoItemEvaluasi.vue';
import ReviewEvaluasi from '@/components/SLR/ReviewEvaluasi/ReviewEvaluasi.vue';
import TodoItemReviewEvaluasi from '@/components/SLR/ReviewEvaluasi/TodoItemReviewEvaluasi.vue';

import axios from 'axios';
window.axios = require('axios');

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
    idMateri: String,
    idMatkul: String
  },

  data() {
    return {
      
      isValidEvaluasi: true,
      
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

      //axios
      petUser:{},
      todos:[],
      selected:[],
      
      deskripsiEvaluasiResult: {
        sukses: {
          text: 'sukses',
          deskripsi: 'Kamu sudah belajar dengan hebat.\nPemahamanmu sudah cukup baik.\nPertahankan ya!'
        },
        gagal: {
          text: 'gagal',
          deskripsi: 'Kamu sudah belajar dengan hebat.\nNamun, perlu ditingkatkan lagi ya.\nSemangat!'
        },
      },
      evaluasiResult: {},
      tagEvaluasiResult:'',
    };
  },

  created: async function() {
    await this.getSoal();
    this.updateVisibleTodos();
  },

  computed: {
    petAsset: function() {
      if(this.tagEvaluasiResult === 'sukses') {
        return this.petUser.assets.reward
      }
      else if(this.tagEvaluasiResult === 'gagal'){
        return this.petUser.assets.fighting
      }
      return this.getSoal();
    }
  },

  methods: {
    goToSelesai(){
      this.dialogHasilEvaluasi= false;
      this.$router.push('/Dashboard'); //biar ga reload semua
    },
    goToReview(){
      this.dialogHasilEvaluasi = false; 
      this.dialogReviewEvaluasi = true;
    },
    goToSelesaiFromReview(){
      this.dialogReviewEvaluasi=false;
      this.$router.push('/Dashboard'); //biar ga reload semua
    },
    //AXIOS
    async getSoal (){
      try {
        var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi/${this.idMateri}/evaluasi`)
      } catch(error) {
        return console.log(error)
      }

      const questions = response.data
      const todos = questions.map((item, index) => {
        return {
          id: index,
          soal: item.soal,
          pilihan: item.pilihan,
          selected: ''
        }
      })

      this.todos = todos
    },

    async getPetUser (){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

          this.petUser = response.data;
      } catch(error) {
          return console.log(error)
      }
    },

    async Submit(){
      const jawaban = []
      this.todos.map(item => {
        if(item.selected != '') {
          jawaban.push(item.selected)
        }
      })

      try {
        var response = await axios.post(`${process.env.VUE_APP_API_HOST}/matkul/evaluasi`, { idMatkul: this.idMatkul,
        idMateri: this.idMateri,
        jawaban: jawaban})
			} catch(error) {
				console.error(error)
      }

      response.data.kunciJawaban.map((item,index) => {
        this.todos[index].jawabantrue = item
      })
      this.evaluasiResult = response.data;
      
      this.tagEvaluasiResult = response.data.result;
      await this.getPetUser();
      this.overlay = true;
      this.dialogHasilEvaluasi = true;
    },

    //PAGINATION
  
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
  },
}
