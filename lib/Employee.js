class Employee {
    constructor(options){
        this.name = options.name;
        this.id = options.id;
        this.email = options.email;
        this.type = 'Employee';
        this.isFinished = options.confirmAbout;
    }
    
    getName() {
        
    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return this.type;
    }
}

module.exports = Employee;

// const x = new Employee({
//     name: "Shahen",
//     id: 234551,
//     email: "Tokhalyan@gmail.com"
// });
// console.log(x.getRole());