for (let counter = 1; counter <= 100; counter ++) {
    let output = "";
    if (counter % 3 == 0) { output += "Fizz" }
    if (counter % 5 == 0) { output += "Buzz" }
    if (output === "") { console.log(`${counter}`) }
    else { console.log(output) }
}