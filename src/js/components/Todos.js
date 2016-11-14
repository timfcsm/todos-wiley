import Vue from 'vue';
import Storage from '../Storage';
import Todo from './Todo';

const appStorage = new Storage('TODO_STORAGE');

const Todos = Vue.extend({
  template: '#todos',
  data() {
    const todos = appStorage.fetch();
  
    const sortOrders = {
      title: 1,
      create: -1
    };
    
    return {
      todos,
      sortOrders,
      newTodo: '',
      sortKey: 'create'
    }
  },
  components: {
    'todo': Todo
  },
  events: {
    edit() {
      appStorage.save(this.todos);
    },
    save() {
      appStorage.save(this.todos);
    }
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
      
    },
    removeTodo(todo) {
      this.todos.$remove(todo);
      appStorage.save(this.todos);
    },
    sortBy: function (key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
});

export default Todos;