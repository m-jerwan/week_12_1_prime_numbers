const MsgConstructor = function(){
}

MsgConstructor.prototype.constructMsg = function(boolean, number){
    if(boolean){
        return `Yes, ${number} is a prime number!`;        
    }
    return `No, ${number} is a not a prime number!`;        
}
module.exports = MsgConstructor;