//filter function

String.prototype.filter = function(bannedWords){
    
    var queryWords = this.split(" ");
    console.log(bannedWords.length)
    for (let i =0 ; i<bannedWords.length; i++){
        if(queryWords.includes(bannedWords[i])){
            console.log("yes")
            let index = queryWords.indexOf(bannedWords[i]);
            queryWords.splice(index,1);
        }
    }

    return queryWords.join(" ");
}

console.log("I am not going to work".filter(["not"]));

//Bubble sort algorithm

Array.prototype.bubbleSort_algo = function() 
{
var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

console.log([6,4,0, 3,-2,1].bubbleSort_algo());


//Exercise 3
// Create an object called Teacher derived from a Person function constructor, 
// and implement a method called teach that receives a string called subject, 
// and prints out: [teacher's name] is now teaching [subject]. 
// Create a Teacher object and call its teach method.
// function Person(name){
//     this.name = name;

// }

// function Teacher(name){
//     Person.call(this,name);
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.teach = function(subject){
//     return this.name +" teaches " + subject;
// }

// const teacher1 = new Teacher("Chris");
// console.log(teacher1.teach("English"));

//Using objec.create

// const Person = {
//     name: "unknown",
// }

// const Teacher = Object.create(Person);
// Teacher.teach = function(subject){
//     return this.name +" teaches " + subject;
// }

// const teacher1 = Object.create(Teacher);
// teacher1.name =" Gatera"
// console.log(teacher1.teach("English"));

//Exercise 5

//Object prototype approach
/*
Professor objects inherit name, age, and salute from person. They also have a field
‘department’ and have their own greeting method. Their salutation is “Good day,
my name is [name] and I am in the [department] department.” Output it to the
console.

*/
// const Person ={
//     name: "unknown", 
//     age: 20,
//     greeting: function(){
//         console.log("Greetings, my name is "+ this.name+ " and I am "+this.age+ " years old.")
//     },
//     salute: function(){
//         console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
//     }

// };

// const Student = Object.create(Person);
// Student.major ="major";
// Student.greeting = function(){
//     console.log("Hey, my name is "+this.name+ " and I am studying "+ this.major+".")
// }

// const Professor = Object.create(Person);
// Professor.department ="department";
// Professor.greeting = function(){
//     console.log("Good day, my name is "+this.name+ " I am in the "+ this.department+" department")
// }

// const person1 = Object.create(Person);
// person1.name = "Person 1";
// const student1 = Object.create(Student);
// student1.name = "Student 1";
// student1.major ="Computer Science"
// const prof1 = Object.create(Professor);
// prof1.name = "Professor 1";
// prof1.department = "Engineering"

// person1.greeting();
// student1.greeting();
// prof1.greeting();

//Using Functional Inheritance

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function(){
    console.log("Greetings, my name is "+ this.name+ " and I am "+this.age+ " years old.")
}

Person.prototype.salute = function(){
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

function Student(name, age, major){
    Person.call(this, name, age);
    this.major = major;
}

function Professor(name, age, department){
    Person.call(this, name, age);
    this.department = department;
}


Student.prototype = Object.create(Person.prototype);
Professor.prototype = Object.create(Person.prototype);

Student.prototype.greeting = function(){
    console.log("Hey, my name is "+this.name+ " and I am studying "+ this.major+".")
}

Professor.prototype.greeting = function(){
    console.log("Good day, my name is "+this.name+ " I am in the "+ this.department+" department")
}

const student1 = new Student("Gatera", 20, "CS");
const prof1 = new Professor("Lubala", 25, "Engineering");

student1.greeting();
prof1.greeting();







