import Vue from 'vue';

const Todo = Vue.extend({
  template  : '#todo',
  props     : {
    completed: {
      type   : Boolean,
      default: false
    },
    title    : {
      type   : String,
      default: ''
    },
    edited   : {
      type   : Boolean,
      default: false
    },
    create   : {
      type: Date
    }
  }
});

export default Todo;