const Employee = require('../lib/Employee');

test("Gets employee name", () => {
    const employee = new Employee("name");
    
    expect(employee.name).toEqual(expect.any(String));
    console.log("Name is acceptable");
})

test("Gets employee id", () => {
    const employee = new Employee("name", "id");
    
    expect(employee.id).toEqual(expect.any(String));
    console.log("ID is acceptable");
})

test("Gets employee id", () => {
    const employee = new Employee("name", "id", "email");
    
    expect(employee.email).toEqual(expect.any(String));
    console.log("Email is acceptable");
})