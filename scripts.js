//------- Challenge #1 ---------//
// Write one function that can dynamically print the value of the exercise for that day, and it must be closure.
function outer(){
  let message ="Today's exercise: ";

  function inner(){
    console.log(message + "Running");
    console.log(message + "Swimming");
    console.log(message + "Dancing");
    console.log(message + "Fencing");
  }
  inner();
}
outer();

//---------- Challenge #2 --------------//
// Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. 
// The function should return an interpolated string like (Each person gets 4.00 slices of pizza; from our 8-slice pizza) x being a decimal in case there is no way to split the pizza evenly.
function sharePizza(wholePizza, slicesOfPizza ){
  
  return (`Each person get ${(wholePizza / slicesOfPizza)} slices of pizza; from our ${wholePizza} slice pizza.`);

 } 

console.log(sharePizza(8, 2)); 
console.log(sharePizza(8, 3)); 
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3)); 

//----------- Challenge #3 ----------------//
// Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. 
// The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. 
// The SSN property should not be accessible at all. 
// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. 
// You can use 'getName' or other get methods to access data that people might need. 
// For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.

function patient2(){
  const PII = {
    names: function getName(){console.log("John")}, 
    ssn: function getSSN(){console.log("123-45-6789")}, 
  } 
  return PII;
  }
const patientInfo = patient2();

console.log(patient2.names); 
console.log(patient2.ssn); 

console.log(patientInfo.names());
console.log(patientInfo.ssn());

//------------- Challenge #4 -------------------//
// person constructor start with 3 properties 
// In this case Person is the Parent //
function Person(name,job,age) {
  this.name = name;
  this.job = job;
  this.age = age;
}
// person with exercise method  
Person.prototype.exercise = function () {
  console.log ("Runing is fun! -said no one ever")
};
// person with fetchJob method  
Person.prototype.fetchJob = function () {
  console.log ("Brad is a back-end developer")
};

// programmer constructor with 4 properties (adding the new prperties "languages" but NOT busy)
// In this case Programmer is the Child //
function Programmer(languages) {
  Person.call(this, name, job, age); // this is to initialized properly 
  this.languages = languages;
  this.busy = true;
}

// Programmer.prototype to Person.prototype
Programmer.prototype = Object.create(Person.prototype);

// new method completeTask
Programmer.prototype.completeTask = function(){
  this.busy = false; 
}

// new method acceptNewTask
Programmer.prototype.acceptNewTask = function(){
  this.busy = true ; 
}

// new method offerNewTask (if/ esle statement)
Programmer.prototype.offerNewTask = function(){
  if (this.busy === true ) { 
  console.log ("Mark can't accept any new tasks right now.")
  } else {
  console.log ("Mark would love to take on a new responsibility." )
}
}

// programmer constructor with 2 more properties (adding the new prperties "learnLanguage" and "listLanguages" )
function Programmer(learnLanguage, listLanguages) {
  Person.call(this, name, job, age, languages); // this is to initialized properly 
  this.learnLanguage = learnLanguage;
  this.listLanguages = listLanguages;
}

console.log(Person)
console.log(Programmer)

// Note: used MDN website as a structure format for challange 4 //

