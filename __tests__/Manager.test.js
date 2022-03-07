const Manager = require("../lib/Manager");

test("Get's manager's office number", () => {
    const manager = new Manager("name", "id", "email", "officeNumber");

    expect(manager.officeNumber).toEqual(expect.any(String));
    console.log("Office number is acceptable");
})