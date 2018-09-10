const FormView = require('./views/form_view');
const PrimeChecker = require('./models/prime_checker');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


const formView = new FormView();
formView.bindEvents();

const primeChecker = new PrimeChecker();
primeChecker.bindEvents();

});
