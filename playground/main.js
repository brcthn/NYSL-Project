var myname = "my name is Burcu";
console.log(myname);

var age = 26;
console.log(age);

var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

if (age > 21) {
    console.log("You are older than 21");
}
else {
    console.log("You are not older than 21");
}


if (ignasiAge > age) {
    console.log("You are older than ignasiAge");
}
else if (ignasiAge == age) {
    console.log("You have the same age as Ignasi");
} else {
    console.log("Ignasi is younger than you");
}
var students = ["Gabi", "Lucas", "Ottavia", "Johannes", "Rodrigo"];
students.sort();
console.log(students);
console.log(students[1]);
console.log(students[students.length - 1]);
for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("-----------------");

var studentsage = [27, 32, 28, 30, 29];
var i = 0;
while (i < studentsage.length) {
    console.log(studentsage[i]);
    i++;
}


console.log("-----------------");

var studentsage = [27, 32, 28, 30, 29];
var i = 0;
while (i < studentsage.length) {
    if (studentsage[i] % 2 == 0) {
        console.log(studentsage[i]);
    }
    i++;
}

console.log("-----------------");

//  lowest number and biggest number
var studentsage = [27, 32, 28, 30, 29];
function number(studentsage) {
    min = studentsage[0];
    max = studentsage[0];
    for (var i = 1; i < studentsage.length; i++) {
        if (min > studentsage[i]) {
            min = studentsage[i];
        }
        if (max < studentsage[i]) {
            max = studentsage[i];
        }

    }
}
number(studentsage)
console.log(min);
console.log(max);

console.log("-----------------");

// random number generate

var list = [];
for (var i = 0; i < 30; i++) {
    sayi = Math.floor(Math.random() * 20)
    list.push(sayi)
}
console.log(list);

function position(list, index) {
    console.log(list[index]);
}
position(list, 2)
//  repeat number
var list3 = [1, 2, 3, 2, 4, 5, 3]
function repeatnumber(n) {
    var list2 = []
    for (var i = 0; i < n.length; i++) {
        for (var j = i + 1; j < n.length; j++) {
            if (n[i] == n[j]) {
                list2.push(n[j])
            }

        }
    } console.log(list2)

}
repeatnumber(list3)


// join method
function add(n) {
    console.log(n.join())
}
var myColor = ["Red", "Green", "White", "Black"]
add(myColor)

// reverse write to the numbers
function reverse(number) {
    var newnumber = number.split("").reverse().join("");
    console.log(newnumber)
}
var number = "12345"
reverse(number)

//alphabetic sort
function alphabeticsort(n) {
    var newalphabetic = n.split("").sort().join("");
    console.log(newalphabetic)
}
var text = "webmaster "
alphabeticsort(text)
// UpperCase

function Uppercasemethod(n) {
    var array = n.split(" ")
    var newarray = [];
    for (var i = 0; i < array.length; i++) {
        var j = array[i].charAt(0).toUpperCase();
        var newtext = j + array[i].substring(1).toLowerCase();
        newarray.push(newtext)
    }
    var lastarray = newarray.join(" ");
    console.log(lastarray)
}

var text = "Benim adim burcu";
Uppercasemethod(text)
// longest word
function longestword(n) {
    max = 0;
    var maxword = "";
    var array = n.split(" ");
    for (var i = 0; i < array.length; i++) {
        if ((array[i].length) > max) {
            max = (array[i].length)
            maxword = (array[i])
        }
    }
    console.log(maxword)
}
var text = "Web Development Tutorial";
longestword(text);

// add exercise1


function addBands(myBandList){
    for(var i=0; i<myBandList.length; i++){
        var node=document.createElement("LI");
        var text=document.createTextNode(myBandList[i]);
        node.appendChild(text);
        document.getElementById("band-list").appendChild(node);
    }
     
}

// add exercise2
function addMultTable(){
       var satir=document.getElementById("satir").value
       var sutun=document.getElementById("sutun").value
       var tbl=document.createElement("table")
     
          var tblbody=document.createElement("tbody")

            for (var j = 0; j <satir; j++)  {
                    var row=document.createElement("tr")
                   tblbody.appendChild(row);
             for (var i = 0; i < sutun; i++) {
                    var col=document.createElement("td")
                     row.appendChild(col)
            }
            // tblbody.appendChild(row)
          }
               tbl.appendChild(tblbody);
                document.getElementById("tab").appendChild(tbl);
    
    //   console.log(tbl)
        
} 
   
   