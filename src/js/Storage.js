'use strict';

export default class Storage {
  
  constructor(key) {
    this.STORAGE_KEY = key;
  }
  
  fetch(defaultData = '[]') {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || defaultData);
  }
  
  save(val) {
    return localStorage.setItem(this.STORAGE_KEY, JSON.stringify(val));
  }
}