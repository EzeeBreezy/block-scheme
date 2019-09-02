var resultArr = []
console.log("task -07-")
for (var i = 1; i <= 10; i++) i%2 == 0 ? resultArr[i-1] = i*i : resultArr[i-1] = i
console.log(resultArr)