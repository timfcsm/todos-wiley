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
  }
});

export default Todos;