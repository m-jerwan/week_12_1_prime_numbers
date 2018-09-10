const PubSub = require('../helpers/pub_sub');

const FormView = function(){

}


FormView.prototype.bindEvents = function(){
    const form = document.querySelector('#prime-checker-form')

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        const imputtedNumber = event.target.number.value;
        PubSub.publish('FormView:text-submitted', imputtedNumber);
    })

}


module.exports = FormView;