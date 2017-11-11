describe("Person", function() {
  beforeEach(function() {
    person = new Person({gender: 'female', age: 13});
  });

  it("expects person's age to be 20", function() {
    expect(person.age).toEqual(13);
  });

  it("expects person's gender to be female", function() {
    expect(person.gender).toEqual('female');
  });
  it("expects person's cooper status to be Poor", function() {
    person.runCooper();
    spyOn(Math, 'random').and.returnValue(5);
    expect(person.cooperStatus).toEqual("Poor");
  });
});
