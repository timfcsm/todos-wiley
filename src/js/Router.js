import Vue from 'vue';
import Router from 'vue-router';
import Todos from './components/Todos';

Vue.use(Router);

let router = new Router({
  //history: true
});



router.map({
  '/': {
    component: Todos
  },
  '/:show': {
    component: Todos
  }
});

export default router;