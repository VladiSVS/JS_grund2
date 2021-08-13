console.log("test")

// String restoreMediaShortcodes

//length

let myString = "superman"
let myName = "Vladi"
console.log(myString.length)
console.log(myName.length)

let x
let y

x = myString.length
y = myName.length

console.log(x)
console.log(y)

// IndexOf()

let text = "Hallo Supercode, wir lernen heute String Methoden. Supercode" // nur erste wort 

console.log(text.indexOf("supercode")) // -1, weil JS case sensetive ist. Content nicht idetifizieren.
console.log(text.indexOf("Supercode"))
console.log(text.indexOf("Supercode",10))
// search for

console.log(text.search("wir")) // für gültigen email
console.log(text.search("String"))

// slice 2 Parameter
// Ausschnitt

let myTxt = "Steffen,Eric,Elaine"
// console.log(myTxt.slice(0,1))
// console.log(myTxt.slice(0,7))
// console.log(myTxt.slice(8,12))
console.log(myTxt.slice(-11,-7))
console.log(myTxt.slice(-5,-3))

// substring() 2 Parameter
// änlich wie slice(), kann aber keine negative(andersrum) Werte 
let myTxt2 = "heute ist Freitag."
let res1 = myTxt2.substring(10,17)
console.log(res1)

// replace 2 Parameter

let res = myTxt.replace("Steffen","Uyen")
    res = myTxt.replace("Eric","Simon")
console.log(res)
console.log(myTxt2.replace("Freitag","Samstag"))
console.log(myTxt2.replace("Freitag",myTxt2))

// toUpperCase()
let res3 = res.toUpperCase()
    res3 = myTxt2.toUpperCase()
console.log(res3)

// toLowerCase()

let res4 = res.toLowerCase()
console.log(res4)    

let z = myTxt.slice(-11,-7)
console.log(z.toLowerCase())
console.log(myString.toUpperCase())

// concatenation
// concat()

let myWord1 = "Hello"
let myWord2 = "World"

console.log(myWord1+" "+myWord2)

let concatText = myWord1.concat(" ", myWord2) // concat method
console.log(concatText)