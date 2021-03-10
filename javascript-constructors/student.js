/* exported Student */
function Student(firstName, lastName, subject){
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;

  // this.getIntroduction= function() {

  // }
}

Student.prototype.getFullName= function (){
  var fullName = (this.firstName + ' ' + this.lastName);
  console.log(fullName);
  return (fullName);
}
Student.prototype.getIntroduction= function (){
  var introduction= ('Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.');
  console.log(introduction);
  return (introduction);
}
