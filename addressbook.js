function checkType(type) {
  if (type === "home") {
    return "home";
  }
  else if (type === "work") {
    return "work";
  }
  else {
    return "other";
  }
}

function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
    };


Person.prototype = {
    addEmail: function (address, type){
        this.emails.push(address + " (" + checkType(type))
    }
    
}

var person1 = new Person("Joseph","Sabbagh");
person1.addEmail("jossabb@noemail.com","work")

console.log(person1)