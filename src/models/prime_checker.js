const PubSub = require('../helpers/pub_sub');
const MsgConstructor = require('./msg_constructor');


const PrimeChecker = function(){
}

PrimeChecker.prototype.bindEvents = function(event){
    PubSub.subscribe('FormView:text-submitted', (event) =>{
        result = "";
        const inputtedNumber = event.detail;
        if( inputtedNumber === ""){
            result = "Please provide a number";
        } else {
            const isInputtedNumberPrime = this.numberIsPrime(inputtedNumber);
            const msg_constructor = new MsgConstructor();
            result = msg_constructor.constructMsg(isInputtedNumberPrime, inputtedNumber);
        }
        PubSub.publish('PrimeChecker:result-calculated', result);
    })
}

//functions checks if given number is prime and returns boolean
PrimeChecker.prototype.numberIsPrime = function (number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true
};

module.exports = PrimeChecker;