import '../styles/styles.scss';

import Vue from 'vue';
import Todos from './components/Todos';

const App = Vue.extend({
  el() {
    return document.getElementById('app');
  },
  components: {
    todos: Todos
  }
});

new App();