function Class(number){
    this.number = number;
}

Class.prototype.getDisplayName = function(){
    return "Class " + this.number;
};

Class.prototype.equal = function(klass){
    return klass && this.number == klass.number;
};
module.exports = Class;