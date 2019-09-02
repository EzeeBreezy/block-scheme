var result = ""
var charsUpCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charsLowCase = "abcdefghijklmnopqrstuvwxyz"
var arrUp = charsUpCase.split(""),
  arrLow = charsLowCase.split("")
var nameLength = Math.round(Math.random() * 4 + 2)
console.log("task -08-")
result += arrUp[Math.floor(Math.random()*arrUp.length)]
for (var i = 0; i < nameLength; i++) {
  result += arrLow[Math.floor(Math.random()*arrUp.length)]
}
console.log("Happy Birthday dear " + result)