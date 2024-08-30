var a = 12;
var b = 15;
var c = 15;
var d = null;
var e; // undefined variable
document.write("a and b are equal : " + (a==b));
document.write("<br>");
document.write("b and c are equal : " + (b==c));
document.write("<br>");
document.write("The value of d is : " + d);
document.write("<br>");
document.write("The value of e is :" + e);

function myFunction() {
    var greeting;
    var time = new Date().getHours();

    if (time < 12) {
        greeting = "Good morning!!"
    }
    else if (time < 16) {
        greeting = "Good afternoon!!"
    }
    else {
        greeting = "Good evening!!";
    }
    document.getElementById("hour").innerHTML = "Current Hour is : " + time;
    document.getElementById("greet").innerHTML = greeting;
}

