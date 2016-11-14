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
      // cached title will use on cancel edit
      this.cachedTitle = this.title;
      this.$dispatch('edit', this);
    },
    save() {
      this.edited = false;
      this.$dispatch('save', this);
    },
    // cancel edit on escape, set title to old value
    cancelEdit() {
      this.edited = false;
      this.title  = this.cachedTitle;
    }
  },
  directives: {
    'focus-onedit': function (value) {
      
      if (!value) return;
      
      const el       = this.el,
            caretPos = el.value.length;
      
      // set carret position on focus
      if (el.setSelectionRange) {
        el.focus();
        el.setSelectionRange(caretPos, caretPos);
      } else if (el.createTextRange) { // for IE
        let range = el.createTextRange();
        range.collapse(true);
        range.moveEnd('character', caretPos);
        range.moveStart('character', caretPos);
        range.select();
      }
    }
  }
});

export default Todo;