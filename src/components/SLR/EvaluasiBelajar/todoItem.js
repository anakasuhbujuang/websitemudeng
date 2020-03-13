// import TodoInput from '@/components/pagination/TodoInput.vue';


export default {
  name: 'todo-item',
  components: {
    // TodoInput,
  },
  props: ['todo'],
  methods: {
    removeTodo() {
      this.$emit('todo:remove', this.todo.id);
    }
  }
}
