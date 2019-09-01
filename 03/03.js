var a = Math.round (Math.random ()*100)
var b = Math.round (Math.random ()*100)
var c = Math.round (Math.random ()*100)
var result = [101, "var name"]
console.log("task -03-")
console.log("a = "+a+" b = "+b+" c = "+c)
if (a < result[0]) {
    result[0] = a
    result[1] = "a"
}
if (b < result[0]) {
    result[0] = b
    result[1] = "b"
}
if (c < result[0]) {
    result[0] = c
    result[1] = "c"
}
console.log("Smallest number is stored at variable "+result[1]+" = "+result[0])