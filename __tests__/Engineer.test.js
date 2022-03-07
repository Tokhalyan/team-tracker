const Engineer = require('../lib/Engineer');

test("Gets engineer's GitHub username", () => {
    const engineer = new Engineer("name", "id", "email", "github");

    expect(engineer.github).toEqual(expect.any(String));
    console.log("Github username is acceptable")
})