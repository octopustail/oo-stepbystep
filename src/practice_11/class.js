class Class {
    constructor(number) {
        this.number = number;
        this.members = [];
        this.assignLeaderListener = [];
        this.assignJoinListener = [];
        this.joinListeners = [];
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(student) {
        if (student.klass.number === this.number) {
            this.leader = student;
            const me = this;
            this.assignLeaderListener.forEach((listener) => {
                listener.knownAssignLeader(student, me);
            })
        } else {
            console.log("It is not one of us.");
        }

    }

    appendMember(student) {
        student.klass = this;
        this.members.push(student);
        const me = this;
        this.joinListeners.forEach(listener => {
            listener.notifyJoin(student, me);
        });
    }

    registerAssignLeaderListener(teacher) {
        this.assignLeaderListener.push(teacher);
    }

    registerJoinListener(teacher) {
        this.assignJoinListener.push(teacher);
    }
}

module.exports = Class;
