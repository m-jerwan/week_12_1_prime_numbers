const PubSub = require('../helpers/pub_sub');

const ResultView = function(){
}

ResultView.prototype.bindEvents = function(){
    PubSub.subscribe('PrimeChecker:result-calculated', (event) =>{
        const textToBeDisplayed = event.detail;
        this.displayResult(textToBeDisplayed);
    })

}

ResultView.prototype.displayResult = function (textToBeDisplayed){
    const resultElement = document.querySelector('#result');
    resultElement.textContent = textToBeDisplayed;
}


module.exports = ResultView;