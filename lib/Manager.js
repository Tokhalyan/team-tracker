const Employee = require('./Employee');

class Manager extends Employee {
    constructor(options) {
        super(options);
        
        this.type = 'Manager';
        this.officeNumber = options.officeNumber;
    }
}

module.exports = Manager;