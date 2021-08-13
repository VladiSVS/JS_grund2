console.log("test")

// Template Literals
//Backsticks `` 
// Vorher - String concatenation: "string text" + variable + "string text"
// Jetzt - Template Literals: `string text ${expression} string text`

let myString = "'We do not make mistakes. We just have happy accident.' - Bob Ross"
document.write(myString)

// shift + option + 7
let single = "'We don\'t make mistakes. We just have happy accident.' - Bob Ross"
document.write(single) 

// Template Literals

let tempLit = `'We don\'t make mistakes. We just have happy accident.' - Bob Ross"`

document.write(tempLit)

// Aufgabe 
let vorname = "Micky"
let nachname = "Mause"
let alter = 100
let city = "Entenhausen"

//ich heiße Micky Mouse und lebe in Entenhause. 

console.log("Ich heiße " + vorname + " " + nachname + " und lebe in " + city + ".")
console.log(`Ich heiße ${vorname} ${nachname} und lebe in ${city}.`)

console.log(document.getElementById("result"))
document.getElementById("result").innerHTML = `Ich heiße ${vorname} ${nachname} und lebe in ${city}. Ich bin ${alter+5} Jahre alt. <p>hello world</p> <p>where is Minnie?</p><span>`

// function with parameter

// 1 option
function testen(name,age,city) {
    console.log(`Ich bin ${name} und bin ${age} Jahre alt. Ich komme aus ${city}`);
}

testen("Klaus",21,"Bochum")

// 2 option
function greeting(name,age,city) {
    name = "Vladi"
    age = "25"
    city = "Essen"
    console.log(`Ich bin ${name} und bin ${age} Jahre alt. Ich komme aus ${city}`);
}

greeting(console.log)

// Ternary Operator, JS Comparison Vergleichoperator

// Syntax: variable name = (condition) ? value1:value2

// == equal to content, === equal to content + data-type
// != not equal to content, !== not equal to content + data-type
// > größer als, < kleiner als
// >= größer als oder gleich, <= kleiner als oder gleich

let vergleich
let j = 5
let k = "5"

vergleich = (j===k) ? true:false
console.log(vergleich)

function checkAge() {
    // let alter, volljaehrig
    let alter
    let volljaehrig
    alter = document.getElementById("alter").value
    console.log(alter)
    volljaehrig = (alter >= 18) ? "volljährig":"minderjährig"
    document.getElementById("demo").innerHTML = `Du bist ${volljaehrig}.`
}