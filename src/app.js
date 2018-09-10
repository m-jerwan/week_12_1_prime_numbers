const FormView = require('./views/form_view');



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


const formView = new FormView();
formView.bindEvents();



});
