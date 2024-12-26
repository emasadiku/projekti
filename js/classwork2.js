/*var vocab = new Array();
vocab["verdhe"] = "yellow";
vocab["kuqe"] = "red";
vocab["gjelber"] = "green";
var color = window.prompt("Ngjyra??");

if (typeof (vocab[color]) != 'undefined' ){
    window.alert(color + "=" + vocab[color]) 
}
else{
    window.alert("sorry, not available")
}


var t_mes = window.prompt("measured temperature?")
if (t_mes <= 0) {
    window.alert("water is frozen.")
}
else if (t_mes >= 100){
    window.alert("Water is vapor.")
} 
else {
    window.alert("Water is in liquid state.")
}


var x = 5;
while (x>=0) {
    window.alert(x);
    x--;
}


var x = 5;

do {
    window.alert(x);
    x--;
} 
while (x >= 0)

var total = 0;
for (var i = 1; i <= 10; i++) {
    total = total + i;
}

window.alert("sum of numbers from 1 to 10 is " + total);


var counter = 1;
while (counter <= 5) {
    if (counter == 3) {
        break;
}
console.log(counter)
counter++;
} 


for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
    continue;
    }
    console.log(i);
    }




var vector = new Array(10);

for (var i = 0; i < vector.length; i++) {
    vector[i] = "test " + i;
}
for (var i = 0, n = vector.length; i < n; i++) {
    vector[i] = "test " + i;
}
for (var i in vector) {
    document.writeln(vector[i] + "<br>")
}
var myStudent = new Object();
myStudent.name = "Ema";
myStudent.age = 19;
myStudent.phone = "688613";

for (var prop in myStudent){
    document.writeln("<p>myStudent." + prop + "=" + myStudent[prop] + "</prop>");
}


var a = window.prompt("write a name to tell your class", "name");

switch(a){
    case "ema":
        window.alert("class e214");
        break;

        case("ester"):
        window.alert("class e213");
        break;

        case("viki"):
        window.alert("class e212");
        break;

        default:
            window.alert("you are not in this class");
}
*/

//ex 1
var num1 = window.prompt("enter a number:  ");
var num2 = window.prompt("enter second number: ");
var sum = Number(num1) + Number(num2);

document.writeln("the sum of numbers is: " + sum + "<br>" + "<br>");

//ex 2
if (Number(num1)>Number(num2)){
    document.writeln("first number is greater" + "<br>" + "<br>");
}
else if(Number(num1)<Number(num2)){
    document.writeln( "first number is smaller " + "<br>" +"<br>");
}
else {
    document.writeln( "numbers are equal" + "<br>");
}

//ex 3
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.writeln(i + " është çift" + "<br>");
    } else {
        document.writeln(i + " është tek" + "<br>");
    }
}
