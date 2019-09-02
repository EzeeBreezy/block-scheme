var fizzBuzz = []
console.log("task -09-")
for (var i = 1; i <= 50; i++) 
    if (i%3 == 0 && i%5 == 0) fizzBuzz[i-1] = "FizzBuzz"
    else if (i%3 == 0) fizzBuzz[i-1] = "Fizz" 
        else if (i%5 == 0) fizzBuzz[i-1] = "Buzz" 
            else fizzBuzz[i-1] = i
console.log(fizzBuzz)