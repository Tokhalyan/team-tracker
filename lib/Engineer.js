const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        
        this.type = "Engineer"
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.type;
    }
}

module.exports = Engineer;