function createPerson (firstName, lastName){
    return function Person (){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emails = [];
    };
}