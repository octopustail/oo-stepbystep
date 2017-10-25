function Class(number){
    this.number = number;
    this.leader;
    this.members = [];
    this.assignLeaderListeners = [];
    this.joinListeners = [];
}

Class.prototype.getDisplayName = function(){
    return "Class " + this.number;
};

Class.prototype.assignLeader = function(student){
    if(student && student.klass.equal(this)){
        this.leader = student;
        var me = this;
        this.assignLeaderListeners.forEach(function(listener) {
            listener.notifyAssignLeader(student, me);
        });
    }else{
        console.log("It is not one of us.");
    }
};

Class.prototype.appendMember = function(student){
    student.klass = this;
    this.members.push(student);
    var me = this;
    this.joinListeners.forEach(function(listener) {
        listener.notifyJoin(student, me);
    });
};

Class.prototype.equal = function(klass){
    return klass && this.number == klass.number;
};

Class.prototype.isLeader = function(student){
    return this.leader && student && student.equal(this.leader);
};

Class.prototype.isIn = function(student){
    return this.members.some(function(member){
        return member.equal(student);
    });
};

Class.prototype.registerJoinListener = function(listener){
    this.joinListeners.push(listener);
};

Class.prototype.registerAssignLeaderListener = function(listener){
    this.assignLeaderListeners.push(listener);
};

module.exports = Class;