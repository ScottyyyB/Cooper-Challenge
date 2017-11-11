describe("Person", function() {
  beforeEach(function() {
    person = new Person({gender: 'female', age: 20});
  });

  it("expects person's age to be 20", function() {
    expect(person.age).toEqual(20);
  });

  it("expects person's gender to be female", function() {
    expect(person.gender).toEqual('female');
  });
});
