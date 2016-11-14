import Vue from 'vue';
import Storage from '../Storage';
import Todo from './Todo';

const appStorage = new Storage('TODO_STORAGE');

const Todos = Vue.extend({
  template: '#todos',
  data() {
    const todos = appStorage.fetch();
    return {
      todos,
      newTodo: ''
    }
  },
  components: {
    'todo': Todo
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return;
      
      this.todos.unshift({
        completed: false,
        title: this.newTodo,
        edited: false,
        create: new Date().getTime()
      });
      
      Vue.nextTick(() => {
        this.newTodo = '';
        appStorage.save(this.todos);
      });
      
    }
  }
});

export default Todos;