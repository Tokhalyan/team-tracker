const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(options) {
        super(options);
        
        this.type = "Engineer"
        this.github = options.github;
    }

    getGithub() {

    }
}

module.exports = Engineer;
