const Intern = require("../lib/Intern");

test("Gets intern's school", () => {
    const intern = new Intern("name", "id", "email", "school")

    expect(intern.school).toEqual(expect.any(String));
    console.log("School is acceptable")
})