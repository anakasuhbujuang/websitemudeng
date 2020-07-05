//parent of TodoItemTestAPK, child of PilihMateriKuliah
import TodoItemTestAPK from '@/components/SLR/TestAPK/TodoItemTestAPK.vue';

import axios from 'axios';
window.axios = require('axios');

export default {
  name: 'TestAPK',

  components: {
    'todo-item':TodoItemTestAPK,
  },

  //child of PilihMateriKuliah
  props: { 
    // dialogHasilTestAPK: Boolean,
    // dialogAPK: Boolean
    idMateri: String,
    idMatkul: String,
  }, 

  data() {
    return {
      snackbar: false,
      timeout: 5000,
      isValidTestAPK: true,
      
      page:1,
      currentPage: 1,
   
      pageSize: 2,
      visibleTodos: [],

      // axios 
      todos: [], //id, question
      apkResult:'',
      petUser:{},
      dialogHasilTestAPK:false,
      deskripsiApkResult: {
        sukses: {
          text: 'Kamu Lulus Test APK!',
          deskripsi: `Ternyata kamu sudah cukup memahami materi sebelumnya.\nSilahkan mempelajari materi selanjutnya.`,
          button: 'Lanjut Belajar'
        },
        gagal: {
          text: `Sayang Sekali,\nKamu Belum Berhasil`,
          deskripsi: `Kamu perlu memahami kembali\nmateri-materi sebelumnya.\nTerus Berjuang!`,
          button: 'Pilih Materi'
        },
      },

    };
  },

  computed: {
      petAssets: function() {
        if(this.apkResult === 'sukses') { //kategori : 'sukses', 'gagal'
          return this.petUser.assets.reward
        }else if(this.apkResult === 'gagal'){
          return this.petUser.assets.fighting
        }
      },
    },

  created: async function() {
    await this.getSoalApk();
    this.updateVisibleTodos();
  },
  
  
  methods: {

    SubmitJawaban() {
      this.todos.jawaban;
      console.log(this.todos);
    },

    btnApkResult(){
      if(this.apkResult === 'sukses'){
        return this.$emit('nextApkPilihStrategi', this.idMateri)
      }
      return this.dialogHasilTestAPK = false;
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

    validate () {
      if(this.$refs.form.validate()){
        this.$emit('SubmitAPK');
        console.log(this.todos);
        }
      },

    // AXIOS
    async getSoalApk(){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/matkul/${this.idMatkul}/materi/${this.idMateri}/apk`)
          
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

    async getSnackbar(){
      this.snackbar = true;
    },

    async SubmitAPK(){ //MAPPING todos.selected ke jawaban ---->kalo ini disini pasti perlu di emit ke Pilih Materi Kuliah
      await this.getSnackbar(); 
      const jawaban = []
      this.todos.map(item => {
        if(item.selected != '') {
          jawaban.push(item.selected);
        }
      })
      
      try {
        var response = await axios.post(`${process.env.VUE_APP_API_HOST}/matkul/apk/submit`, 
        { jawaban : jawaban, idMatkul : this.idMatkul, idMateri : this.idMateri })
			} catch(error) {
				console.error(error)
				return
      }
      
      this.apkResult = response.data.result
      
      console.log(this.apkResult)
      await this.getPetUser();
      this.dialogHasilTestAPK = true;
      this.$emit('SubmitAPK');
    },
    async getPetUser (){
      try {
          var response = await axios.get(`${process.env.VUE_APP_API_HOST}/profile/pet`)

          this.petUser = response.data;
      } catch(error) {
          return console.log(error)
      }
    },
  
  }
}
