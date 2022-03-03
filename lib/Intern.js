const Employee = require('./Employee');

class Intern extends Employee {
    constructor(options) {
        super(options);
        this.type = "Intern"
        this.school = options.school;
    }

    getSchool() {

    }
}

module.exports = Intern;