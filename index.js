console.log(2+3);

var x = 10;
var y = 20;
z = 30;

var person = "Satyam car";

var pi = 3.14;
var area = 100;
var flag = true;

function a() {
    console.log(x);
    let x = 10;
    console.log(x);
}

a();

let hello = "Hello everyone";

hello = "Greetings";

{
    let hello = "Hello World";
    console.log(hello);
}

hello = "Hi Everyone";
console.log(hello);

const pi_val = 3.142;
pi_val = 3.14;
console.log(pi_val);

let direction = "left";

{
    console.log(direction);
}

for(let i=0; i<5; i++) {
    console.log(i);
}

console.log("**********Operators**********");

var first = 10;
var second = 10;

second += first;

console.log(second);
console.log(first + second);
console.log(first - second);
console.log(first * second);
console.log(first / second);
console.log(first ** second);
console.log(first % second);

console.log("**********Comparison Operators**********");
console.log(2.0 === 2);
console.log(2 === "2");
console.log(2 == "2");
console.log(3>2);
console.log(3>=2;
console.log(2<3);
console.log(2<=3);

2>3 ? console.log(true): console.log(false);

if(5%2==0 && 4%2==0) {
    console.log("logical operator demo");
} else if(5%2==0 || 4%2==0) {
    console.log("logical operator demo");
} else {
    console.log("Nothing worked");
}

if(!true) {
    console.log(true);
} else {
    console.log(false);
}

console.log(5|2);
console.log(~5);
console.log(5<<1);
console.log(5>>1);
console.log(5^2);