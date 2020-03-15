

export default {
  name: 'todo-item',
  components: {
  },

  // props: ['todo'],
  props: { todo:Array,
    isValidTestAPK: Boolean
  },

  data() {
    return {
      rulesjawabanTestAPK: 
        [v => !!v || 'Wajib diisi',],
    };
  },
  
  methods: {
   
    isValidTestAPK(){
      this.$emit('isValidTestAPK');

    }

  }
}
