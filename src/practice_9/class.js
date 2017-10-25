function Class(number){
    this.number = number;
    this.leader;
}

Class.prototype.getDisplayName = function(){
    return "Class " + this.number;
};

Class.prototype.assignLeader = function(student){
    if(student && student.klass.equal(this)){
        this.leader = student;
    }
};

Class.prototype.equal = function(klass){
    return klass && this.number == klass.number;
};

Class.prototype.isLeader = function(student){
    return this.leader && student && student.equal(this.leader);
};
module.exports = Class;