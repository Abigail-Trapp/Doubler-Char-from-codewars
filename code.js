function doubleChar(str) {
    let output = ""
    let split = str.split('')
    split.forEach(char =>
    output += char.repeat(2)) 
    return output
  }

console.log(doubleChar("hello"))