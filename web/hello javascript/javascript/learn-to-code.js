var name = "Nick";
var age = 31;

var message = "Hi, my name is " + name + " and I am " + age + " years old!";

var dateofBirth = "17-07-88"
var loginWelcomeMessage = "Welcome, " + name + ". ";
console.log(message);


var balances = [50.45, 4000.12, -300.50];

var studentNames = ["Timmy", "Janessa", "Arune"]


if (1 == 1) {
    console.log("We should see this!");
}


var students = ["Timmy", "Janessa", "Arun"];
var naughtyList = [];

naughtyList.push(students[0]);

var index = naughtyList.indexOf("Timmy");

console.log(naughtyList);
console.log(index);


if(index > -1) {
    naughtyList.splice(index, 1);
}

console.log(naughtyList);

var someVal = 10;
for (var x = 0; x < someVal; x++) {
    console.log(x);
}


var length1 = 15;
var width1 = 10;
var area1 = length1 * width1;

var length2 = 12;
var width2 = 14;
var area2 = length2 * width2;

function area(length, width) {
    return length * width;
}


console.log(area1);
console.log(area2);

var area10 = area(10,15);
console.log(area10);


var student = {
    firstName: "John",
    lastName: "Parker",
    age: 7
}

var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;

var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bobo";
student2.age = 5;


console.log(student);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.age);

console.log(student1);
console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.age);

console.log(student2);
console.log(student2.firstName);
console.log(student2.lastName);
console.log(student2.age);

var student0 = {
    firstName: "Jayne",
    lastName: "Looo",
    age: 8,
    greeting: function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old. ";
    }
}

console.log(student0.greeting());


function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    
}

var s1 = new Student("Jenny", "Lage", 5);
console.log(s1);
console.log(s1.firstName);


students.push