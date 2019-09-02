var week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
var randomDayNumber
var day = "" 
randomDayNumber = Math.floor (Math.random()*week.length)
day = week[randomDayNumber]
console.log("task -05-")
console.log("today is " + day)
console.log("using if-else")
if (day !== "Sat" && day !== "Sun") console.log("You will have to go to work today!")
console.log("using ternary")
day !== "Sat" && day !== "Sun" ? console.log("You will have to go to work today!") : undefined

