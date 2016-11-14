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
  },
  methods   : {
    edit() {
      this.edited      = true;
      this.cachedTitle = this.title;
      this.$dispatch('edit', this);
    },
    save() {
      this.edited = false;
      this.$dispatch('save', this);
    },
    cancelEdit() {
      this.edited = false;
      this.title  = this.cachedTitle;
    }
  }
});

export default Todo;