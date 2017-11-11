describe("Person", function() {
  var person;
  beforeEach(function() {
    person = new Person({gender: 'female', age: 13});
  });

  it("expects person's age to be 20", function() {
    expect(person.age).toEqual(13);
  });

  it("expects person's gender to be female", function() {
    expect(person.gender).toEqual('female');
  });
});
