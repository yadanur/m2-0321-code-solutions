function ExampleConstructor(){

}
console.log (ExampleConstructor.prototype);
console.log (typeof(ExampleConstructor.prototype));

var anExampleConstructor = new ExampleConstructor();
console.log (anExampleConstructor);

var ifInstanceOfIt = anExampleConstructor instanceof ExampleConstructor;
console.log ('anExampleConstructor is an instance of ExampleConstructor? ',ifInstanceOfIt);
